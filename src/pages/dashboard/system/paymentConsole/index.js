import React, {Component} from 'react' ;
import { Row, Card } from 'antd';
import PaymentConsoleActionTable from './paymentConsoleActionTable';
import PaymentConsoleBankTable from './paymentConsoleBankTable'; 
import PaymentConsoleAlipayTable from './paymentConsoleAlipayTable'; 
import './index.scss';

export default class PaymentConsole extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-payment-console">
        <Row className="grid-row table">
          <Card title="功能开关">
            <PaymentConsoleActionTable />
          </Card>
        </Row>

        <Row className="grid-row table">
          <Card title="支付配置">
            <PaymentConsoleBankTable />
            <PaymentConsoleAlipayTable />
          </Card>
        </Row>
      </div>
    );
  }
}
