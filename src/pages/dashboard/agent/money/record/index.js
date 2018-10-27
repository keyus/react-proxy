import React, {Component} from 'react';
import {Input, Button, Select, Pagination} from 'antd';
import TitleBar from '@components/TitleBar';
import Detail from './detail';
import './index.scss'

const Option = Select.Option;

export default class Record extends Component {
    state = {
        visible: false,
        currentPage: 1,
        pageSize: 10,
        total: 500,
        totalPage: 0,
    }

    static getDerivedStateFromProps(props,state){
        return { totalPage: Math.ceil(state.total / state.pageSize) };
    }

    onChange=()=>{
        return false
    }

    showDetail=()=>{
        this.setState({ visible: true })
    }

    closeDetail=()=>{
        this.setState({ visible: false })
    }

    render() {
        return (
            <div>
                <div className='page-container'>
                    <TitleBar title='提现记录' />
                    <div className='record-filter'>
                        <div className='record-filter-item'>
                            <span>代理ID</span>
                            <Input type='text'/>
                        </div>
                        <div className='record-filter-item'>
                            <span>审核状态</span>
                            <Select defaultValue="全部" style={{ width: 140 }}>
                                <Option value="0">全部</Option>
                                <Option value="1">新支付申请</Option>
                                <Option value="2">订单失败</Option>
                                <Option value="3">老支付审核</Option>
                                <Option value="4">支付驳回</Option>
                                <Option value="5">作废</Option>
                                <Option value="6">银行卡审核</Option>
                                <Option value="7">审核中</Option>
                                <Option value="8">审核无成</Option>
                                <Option value="9">处理中</Option>
                                <Option value="10">已完成</Option>
                            </Select>
                        </div>
                        <div className='record-filter-item record-filter-date'>
                            <span>详细时间</span>
                            <Input type='text'/>
                            <Input type='text'/>
                        </div>
                        <div className='record-filter-item record-filter-button'>
                            <Button type="primary">搜 素</Button>
                        </div>
                    </div>
                    <div className='money-record'>
                    </div>
                </div>

                <div className='page-container record-list'>
                    <div className='record-list-top'>
                        <h5>提现结算记录列表</h5>
                        <Button>重置</Button>
                    </div>

                    <table className='table-record'>
                        <thead>
                            <tr>
                                <th>结算单ID</th>
                                <th>时间</th>
                                <th>状态</th>
                                <th>类型</th>
                                <th>结算金额</th>
                                <th>账号</th>
                                <th>姓名</th>
                                <th>代理ID</th>
                                <th>备注</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>结算单ID</td>
                                <td>时间</td>
                                <td>状态</td>
                                <td>类型</td>
                                <td>结算金额</td>
                                <td>账号</td>
                                <td className='name'>
                                    <div onClick={this.showDetail}>北极天</div>
                                </td>
                                <td>代理ID</td>
                                <td>备注</td>
                                <td>操作</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='pagebar'>
                        <Pagination  showQuickJumper
                                     defaultCurrent={this.state.currentPage}
                                     defaultPageSize={this.state.pageSize}
                                     total={this.state.total}
                                     showTotal={total => `${this.state.totalPage}页 / 总记录${total}条`}
                                     onChange={this.onChange} />
                    </div>
                </div>

                <Detail visible={this.state.visible} onCancel={this.closeDetail} />
            </div>
        )
    }
}
