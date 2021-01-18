import React from 'react'
import moment from 'moment'

import {Button} from "antd-mobile";

import {_Bridge} from "../components"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null
        }
    }

    doFunc = async (options)=> {
        this.setState({result: null}, async ()=>{
            const result = await _Bridge.getToken(options);
            this.setState({result: result})
        })
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>获取Token</h1>
                <div style={{padding: 20}}>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc();
                        }}
                    >获取Token</Button>

                    <p>结果：</p>
                    <p>{this.state.result||"空"}</p>

                </div>
            </div>
        );
    }
};

