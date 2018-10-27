/**
 * 分离axios 逻辑
 */
import axios from 'axios';
import {message} from 'antd';
import config from "./config";
import history from "./history";
import Gee from "./Gee";

class AxiosInstance {
    constructor(){
        this.token = localStorage.getItem(config.PREXY_ACCOUNT_TOKEN);
        this.instance = axios.create({
            baseURL: config.API,
            withCredentials: true,
            headers: {
                'Authorization': this.token,
                'platform': 'H5',
            },
        });
        this.NotHandleCode = [
            0 ,             //成功
            10001037 ,      //
            50002303 ,      //未绑定手机号
            50002405 ,      //
            20002010 ,      //
        ];
        this.NeedLogOut = [
            10001018 ,
            10001021 ,
            10001022 ,
            10001029
        ];
        this.init();
        return this.instance;
    }
    init(){
        this.instance.interceptors.response.use(this.successResponse, this.errorResponse);
    }

    //通信成功
    successResponse = (response)=>{
        const resData = response.data;
        const code = resData.code;
        /**
         * 进入极验流程
         */
        if(code === 10001037) {
            return new Promise((resolve,reject)=>{
                new Gee(response).then( sonResponse =>{
                    resolve(sonResponse);
                },sonError=>{
                    reject(sonError);
                });
            })
        }else{
            //强制退出
            if (this.NeedLogOut.includes(code)) {
                message.error(resData.msg);
                localStorage.removeItem(config.PREXY_ACCOUNT_TOKEN);
                history.push('/login');
                return null;
            }
            //全局提示
            if(!this.NotHandleCode.includes(code)) {
                if(code === 10001005) {
                    window.location.reload();
                } else {
                    message.error(resData.msg);
                }
                return null;
            }
            if(!resData.data)  response.data.data = [];
            return response;
        }
    };

    //发生错误
    errorResponse = (error) => {
        message.warning('网络无法连接');
        return Promise.reject(error);
    };
}


export default new AxiosInstance();
