import React from 'react';
import './OSeparator.css';

import oImage from '../../images/leos_Whole_Note_192x192.png'

export class OSeparator extends React.Component {
    render() {
        return (
            <div className="oseparator">
                <img src={oImage} className='whole-note' alt='LEOS' />

            </div>
        )
    }
}
