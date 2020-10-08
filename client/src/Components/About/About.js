import React from 'react';
import './About.css';

export class About extends React.Component {
    render() {
        return (
            <div className="diagonal">
                <div className="about">
                    <hr />
                    <h2>About <span class='italics'> LEO'S </span></h2>
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate.</p>
                    <br />
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                    <br />
                        <br />
                        <a className="about-button">Read the Full Story Here &gt;</a></p>
                        <hr />

                </div>
            </div>
        )
    }
}
