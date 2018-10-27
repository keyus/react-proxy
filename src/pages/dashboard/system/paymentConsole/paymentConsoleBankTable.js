import React, {Component} from 'react' ;
import PropTypes from 'prop-types';
import { Table, InputNumber, Switch } from 'antd';
import './index.scss';

export default class PaymentConsoleBankTable extends Component {
  
  constructor(props) {
    super(props);

    this.renderAction = this.renderAction.bind(this);

    this.COLUMNS = [{
      title: '银行卡配置',
      key: 'actionLeft',
      dataIndex: 'actionLeft',
      width: '50%',
      colSpan: 2,
      render: (actionLeft) => this.renderAction(actionLeft),
    },{
      key: 'text',
      key: 'actionRight',
      dataIndex: 'actionRight',
      width: '50%',
      colSpan: 0,
      render: (actionRight) => this.renderAction(actionRight),
    }];
  }

  onChange(value) {
    console.log(value);
  }

  renderAction(action) {
    const { title, status, value, unit, handleOnclick } = action;

    if (!title) {
      return (<span></span>);
    }

    const inputBoxClass = value ? 'input-box' : '';
    const inputUnit = unit || '';
    const formatter = value => `${value}${inputUnit}`;
    const parser = value => value.replace(inputUnit, '');
    
    return(
      <div className={`table-col-action ${inputBoxClass}`}>
        <span>{title}</span>
        
        {value &&
          <div className="action-box">
            <InputNumber
              defaultValue={0}
              min={0}
              formatter={formatter}
              parser={parser}
              onChange={this.onChange}
            />
            <span className="edit-btn" onClick={handleOnclick}>修改</span>
          </div>
        }

        {!value &&
          <div className="action-box">
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              checked={status}
              onChange={handleOnclick}
            />
          </div>
        }
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
      actionLeft: {
        title: '銀行卡限制開關',
        status: false,
        handleOnclick:() => this._onClick(1),
      },
      actionRight: {
        title: '銀行卡每日操作數量（提交＋重新提交）',
        value: 1000,
        handleOnclick:() => this._onClick(1),
      },
    },{
      key: '2',
      actionLeft: {
        title: '銀行卡提現最小限額',
        value: 10000,
        handleOnclick:() => this._onClick(1),
      },
      actionRight: {
        title: '銀行卡提現最大限額',
        value: 100000,
        handleOnclick:() => this._onClick(1),
      },
    },{
      key: '3',
      actionLeft: {
        title: '銀行卡提現間隔',
        value: 1000,
        unit: '秒',
        handleOnclick:() => this._onClick(1),
      },
      actionRight: {
        title: null,
      },
    },];

    return (
      <Table columns={COLUMNS} dataSource={tableData} pagination={false} bordered />
    );
  }
}
