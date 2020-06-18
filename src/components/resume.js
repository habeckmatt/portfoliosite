import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Certification from './certification'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://www.shareicon.net/data/128x128/2016/02/19/721776_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Matt Habeck</h2>
                        <h4 style={{color: 'grey'}}>Aspiring Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor at 
                            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
                            classical literature, discovered the undoubtable source</p>
                        <hr style={{borderTop: '3px solid #833fb2',width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker Way Meno Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123)456-7890</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                        startYear={2012}
                        endYear={2016}
                        schoolName="Univeristy of Wisconsin-La Crosse"
                        schoolDescription="This is my school!"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2016}
                            endYear="Present"
                            jobName="QA Analyst"
                            jobDescription="This is a cool job!"                      
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Certifications</h2>

                        <Certification 
                            startYear={2018}
                            endYear="Present"
                            certName="Associate of ISC2"
                            certDescription="This is my sweet certification!"
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;