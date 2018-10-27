import React, {Component} from 'react';
import {Input, Button} from 'antd';
import TitleBar from '@components/TitleBar';
import './index.scss'

export default class SetNewPassword extends Component {
    render() {
        return (
            <div className='page-container'>
                <TitleBar title='修改提现密码' icon={false} />
                <div className='set-new-password'>
                    <table className='form'>
                        <tbody>
                        <tr>
                            <td>输入新密码</td>
                            <td>
                                <div><Input type="password" placeholder=''/></div>
                            </td>
                        </tr>
                        <tr>
                            <td>确认新密码</td>
                            <td>
                                <div><Input type="password" placeholder=''/></div>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <div className='confirm'>
                                    <Button type="primary" className='submit-btn'>确认修改</Button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
