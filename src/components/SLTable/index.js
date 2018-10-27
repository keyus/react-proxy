import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

/*
1. 引用这个组件必须传入3个值
columns: array，代表table的标题
dataSource: array，代表table的data
rowKey: string，代表唯一值

2. 若需在每个row的第一个column显示checkbox功能必须传入以下
onSelectRowChange: 方法，当勾选或取消勾选时，会回调选中的rowKey array

3. 若需显示分页功能则需传入
page: object，需包含以下3个属性
        current: 当前页
        total: 总笔数
        pageSize: 每页显示笔数
onShowSizeChange: 方法，使用者更改每页显示笔数的回调函数
onPageChange: 方法，使用者更改页数的回调函数
每次换页需重新调一次接口，取分页的data与分页的data

待优化
希望能将分页功能的回调函数封装在这个组件里

*/
export default class SLTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,

            selectedRowKeys: []
        }
    }

    onShowSizeChange = (current, pageSize) => {
        this.setState({
            pageSize: pageSize
        })
        this.props.onShowSizeChange(current, pageSize);
        // console.log(pageSize)
    }

    selectRow = record => {
        // const selectedRowKeys = [...this.props.selectedRowKeys];
        // if(selectedRowKeys.indexOf(record.key) >= 0){
        //   selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        // }else{
        //   selectedRowKeys.push(record.key)
        // }
    }

    onSelectedRowKeysChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
        if (this.props.onSelectRowChange) {
            this.props.onSelectRowChange(selectedRowKeys)
        }
    }

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange
        }
        return (
            <Table columns={this.props.column}
                dataSource={this.props.data}
                rowKey={this.props.rowKey}
                rowSelection={this.props.onSelectRowChange ? rowSelection : null}
                onSelectRowChange={this.props.onSelectRowChange ? this.props.onSelectRowChange : null}
                bordered={this.props.bordered === false ? false : true}
                // onRow={record => ({
                //   onClick: () => {
                //     this.selectRow(record);
                //   }
                // })}
                pagination={this.props.page ? {  //不传递page对象，就不显示页码工具
                    // pageSize: this.state.pageSize, 
                    showQuickJumper: true, //开启跳到第几页功能 
                    showSizeChanger: true, //开启更改页面显示笔数功能
                    onShowSizeChange: this.onShowSizeChange, //更改显示笔数回调事件
                    onChange: this.props.onPageChange, //页数更改回调事件
                    size: "small",
                    ...this.props.page, //总笔数、当前所在页数、每页显示数量
                    showTotal: total => `共 ${this.props.data.length} 條`
                    // showTotal: total => `共 ${this.props.page.total} 條`
                } : false}
            />
        )
    }
}