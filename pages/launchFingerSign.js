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
            const result = await _Bridge.launchFingerSign(options);
            this.setState({result: result})
        })
    };

    render() {
        let base64String = null;
        if(_.get(this.state, 'result.data')) {
            base64String = _.get(this.state, 'result.data');
        }

        return (
            <div>
                <h1 style={{textAlign: "center"}}>手写签名</h1>
                <div style={{padding: 20}}>
                    <Button
                        style={{marginBottom: 20}}
                        onClick={async ()=>{
                            await this.doFunc();
                        }}
                    >手写签名</Button>

                    <div style={{width: "100%", background: "#888", marginBottom: 20}}>
                        <img
                            src={base64String} alt=""
                            style={{width: "100%"}}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

