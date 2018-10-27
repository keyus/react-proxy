import React, {Component} from 'react' ;
import { Link } from 'react-router-dom';
import { Row, Card, Form } from 'antd';
import './index.scss';

const FormItem = Form.Item;

export default class Security extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 11 },
      wrapperCol: { span: 13 },
    };

    return (
      <div className="page-security">
        <Row className="grid-row table">
          <Card title="系统安全">
            <Form>
              <FormItem label="会员帐号" {...formItemLayout}>
                <span className="ant-form-text">1223388888</span>
              </FormItem>

              <FormItem label="登录密码" {...formItemLayout} colon={false}>
                <div className="setting-box">
                  <span className="setting-type">已设置</span>
                  <Link className="setting-link" to="/dashboard/system/changepwd">变更</Link>
                </div>
              </FormItem>

              <FormItem label="手机号" {...formItemLayout} colon={false}>
                <div className="setting-box">
                  <span className="setting-type">未绑定</span>
                  <Link className="setting-link" to="/dashboard/system/setphone">绑定</Link>
                </div>
              </FormItem>
              
              <FormItem label="提现帐户" {...formItemLayout} colon={false}>
                <div className="setting-box">
                  <span className="setting-type">已设置</span>
                  <Link className="setting-link" to="" disabled>查看</Link>
                </div>
              </FormItem>
            </Form>
          </Card>
        </Row>
      </div>
    );
  }
}
