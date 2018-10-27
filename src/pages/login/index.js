import React, {Component} from 'react' ;
import {connect} from 'react-redux' ;
import {Input, Checkbox, Button, message} from 'antd';
import {updateUser} from '@action/user'
import './index.scss'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
            checked: false,
        }
    }

    check = () => {
        if (!this.state.username) {
            message.error('请输入用户名');
            return false;
        }
        if (!this.state.password) {
            message.error('请输入密码');
            return false;
        }
        return true;
    }

    //测试中
    submit = () => {
        if(this.check()){
            this.props.updateUser('111', { username: this.state.username });
            this.props.history.push({ pathname: '/' });
        }
    }

    render() {
        return (
            <section className='auth'>
                <h1>百万代理推广平台</h1>
                <div className='auth-container'>
                    <div className='auth-form'>
                        <div className='item'>
                            <Input type="text"
                                   onChange={v => this.setState({username: v.target.value})}
                                   placeholder="输入用户名"/>
                        </div>
                        <div className='item'>
                            <Input type="password"
                                   onChange={v => this.setState({password: v.target.value})}
                                   placeholder="输入密码"/>
                        </div>
                        <div className='long'>
                            <Checkbox checked={this.state.checked}
                                      onChange={v => this.setState({checked: v.target.checked})}>保持登录状态</Checkbox>
                            <a href="javascript:;">忘记密码?</a>
                        </div>
                        <Button type="primary"
                                loading={this.state.loading}
                                onClick={this.submit}
                                className='auth-btn'>立即登录</Button>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        updateUser: (token,data) => {
            dispatch(updateUser(token,data));
        }
    }
};
export default connect('',mapDispatchToProps)(Login);
