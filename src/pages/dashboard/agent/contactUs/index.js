import React, {Component} from 'react' ;
import {Switch, Route} from 'react-router-dom' ;
import './index.scss';
import {Radio} from 'antd';
const RadioGroup = Radio.Group;

export default class contactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            desc: '',
        };
    }

    changeText(el) {
        if(el.target.value.length<=100) {
            this.setState({
                desc: el.target.value,
            })
        }
    }

    render() {
        let { desc } = this.state;
        return <div className='contactUs'>
            <div className='title'>联系我们</div>
            <div className='content'>
                <p>请选择您想反馈的问题点</p>
                <div className='choose'>
                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                        <Radio className='radio' value={1}>功能异常：功能故障或不可用</Radio>
                        <Radio className='radio' value={2}>产品建议：难用，我有建议</Radio>
                        <Radio className='radio' value={3}>其它问题</Radio>
                    </RadioGroup>
                </div>
                <div className='input_area'>
                    <textarea placeholder='请补充说明' rows={6} value={desc} maxLength={100} onChange={el=>{this.changeText(el) }} />
                    <label>字数限制100字</label>
                </div>
                <button>提交</button>
            </div>
        </div>
    }
}
