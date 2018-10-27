import React, {Component} from 'react';
import {Input, Button, Icon} from 'antd';
import TitleBar from '@components/TitleBar';
import './index.scss'

export default class bindPhone extends Component {

    render() {
        return (
            <div className='page-container'>
                <TitleBar title='绑定手机' icon={false} />
                <div className='forget-money-password'>
                    <table className='form'>
                        <tbody>
                        <tr>
                            <td>手机号</td>
                            <td>
                                <div><Input type="password" placeholder='请输入手机号'/></div>
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
                                <div className='reset-send'>
                                    <Button type="primary" className='btn-red' loading={false}>获取验证码</Button>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>验证码</td>
                            <td>
                                <div><Input type="password" placeholder='请输入验证码'/></div>
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
                                    <button className='submit-cancel'>取消</button>
                                    <Button type="primary" className='submit-btn'>确认</Button>
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
