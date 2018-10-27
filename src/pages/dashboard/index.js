import React, {Component} from 'react' ;
import {Switch, Route} from 'react-router-dom' ;
import {Layout} from '@components/Layout' ;
import PrivateRoute from '@components/PrivateRoute' ;
import util from '@util' ;
import System from './system' ;
import Agent from './agent' ;
import C403 from './common/403' ;

export default class Dashboard extends Component {
    render() {
        const {match} = this.props;
        const redirect = `${match.path}/403`;

        return (
            <Layout>
                <Switch>
                    {/*管理 ->权限*/}
                    <PrivateRoute path={`${match.path}/system`} component={System} redirect={redirect}  auth={util.isAdmin} />
                    {/*代理 ->权限*/}
                    <PrivateRoute path={`${match.path}/agent`} component={Agent} redirect={redirect}  auth={util.isAgent} />
                    {/*已登陆用户403页面*/}
                    <Route path={`${match.path}/403`} component={C403} />
                    {/*公共主页*/}
                    {/*<Route component={Home} />*/}
                </Switch>
            </Layout>
        )
    }
}
