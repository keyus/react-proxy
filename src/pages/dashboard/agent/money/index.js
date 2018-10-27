import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Withdraw from './withdraw'
import Password from './password'
import Account from "./account";
import Record from "./record";

export default class Money extends Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                <Redirect from={match.path} exact to={`${match.path}/withdraw`} />
                {/*余额提现*/}
                <Route path={`${match.path}/withdraw`} component={Withdraw}/>
                {/*提现记录*/}
                <Route path={`${match.path}/record`} component={Record}/>
                {/*修改提现密码*/}
                <Route path={`${match.path}/password`} component={Password}/>
                {/*提现账户设置*/}
                <Route path={`${match.path}/account`} component={Account}/>
            </Switch>
        )
    }
}
