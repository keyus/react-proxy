import React, {Component} from 'react' ;
import { Input, Button, Select} from 'antd';
import TitleBar from '@components/TitleBar';

const Option = Select.Option;
export default class Alipay extends Component {
    state = {
        type: 1
    }

    render() {
        return (
            <div className='page-container'>
                <TitleBar title='提现账户设置' icon={false} />
                <div className='account'>
                    <table className='form'>
                        <tbody>
                            <tr>
                                <td>账户类型</td>
                                <td>
                                    <div>
                                        <Select defaultValue="支付宝" style={{ width: 300 }}>
                                            <Option value="disabled" disabled>支付宝</Option>
                                        </Select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>账户姓名</td>
                                <td>
                                    <div><Input placeholder='请输入账户姓名' type="text" /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>账号</td>
                                <td>
                                    <div><Input placeholder='请输入支付宝账号' type="text" /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <div className='submit'>
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
