import http from '../util/http'

//获取服务器时间
export const time = ()=> {
    return http.get('/network/current');
}
