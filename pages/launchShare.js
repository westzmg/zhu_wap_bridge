import React from 'react'
import _ from 'lodash'

import {Button} from "antd-mobile";

import {launchShare} from "./_Bridge"
import {InputItem} from "antd-mobile";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            message: null,
        }
    }

    doFunc = async ()=> {
        this.setState({result: null}, async ()=>{
            const options = {
                message: this.state.message
            };
            const result = await launchShare(options);
            this.setState({result: result})
        })
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>社交应用分享</h1>
                <div style={{padding: 20}}>
                    <InputItem onChange={(val)=>{
                        this.setState({message: val})
                    }} />

                    <div style={{height :20}} />

                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc();
                        }}
                    >社交应用分享</Button>

                    {
                        this.state.result?(
                            <React.Fragment>
                                <p>结果</p>
                                <p>{JSON.stringify(this.state.result)}</p>
                            </React.Fragment>
                        ):(
                            <p>空</p>
                        )
                    }
                </div>
            </div>
        );
    }
};

