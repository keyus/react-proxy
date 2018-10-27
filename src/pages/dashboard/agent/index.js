import React, {Component} from 'react' ;
import {Switch, Route} from 'react-router-dom' ;
import contactUs from '@pages/dashboard/agent/contactUs'
import Money from "./money";
import Home from "./home";
import MakingMoney from "./makingMoney";
import AcceptingMoney from './AcceptingMoney';

/**
 * 路由层   /dashboard/agent/...
 */
export default class Agent extends Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                <Route path={`${match.path}/contact`} component={contactUs} exact />
                <Route path={`${match.path}`} component={Home} exact />
                <Route path={`${match.path}/money`} component={Money} />
                <Route path={`${match.path}/MakingMoney`} component={MakingMoney} />
                <Route path={`${match.path}/accept`} component={AcceptingMoney} />

            </Switch>
        )
    }
}
