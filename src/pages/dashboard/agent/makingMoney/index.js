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
            <div className='making-money'>

                <div className='head'>
                    <div>推广赚钱</div>
                </div>

                <div className='content'>
                    <div className='lift'>

                        <div>请复制推广宣传地址或下载二维码分享</div>

                        <div className='zhongjian'>
                            <div className='tgxcdz'>推广宣传地址</div>
                            <a href='javascript(0);'>http://www.baidu.com</a>
                            <Button className='btn' type="primary" ghost>复制地址</Button>
                        </div>


                        <div className='dibu-btn'>
                            <Button className='di-btn'  type="primary">重新生成</Button>
                            <div className='jiange'></div>
                            <Button className='di-btn'  type="primary">下载二维码</Button>
                        </div>
                    </div>
                    <div className='right'>

                        <div className='tgzq'>

                        </div>

                        <div className='chakan'>
                            <Icon type="search" theme="outlined" />&nbsp;&nbsp;查看大图</div>
                    </div>
                </div>
            </div>

        )

    }
}