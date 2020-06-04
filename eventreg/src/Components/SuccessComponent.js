import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import axios from 'axios';

const Jumbo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-12">
                        <h1>Welcome</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}
class Success extends Component{
    constructor(props){
        super(props);
        this.state = {
            event: {}
            
        }

    }

    componentDidMount(){
        axios
            .get('http://localhost:8082/user/' + this.state.eventId + '/eventreg')
            .then(res => {
                this.setState({
                    event: res.data
                })
            })
            .catch(err => {
                console.log("Error from eventreg");
            })
    };

    render(){
        const event = this.state.event;
        let Success = event.eventreg[3].uniqueid;
        console.log(Success);
        return(
            <div>
                <Jumbo/>
                
            </div>
        );
    }
}
    



export default Success;