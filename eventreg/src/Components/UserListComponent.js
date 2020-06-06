import React, {Component} from 'react';
import axios from 'axios';
import {Jumbotron, Table} from 'reactstrap';
import UserCard from './UserCardComponent';
import {Bar, Line, Pie } from 'react-chartjs-2';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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

let selectList;

class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: this.props.match.params.eventId,
            event : {},
            
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

        

        
        let groupList;
        let corporateList;
        let othersList;
        console.log(users);
        let userList;

        if(!users){
            userList = "There is no user records!";
        }
        else{
            
            selectList = users.filter((user,k) => {
                
                return user.type === "Self";
            });
            groupList = users.filter((user,k) => {
                return user.type === "Group";
            });
            corporateList = users.filter((user,k) => {
                return user.type === "Corporate";
            });
            othersList = users.filter((user,k) => {
                return user.type === "Others";
            });
            console.log(groupList.length);
            console.log(selectList.length);
            var chartData =  {
                labels: ['Self', 'Group', 'Corporate', 'Others'],
                datasets: [
                    {
                        label: 'No Of Seats',
                        data: [
                            selectList.length,
                            groupList.length,
                            corporateList.length,
                            othersList.length
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)'
    
                        ]
                    }
                ]
            }
            
            userList = users.map((user, k) => 

                <UserCard user={user} key={k} />

            );
        }
        
        return(
            <div>
                <Header />
                <Jumbo />
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="chart">
                                <Bar   
                                    data={chartData}
                                    width={100}
                                    height={50}
                                    options={{
                                    }}
                                />
                            </div>    
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
                        <div className="col-md-2">
                            <h5>Links</h5>
                            
                            <button type="button" class="btn btn-warning btn-circle btn-xl">Self</button> 
                            
                            <button type="button" class="btn btn-secondary btn-circle btn-xl">Group</button>
                            
                            <button type="button" class="btn btn-success btn-circle btn-xl">Corp</button>

                            
                            <button type="button" class="btn btn-success btn-circle btn-xl">Others</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            
        );
    }


}

export default UserList;