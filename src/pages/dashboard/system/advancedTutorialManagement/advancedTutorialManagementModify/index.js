import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Divider, Card, Form, Button, Row, Col, Input } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

import './index.scss';


const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
};

/*
 *  进阶教程管理 新增&修改
 */
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;

        if (id) {
            setTimeout(() => {
                this.props.form.setFieldsValue({
                    title: '我是教程标题',
                    cover: 'http://3.bp.blogspot.com/-WE3b4fVqPTo/Ud_iPiDPocI/AAAAAAAA7uY/_Pavu4TSTBk/s1600/atm-2-b.jpg',
                    desc: '我是教程內容',
                });
                this.setState({ isLoading: false });
            }, 1500)
        } else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Card className="advancedTutorialManagementModify">
                <h1 className="title">发布教程</h1>
                <Divider />

                <Form onSubmit={this.handleSubmit}>
            
                    <FormItem {...formItemLayout} label="教程标题">
                        {getFieldDecorator('title', {
                            initialValue: '',
                            validateTrigger: 'onBlur',
                            rules: [{ validator: this.checkTitle }],
                        })(<Input />)}
                    </FormItem>

                    <FormItem {...formItemLayout} label="标题图片地址">
                        {getFieldDecorator('cover', {
                            initialValue: '',
                            validateTrigger: 'onBlur',
                            rules: [{ validator: this.checkCover }],
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <Row>
                        <Col xs={{ span: 24 }} sm={{ span: 12, offset: 8 }}>
                            { this.preloadCover() }
                        </Col>
                    </Row>

                    <FormItem {...formItemLayout} label="教程內容">
                        {getFieldDecorator('desc', {
                            initialValue: '',
                            validateTrigger: 'onBlur',
                            rules: [{ validator: this.checkDesc }],
                        })(<TextArea 
                            rows={8}
                        />)}
                    </FormItem>

                    <FormItem className="btnsLayout">
                        <Button onClick={this.handleCancel} className="btns" disabled={ this.state.isLoading }>取消</Button>
                        <Button type="primary" htmlType="submit" className="btns" disabled={ this.state.isLoading }>发布</Button>
                    </FormItem>
                
                </Form>
                
            </Card>

        );
    }


    preloadCover = () => {
        const { getFieldError, getFieldValue } = this.props.form;
        return getFieldError('cover') ? null : <img className="preloadCoverCol" src={getFieldValue('cover')} />
    }


    checkTitle = (rule, value, callback) => { 

        if (value.length < 100 && value.length >= 1) {
            callback();
            return;
        } 
        
        if (value.length === 0) {
            callback('請輸入教程标题');
            return;
        }

        callback('标题字数太长！最多100个字以内');
    }

    checkCover = (rule, value, callback) => {
        let img = new Image();
        img.onload = function() { callback(); };
        img.onerror = function() { callback('图片格式不正确'); };
        img.src = value;
    }

    checkDesc = (rule, value, callback) => {

        if( value.length >= 1) {
            callback();
            return; 
        }
        callback('请输入教程内容');
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleCancel = () => {
        this.props.history.goBack();
    }
}

Index.propTypes = {

};

const WrappedIndex = Form.create()(Index);

export default WrappedIndex;