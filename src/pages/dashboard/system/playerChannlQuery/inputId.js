import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input  } from 'antd';


class InputId extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.value.id || '',
        };
    }

    handleIdChange = (e) => {
        const id = e.target.value
        const reg = /^\d+$/;

        if(!reg.test(id) && id !== '') return;

        this.setState({ id });
        this.triggerChange({ id });
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
                <Input
                    type="text"
                    value={state.id}
                    onChange={this.handleIdChange}
                />
            </span>
        );
    }
}

InputId.propTypes = {

};

export default InputId;