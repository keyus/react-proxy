/**
 * 为保障路由组件props.history与util/history.js 为同一实例对象
 * 以防止使用以下方式，出现路由跳转而不更新
 * Import history from '@util/history'
 * history.push()
 * 不再使用react-router-dom browserRoute 具体参见browserRoute源码
 */
import React, {Component} from 'react';
import {Router} from 'react-router';
import {Route ,  Switch , Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import PrivateRoute from '@components/PrivateRoute';
import util from '@util';
import history from '@util/history';
import store from '@store';
import {
    Login,
    Dashboard,
    NoMatch
} from './pages';

export default class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zh_CN}>
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Redirect from='/' exact to='/dashboard' />
                            <Route path='/login' component={Login} />
                            {/*私有路由*/}
                            <PrivateRoute path='/dashboard' component={Dashboard} auth={util.isLogin} />
                            {/*空路由404*/}
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </Provider>
            </LocaleProvider>
        )
    }
}
