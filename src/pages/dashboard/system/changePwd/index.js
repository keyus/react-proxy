import React, {Component} from 'react' ;
import { Row, Card, Form, Input, Button } from 'antd';
import './index.scss';

const FormItem = Form.Item;

class ChangePwd extends Component {
  
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
          <Card title="密碼變更">
            <Form>
              <FormItem
                {...FROM_ITEM_LAYOUT}
                label="原始密碼"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>

              <FormItem
                {...FROM_ITEM_LAYOUT}
                label="新密码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>

              <FormItem
                {...FROM_ITEM_LAYOUT}
                label="确认新密码"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }],
                })(
                  <Input type="password" />
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

export default Form.create()(ChangePwd);
