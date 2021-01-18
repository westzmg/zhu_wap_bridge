import React from 'react'
import moment from 'moment'

import {Button} from "antd-mobile";

import {_Bridge} from "../components"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    doFunc = async (options)=> {
        const result = await _Bridge.openWindow(options);
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>打开窗口</h1>
                <div style={{padding: 20}}>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc({url: "http://ucookie.z023.cn/app/index.html"});
                        }}
                    >友酷客</Button>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc({url: "http://www.baidu.com"});
                        }}
                    >百度</Button>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc({url: "http://taobao.com"});
                        }}
                    >淘宝</Button>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc({url: "http://toutiao.com"});
                        }}
                    >头条</Button>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc({url: "http://192.168.1.53:15001/#/"});
                        }}
                    >打开当前</Button>
                </div>
            </div>
        );
    }
};

