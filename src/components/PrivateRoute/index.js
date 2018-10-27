import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const { object, bool, string, func } = PropTypes;

/**
 * 请记住，使用此路由时，上层路由不能使用render props方式渲染，否则会堆栈溢出
 */

export default class PrivateRoute extends Component{
    static propTypes = {
        component: func.isRequired,             //同route 参数
        exact: bool,                            //同route 参数
        path: string.isRequired,                //同route 参数
        auth: PropTypes.oneOfType([             //是否有访问权限，接受布尔值，或者一个函数.
            bool,
            func,
        ]).isRequired,
        location: object,
        redirect: PropTypes.oneOfType([         //无权访问时，重定向url (与 <Link to>属性一致，可以是string 或object)
            string,
            object,
        ]),
        render: PropTypes.oneOfType([           //是否使用render props方式渲染
            bool,
            object,
        ]),
    };
    static defaultProps = {
        renderProps: false,
    }
    render (){
        const {
            exact,
            path,
            component,
            auth,
            redirect,
            render,
        } = this.props;
        const pass = typeof auth === 'function' ? auth() : auth;
        let pathname = '/login';
        let search = '';
        if(typeof redirect === 'string') pathname = redirect;
        if(typeof redirect === 'object' && redirect !== null) {
            pathname = redirect.pathname || '/login';
            search = redirect.search;
        }

        const RouteComponent = (()=>{
            if(render){
                return <Route exact={exact} render={ props => <component {...props} other={render}/> } path={path} />;
            }
            return <Route exact={exact} component={component} path={path} />;
        })();

        return (
            pass ?
                RouteComponent :
                <Redirect exact to={{
                        pathname ,
                        search,
                        state: {
                            referrer: path
                        }}
                } />
        )
    }
}
