import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';
import Home from './home'
import Forget from './forget'
import SetNewPassword from './setNewPassword'
import BindPhone from './bindPhone'

export default class Password extends Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                {/*修改提现密码首页*/}
                <Route path={`${match.path}`} component={Home} exact />
                {/*忘记提现密码*/}
                <Route path={`${match.path}/forget`} component={Forget}  />
                {/*绑定手机号*/}
                <Route path={`${match.path}/bindPhone`} component={BindPhone}  />
                {/*设置提现新密码*/}
                <PrivateRoute path={`${match.path}/set`} component={SetNewPassword} redirect={match.path} auth={true} />
            </Switch>
        )
    }
}
