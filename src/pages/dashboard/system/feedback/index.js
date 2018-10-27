import React, {Component} from 'react' ;
import PropTypes from 'prop-types';
import {connect} from 'react-redux' ;
import { Row, Card, Form, Input, Table, Button, DatePicker, Modal } from 'antd';
import FeedbackSearchForm from './feedbackSearchForm';
import FeedbackForm from './feedbackForm';
import util from '@util';

// actions
import { getFeedbackList, getFeedbackByID } from '@action/feedback';

import './index.scss'

const { Item: FormItem } = Form;
class Feedback extends Component {

  static propTypes = {
    feedback: PropTypes.object.isRequired,
    getFeedbackList: PropTypes.func.isRequired,
    getFeedbackByID: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const queryData = this._getQueryData(props.location.search);

    this.state = {
      openModal: false,
      isEditModal: false,
      feedbackObj: {},
      queryObj: {
        id: queryData.id,
        type: queryData.type,
        status: queryData.status,
        time: queryData.time,
      }
    }

    this._closeModal = this._closeModal.bind(this);
    this._openModal = this._openModal.bind(this);
    this._getFeedbackByID = this._getFeedbackByID.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.replyOnSubmit = this.replyOnSubmit.bind(this);

    this.COLUMNS = [{
      title: '代理ID',
      dataIndex: 'id',
      key: 'id',
    },{
      title: '代理昵称',
      dataIndex: 'name',
      key: 'name',
    },{
      title: '代理帐号',
      dataIndex: 'account',
      key: 'account',
    },{
      title: '建议类型',
      dataIndex: 'type',
      key: 'type',
    },{
      title: '反馈内容',
      dataIndex: 'feedback',
      key: 'feedback',
    },{
      title: '创建时间',
      dataIndex: 'time',
      key: 'time',
    },{
      title: '回复状态',
      dataIndex: 'status',
      key: 'status',
      className: 'table-action',
      render: (status, data) => {
        const { id: dataID } = data;
        const spanText = status ? '查看' : '回复';
        const _onClick = () => this._getFeedbackByID(dataID);

        return(
          <span onClick={_onClick}>{spanText}</span>
        );
      },
    },{
      title: '设备讯息',
      dataIndex: 'message',
      key: 'message',
    }];
  }

  componentDidMount() {
    this.props.getFeedbackList(this.state.queryObj);
  }

  componentWillReceiveProps(nextProps) {
    const {
      feedback: { feedbackObj },
      location: { search },
    } = this.props;
    const {
      feedback: { feedbackObj: nextFeedbackObj },
      location: { search: nextSearch },
    } = nextProps;

    if (search !== nextSearch) {
      const queryData = this._getQueryData(nextSearch);
      const queryObj = {
        id: queryData.id,
        type: queryData.type,
        status: queryData.status,
        time: queryData.time,
      }

      this.setState({
        queryObj,
      }, () => this.props.getFeedbackList(queryObj));
    }

    if (feedbackObj.id !== nextFeedbackObj.id) {
      const type = nextFeedbackObj.status ? 'view' : 'reply';
      this._openModal(type);
    }
  }

  _getQueryData(search) {
    const params = search.replace(/\?/g, '');
    return util.parse(params);
  }

  _openModal(type) {
    this.setState({
      openModal: true,
      isEditModal: type === 'reply',
    });
  }

  _closeModal() {
    this.setState({
      openModal: false,
    });
  }

  _getFeedbackByID(id) {
    this.props.getFeedbackByID(id);
  }

  onSearch(searchData) {
    const { pathname } = this.props.location;
    const params = util.stringify(searchData);

    this.props.history.push(`${pathname}?${params}`);
  }

  replyOnSubmit(data) {
    console.log(data);
  }

  render() {
    const { COLUMNS, TABLE_DATA } = this;
    const { feedback } = this.props;
    const { openModal, isEditModal, queryObj } = this.state;
    const { feedbackList, feedbackObj } = feedback;

    return (
      <div className="page-feedback">
        <Row className="grid-row filter">
          <Card title="代理反馈">
            <FeedbackSearchForm data={queryObj} onSearch={this.onSearch} />
          </Card>
        </Row>

        <Row className="grid-row table">
          <Card>
            <h4 className="table-title">建议反馈列表</h4>

            <Table columns={COLUMNS} dataSource={feedbackList} pagination={true} bordered />
          </Card>
        </Row>

        <Modal
          title="反馈回复"
          visible={openModal}
          closable={false}
          destroyOnClose={true}
          footer={false}
          onCancel={this._closeModal}
        >
          <FeedbackForm
            isEdit={isEditModal}
            closeModal={this._closeModal}
            feedbackObj={feedbackObj}
            onSubmit={this.replyOnSubmit}
          />
        </Modal>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    feedback: state.feedback,
  }
}, {
  getFeedbackList,
  getFeedbackByID,
})(Feedback);
