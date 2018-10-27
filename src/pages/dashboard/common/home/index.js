import React, {Component} from 'react' ;
import './index.scss'
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { List, Avatar } from 'antd';

//饼图
import pieOption from './pieOption';
//柱形图
import barOption from './barOption';


export default class Home extends Component {

    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: '',

        }

    }

    getOption = () => {

        return pieOption
    }

    Cylindrical = () => {


        return barOption
    }

    render () {
        return (
            <div className="home">
                <div className='home-head'>
                    <div className='head-flex'>
                        <div>
                            新结算的订单
                        </div>
                        <div className='head-blue'>
                            153笔
                        </div>
                    </div>
                    <div className='head-interval'></div>
                    <div className='head-flex'>

                        <div>
                            新代理回馈讯息
                        </div>
                        <div className='head-blue'>
                            84笔
                        </div>
                    </div>
                </div>


                <div className='jinrishouye'>
                    <div className='jinrishouye-flex lift'>
                        <div>今日收益（元）</div>
                        <div className='jinrishouye-leirong'>
                            <div className="jiachu">923.76</div>
                            <div>昨日:673.23</div>
                        </div>
                        <div className='jinrishouye-leirong '>
                            <div>13.8%</div>
                            <div>累计:2506564</div>
                        </div>

                    </div>
                    <div className='head-interval'></div>

                    <div className='jinrishouye-flex right'>

                        <div>今日注册（个）</div>
                        <div className='jinrishouye-leirong'>
                            <div className="jiachu">24500</div>
                            <div>昨日:58</div>
                        </div>
                        <div className='jinrishouye-leirong '>
                            <div>13.8%</div>
                            <div>累计:5872</div>
                        </div>
                    </div>
                </div>


                <div className='echarts'>

                    <div className='echart-item'>
                        <ReactEcharts
                            option={this.getOption ()}
                            style={{height: 150, width: 150}}

                        />

                        <div className='echart-title'>
                            <div>
                                <div>本周收益累计</div>
                                <div>765</div>
                            </div>
                            <div>
                                <div>上月收益累计</div>
                                <div>18650</div>
                            </div>
                        </div>
                    </div>

                    <div className='echart-item'>
                        <ReactEcharts
                            option={this.getOption ()}
                            style={{height: 150, width: 150}}

                        />

                        <div className='echart-title'>
                            <div>
                                <div>本周收益累计</div>
                                <div>765</div>
                            </div>
                            <div>
                                <div>上月收益累计</div>
                                <div>18650</div>
                            </div>
                        </div>
                    </div>
                    <div className='echart-item'>
                        <ReactEcharts
                            option={this.getOption ()}
                            style={{height: 150, width: 150}}

                        />

                        <div className='echart-title'>
                            <div>
                                <div>本周收益累计</div>
                                <div>765</div>
                            </div>
                            <div>
                                <div>上月收益累计</div>
                                <div>18650</div>
                            </div>
                        </div>
                    </div>
                    <div className='echart-item'>
                        <ReactEcharts
                            option={this.getOption ()}
                            style={{height: 150, width: 150}}

                        />

                        <div className='echart-title'>
                            <div>
                                <div>本周收益累计</div>
                                <div>765</div>
                            </div>
                            <div>
                                <div>上月收益累计</div>
                                <div>18650</div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='lins-jiange'>
                    <div className='link-lift'>
                        <div>每周注册</div>
                        <div className='link-fontstype'>每周收益</div>
                    </div>

                </div>

                <div className='zhuxintu'>
                    <ReactEcharts
                        option={this.Cylindrical ()}
                        style={{height: 220, width: '100%'}}

                    />
                </div>


                <div className='dibu'>
                    <div className='dibu-item'>
                        <div className='jiaocheng'>
                            <div>教程</div>
                            <div>看更多</div>
                        </div>

                        <div className='jiaocheng-list'>
                            <div className='left'>
                                <div>详解做推广可以挣多少钱</div>
                            </div>
                            <div className='right'></div>
                        </div>
                        <div className='jiaocheng-list'>

                            <div className='left'>
                                <div>30秒内教会您推广赚钱</div>
                            </div>
                            <div className='right'></div>
                        </div>
                        <div className='jiaocheng-list'>

                            <div className='left'>
                                <div>精准引流技巧分享</div>
                            </div>
                            <div className='right'></div>
                        </div>
                        <div className='jiaocheng-list'>

                            <div className='left'>
                                <div>代理"收入模式"大揭秘！</div>
                            </div>
                            <div className='right'></div>
                        </div>
                    </div>

                    <div className='head-interval'></div>


                    <div className='dibu-item'>
                        <div className='jiaocheng'>
                            <div>公告列表</div>
                            <div>看更多</div>
                        </div>

                        <div className='gonggao-list'>

                            <div className='list-item  list-border'>
                                <div className='list-heade'>维护公告 2018-07-05 18:55:45</div>
                                <div className='list-content'>
                                    尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次日0点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i       尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i
                                </div>

                            </div>

                            <div className='list-item list-border'>
                                <div className='list-heade'>维护公告 2018-07-05 18:55:45</div>
                                <div className='list-content'>
                                    尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次日0点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i       尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i
                                </div>
                            </div>
                            <div className='list-item list-border'>
                                <div className='list-heade'>维护公告 2018-07-05 18:55:45</div>
                                <div className='list-content'>
                                    尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次日0点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i       尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i
                                </div>
                            </div>
                            <div className='list-item'>
                                <div className='list-heade'>维护公告 2018-07-05 18:55:45</div>
                                <div className='list-content'>
                                    尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次日0点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i       尊敬的代理：你好：本系统将于本周四（2018年7月8日）
                                    22：00至次点进行系统维护，届时系统将停止对外服务，
                                    开放时间可能根据具体维护事项延长或者提前开放，立刻就哭了好久了看 i
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
