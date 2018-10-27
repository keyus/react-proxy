import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Card, Form, Button  } from 'antd';
import SLTable from '@components/SLTable';
const FormItem = Form.Item;

import './index.scss';

// components
import InputId from './inputId'
import SelectChannels from './selectChannels'

/*
 *  代理人渠道查詢
 */
class Index extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          queryResult: {
            columns: [],
            data: [],
          },
        };
    }

    componentDidMount(){

        const columns = [{
            title: '代理ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center'
        }, {
            title: '渠道',
            dataIndex: 'channel',
            key: 'channel',
            align: 'center'
        }];

        const data = [{
            key: '1',
            id: '001',
            channel: '測試渠道01',
        },{
            key: '2',
            id: '002',
            channel: '測試渠道02',
        },{
            key: '3',
            id: '003',
            channel: '測試渠道03',
        },{
            key: '4',
            id: '004',
            channel: '測試渠道04',
        }]

        this.setState({
            queryResult: {
                columns: columns,
                data: data       
            } 
        }); 
    }

    render() {
        const { queryResult } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="agentChannlQuery">
                <Card className="card1">
                    <h1 className="title">查询玩家渠道</h1>
                    <Divider />
                    <Form layout="inline" className="spaceBetween" onSubmit={this.handleSubmit}>
              
                        <FormItem label="代理ID">
                            {getFieldDecorator('id', {
                                initialValue: { id: '' },
                                validateTrigger: 'onChange',
                                rules: [{ validator: this.checkId }],
                            })(<InputId />)}
                        </FormItem>
                        <FormItem label="渠道">
                            {getFieldDecorator('channel', {
                                initialValue: { channel: '渠道1' },
                                validateTrigger: 'onChange',
                                rules: [{ validator: this.checkChannel }],
                            })(<SelectChannels />)}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit">搜索</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card>
                    <SLTable column={queryResult.columns} 
                            data={queryResult.data} 
                            onPageChange={this.handlePageChange}
                    />
                </Card>
            </div>
        );
    }

    checkId = (rule, value, callback) => { 
        if (value.id.length > 5) {
            callback();
            return;
        }

        callback('代理ID 格式錯誤！');
    }

    checkChannel = (rule, value, callback) => { 
        if (value.channel) {
            callback();
            return;
        }

        callback('請選擇品牌！');
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handlePageChange = (e) => {
        console.log(e);
    }
}

Index.propTypes = {

};


const WrappedIndex = Form.create()(Index);

export default WrappedIndex;