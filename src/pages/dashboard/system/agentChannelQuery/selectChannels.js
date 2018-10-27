import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Select } from 'antd';
const Option = Select.Option;


class InputId extends Component {


    constructor(props) {
        super(props);

        this.state = {
            channel: props.value.channel || '渠道1'
        };
    }

    handleChannelChange = (e) => {
        const channel = e

        this.setState({ channel });
        this.triggerChange({ channel });
    }
    
    triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }
    
    render() {
        const state = this.state;
        return (
            <span>
                <Select
                    value={state.channel}
                    onChange={this.handleChannelChange}
                >
                    <Option value="渠道1">渠道1</Option>
                    <Option value="渠道2">渠道2</Option>
                    <Option value="渠道3">渠道3</Option>
                </Select>
            </span>
        );
    }
}

InputId.propTypes = {

};

export default InputId;