import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Divider, Card, Button, Row, Col, Input } from 'antd';
const Search = Input.Search;
import SLTable from '@components/SLTable';

import './index.scss';

/*
 *  进阶教程管理
 */
class index extends PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
          search: {
              keyword: ''
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

    componentDidMount(){

        const columns = [{
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            render: (text, record) => <Link to={{ pathname: './edit/' + record.key }}>{text}</Link>,
        }, {
            title: '标题图片',
            dataIndex: 'cover',
            key: 'cover',
            align: 'center',
            render: (text, record) => <img src={record.cover} />,
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            align: 'center'
        }, {
            title: '操作者',
            dataIndex: 'owner',
            key: 'owner',
            align: 'center'
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <section className="actionLayout">
                    <Link to={{ pathname: './edit/' + record.key }}>修改</Link>
                    <span className="btnCancel" onClick={() => this.handleDelete(record.key)}>删除</span>
                </section>
            )
        }];

        const data = [{
            key: '1',
            title: '标题1',
            cover: 'http://3.bp.blogspot.com/-WE3b4fVqPTo/Ud_iPiDPocI/AAAAAAAA7uY/_Pavu4TSTBk/s1600/atm-2-b.jpg',
            time: '2018-07-30 12:52:13',
            owner: 'Jafi',
            action: '修改 刪除'
        },{
            key: '2',
            title: '标题2',
            cover: 'http://4.bp.blogspot.com/-2UqjXdeNzkY/Ud_iPq7283I/AAAAAAAA7uc/_dQ14WgO-ns/s1600/atm-3-b.jpg',
            time: '2018-07-30 12:52:13',
            owner: 'Jafi',
            action: '修改 刪除'
        },{
            key: '3',
            title: '标题3',
            cover: 'http://3.bp.blogspot.com/-WxfShPBPaUU/Ud_iPvUDj_I/AAAAAAAA7uo/zMHyYF0O_5k/s1600/atm-1-b.jpg',
            time: '2018-07-30 12:52:13',
            owner: 'Jafi',
            action: '修改 刪除'
        },]

        this.setState({
            queryResult: {
                columns,
                data       
            } 
        }); 
    }


    render() {
        const { queryResult, pagination } = this.state;
        return (
            <Card className="advancedTutorialManagement">
                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 12}}>
                        <h1 className="title">教程管理</h1>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} className="searchLayout">
                        <Search
                            placeholder="标题或内容"
                            onSearch={this.handleSearch}
                            className="inputSearch"
                        />
                    </Col>
                </Row>
                <Divider /> 
                <Row className="mb20">
                    <Col xs={{ span: 12 }} sm={{ span: 12}}>
                        <p>教程管理列表</p>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} className="btnsLayout">
                        <Button type="primary" onClick={this.handleAdd}>新增教程</Button>
                        <Button className="btnReset" onClick={this.handleReset}>重置</Button>
                    </Col>
                </Row>

                <SLTable column={queryResult.columns} 
                        data={queryResult.data} 
                        onPageChange={this.handlePageChange}
                        page={pagination}
                />

            </Card>
        );
    }

    handleSearch = (keyword) => {
        if(keyword.length === 0) return;

        console.log(`ready to search: ${keyword}`)
        this.setState({
            search: { keyword }
        })
    }

    handleAdd = (e) => {
        this.props.history.push('./add');
    }

    handleReset = (e) => {
        this.props.history.go(0);
    }

    handleDelete = (key) => {
        console.log(`ready to delete item ${key}`)
    }
    
    handlePageChange = (e) => {
        console.log(e)
    }
}

index.propTypes = {

};

export default index;