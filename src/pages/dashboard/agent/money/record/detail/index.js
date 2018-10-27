import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'antd';
import './index.scss'

export default class Detail extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        onCancel: PropTypes.func,
    }
    state = {
        visible: true,
        loading: false
    }

    static getDerivedStateFromProps(props){
        return {
            visible: props.visible
        }
    }

    handleCancel = () => {
        this.props.onCancel && this.props.onCancel();
    }

    view = (e) => {
        console.log(e);
    }

    render() {
        return (
            <Modal
                className='record-detail'
                title="代理详情"
                width={870}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                footer={[
                    <Button key="view" type="primary" loading={this.state.loading} onClick={this.view}>
                        查看渠道
                    </Button>
                ]}
            >
                <table className='table-record table-record-detail'>
                    <tbody>
                        <tr>
                            <td width="24%">代理ID</td>
                            <td width="24%">73954</td>
                            <td>订单ID</td>
                            <td width="24%">4123123</td>
                        </tr>
                        <tr>
                            <td>总充值</td>
                            <td>73954</td>
                            <td>总兑换金额</td>
                            <td>4123123</td>
                        </tr>
                        <tr>
                            <td>税收</td>
                            <td>73954</td>
                            <td>总收入</td>
                            <td>4123123</td>
                        </tr>
                        <tr>
                            <td>总注册量</td>
                            <td>73954</td>
                            <td>总提现金额</td>
                            <td>4123123</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='max-text'>
                                    <span>收益比例</span>
                                    <span>(现在/最高)</span>
                                </div>
                            </td>
                            <td>73954</td>
                            <td>账户余额</td>
                            <td>4123123</td>
                        </tr>
                        <tr>
                            <td>本次提现金额</td>
                            <td>73954</td>
                            <td>信息</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </Modal>
        )
    }
}
