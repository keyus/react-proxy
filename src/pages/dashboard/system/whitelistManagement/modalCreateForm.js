import React, { Component } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import './modalCreateForm.scss'

const FormItem = Form.Item;
const Option = Select.Option;


const ModalCreateForm = Form.create()(
    class extends Component {
        render() {
            const { visible, onCancel, onCreate, form, record, modalTitle, action } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    className="modalCreateForm"
                    visible={visible}
                    title={modalTitle}
                    onCancel={onCancel}
                    maskClosable={action === 'view'}
                    closable={action === 'view'}
                    keyboard={action === 'view'}
                    footer={action === 'view' ? null : [
                        <Button key="back" onClick={onCancel} disabled={this.props.loading}>关闭</Button>,
                        <Button key="submit" onClick={onCreate} type="primary" loading={this.props.loading}>确认</Button>
                    ]}
                >
                    <Form layout="vertical">
                    <FormItem label="平台">
                            {getFieldDecorator('platform', {
                                rules: [{ required: true, message: 'Please select the platform' }]
                            })(
                                <Select className="status" placeholder="请选择平台">
                                    <Option value="1">微信</Option>
                                    <Option value="2">支付宝</Option>
                                {/* {status.map(menu =>
                                    <Option value={menu.value} key={menu.value}>{menu.name}</Option>
                                )} */}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="帐号">
                            {getFieldDecorator('account', {
                                rules: [{ required: true, message: 'Please input the account' }],
                                initialValue: action === 'view' ? record.title : null
                            })(
                                <Input disabled={action === 'view'} />
                            )}
                        </FormItem>
                        {/* {action === 'view' ? '' :
                            <FormItem label="推送时间">
                                {getFieldDecorator('time', {
                                    rules: [{ required: true, message: 'Please input the date of message!' }]
                                })(
                                    <DatePicker placeholder="日期" className="timePicker" format="YYYY-MM-DD HH:mm:ss" />
                                )}
                            </FormItem>
                        }
                        <FormItem label="推送内容">
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Please input the content of message!' }],
                                initialValue: action === 'view' ? record.content : null
                            })(<TextArea row="{8}" disabled={action === 'view'} />)}
                        </FormItem> */}
                    </Form>
                </Modal>
            );
        }
    }
);

export default ModalCreateForm;