import React, {Component} from 'react' ;
import PropTypes from 'prop-types';
import moment from 'moment'; 
import { Form, Input, Button, DatePicker } from 'antd';

const { Item: FormItem } = Form;

export default class FeedbackSearchForm extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    
    const { data } = props;
    
    this.state = {
      id: data.id,
      type: data.type,
      status: data.status,
      time: data.time,
    };

    this.inputOnChange = this.inputOnChange.bind(this);
    this.idOnChange = (e) => this.inputOnChange('id', e.target.value);
    this.typeOnChange = (e) => this.inputOnChange('type', e.target.value);
    this.statusOnChange = (e) => this.inputOnChange('status', e.target.value);
    this.timeOnChange = (date, dateString) => this.inputOnChange('time', dateString);
    this.handleOnSearch = this.handleOnSearch.bind(this);
  }

  inputOnChange(key, data) {
    const newObj = Object.assign({}, this.state);
    newObj[key] = data;

    this.setState({
      ...newObj,
    });
  }

  handleOnSearch() {
    const { id, type, status, time } = this.state;
    this.props.onSearch({
      id: id || '',
      type: type || '',
      status: status || '',
      time: time || '',
    });
  }

  render() {
    const { id, type, status, time } = this.state;
    const dateTime = time ? moment(time) : null;

    return (
      <Form layout="inline">
        <FormItem label="代理ID">
          <Input className="filter-input" onChange={this.idOnChange} value={id}/>
        </FormItem>
        
        <FormItem label="建議類型">
          <Input className="filter-input" onChange={this.typeOnChange} value={type}/>
        </FormItem>
        
        <FormItem label="回復狀態">
          <Input className="filter-input" onChange={this.statusOnChange} value={status}/>
        </FormItem>

        <FormItem label="時間">
          <DatePicker
            showTime
            className="filter-input"
            format="YYYY-MM-DD HH:mm:ss"
            onChange={this.timeOnChange}
            value={dateTime}
          />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="button" onClick={this.handleOnSearch}>搜索</Button>
        </FormItem>
      </Form>
    );
  }
}
