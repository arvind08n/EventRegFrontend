import React, {Component} from 'react';
import axios from 'axios';
import {Jumbotron, Table} from 'reactstrap';
import UserCard from './UserCardComponent';

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

class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: this.props.match.params.eventId,
            event : {}
        }
    }

    componentDidMount(){
        axios
            .get('http://localhost:8082/admin/dashboard/' + this.state.eventId + '/eventreg')
            .then(res => {
                this.setState({
                    event: res.data
                })
            })
            .catch(err => {
                console.log('Error from user list');
            })
        
    };


    render(){
        const event = this.state.event;
        
        let users = event.eventreg;

        function selectSelf(user){
            return user.type === "self";
        }

        let selectList;

        

        console.log(users);
        let userList;

        if(!users){
            userList = "There is no user records!";
        }
        else{
            
            selectList = users.filter((user,k) => {
                
                return user.type === "Self";
            });
            console.log(selectList.length);
            userList = users.map((user, k) => 

                <UserCard user={user} key={k} />

            );
        }
        
        return(
            <div>
                <Jumbo />
                <div className="container">
                <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                    <th>Registration Id</th>
                    <th>Full Name</th>
                    
                    </tr>
                </thead>
                </Table>
                    {userList}
                </div>
            </div>
        );
    }


}

export default UserList;