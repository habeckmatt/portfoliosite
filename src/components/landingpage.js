import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Headshot from './headshot.jpg'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={Headshot}
                        alt="avatar" 
                        className="avatar-img" />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | Python</p>
                        
                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;