import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import util from '@util';
import {admin, agent} from './menus';

const mapMenusChildren =(menus)=>{
    return menus.map((it,index)=>(
        <div className='children' key={index}>
            <div className='children-item'><NavLink to={it.pathname}>{it.name}</NavLink></div>
        </div>
    ))
}

const mapMenus = (menus)=>{
    return menus.map((it,index)=>(
        <div className='item' key={index}>
            <div className='top'><NavLink to={it.pathname} exact={it.exact}>{it.name}</NavLink></div>
            {it.children && mapMenusChildren(it.children)}
        </div>
    ))
}

class Side extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const isAdmin = util.isAdmin();
        const isAgent = util.isAgent();
        let menus = [];
        if(isAdmin) menus = admin;
        if(isAgent) menus = agent;

        return (
            <div className='side'>
                <h1>百万代理推广平台<span>&lt;&lt;</span></h1>
                <div className='side-menus'>
                    { mapMenus(menus) }
                </div>
            </div>
        )
    }
}

export default Side;
