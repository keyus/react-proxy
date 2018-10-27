import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, Input, Button, Card, Form, Divider, Tag, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import SLTable from '@components/SLTable';
import ModalCreateForm from './modalCreateForm'

import './index.scss';

const Search = Input.Search;

/**
 * 路由层   /dashboard/agent/...
 */
export default class PushMessage extends Component {
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
            visible: false,
            modalTitle: '',
            record: {},
            action: '',
            loading: false
        }
    }

    componentDidMount() {
        const columns = [{
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => <a href="javascript:;" onClick={() => this.handleOpenModal(record, 'view')}>{text}</a>,
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            align: 'center'
        }, {
            title: '绑定',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <section className="operation">
                    {/* <span>修改</span> */}
                    {/* <span>删除</span> */}
                    {/* <Button type="danger" size="small" name={record.name} onClick={() => this.handleDelete(record.key)}>Delete</Button> */}
                </section>
            )
        }];

        const data = [{
            key: '1',
            title: '推廣人員經驗分享',
            content: '666',
            type: 'app系統公告',
            time: '2018-07-30 11:22:33'
        }, {
            key: '2',
            title: '推廣人員經驗分享',
            content: '777',
            type: 'app系統公告',
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

    handleOpenModal(record, action) {
        this.setState({
            record: { ...record },
            visible: true,
            action: action,
            modalTitle: action === 'view' ? '推送讯息' : '添加推送讯息'
        })

    }

    handleCancel = () => {
        this.setState({ visible: false });
        this.formRef.props.form.resetFields()
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        return (
            <Card className="pushMessage">
                <Form layout="inline" className="spaceBetween">
                    <FormItem>
                        <h3 className="title">推送讯息</h3>
                    </FormItem>
                    <FormItem>
                        <Search placeholder="标题或内容" onSearch={this.search} />
                    </FormItem>
                </Form>
                <Divider />
                <Form layout="inline" className="spaceBetween">
                    <FormItem>
                        <h3>推送列表</h3>
                    </FormItem>
                    <FormItem>
                        <div className="action">
                            <Button type="primary" size="small" onClick={() => this.handleOpenModal({}, 'add')}>添加讯息</Button>
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
                <ModalCreateForm
                    modalTitle={this.state.modalTitle}
                    action={this.state.action}
                    record={this.state.record}
                    loading={this.state.loading}
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    record={this.state.record}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </Card>
        )
    }
}
