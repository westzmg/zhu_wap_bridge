import React from 'react'
import _ from 'lodash'

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
        Toast.loading("正在装载");
        this.setState({result: null}, async ()=>{
            const result = await _Bridge.takePhoto(options);
            this.setState({result: result}, ()=>{
                Toast.hide()
            })
        })
    };

    render() {
        let base64String = null;
        if(_.get(this.state, 'result.data.base64')) {
            base64String = `data:image/jpg;base64,${_.get(this.state, 'result.data.base64')}`;
        }

        return (
            <div>
                <h1 style={{textAlign: "center"}}>拍摄照片</h1>
                <div style={{padding: 20}}>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc();
                        }}
                    >拍摄照片</Button>

                    <p>拍照结果：</p>
                    <div style={{width: "100%", background: "#888", marginBottom: 20}}>
                        <img
                            // src={`https://p1-tt.byteimg.com/origin/pgc-image/466feaa43c4b42b8a3a7aad7fa7e36c5?from=pc`} alt=""
                            src={base64String} alt=""
                            style={{width: "100%"}}
                        />
                    </div>

                    {/*<div style={{wordBreak: "break-all"}}>{base64String||"空"}</div>*/}

                </div>
            </div>
        );
    }
};

