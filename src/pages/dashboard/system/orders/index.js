import React, {Component} from 'react' ;
import { Row, Card, Form, Input, Table, Button, DatePicker, Modal } from 'antd';
import './index.scss'

const { Item: FormItem } = Form;

export default class Orders extends Component {
  constructor(props) {
    super(props);

    this.onClickRefund = this.onClickRefund.bind(this);

    this.state = {
      openModal: false,
      isEditModal: false,
    }

    this.COLUMNS = [{
      title: '訂單ID',
      dataIndex: 'id',
      key: 'id',
    },{
      title: '代理ID',
      dataIndex: 'uid',
      key: 'uid',
    },{
      title: '兌換類型',
      dataIndex: 'type',
      key: 'type',
    },{
      title: '兌換金額(元)',
      dataIndex: 'money',
      key: 'money',
    },{
      title: '創建時間',
      dataIndex: 'createTime',
      key: 'createTime',
    },{
      title: '修改時間',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },{
      title: '成功時間',
      dataIndex: 'successTime',
      key: 'successTime',
    },{
      title: '兌換狀態',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const statusTxt = status ? '成功' : '失敗';

        return (
          <span>{statusTxt}</span>
        );
      },
    },{
      title: '審核信息',
      dataIndex: 'verifyMsg',
      key: 'verifyMsg',
    },{
      title: '交易流水號',
      dataIndex: 'serialNum',
      key: 'serialNum',
    },{
      title: '支付帳號姓名',
      dataIndex: 'name',
      key: 'name',
    },{
      title: '支付帳號',
      dataIndex: 'account',
      key: 'account',
    },{
      title: '支付訂單號',
      dataIndex: 'orderNum',
      key: 'orderNum',
    },{
      title: '操作',
      dataIndex: 'status',
      key: 'action',
      className: 'table-action',
      render: (status, data) => {
          const { id: dataID } = data;

          if (status) {
            return null;
          }

          const _onClick = () => this.onClickRefund(dataID);

          return(
              <span onClick={_onClick}>退款</span>
          );
      },
    },{
      title: '设备讯息',
      dataIndex: 'device',
      key: 'device',
    }];

    // test data
    this.TABLE_DATA = [{
      key: '1',
      id: '015',
      uid: '66666',
      type: '其他反饋',
      money: '1,000',
      createTime: '2018-08-11 15:30',
      updateTime: '2018-08-15 15:30',
      successTime: '2018-08-15 15:30',
      status: true,
      verifyMsg: 'XXXXXXXXXXXXX',
      serialNum: '112255',
      name: '測試01',
      account: 'a000000001',
      orderNum: 'o0000001',
      device: 'XXXXXXXXXXXXXXXXXXXX',
    }, {
      key: '2',
      id: '016',
      uid: '66667',
      type: '其他反饋',
      money: '1,005',
      createTime: '2018-08-11 15:30',
      updateTime: '2018-08-15 15:30',
      successTime: null,
      status: false,
      verifyMsg: null,
      serialNum: '112255',
      name: '測試01',
      account: 'a000000001',
      orderNum: 'o0000001',
      device: 'XXXXXXXXXXXXXXXXXXXX',
    }];
        
  }

  onClickRefund(orderID) {
    return true;
  }

  render() {
    const { COLUMNS, TABLE_DATA } = this;
    const { openModal, isEditModal } = this.state;

    return (
      <div className="page-orders">
        <Row className="grid-row filter">
          <Card title="代理反馈">
            <Form layout="inline">
              <FormItem label="兑换订单查询">
                <Input placeholder="请输入订单号或支付号"/>
              </FormItem>
              
              <FormItem>
                <Button type="primary" htmlType="button">搜索</Button>
              </FormItem>
            </Form>
          </Card>
        </Row>

        <Row className="grid-row table">
          <Card>
            <h4 className="table-title">建议反馈列表</h4>

            <Table columns={COLUMNS} dataSource={TABLE_DATA} pagination={false} bordered />
          </Card>
        </Row>
        </div>
    );
  }
}
