import React from 'react'
import _ from 'lodash'

import {Button, Toast} from "antd-mobile";

import * as _Bridge from "./_Bridge"

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
            const result = await _Bridge.recordVideo(options);
            this.setState({result: result}, ()=>{
                Toast.hide()
            })
        })
    };

    render() {
        let base64String = null;
        if(_.get(this.state, 'result.data.base64')) {
            base64String = `data:video/mp4;base64,${_.get(this.state, 'result.data.base64')}`;
        }

        return (
            <div>
                <h1 style={{textAlign: "center"}}>录制视频</h1>
                <div style={{padding: 20}}>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc();
                        }}
                    >录制视频</Button>

                    {
                        base64String?(
                            <div style={{width: "100%", background: "#888", marginBottom: 20}}>
                                <video
                                    controls="controls"
                                    autobuffer="autobuffer"
                                    autoPlay="autoplay"
                                    style={{width: "100%"}}
                                >
                                    <source src={base64String}/>
                                </video>
                            </div>
                        ):null
                    }
                </div>
            </div>
        );
    }
};

