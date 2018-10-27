import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Card, Form, Button  } from 'antd';
import SLTable from '@components/SLTable';
const FormItem = Form.Item;

import './index.scss';

// components
import InputId from './inputId'
import SelectBrands from './selectBrands'

/*
 *  查询玩家渠道 - 全部/單一
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
            title: '玩家ID或手機號',
            dataIndex: 'id',
            key: 'id',
            align: 'center'
        }, {
            title: '渠道',
            dataIndex: 'channel',
            key: 'channel',
            align: 'center'
        }, {
            title: '渠道類型',
            dataIndex: 'channel_type',
            key: 'channel_type',
            align: 'center'
        }];

        const data = [{
            key: '1',
            id: '001',
            channel: '測試渠道01',
            channel_type: '',
        },{
            key: '2',
            id: '002',
            channel: '測試渠道02',
            channel_type: '',
        },{
            key: '3',
            id: '003',
            channel: '測試渠道03',
            channel_type: '',
        },{
            key: '4',
            id: '004',
            channel: '測試渠道04',
            channel_type: '',
        }]

        this.setState({
            queryResult: {
                columns: columns,
                data: data       
            } 
        }); 
    }

    render() {
        const { id, brand, queryResult } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="playerChannlQuery">
                <Card className="card1">
                    <h1 className="title">查询玩家渠道</h1>
                    <Divider />
                    <Form layout="inline" className="spaceBetween" onSubmit={this.handleSubmit}>
              
                        <FormItem label="玩家ID或手機號">
                            {getFieldDecorator('id', {
                                initialValue: { id: '' },
                                validateTrigger: 'onChange',
                                rules: [{ validator: this.checkId }],
                            })(<InputId />)}
                        </FormItem>
                        <FormItem label="品牌">
                            {getFieldDecorator('brand', {
                                initialValue: { brand: '品牌1' },
                                validateTrigger: 'onChange',
                                rules: [{ validator: this.checkBrand }],
                            })(<SelectBrands />)}
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

        callback('玩家ID或手機號 格式錯誤！');
    }

    checkBrand = (rule, value, callback) => { 
        if (value.brand) {
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