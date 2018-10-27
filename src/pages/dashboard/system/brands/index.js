import React, {Component} from 'react' ;
import { Row, Card, Switch, Table } from 'antd';
import './index.scss'

export default class Brands extends Component {
    constructor(props) {
        super(props);

        this.renderAction = this.renderAction.bind(this);
        this.randerBrandSwitch = (status, data) => this.renderAction(status, data.onClickBrandSwitch);
        this.randerPushSwitch = (status, data) => this.renderAction(status, data.onClickPushSwitch); 

        this.COLUMNS = [{
          title: '品牌名称',
          dataIndex: 'name',
          key: 'name',
          width: '34%',
        },{
          title: '品牌开关',
          dataIndex: 'brandStatus',
          key: 'brandStatus',
          width: '33%',
          render: (brandStatus, data) => this.randerBrandSwitch(brandStatus, data),
        },{
          title: '热推开关',
          dataIndex: 'pushStatus',
          key: 'pushStatus',
          width: '33%',
          render: (pushStatus, data) => this.randerPushSwitch(pushStatus, data),
        }];
    }

    handleOnClickBrandSwitch(id) {
      console.log('brand', id);
    }

    handleOnClickPushSwitch(id) {
      console.log('push', id);
    }

    renderAction(status, onClickSwitch) {
      return (
        <Switch checkedChildren="开" unCheckedChildren="关" checked={status} onChange={onClickSwitch} />
      );
    }

    render() {
        const { COLUMNS } = this;

        const tableData = [{
          key: '1',
          id: '1',
          name: 'test',
          brandStatus: true,
          onClickBrandSwitch: () => this.handleOnClickBrandSwitch(1),
          pushStatus: false,
          onClickPushSwitch: () => this.handleOnClickPushSwitch(1),
        },{
          key: '2',
          id: '2',
          name: 'test2',
          brandStatus: false,
          onClickBrandSwitch: () => this.handleOnClickBrandSwitch(2),
          pushStatus: true,
          onClickPushSwitch: () => this.handleOnClickPushSwitch(2),
        },{
          key: '3',
          id: '3',
          name: 'test3',
          brandStatus: true,
          onClickBrandSwitch: () => this.handleOnClickBrandSwitch(3),
          pushStatus: true,
          onClickPushSwitch: () => this.handleOnClickPushSwitch(3),
        }];

        return (
            <div className="page-brands">
                <Row className="grid-row table">
                    <Card title="品牌管理">
                      <Table columns={COLUMNS} dataSource={tableData} pagination={false} bordered />
                    </Card>
                </Row>
            </div>
        );
    }
}
