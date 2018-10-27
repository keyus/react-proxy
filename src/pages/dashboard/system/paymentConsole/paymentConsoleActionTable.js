import React, {Component} from 'react' ;
import PropTypes from 'prop-types';
import { Table, Tag, Switch } from 'antd';
import './index.scss';

export default class PaymentConsoleActionTable extends Component {
  
  constructor(props) {
    super(props);
    
    this.renderAction = this.renderAction.bind(this);

    this.COLUMNS = [{
      title: '功能描述',
      key: 'action',
      dataIndex: 'action',
      width: '50%',
      render: (action) => this.renderAction(action),
    },{
      title: '当前状态',
      key: 'text',
      className: 'table-text-col',
      dataIndex: 'text',
      width: '50%',
    }];
  }

  renderAction(action) {
    const { title, status, tag, switchClick } = action;
    
    return(
      <div className="table-col-action">
        <span>{title}</span>
        
        <div className="action-box">
          {tag &&
            <Tag color="#108ee9">{tag}</Tag>
          }
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            checked={status}
            onChange={switchClick}
          />
        </div>
      </div>
    );
  }

  //test function
  _onClick = (id) => {
    console.log(id);
    return true;
  }

  render() {
    const { COLUMNS } = this;

    // test data
    const tableData = [{
      key: '1',
      action: {
        title: '结算开关',
        status: false,
        tag: null,
        switchClick: () => this._onClick(1),
      },
      text: '正常运行中',
    }, {
      key: '2',
      action: {
        title: '系统维护开关',
        status: true,
        tag: null,
        switchClick: null,
      },
      text: '正常运行中',
    },{
      key: '3',
      action: {
        title: '支付宝提现切换开关',
        status: false,
        tag: '老兑换',
        switchClick: null,
      },
      text: '新兑换',
    },{
      key: '4',
      action: {
        title: '银行卡',
        status: false,
        tag: null,
        switchClick: null,
      },
      text: '银行卡提现已开启',
    }]

    return (
      <Table columns={COLUMNS} dataSource={tableData} pagination={false} bordered />
    );
  }
}
