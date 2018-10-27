/**
 * 把react-router 4的路由实例重新暴露出来，方便外部调用
 */

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory();

export default customHistory;
