import React from 'react';
import './Music.css';

import AcousticGuy from '../../images/photo-1568480046613-6e3b671c66d2.jpeg'
import AcousticGirl from '../../images/photo-1481653183412-e084e4affe46.jpeg'

const artists = {
    1: {
        name: "Daryl Whitney",
        date: "October 11, 2020",
        genre: "Acoustic",
        description: "Acoustic Indie Lofi Jazz mastermind, Daryl Whitney of the Wisconsin punk metal group, Quotient 14, incorporates the sounds of all his favorite influences into one, solidified wall of sound.",
        facebook: 'facebook.com',
        instagram: 'instagram.com',
        picture: { AcousticGuy }
    },
    2: {
        name: "April Lovigne",
        date: "October 12, 2020",
        genre: "Acoustic",
        description: "April Lovigne hails from Toronto, Canada and brings with her beautifully orchestrated acoustic pop with jazzy, upbeat vocal melodies. You definitely don't want to miss out on this one.",
        facebook: 'www.facebook.com',
        instagram: 'www.instagram.com',
        picture: { AcousticGirl }
    }
}

export class Music extends React.Component {
    render() {
        return (
            <div className="music">
                <h2>Live Music</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-2-m">
                            <img className="musician" src={AcousticGuy} alt='music artist' />
                        </div>
                        <div className="col-4-m musician-info">
                            <h4 className="artist-name">{artists[1].name}</h4>
                            <h5>{artists[1].genre} | {artists[1].date}</h5>
                            {/* <div className="musician-description"><p>{artists[1].description}</p></div> */}
                        <a href={artists[1].facebook} target="_blank">Facebook</a>
                        <br />
                        <a href={artists[1].instagram} target="_blank">Instagram</a>
                        </div>
                        <div className="col-6-m">
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
