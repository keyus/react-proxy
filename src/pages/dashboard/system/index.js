import React, {Component} from 'react' ;
import {Switch, Route} from 'react-router-dom' ;
import AdminTest from './test' ;

import PlayerChannlQuery from './playerChannlQuery';
import AgentChannelQuery from './agentChannelQuery';
import AdvancedTutorialManagement from './advancedTutorialManagement';
import AdvancedTutorialManagementModify from './advancedTutorialManagement/advancedTutorialManagementModify';
import WeixinManagement from './weixinManagement';


import Annoucement from './annoucement' ;
import AnnoucementAddAndEdit from './annoucement/annoucementAdd' ;
import EditSticker from './editSticker' ;
import SubmitWithdraw from './submitWithdraw' ;
import PushMessage from './pushMessage' ;
import LogManagement from './logManagement' ;
import WhitelistManagement from './whitelistManagement' ;



import TwoDCode from './twoDCode';
import Feedback from './feedback';
import Orders from './orders';
import PaymentConsole from './paymentConsole';
import Brands from './brands';
import Security from './security';
import ChangePwd from './changePwd';
import SetPhone from './setPhone';

/**
 * 路由层   /dashboard/system/...
 */
export default class System extends Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                {/*匹配 /dashboard/system/ 或 /dashboard/system*/}
                <Route path={`${match.path}`} component={AdminTest} exact />
                <Route path={`${match.path}/annoucement`} component={Annoucement} exact />
                <Route path={`${match.path}/annoucement/add`} component={AnnoucementAddAndEdit} exact />
                <Route path={`${match.path}/annoucement/edit` + '/:id'} component={AnnoucementAddAndEdit} exact />
                <Route path={`${match.path}/editSticker`} component={EditSticker} exact />
                <Route path={`${match.path}/submitwithdraw`} component={SubmitWithdraw} exact />
                <Route path={`${match.path}/pushMessage`} component={PushMessage} exact />
                <Route path={`${match.path}/logManagement`} component={LogManagement} exact />
                <Route path={`${match.path}/whitelistManagement`} component={WhitelistManagement} exact />
                <Route path={`${match.path}/playerChannlQuery`} component={PlayerChannlQuery} exact />
                <Route path={`${match.path}/AgentChannelQuery`} component={AgentChannelQuery} exact />
                <Route path={`${match.path}/advancedTutorialManagement`} component={AdvancedTutorialManagement} exact />
                <Route path={`${match.path}/advancedTutorialManagement/add`} component={AdvancedTutorialManagementModify} exact />
                <Route path={`${match.path}/advancedTutorialManagement/edit` + `/:id`} component={AdvancedTutorialManagementModify} exact />
                <Route path={`${match.path}/twodcode`} component={TwoDCode} exact />
                <Route path={`${match.path}/feedback`} component={Feedback} exact />
                <Route path={`${match.path}/orders`} component={Orders} exact />
                <Route path={`${match.path}/paymentconsole`} component={PaymentConsole} exact />
                <Route path={`${match.path}/brands`} component={Brands} exact />
                <Route path={`${match.path}/security`} component={Security} exact />
                <Route path={`${match.path}/changepwd`} component={ChangePwd} exact />
                <Route path={`${match.path}/setphone`} component={SetPhone} exact />
                <Route path={`${match.path}/weixinManagement`} component={WeixinManagement} exact />
            </Switch>
        )
    }
}
