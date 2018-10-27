import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, Input, Button, Card, Form, Divider, Tag, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import SLTable from '@components/SLTable';
import './index.scss';

const Search = Input.Search;


/**
 * 路由层   /dashboard/agent/...
 */
export default class Annoucement extends Component {
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
            }
        }
    }

    componentDidMount() {
        const columns = [{
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => <Link to={{ pathname: './annoucement/edit/' + record.key }}>{text}</Link>,
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            align: 'center'
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            align: 'center'
        }, {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <section className="operation">
                    <span>修改</span>
                    <span>删除</span>
                    <Button type="danger" size="small" name={record.name} onClick={() => this.handleDelete(record.key)}>Delete</Button>
                </section>
            )
        }];

        const data = [{
            key: '1',
            title: '推廣人員經驗分享',
            type: 'app系統公告',
            time: '2018-07-30 11:22:33'
        }, {
            key: '2',
            title: '推廣人員經驗分享',
            type: 'app系統公告',
            time: '2018-07-30 11:22:33'
        }]

        this.setState({
            columns: columns,
            data: data
        });
    }

    handleDelete(key) {
        console.log(key)
    }

    pageChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    search(keyword) {
        const param = {
            keyword: keyword
        };
        this.setState({
            searchFilter: param

        })
    }

    add() {
        this.props.history.push('./annoucement/add');
    }

    render() {
        return (
            <Card className="annoucement">
                <Form layout="inline" className="spaceBetween">
                    <FormItem>
                        <h3 className="title">公告管理</h3>
                    </FormItem>
                    <FormItem>
                        <Search placeholder="标题或内容" onSearch={value => this.search(value)} />
                    </FormItem>
                </Form>
                <Divider />
                <Form layout="inline" className="spaceBetween">
                    <FormItem>
                        <h3>教程管理列表</h3>
                    </FormItem>
                    <FormItem>
                        <div className="action">
                            <Button type="primary" size="small" onClick={() => this.add()}>新增公告</Button>
                            <Button size="small">重置</Button>
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
