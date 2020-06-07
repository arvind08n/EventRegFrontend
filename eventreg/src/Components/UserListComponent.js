import React, {Component} from 'react';
import axios from 'axios';
import {Jumbotron, Table, Modal, Container} from 'reactstrap';
import UserCard from './UserCardComponent';
import {Bar, Line, Pie } from 'react-chartjs-2';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import TypeList from './TypeListComponent';

var selfno, groupno, corpno, otherno;

const Jumbo = () => {
    return(
        <Jumbotron className="jumbotron">
            <div className="container">
                <div className="row row-header">
                <div className="col-12 col-sm-1">
                        <i className="fa fa-dashboard fa-3x " aria-hidden="true" ></i>
                        
                    </div>
                    
                <div className="col-12 col-sm-11">
                        <h1>Dashboard</h1>
                        
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
            select: null
            
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        axios
            .get(' https://stackhcker.herokuapp.com/admin/dashboard/' + this.state.eventId + '/eventreg')
            .then(res => {
                this.setState({
                    event: res.data
                })
            })
            .catch(err => {
                console.log('Error from user list');
            })
        
    };

    onChange = e => {
        this.setState({ select: e.target.value });
    }

    render(){
        const event = this.state.event;
        
        let users = event.eventreg;

        

        var selectList;        
        var groupList;
        let corporateList;
        let othersList;
        let userList;
        let selff;
        let groupp;
        let corpp;
        let otherr;
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
            
            selfno = selectList.length;
            groupno = groupList.length;
            corpno = corporateList.length;
            otherno = othersList.length;

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
            console.log(selectList);

            
            selff = selectList.map((type, k) => 

                <TypeList type={type} key={k} />

            );
            
            groupp = groupList.map((type, k) => 

                <TypeList type={type} key={k} />

            );
            
            corpp = corporateList.map((type, k) => 

                <TypeList type={type} key={k} />

            );
            
            otherr = othersList.map((type, k) => 

                <TypeList type={type} key={k} />

            );
            
            
            userList = users.map((user, k) => 

                <UserCard user={user} key={k} />

            );
            

            console.log(this.state.select);
            
        }
        console.log(selectList);
        if(this.state.select === "self"){
            return(
            <div>
                <Jumbo />
                <div className="row">
                <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h3 className="tex radius"><i className="fa fa-registered" aria-hidden="true" style={{marginRight: '7px'}}></i>Registered Users(Type Self)</h3>
                        <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th> Name </th>
                                
                                    </tr>
                                </thead>
                        </Table>
                        {selff}
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            );
        }
        if(this.state.select === "group"){
            return(
            <div>
                <Jumbo />
                <div className="row">
                <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h3 className="tex radius"><i className="fa fa-registered" aria-hidden="true" style={{marginRight: '7px'}}></i>Registered Users(Type Group)</h3>
                        <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th> Name </th>
                                
                                    </tr>
                                </thead>
                        </Table>
                        {groupp}
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            );
        }
        if(this.state.select === "corporate"){
            return(
            <div>
                <Jumbo />
                <div className="row">
                <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h3 className="tex radius"><i className="fa fa-registered" aria-hidden="true" style={{marginRight: '7px'}}></i>Registered Users(Type Corporate)</h3>
                        <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th> Name </th>
                                
                                    </tr>
                                </thead>
                        </Table>
                        {corpp}
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            );
        }
        if(this.state.select === "others"){
            return(
            <div>
                <Jumbo />
                <div className="row">
                <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h3 className="tex radius"><i className="fa fa-registered" aria-hidden="true" style={{marginRight: '7px'}}></i>Registered Users(Type Others)</h3>
                        <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th> Name </th>
                                
                                    </tr>
                                </thead>
                        </Table>
                        {otherr}
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            );
        }
        
        console.log(selfno);
        
        return(
            <div>
                <Header />
                <Jumbo />
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-sm-2 tex">
                                <p className="tex">Self</p>
                                <button type="button" class="btn btn-warning btn-circle btn-xl" value="self" onClick={this.onChange}>{selfno}</button> 
                                <p className="tex">Group</p>
                                <button type="button" class="btn btn-secondary btn-circle btn-xl" value="group" onClick={this.onChange} >{groupno}</button>
                        </div>
                        <div className="col-sm-8">
                            <div className="chart">
                           
                                <h2 className="tex"> <i className="fa fa-bar-chart " aria-hidden="true" style={{marginRight: '7px'}}></i>Chart</h2>
                            {/* <p className="tex">Total</p>
                                <button  type="button" class="btn btn-success btn-circle btn-xl">{userList.length}</button> */}
                                <Bar   
                                    data={chartData}
                                    width={100}
                                    
                                    height={50}
                                    options={{
                                    }}
                                />
                            </div>  
                            <h3 className="tex radius"><i className="fa fa-registered" aria-hidden="true" style={{marginRight: '7px'}}></i>Registered Users(All Types)</h3>  
                            <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th> Name </th>
                                
                                    </tr>
                                </thead>
                            </Table>
                                {userList}
                        </div>
                        <div className="col-sm-2 tex">
                                
                                
                                <p className="tex">Corporate</p>                                        
                                <button type="button" class="btn btn-danger btn-circle btn-xl" value="corporate" onClick={this.onChange}>{corpno}</button>
                                <p className="tex">Others</p>
                            
                            <button type="button" class="btn btn-success btn-circle btn-xl" value="others" onClick={this.onChange}>{otherno}</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            
        );
    }


}

export default UserList;