import React, {Component} from 'react' ;
import { Row, Col, Card, Form, Input, Button } from 'antd';
import './index.scss';

const FormItem = Form.Item;

class SetPhone extends Component {
  
  constructor(props) {
    super(props);

    this.FROM_ITEM_LAYOUT = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 8 },
      },
    };
  }

  render() {
    const { FROM_ITEM_LAYOUT } = this;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="page-changepwd">
        <Row className="grid-row table">
          <Card title="手机管理">
            <Form>
              <FormItem
                {...FROM_ITEM_LAYOUT}
                label="请输入手机号"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }],
                })(
                  <Row>
                    <Col span={16}>
                      {getFieldDecorator('code', {
                        rules: [{ required: true, message: 'Please input the captcha you got!' }],
                      })(
                        <Input />
                      )}
                    </Col>
                    <Col span={4}>
                      <Button >发送验证码</Button>
                    </Col>
                  </Row>
                )}
              </FormItem>

              <FormItem
                {...FROM_ITEM_LAYOUT}
                label="验证码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>

              <FormItem
                className="btn-submit"
              >
                <Button type="primary">确认</Button>
              </FormItem>
            </Form>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Form.create()(SetPhone);
