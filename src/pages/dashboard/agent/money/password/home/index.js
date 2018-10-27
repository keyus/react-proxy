import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Input, Button} from 'antd';
import TitleBar from '@components/TitleBar';
import './index.scss'

export default class Home extends Component {
    render() {
        const {match} = this.props;
        return (
            <div className='page-container'>
                <TitleBar title='修改提现密码' icon={false}/>
                <div className='withdrawPassword'>
                    <table className='form'>
                        <tbody>
                        <tr>
                            <td>输入结算密码</td>
                            <td>
                                <div><Input type="password" placeholder=''/></div>
                                <div className='forget'>
                                    <Link to={`${match.url}/forget`}>忘记提现密码</Link>
                                    <Link to={`${match.url}/bindPhone`}>绑定手机号</Link>
                                </div>
                            </td>
                        </tr>
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
                                <div className="confirm">
                                    <Button type="primary">确认修改</Button>
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
