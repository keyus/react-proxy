import React, {Component} from 'react' ;
import './index.scss'

export default class NoMatch extends Component {
    render() {
        return (
            <div className='container-404'>
                <div className='container-404-center'>
                    <header>
                        <h1>oops!</h1>
                        <p className="section-subtitle">Something went wrong. The page you are looking for is gone</p>
                    </header>
                    <p className='container-404-tag'>404</p>
                </div>
            </div>
        )
    }
}
