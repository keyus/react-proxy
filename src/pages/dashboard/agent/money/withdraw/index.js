import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';
import {WithdrawContext} from './context';
import Home from "./home";
import NoAccount from "./noAccount";
import SendCode from "./sendCode";
import Success from "./success";
import './index.scss'

export default class Withdraw extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {match} = this.props;
        return (
            <WithdrawContext.Provider value={{parent: match}}>
                <Switch>
                    {/*提现主页-已有提现账户*/}
                    <PrivateRoute path={`${match.path}`} component={Home} auth={true} exact />
                    {/*没有提现账户*/}
                    <Route path={`${match.path}/noAccount`} component={NoAccount} />
                    {/*发送提现验证码*/}
                    <Route path={`${match.path}/sendCode`} component={SendCode} />
                    {/*提现成功*/}
                    <Route path={`${match.path}/success`} component={Success} />
                </Switch>
            </WithdrawContext.Provider>
        )
    }
}
