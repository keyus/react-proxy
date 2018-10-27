import React, {Component} from 'react' ;
import {Popover, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;
import util from '@util' ;

class MainBar extends Component {

    logout=()=>{
        util.logout();
    }

    render() {
        const content = (
            <ul>
                <li><a onClick={this.logout}>退出</a></li>
            </ul>
        )
        return (
            <div className='main-bar'>
                <ul className='main-bar-list'>
                    <li><a href="javascript:;"><Icon type="rocket" theme="filled" /></a></li>
                    <li><a href="javascript:;"><Icon type="bell" theme="filled" /></a></li>
                    <li>
                        <Popover placement="bottomRight" content={content} trigger="click">
                            <a href="javascript:;" className='user'>
                                Willan
                                <Icon type="caret-down" theme="outlined" />
                            </a>
                        </Popover>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainBar;
