//已处理持久化

import config from '@util/config'
const token = localStorage.getItem(config.PREXY_ACCOUNT_TOKEN) || '';
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { username : '' };

const initState = {
    token,
    user,
};

export default function (state = initState, action ) {
    switch (action.type){
        //更新登陆用户信息
        case 'UPDATE_USER':
            const user = action.user || {};
            localStorage.setItem(config.PREXY_ACCOUNT_TOKEN,action.token);
            localStorage.setItem('user',JSON.stringify(user));
            return {
                token: action.token,
                user: {
                    ...user
                },
            };
        //清除用户信息
        case 'CLEAR_USER':
            localStorage.removeItem(config.PREXY_ACCOUNT_TOKEN);
            localStorage.removeItem('user');
            return {
                token: '',
                user: {}
            };
        default:
            return state;
    }
}
