import React, {Component} from 'react';
import {Input, Button, Icon} from 'antd';
import TitleBar from '@components/TitleBar';
import {WithdrawContext} from '../context'
import './index.scss'

export default class SendCode extends Component {
    static contextType = WithdrawContext;
    confirm=()=>{
        this.props.history.push(`${this.context.parent.path}/success`)
    }

    cancel =()=>{
        this.props.history.goBack();
    }

    render() {
        return (
            <div className='page-container'>
                <TitleBar title='手机验证' icon={false} />
                <div className='forget-money-password'>
                    <table className='form'>
                        <tbody>
                        <tr>
                            <td colSpan='2'>已传送验证码至您的手机12*******99</td>
                            <td>
                                <span className='three-area icon-safe'>
                                    <Icon type="check-circle" theme="filled" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <div className='reset-send'>
                                    <Button type="primary" loading={false} className='disabled-btn'>重新发送 (60)</Button>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>验证码</td>
                            <td>
                                <div><Input type="password" placeholder=''/></div>
                            </td>
                            <td>
                                <span className='three-area icon-safe'>
                                    <Icon type="check-circle" theme="filled" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <div className='submit'>
                                    <button className='submit-cancel' onClick={this.cancel}>取消</button>
                                    <Button type="primary" className='submit-btn' onClick={this.confirm}>确认</Button>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
