import geetest from "../lib/gt";
import {message} from 'antd';
import http from './http';
import util from './index';

/**
 *  依拖于axios的整个响应体工作
 */
class Gee {
    constructor(response){
        if(!response.data.validate) return ;
        this.response = response;
        this.validate = this.response.data.validate;
        this.apiConfig = this.response.config;
        this.config = {
            gt: this.validate.gt,
            challenge: this.validate.challenge,
            offline: !this.validate.success,
            new_captcha: this.validate.new_captcha || true,
            product: 'bind',        //string  设置下一步验证的展现形式 可选值(float、popup、custom、bind)
            timeout: 10000,          //number  设置验证过程中单个请求超时时间
            width: '300px',          //string  设置按钮的长度 单位(px，%，em，rem，pt)
        };
        return new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
            this.init();
        });
    }

    init(){
        geetest( this.config , this.captchaHandler)
    }

    captchaHandler = (instance) => {
        instance.onReady(()=>{ instance.verify();  });
        instance.onClose(()=>{ this.reject(this.response) ; });
        instance.onSuccess(()=>{
            const result = instance.getValidate();
            if (!result) {
                return message.success('请完成验证');
            }

            this.repeatSendHttp(result, instance);
        });
    };

    //再次发送请求
    repeatSendHttp = async (result , instance)=>{
        let { method , url , data } = this.apiConfig;
        let sign = '';
        url = this.getUrl();
        if(method === 'post'){
            data = await this.getSign(result);
        }else{
            sign = await this.getSign(result);
            url = `${url}?${sign}`
        }
        http({
            method,
            url,
            data
        }).then(response=>{
            this.resolve(response);
        }, fail =>{
            this.reject(fail);
            instance.reset()
        })
    };

    //处理上次实例请求参数，并重新签名
    getSign = async (result)=>{
        let query = {};
        const method = this.apiConfig.method;

        const deleteSign = ()=>{
            delete query.t;
            delete query.sign;
            Object.keys(result).forEach((key)=>{
                query[key] = result[key];
            });
        };

        if(method === 'post' && this.apiConfig.data){
            query = {...this.apiConfig.data} ;
            deleteSign();
            return await util.getSign(query);
        }else{
            const apiArr = this.apiConfig.url.split('?');
            if(apiArr.length>1){
                query = this.parse(apiArr[1]);
            }
            deleteSign();
            return await util.getSign(query,true);
        }
    }

    //处理url->以防止多次验证造成参数叠加混乱
    getUrl = ()=>{
        let {url, baseURL} = this.apiConfig;
        url = url.replace(new RegExp(baseURL),'');      //剔除基本url
        const apiArr = url.split('?');
        return apiArr[0];
    }


}

export default Gee;
