import React, { Component } from 'react';
import { DatePicker, Input, Button, Card, Form, Divider, Tag, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import SLTable from '@components/SLTable';

import './index.scss';

const Search = Input.Search;

/**
 * 路由层   /dashboard/agent/...
 */
export default class LogManagement extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            serchFilter: {
                keyword: ''
            },
            columns: [],
            data: [],
            pagination: {
                current: 1,
                total: 3,
                pageSize: 10
            },
        }
    }

    componentDidMount() {
        const columns = [{
            title: '代理ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center'
        }, {
            title: '登录IP',
            dataIndex: 'ip',
            key: 'ip',
            align: 'center'
        }, {
            title: 'IP区域',
            dataIndex: 'area',
            key: 'area',
            align: 'center'
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            align: 'center'
        }];

        const data = [{
            key: '1',
            id: 123,
            ip: '192.168.123.13',
            area: '菲律宾',
            time: '2018-07-30 11:22:33'
        }, {
            key: '2',
            id: 1232,
            ip: '192.168.123.13',
            area: '泰国',
            time: '2018-07-30 11:22:33'
        }]

        this.setState({
            columns: columns,
            data: data
        });
    }

    pageChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    search = (keyword) => {
        const param = {
            keyword: keyword
        };
        this.setState({
            searchFilter: param
        })
        console.log(keyword)
    }

    onExportExcel = () => {
        console.log('export excel')
    }

    render() {
        return (
            <Card className="logManagement">
                <Form layout="inline" className="spaceBetween">
                    <FormItem>
                        <h3 className="title">登录日志</h3>
                    </FormItem>
                    <FormItem>
                        <Search placeholder="代理ID" onSearch={this.search} />
                    </FormItem>
                </Form>
                <Divider />
                <Form layout="inline" className="spaceBetween">
                    <FormItem>
                        <h3>登录日志</h3>
                    </FormItem>
                    <FormItem>
                        <div className="action">
                            <Button size="small">恢复</Button>
                            <Button size="small">去重</Button>
                            <Button type="primary" size="small" onClick={this.onExportExcel}>导出Excel</Button>
                        </div>
                    </FormItem>
                </Form>
                <Form>
                    <SLTable column={this.state.columns}
                        data={this.state.data}
                        onPageChange={this.pageChange}
                        page={this.state.pagination}
                    />
                </Form>
            </Card>
        )
    }
}
