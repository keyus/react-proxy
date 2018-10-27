import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import InviteFriends from './inviteFriends';
import HelpAccount from './HelpAccount';
import AgentManagement from '../../common/AgentManagement'


export default class Accept extends Component {
    render() {
        const {match} = this.props;
        console.log(111)
        return (
            <Switch>
                <Redirect from={match.path} exact to={`${match.path}/InviteFriends`} />
                <Route path={`${match.path}/InviteFriends`} component={InviteFriends}/>
                <Route path={`${match.path}/HelpAccount`} component={HelpAccount}/>
                <Route path={`${match.path}/AgentManagement`} component={AgentManagement}/>
            </Switch>
        )
    }
}
