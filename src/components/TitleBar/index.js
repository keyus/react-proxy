import React from 'react';
import PropTypes from 'prop-types';
import iconAsk from '@images/icon-ask.png' ;
import './index.scss'

function TitleBar (props) {
    const { title, icon, className, style} = props;
    return (
        <div className={`title-bar ${className}`} style={style}>
            <h1>{title}</h1>
            { icon && <img src={icon} />}
        </div>
    )
}
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};
TitleBar.defaultProps = {
    icon: iconAsk,
};

export default TitleBar;
