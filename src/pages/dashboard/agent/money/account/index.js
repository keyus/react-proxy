import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import BindPhone from './bindPhone'
import Home from './home'
import Alipay from './set/alipay'
import Bank from './set/bank'
import ChangeAlipay from './change/changeAlipay'
import ChangeBank from './change/changeBank'

export default class Account extends Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                {/*提现账户设置首页*/}
                <Route path={`${match.path}`} component={Home} exact />
                {/*提现账户设置 进入绑定手机*/}
                <Route path={`${match.path}/bindPhone`} component={BindPhone}/>
                <Route path={`${match.path}/alipay`} component={Alipay}/>
                <Route path={`${match.path}/bank`} component={Bank}/>
                {/*修改支付宝*/}
                <Route path={`${match.path}/changeAlipay`} component={ChangeAlipay}/>
                {/*修改银行卡*/}
                <Route path={`${match.path}/changeBank`} component={ChangeBank}/>
            </Switch>
        )
    }
}
