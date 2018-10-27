import React, {Component} from 'react' ;
import './index.scss';
import {Button,Icon} from 'antd'


export default class MkingMoney extends Component {

    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: '',

        }

    }

    render(){
        return(
            <div className='invite-friends'>


            <div className='head'>
                    <div>邀请好友</div>
                </div>

                <div className='content'>
                    <div className='lift'>

                        <div className='title'>如何邀请好友和你一起赚钱</div>

                        <div className='zhongjian'>
                            如何邀请好友和你一起赚钱如何邀请好友和你一起赚钱如何邀请好友和你一起赚钱
                        </div>

                        <div className='zhongjian'>
                            如何邀请好友和你一起赚钱如何邀请好友和你一起赚钱如何邀请好友和你一起赚钱
                        </div>
                        <div className='dibu-btn'>
                            <Button className='di-btn'  type="primary">复制下载链接</Button>
                        </div>
                    </div>
                    <div className='right'>

                        <div className='tgzq'>

                        </div>

                    </div>
                </div>
            </div>

        )

    }
}