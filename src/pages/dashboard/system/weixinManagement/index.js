import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Divider, Card, Button, Row, Col, Input, Form, Tag, Icon } from 'antd';
const Search = Input.Search;
const FormItem = Form.Item;
import SLTable from '@components/SLTable';

import './index.scss';


/*
 *  微信管理
 */
class index extends PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          search: {
              brand: '',
              weixin: ''
          },
          queryResult: {
            columns: [],
            data: [],
          },
          pagination: {
            current: 1,
            total: 3,
            pageSize: 10
          }
        };
    }

    componentDidMount() {

        const columns = [{
            title: '品牌',
            dataIndex: 'brand',
            key: 'brand',
            align: 'center',
        }, {
            title: '微信',
            dataIndex: 'weixin',
            key: 'weixin',
            align: 'center',
            render: (tags, record) => (
                <span>
                    { tags.map(tag => <Tag closable 
                                        onClose={this.handleSingleDelete}
                                        key={tag}>{tag}
                                    </Tag>) 
                    }
                    {
                        <Tag
                            onClick={this.handleSingleAdd}
                            className="tag"
                        >
                            <Icon type="plus" />
                        </Tag>
                    }
                </span>
              ),
        }, {
            title: '备注',
            dataIndex: 'remarks',
            key: 'remarks',
            align: 'center',
            render: (text, record) => (
                <div className="btnEditLayout">
                    <div onClick={ () => this.handleEdit() } className="btnEdit">編輯</div>
                </div>
            ),
        }];

        const data = [{
            key: '1',
            brand: '大神娱乐',
            weixin: ['qq154054', 'qq537610', 'qq537612'],
        },{
            key: '2',
            brand: '红心娱乐',
            weixin: ['ww123456', 'ww189653', 'ww108946'],
        },{
            key: '3',
            brand: '大馬娱乐',
            weixin: ['ee123456', 'ee8779561', 'ee087396'],
        },]

        this.setState({
            queryResult: {
                columns,
                data       
            } 
        }); 
    }

    render() {
        const { queryResult, pagination, search } = this.state;
        return (
            <div className="weixinManagement">
                <Card className="card1">
                    <h1 className="title">微信管理</h1>
                    <Divider /> 

                    <Form layout="inline">
                        
                        <FormItem label="品牌">
                            <Input 
                                value={search.brand}
                                onChange={this.handleBrandChange}
                            />
                        </FormItem>
     
                        <FormItem label="微信">
                            <Input 
                                value={search.weixin}
                                onChange={this.handleWeixinChange}
                            />
                        </FormItem>
                    
                        <FormItem >
                            <Button type="primary" className="btns" onClick={this.handleSearch}>搜索</Button>
                        </FormItem>

                    </Form>
                </Card>

                <Card>
                    <Row className="mb20">
                        <Col xs={{ span: 12 }} sm={{ span: 12}}>
                            <p>品牌微信列表</p>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 12 }} className="btnsLayout">
                            <Button type="primary" onClick={this.handleAdd}>新增</Button>
                        </Col>
                    </Row>

                    <SLTable column={queryResult.columns} 
                        data={queryResult.data} 
                        onPageChange={this.handlePageChange}
                        page={pagination}
                    />
                </Card>

            </div>
        );
    }

    handleBrandChange = (e) => {
        const brand = e.target.value;
        const search = Object.assign({}, this.state.search, { brand })
        this.setState({ search })
    }

    handleWeixinChange = (e) => {
        const weixin = e.target.value;
        const search = Object.assign({}, this.state.search, { weixin })
        this.setState({ search })
    }

    handleSearch = () => {
        const { brand, weixin } = this.state.search;
        if(!brand && !weixin) return;

        console.log('ready to search:', this.state)
    }

    handleAdd = () => {
        console.log(`handleAdd`)
    }

    handleEdit = () => {
        console.log(`handleEdit`)
    }

    handleSingleDelete = (e) => {
        console.log(`handleSingleDelete`, e)
    }

    handleSingleAdd = (e) => {
        console.log(`handleSingleAdd`, e)
    }

}

index.propTypes = {

};

export default index;