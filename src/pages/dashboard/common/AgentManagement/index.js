import React, {Component} from 'react' ;
import './index.scss';
import {Input, Button, Modal, Select, InputNumber,Table, Row, Radio,Col} from 'antd'

const {TextArea} = Input;
const Option = Select.Option;
const RadioGroup = Radio.Group;
import axios from 'axios'

export default class MkingMoney extends Component {

    constructor (props) {
        super (props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            page:1,
            remarks:false,
            modification:false,

        }
        this.columns = [{
            title: '昵称',
            dataIndex: 'name',
            width: '20%',
            sorter: true,
            render:(d)=>{

                return <span style={{color:'#5491f2',cursor:'pointer'}} onClick={this.onAllModal.bind(this,'modification')}>{d.title}</span>
            }

        }, {
            title: 'Gender',
            dataIndex: 'gender',
            filters: [
                { text: 'Male', value: 'male' },
                { text: 'Female', value: 'female' },
            ],
            width: '20%',
        }, {
            title: '备注',
            dataIndex: 'email',
            render:(d)=>{
                return <span style={{color:'#5491f2',cursor:'pointer'}}  onClick={this.onAllModal.bind(this,'remarks')}>{d}</span>
            }
        }];
    }

    componentDidMount() {
        this.init();
    }

    handleTableChange = (pagination, filters, sorter) => {


        this.setState({
            page: pagination.current,
        });
        this.init({
            page: pagination.current,

        });
    }

    async init(params = {}){
        let data= await  axios.get('https://randomuser.me/api',{
            params: {
                results: 10,
                ...params,
            },
        });

        this.setState({
            loading: false,
            data: data.data.results,

        });
    }




    total(total,range){

        let data=range[1]/10;
       
        return `${data}页/总记录${total}条`;
    }

    onAllModal(data){
        this.setState({
            [data]: true,
        });
    }
    offAllModal (data) {

        this.setState({
            [data]: false,
        });
    }
    modification(){
        console.log(222);
    }

    render () {

        let {data,page}=this.state;

        return (
            <div className='agent-management'>

                <div className='head-item'>
                    <div className='head'>
                        <div>代理管理</div>
                    </div>

                    <div className='head-content'>

                        <div className='list-item'>
                            <div>代理ID</div>
                            <div><Input/></div>
                        </div>
                        <div className='list-item'>
                            <div>绑定手机号</div>
                            <div><Input/></div>
                        </div>
                        <div className='list-item'>
                            <div>昵称</div>
                            <div><Input/></div>
                        </div>
                        <div className='list-item'>
                            <div>代理账号</div>
                            <div><Input/></div>
                        </div>
                        <div className='list-ticheng'>
                            <div className='ticheng-title'>提成比列区间</div>
                            <div className='ticheng'>
                                <div>
                                    <InputNumber formatter={value => `${value}%`}/>
                                </div>
                                <div>--</div>
                                <div>
                                    <InputNumber formatter={value => `${value}%`}/>
                                </div>
                            </div>

                        </div>

                        <div className='list-item '>

                            <div>&nbsp;</div>
                            <Button type="primary" className='btn'>搜索</Button>
                        </div>

                    </div>
                </div>


                <div className='content-table'>

                    <div className='table-head'>
                        <h3>代理人列表</h3>
                        <div className='right'>
                            <div>
                                <Select defaultValue="lucy"   className='select-width' >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div>
                                <Button>重置</Button>
                            </div>
                        </div>
                    </div>

                    <div className='table'>
                        <Table
                            rowKey={record => record.login.uuid}
                            loading={this.state.loading}
                            columns={this.columns}
                            dataSource={data}
                            bordered
                            onChange={this.handleTableChange}
                            pagination={{
                                showSizeChanger:true,
                                showTotal:this.total.bind(this),
                                total:200,
                                current: page,
                            }}
                        />,
                    </div>
                </div>

                <Modal
                    title="备注"
                    visible={this.state.remarks}
                    onCancel={this.offAllModal.bind(this,'remarks')}
                    footer={null}
                    maskClosable={false}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>


                <Modal
                    title="资料修改"
                    visible={this.state.modification}
                    onCancel={this.offAllModal.bind(this,'modification')}
                    footer={null}
                    className='modification'
                    maskClosable={false}

                >

                    <div className='body'>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">代理ID：84</div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">代理账号：youlong9</div>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">昵称</div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">提成比列</div>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>

                                </div>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">直系上级</div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">登录密码</div>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>

                                </div>
                            </Col>
                        </Row>


                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                   封号状态
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box flex">
                                    <RadioGroup  >
                                        <Radio value={1}>是</Radio>
                                        <Radio value={2}>否</Radio>

                                    </RadioGroup>
                                </div>
                            </Col>
                        </Row>


                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    修改备注
                                </div>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={24}>
                                <div className="gutter-box">
                                    <TextArea rows={4}/>
                                </div>
                            </Col>

                        </Row>



                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">银行卡账号</div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">银行卡账户名</div>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>

                                </div>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">支付宝账号</div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">支付宝姓名</div>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <Input/>

                                </div>
                            </Col>
                        </Row>

                        <Row gutter={16}  >
                            <Col className="gutter-row" span={24}>
                                <div className="gutter-box di-btn">
                                    <Button className='btn' type="primary">保存</Button>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Modal>
            </div>

        )

    }
}