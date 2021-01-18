import React from 'react'
import moment from 'moment'
import {Link} from 'umi'

import 'antd-mobile/dist/antd-mobile.css'
import {Button} from "antd-mobile";

import {closeWindow} from "../components/_Bridge"

moment.locale("zh-CN");

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>WebView测试</h1>
                <div style={{padding: 20}}>
                    <Link to={`/takePicture`}>
                        <Button style={{marginBottom: 20}}>拍摄照片</Button>
                    </Link>

                    <Link to={`/recordVideo`}>
                        <Button style={{marginBottom: 20}}>录制视频</Button>
                    </Link>

                    <Link to={`/barcode`}>
                        <Button style={{marginBottom: 20}}>扫描二维码</Button>
                    </Link>

                    <Link to={`/getPosition`}>
                        <Button style={{marginBottom: 20}}>获取坐标信息</Button>
                    </Link>

                    <Link to={`/launchCQDigitalSign`}>
                        <Button style={{marginBottom: 20}}>重庆建委人脸认证</Button>
                    </Link>

                    <Link to={`/launchFingerSign`}>
                        <Button style={{marginBottom: 20}}>手写签名</Button>
                    </Link>

                    <Link to={`/launchShare`}>
                        <Button style={{marginBottom: 20}}>社交应用分享</Button>
                    </Link>

                    <Link to={`/openWindow`}>
                        <Button style={{marginBottom: 20}}>打开WebView</Button>
                    </Link>

                    <Link to={`/getToken`}>
                        <Button style={{marginBottom: 20}}>获取Token</Button>
                    </Link>

                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await closeWindow()
                        }}
                    >关闭WebView</Button>

                </div>
            </div>
        );
    }
};

