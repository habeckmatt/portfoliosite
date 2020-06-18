import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Headshot from './headshot.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Matt Habeck</h2>
                        <img 
                            src={Headshot}
                            alt="avatar"
                            style={{height: '250px'}}
                            className="contact-img"
                        />
                        <p style={{ width: '55%', margin: 'auto', paddingTop:'1em'}}>
                        It is a long established fact that a reader will be distracted by 
                        the readable content of a page when looking at its layout.</p>


                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (123)456-7890 </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', Ali:'left'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        someone@example.com </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
