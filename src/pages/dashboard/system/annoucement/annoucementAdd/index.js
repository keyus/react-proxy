import React, { Component } from 'react';
import { Input, Button, Card, Form, Divider, Tag, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import './index.scss';

const { TextArea } = Input;
const Option = Select.Option;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 }
};

const formItemLayout2 = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
};

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 }
}

class AnnoucementAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    check = () => {
        this.props.form.validateFields(
            (err) => {
                if (!err) {
                    console.log('success');
                }
            }
        )
    }

    cancel = () => {
        this.props.history.goBack();
    }

    componentDidMount() {

        console.log('id:' + this.props.match.params.id);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Card title="发布公告" className="annoucementAdd">
                <div>
                    <FormItem {...formItemLayout} label="公告标题">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: 'Please input title'
                            }]
                        })(
                            <Input placeholder="" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="公告类型">
                        {getFieldDecorator('type', {
                            rules: [{
                                required: true,
                                message: 'Please select type'
                            }]
                        })(
                            <Select style={{ width: '100%' }} onChange={this.handleSelectChange} placeholder="請選擇狀態">
                                <Option value="1">審核中</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout2} label="内容编辑">
                        {getFieldDecorator('content', {
                            rules: [{
                                required: true,
                                message: 'Please input content'
                            }]
                        })(
                            <TextArea rows={8} onChange={this.handleSelectChange} />
                        )}
                    </FormItem>
                    <FormItem {...formTailLayout} className="action">
                        <Button onClick={this.cancel}>取消</Button>
                        <Button type="primary" onClick={this.check}>发布</Button>
                    </FormItem>
                </div>
            </Card>
        )
    }
}

const AnnoucementAddAndEdit = Form.create()(AnnoucementAdd);
export default AnnoucementAddAndEdit;
