import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TitleBar from '@components/TitleBar';
import './index.scss'

export default class AccountHome extends Component {
    render() {
        const {match} = this.props;
        return (
            <div className='page-container'>
                <TitleBar title='提现账户设置' />
                <div className='account'>
                    <h2>当前提现账户：支付宝</h2>
                    <table className='table-default'>
                        <thead>
                            <tr>
                                <th width="20%">类型</th>
                                <th width="26%">账号</th>
                                <th width="23%">姓名</th>
                                <th width="30%">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>支付宝</td>
                            <td>ad******123</td>
                            <td>元大门</td>
                            <td>
                                <div className='account-handle'>
                                    <Link to={`${match.url}/changeAlipay`}>修改</Link>
                                    <div className='space20'></div>
                                    <em>当前提现账户</em>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>银行卡</td>
                            <td>无资料</td>
                            <td>无资料</td>
                            <td>
                                <div className='account-handle'>
                                    <Link to={`${match.url}/bank`}>新增</Link>
                                    <div className='space20'></div>
                                    <a href="#">设为提现账户</a>
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
