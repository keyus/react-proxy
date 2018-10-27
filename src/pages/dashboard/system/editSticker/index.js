import React, { Component } from 'react';
import { Input, Button, Card, Form, Divider, Tag, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import './index.scss';

const Option = Select.Option;
const { TextArea } = Input;

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

class EditStick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: '',
            content: ''
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

    handleSelectChange = (value) => {
        this.setState({
            menu: value
        })
    }

    handleTexAreaChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleCancel = () => {
        console.log(this.props)
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Card title="编修小贴士" className="editSticker">
                <div>
                    <FormItem {...formItemLayout} label="菜单选择">
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
                    <FormItem {...formItemLayout2} label="小贴士">
                        {getFieldDecorator('content', {
                            rules: [{
                                required: true,
                                message: 'Please input content'
                            }]
                        })(
                            <TextArea rows={8} onChange={this.handleTexAreaChange} />
                        )}
                    </FormItem>
                    <FormItem {...formTailLayout} className="action">
                        <Button onClick={this.handleCancel}>取消</Button>
                        <Button type="primary" onClick={this.check}>发布</Button>
                    </FormItem>
                </div>
            </Card>
        )
    }
}

const EditSticker = Form.create()(EditStick);
export default EditSticker;
