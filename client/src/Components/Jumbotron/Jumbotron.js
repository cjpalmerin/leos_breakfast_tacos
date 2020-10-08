import React from 'react';
import './Jumbotron.css';

import Background from '../../images/leos-v2-02.png'
import Logo from '../../images/leos-v2-03.png'


export class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron-food">
                <img src={Logo} className='jumbologo' alt='leos breakfast tacos'></img>
                <img src={Background} className='jumboimage' alt='leos breakfast tacos' />
            </div>
        )
    }
}
