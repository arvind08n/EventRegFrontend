import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';

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

    }

    render(){
        return(
            <div>
                <Jumbo/>
            </div>
        );
    }
}
    



export default Success;