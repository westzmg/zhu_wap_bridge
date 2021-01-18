import React from 'react'
import _ from 'lodash'

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
            const result = await _Bridge.barCodeScan(options);
            this.setState({result: result})
        })
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>二维码扫描</h1>
                <div style={{padding: 20}}>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc();
                        }}
                    >二维码扫描</Button>

                    {
                        this.state.result?(
                            <React.Fragment>
                                <p>扫描结果：</p>
                                <p>{_.get(this.state, "result.data.data")}</p>

                                <p>扫描内容</p>
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

