import React, {Component} from 'react' ;
import Side from './side' ;
import MainBar from './mainbar' ;
import './index.scss' ;

class Layout extends Component {
    render() {
        const {
            children,
        } = this.props;
        return (
            <section className='app'>
                <Side />
                <div className='main'>
                    <MainBar />
                    <div className='page'>
                        {children && React.cloneElement(children)}
                    </div>
                </div>
            </section>
        )
    }
}

export default Layout;
