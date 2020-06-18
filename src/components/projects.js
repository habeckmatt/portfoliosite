import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Background from './react.png'

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(

                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450',Height:'250', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
                            Shopping List App
                            </CardTitle>
                        <CardText className="cardText">

                        The Shopping List application was created using MongoDB, Express, React, and Node. A user is able to add or
                        remove items from their personal shopping list. I learned how to set up
                        a CRUD application and how to set up MongoDB.
            
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/habeckmatt/MERN_Shopping_List" target="_blank">GitHub</Button>
                            <Button colored 
                            href="https://powerful-taiga-64428.herokuapp.com/"
                            target="_blank">Live Demo</Button>
                        </CardActions>
                        {/* <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${Background})`, 
                            backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            Weather API App
                        </CardTitle>
                        
                        <CardText className="cardText">
                        The Weather application allows a user to search for a City and a Country
                        to recieve data about the weather. This data includes temperature,
                        humidity, and a description of the current conditions. The data is pulled 
                        via a Weather API.
                        </CardText>
                        <CardActions border>
                            <Button colored 
                                href="https://github.com/habeckmatt/weather"
                                target="_blank"
                            >
                            GitHub
                            </Button>
                            <Button colored
                                href="https://priceless-swanson-c93921.netlify.app/"
                                target="_blank"
                            >
                            Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <div>
                        <CardTitle className="card-title" style={{color: '#fff', height: '176px', 
                            backgroundImage: `url(${Background})`, backgroundSize: 'cover', 
                            backgroundPosition: 'center', verticalAlign:'bottom'}} >
                            Expense Tracker App
                        </CardTitle>
                        </div>
                        <CardText className="cardText">
                        The Expense Tracker enables a user to keep track of their expenses. It documents income and expenses which are denoted
                        by the '+' or '-' buttons. The user can also denote an amount for either option.
                        </CardText>
                        <CardActions border>
                            <Button colored 
                                href="https://github.com/habeckmatt/weather"
                                target="_blank"
                            >
                            GitHub
                            </Button>
                            <Button colored
                                href="https://eloquent-wiles-c7e2a5.netlify.app/"
                                target="_blank"
                            >
                            Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Python</h1></div>
            )
        }
    }
    
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                    

            </div>
        )
    }
}

export default Projects;