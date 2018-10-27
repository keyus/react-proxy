import React, {Component} from 'react';
import {Button} from 'antd';
import TitleBar from '@components/TitleBar';

export default class NoAccount extends Component {
    render() {
        return (
            <div className='page-container'>
                <TitleBar title='余额提现'/>
                <div className='withdraw'>
                    <div className='withdrawNoAccount'>
                        <p>未绑定账户</p>
                        <Button type='primary'>新增账户</Button>
                    </div>
                </div>
            </div>
        )
    }
}
