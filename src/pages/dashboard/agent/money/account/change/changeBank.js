import React, {Component} from 'react' ;
import {Input, Button, Select} from 'antd';
import TitleBar from '@components/TitleBar';

const Option = Select.Option;
export default class ChangeBank extends Component {
    state = {
        type: 1
    }

    render() {
        return (
            <div className='page-container'>
                <TitleBar title='修改提现账户' icon={false}/>
                <div className='account'>
                    <table className='form'>
                        <tbody>
                        <tr>
                            <td>账户类型</td>
                            <td>银行卡</td>
                        </tr>
                        <tr>
                            <td>发卡银行</td>
                            <td>
                                <div>
                                    <Select defaultValue="ccb" style={{width: 300}}>
                                        <Option value="0">请选择银行卡</Option>
                                        <Option value="ccb">中国键设银行</Option>
                                    </Select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>账户姓名</td>
                            <td>
                                <div><Input placeholder='请输入账户姓名' type="text" defaultValue='顺孙台'/></div>
                            </td>
                        </tr>
                        <tr>
                            <td>银行卡号</td>
                            <td>
                                <div><Input placeholder='请输入银行卡号' type="text" defaultValue='1212312341512315212' /></div>
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
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
