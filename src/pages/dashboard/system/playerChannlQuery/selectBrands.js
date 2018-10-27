import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Select  } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


class InputId extends Component {

    constructor(props) {
        super(props);

        this.state = {
            brand: props.value.brand || '',
        };
    }

    handleBrandChange = (e) => {
        const brand = e

        this.setState({ brand });    
        this.triggerChange({ brand });
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
                    value={state.brand}
                    onChange={this.handleBrandChange}
                >
                    <Option value="品牌1">品牌1</Option>
                    <Option value="品牌2">品牌2</Option>
                    <Option value="品牌3">品牌3</Option>
                </Select>
            </span>
        );
    }
}

InputId.propTypes = {

};

export default InputId;