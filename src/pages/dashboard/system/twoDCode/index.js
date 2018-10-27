import React, {Component} from 'react' ;
import { Row, Card, Col, Upload, Icon, Table } from 'antd';
import SLTable from '@components/SLTable';
import './index.scss'

const { Dragger } = Upload;

export default class TwoDCode extends Component {
  constructor(props) {
    super(props);

    this.pageChange = this.pageChange.bind(this);

    this.COLUMNS = [{
      title: '代理ID',
      className: 'column-id',
      dataIndex: 'id',
      key: 'id',
    }];

    this.TABLE_DATA = [{
      key: '1',
      id: '015',
    }];
    
    this.state = {
      pagination: {
        current: 1,
        total: 100,
        pageSize: 10
      },
      fileList: [],
    }
  }

  pageChange() {
    return true;
  }

  render() {
    const { COLUMNS, TABLE_DATA } = this;
    const { pagination } = this.state;
    const uploadConfig = {
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
    }

    console.log(this.state.fileList);

    return (
      <div className="page-twodcode">
        <Row className="grid-row file">
          <Card title="二维码查询代理渠道">
            <Col span={12}>
              <p className="upload-text">
                <span>你可以尝试拖曳文件，使用者ＱＱ截屏工具，然后激活窗口后黏贴，或者点击添加图片按钮</span>
              </p>
            </Col>

            <Col span={12}>
              <Dragger className="upload-Dragger" {...uploadConfig}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-hint">请点击或拖曳二维码文件到此区进行上传</p>
              </Dragger>
            </Col>
          </Card>
        </Row>

        <Row className="grid-row table">
          <Card>
            <h3>查询结果</h3>
            <Table columns={COLUMNS} dataSource={TABLE_DATA} pagination={false} bordered />
          </Card>
        </Row>
      </div>
    );
  }
}
