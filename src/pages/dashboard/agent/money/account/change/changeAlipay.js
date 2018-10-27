import React, {Component} from 'react' ;
import { Input, Button, Select} from 'antd';
import TitleBar from '@components/TitleBar';

const Option = Select.Option;
export default class ChangeAlipay extends Component {
    state = {
        type: 1
    }

    render() {
        return (
            <div className='page-container'>
                <TitleBar title='修改提现账户' icon={false} />
                <div className='account'>
                    <table className='form'>
                        <tbody>
                            <tr>
                                <td>账户类型</td>
                                <td>支付宝</td>
                            </tr>
                            <tr>
                                <td>账户姓名</td>
                                <td>
                                    <div><Input placeholder='请输入账户姓名' type="text" defaultValue='中石油城' /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>账号</td>
                                <td>
                                    <div><Input placeholder='请输入支付宝账号' type="text" defaultValue='15802154151' /></div>
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
