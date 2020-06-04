import React from 'react';
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

const Success = (props) => {
    return(
        <div>
            <Jumbo />
            
        </div>
    );
}


export default Success;