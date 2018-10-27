import React, {Component} from 'react' ;
import PropTypes from 'prop-types';
import { Row, Card, Form, Input, Table, Button, DatePicker, Modal, Col } from 'antd';

const { Item: FormItem } = Form;
const { TextArea } = Input;

class FeedbackForm extends Component {
  static propTypes = {
    isEdit: PropTypes.bool.isRequired,
    feedbackObj: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCloseModal() {
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {

      if (!err) {
        this.props.onSubmit(values);
      }
    });
  }

  render() {
    const { isEdit, feedbackObj, form } = this.props;
    const autosize = { minRows: 4, maxRows: 4 };
    const { id, name, feedback, replyMessage } = feedbackObj;
    const { getFieldDecorator } = form;

    return (
      <div className="feedback-form">
        <Row >
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Col span={12}>
              <FormItem label="代理ID">
                <Input value={id} disabled/>
              </FormItem>
            </Col>

            <Col span={12}>
              <FormItem label="代理昵称">
                <Input value={name} disabled/>
              </FormItem>
            </Col>

            <Col span={24}>
              <FormItem label="建议内容">
                <TextArea autosize={autosize} value={feedback} disabled />
              </FormItem>
            </Col>

            <Col span={24}>
              <FormItem label="回复">
                {getFieldDecorator('replyMessage', {
                  initialValue: replyMessage,
                  rules: [{
                    required: true, message: '请输入回复讯息',
                  }],
                })(
                  <TextArea autosize={autosize} disabled={!isEdit} />
                )}
              </FormItem>
            </Col>

            <Col span={24}>
              <FormItem>
                <div className="form-action">
                  <Button onClick={this.handleCloseModal}>关闭</Button>
                  
                  {isEdit &&
                    <Button type="primary" htmlType="submit">确认</Button>
                  }
                </div>
              </FormItem>
            </Col>
          </Form>
        </Row>
      </div>
    );
  }
}

export default Form.create()(FeedbackForm);