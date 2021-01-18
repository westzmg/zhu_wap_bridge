import React from 'react'
import moment from 'moment'

import {Button, Toast} from "antd-mobile";

import {_Bridge} from "../components"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null
        }
    }

    doFunc = async (options)=> {
        Toast.loading("获取坐标");
        this.setState({result: null}, async ()=>{
            try {
                const result = await _Bridge.getPosition(options);
                this.setState({result: JSON.stringify(result)})
            } catch (e) {
                console.error(e)
            } finally {
                Toast.hide();
            }
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
                    >获取坐标信息</Button>

                    <p>结果：</p>
                    <p>{this.state.result||"空"}</p>

                </div>
            </div>
        );
    }
};

