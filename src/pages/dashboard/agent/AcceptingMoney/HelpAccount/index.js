import React, {Component} from 'react' ;
import './index.scss';
import {Input, Button, Icon,Select,InputNumber} from 'antd'
const { TextArea } = Input;
const Option = Select.Option;


export default class MkingMoney extends Component {

    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: '',

        }

    }

    render () {
        return (
            <div className='help-account'>

                <div className='head'>
                    <div>帮他开户</div>
                </div>

                <div className='content'>

                    <div>
                        <div className='list-one'>
                            <div className='input-list'>
                                <div className='font15'>代理账号</div>
                                <div className='input'>
                                    <div>

                                        <Input className='input-width'/>
                                    </div>
                                    <div className='jiange10'></div>
                                    <div>
                                        <Button  type="primary" ghost className='height30'>检查账号</Button>
                                    </div>
                                </div>

                            </div>
                            <div className='jiange40'></div>

                            <div className='input-list'>
                                <div className='font15'>代理账号</div>
                                <div className='input'>
                                    <div>

                                        <Input className='input-width'/>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='list-one'>
                            <div className='input-list'>
                                <div className='font15'>代理昵称</div>
                                <div className='input'>
                                    <div>

                                        <Input className='input-width'/>

                                    </div>
                                    <div className='jiange10'></div>

                                    <div>
                                        <Button  type="primary" ghost className='height30'>检查昵称</Button>
                                    </div>
                                </div>

                            </div>
                            <div className='jiange40'></div>

                            <div className='input-list'>
                                <div className='font15'>品牌选择</div>
                                <div className='input'>
                                    <div>
                                        <Select defaultValue="lucy"  className='input-width' >
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>

                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='commission'>
                            <div className='font15'>提成比列</div>
                            <div className='list-two'>
                                <div>

                                    {/*<Input className='ticheng'/>*/}

                                    <InputNumber
                                        className='ticheng'
                                        defaultValue={30}
                                        min={0}
                                        max={30}
                                        formatter={value => `${value}            %`}
                                        parser={value => value.replace('%', '')}

                                    />
                                </div>
                                <div className='jiange10'></div>

                                <div>

                                    <Input className='tishi' placeholder='一级代理固定30%'/>
                                </div>
                            </div>

                        </div>

                        <div className='remarks'>
                            <div className='font15'>备注</div>
                            <div className='input'>
                                <TextArea rows={4} />
                            </div>
                        </div>

                        <div className='btn'>
                            <Button className='btn-di'  type="primary">添加代理</Button>
                        </div>
                    </div>


                </div>
            </div>

        )

    }
}