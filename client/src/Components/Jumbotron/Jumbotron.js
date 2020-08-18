import React from 'react';
import './Jumbotron.css';

import Background from '../../images/photo-1579888944880-d98341245702.jpeg'

export class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron-food">
                <img src={Background} className='jumboimage' alt='leos breakfast tacos' />
            </div>
        )
    }
}
