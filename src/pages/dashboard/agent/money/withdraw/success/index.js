import React, {Component} from 'react';
import {Input, Button, Icon} from 'antd';
import TitleBar from '@components/TitleBar';
import './index.scss'

export default class Success extends Component {
    render() {
        return (
            <div className='page-container'>
                <TitleBar title='余额提现' icon={false} />
                <div className='forget-money-password'>
                    <table className='form'>
                        <tbody>
                        <tr>
                            <td colSpan='2'>提现成功</td>
                            <td>
                                <span className='three-area icon-safe'>
                                    <Icon type="check-circle" theme="filled" />
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
