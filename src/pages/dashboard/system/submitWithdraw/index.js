import React from 'react';
import { DatePicker, Input, Button, Card, Form, Select } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import SLTable from '@components/SLTable';
import './index.scss';

const FormItem = Form.Item;
const Option = Select.Option;

export default class SubmitWithdraw extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            id: '',
            status: '',
            startDate: null,
            endDate: null,
            data: [],
            columns: [],
            pageSize: 1,
            selectRowKey: [],
            pagination: {
                current: 1,
                total: 3,
                pageSize: 10
            }
        }
    }

    componentDidMount() {
        const columns = [{
            title: '订单ID',
            dataIndex: 'orderId',
            key: 'orderId',
        }, {
            title: '创建时间',
            dataIndex: 'startTime',
        }, {
            title: '提现状态',
            dataIndex: 'status',
        }, {
            title: '类型',
            dataIndex: 'type',
        }, {
            title: '提现金额',
            dataIndex: 'price',
        }, {
            title: '支付帐号',
            dataIndex: 'account',
        }, {
            title: '支付帐号姓名',
            dataIndex: 'name',
        }, {
            title: '代理ID',
            dataIndex: 'agentId',
        }, {
            title: '审核信息',
            dataIndex: 'message',
        }];

        const data = [{
            orderId: '3423433',
            startTime: '2018-07-07 11:11:11',
            status: '审核中',
            type: '支付宝',
            price: '111',
            account: '1173734834439',
            name: 'Bob',
            agentId: '1230',
            message: '好哦'
        }, {
            orderId: '3423434',
            startTime: '2018-07-07 11:11:11',
            status: '审核中',
            type: '支付宝',
            price: '111',
            account: '1173734834439',
            name: 'Bob',
            agentId: '1231',
            message: '好哦'
        }, {
            orderId: '3423435',
            startTime: '2018-07-07 11:11:11',
            status: '审核中',
            type: '支付宝',
            price: '111',
            account: '1173734834439',
            name: 'Bob',
            agentId: '1232',
            message: '好哦'
        }];

        this.setState({
            data: data,
            columns: columns,
        })
    }

    handleInputChange = (e) => {
        this.setState({
            id: e.target.value
        })
        console.log(e.target.value)
    }

    handleSelectChange = (value) => {
        this.setState({ status: value })
        console.log(value)
    }

    handleSTimeChange = (dates, dateString) => {
        const d = isNaN(dates) ? '' : moment(dates).unix();
        console.log(moment(dates).unix())
        this.setState({ startDate: d })
        console.log(dateString)
    }

    handleETimeChange = (dates, dateString) => {
        const d = isNaN(dates) ? '' : moment(dates).unix();
        console.log(moment(dates).unix())
        this.setState({ endDate: d })
        console.log(dateString)
    }

    handleSearch = () => {
        const searchFilter = {
            id: this.state.id,
            status: this.state.status,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        }
        console.log(searchFilter)
    }

    handlePassAction = () => {
        console.log(this.state.selectRowKey);
    }

    handleRejectAction = () => {
        console.log(this.state.selectRowKey);
    }

    handleBlockAction = () => {
        console.log(this.state.selectRowKey);
    }

    handleRecoverAction = () => {
        console.log(this.state.selectRowKey);
    }

    onShowSizeChange = (current, pageSize) => {
        this.setState({
            pageSize: pageSize
        })
        console.log(current, pageSize);
    }

    onPageChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }

    onSelectRowChange = (selectRowKey) => {
        this.setState({ selectRowKey })
        console.log(this.state.selectRowKey)
    }

    render() {
        const status = [
            {
                name: '待审核',
                value: 1
            },
            {
                name: '审核完成',
                value: 2
            },
            {
                name: '支付渠道拒绝',
                value: 3
            },
            {
                name: '完成',
                value: 4
            },
            {
                name: '拒绝/作废',
                value: 5
            },
            {
                name: '新兑换支付渠道审核',
                value: 6
            },
            {
                name: '失败',
                value: 7
            },
            {
                name: '老兑换支付渠道审核',
                value: 8
            },
            {
                name: '处理中',
                value: 9
            },
            {
                name: '银行卡支付渠道审核中',
                value: 10
            },
        ];
        return (
            <div className="submitWithdraw">
                <Card title="审核提现">
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem label="代理ID">
                            <Input placeholder="输入代理ID" value={this.state.id} onChange={this.handleInputChange} />
                        </FormItem>
                        <FormItem label="审核状态">
                            <Select className="status" onChange={this.handleSelectChange} placeholder="请选择状态">
                                {status.map(menu =>
                                    <Option value={menu.value} key={menu.value}>{menu.name}</Option>
                                )}
                            </Select>
                        </FormItem>
                        <FormItem label="创建时间">
                            <DatePicker placeholder="日期" className="time" onChange={this.handleSTimeChange} />
                            <DatePicker placeholder="日期" className="time" onChange={this.handleETimeChange} />
                        </FormItem>
                        <FormItem>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSearch}>搜索</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card>
                    <Form>
                        <FormItem>
                            <h3 className="sTitle">审核提现纪录</h3>
                        </FormItem>
                        <FormItem>
                            <div className="tableHeaderActionBar">
                                <span className="text">请勾选一项进行操作</span>
                                <Button className="pass" onClick={this.handlePassAction}>通过</Button>
                                <Button className="reject" onClick={this.handleRejectAction}>拒绝</Button>
                                <Button className="block" onClick={this.handleBlockAction}>拒绝并封号</Button>
                                <Button className="recover" onClick={this.handleRecoverAction}>恢复</Button>
                            </div>

                        </FormItem>
                        <FormItem>
                            <SLTable column={this.state.columns}
                                data={this.state.data}
                                rowKey="orderId"
                                onSelectRowChange={this.onSelectRowChange}
                                onShowSizeChange={this.onShowSizeChange}
                                page={this.state.pagination}
                                onPageChange={this.onPageChange} />
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
