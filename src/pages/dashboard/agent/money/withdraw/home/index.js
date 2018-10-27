import React, {Component} from 'react';
import {Radio, Input, Button} from 'antd';
import TitleBar from '@components/TitleBar';
import {WithdrawContext} from '../context'

const RadioGroup = Radio.Group;
export default class Home extends Component {
    static contextType = WithdrawContext;
    state = {
        type: 1,
    }

    submit = ()=>{
        this.props.history.push(`${this.context.parent.path}/sendCode`)
    }

    render() {
        return (
            <div className='page-container'>
                <TitleBar title='余额提现'/>
                <div className='withdraw'>
                    <div className='withdrawAccount'>
                        <table className='form'>
                            <tbody>
                            <tr>
                                <td>账户余额</td>
                                <td className='now-money'>
                                    <span>8888.88</span>
                                    <em>元</em>
                                </td>
                            </tr>
                            <tr>
                                <td>提现金额</td>
                                <td>
                                    <div><Input prefix={<i className='money-tag'>￥</i>} type="text" /></div>
                                    <div className='message'>单次最低提现1000元，最高5000元</div>
                                </td>
                            </tr>
                            <tr>
                                <td>结算账户</td>
                                <td>
                                    <RadioGroup onChange={ v=>{ this.setState({type: v.target.value}) }} value={this.state.type}>
                                        <Radio value={1}>支付宝</Radio>
                                        <Radio value={2}>银行卡</Radio>
                                    </RadioGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>支付宝账户</td>
                                <td>
                                    <div><Input type="text" disabled defaultValue={1563153162} /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>真实姓名</td>
                                <td>
                                    <div><Input type="text" disabled defaultValue={'右需要'} /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>结算密码</td>
                                <td>
                                    <div><Input type="password" placeholder=''/></div>
                                    <div className='forget'>
                                        <a href="#">忘记结算密码</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>验证码</td>
                                <td>
                                    <div><Input type="text" /></div>
                                    <div className='message'>提现手续费: 提现总额的2%，最低3元</div>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <Button type="primary" className='submit-btn' onClick={this.submit}>提交结算</Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
