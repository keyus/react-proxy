import md5 from '../lib/md5'
import * as api from '../api'
import history from './history'
import store from '@store'
import {clearUser} from '@action/user'

let serverTime = 0;
let serverTimeInterval = null;
const sign = 'a31519da13b14a7f';

class Util {
    //是否登录
    isLogin = ()=> {
        const { token } = store.getState().user;
        if(token) {
            return true;
        }
        return false;
    }

    //是否是超管
    isRoot = ()=>{
        const {user}  = store.getState().user;
        if(this.isLogin() && user.username === 'root') return true;
        return false;
    }

    //是否是管理员
    isAdmin = ()=>{
        const {user} = store.getState().user;
        if(this.isLogin() && (user.username === 'admin' || user.username === 'root')) return true;
        return false;
    }

    //是否是代理
    isAgent = ()=>{
        const {user} = store.getState().user;
        if(this.isLogin() && user.username === 'agent') return true;
        return false;
    }

    //退出登录
    logout = ()=> {
        store.dispatch(clearUser());
        history.push({pathname: '/login'});
    }

    //修正encode与java sdk同步
    fixEncodeURI = (str)=> {
        return encodeURIComponent(str).replace(/[~!'()]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }

    //对象转querystring
    stringify = (obj)=> {
        const params = [];
        Object.keys(obj).forEach((key) => {
            let value = this.fixEncodeURI(obj[key]);
            if (typeof value === 'undefined') {
                value = '';
            }
            params.push([key, value].join('='));
        });
        return params.join('&');
    }

    //解析querystring 字符串成对象
    parse = (str) =>{
        const res = {};
        str.split('&').forEach(it=>{
            const ar = it.split('=');
            if(ar.length > 1){
                res[ar[0]] = decodeURIComponent(ar[1]);
            }
        });
        return res;
    }

    //解析querystring 字符串，返回 key value值string
    parseValue = (str)=>{
        return str.split('&').sort().join('').replace(/=/g,'');
    }

    //同步服务器时间
    getServeTime = async ()=> {
        serverTime = 0;
        serverTimeInterval && clearInterval(serverTimeInterval);
        const ret = await api.time();
        serverTime = ret.data.data;
        serverTimeInterval = setInterval(() => {
            serverTime = serverTime + 1000
        }, 1000)
    }

    //获取签名 -> 默认返回一个带签名的新对象
    getSign = (query = '', isQueryString = false) => {
        return new Promise(async (resolve, reject) => {
            if (serverTime === 0) {
                try {
                    await this.getServeTime()
                }
                catch (e) {
                    console.warn('服务器时间同步出错');
                    reject();
                    return;
                }
            }
            const timeString = `&t=${serverTime}`;
            if (typeof query === 'object' && query !== null) query = this.stringify(query);
            query = query + timeString;
            const signString = decodeURIComponent(sign + this.parseValue(query));
            const signValue = this.fixEncodeURI(md5(signString.toLocaleLowerCase()));
            const queryString = `sign=${signValue}&${query}`;
            if(isQueryString){
                resolve(queryString);
            }else{
                resolve(this.parse(queryString));
            }
        })
    }
}

export default new Util;


