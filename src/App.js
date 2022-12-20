
import './App.css';
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
 
class App extends Component {
  state={
    users: []
  }
componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res=>{
    const users=res.data;
    console.log(res.data)
    this.setState({users})
  })
}


  render(){
  return (
    <div>
      {this.state.users.map(user=>
        <p key={user.id}> {user.name}
          <span> {user.username}</span>
        <span> {user.email}</span>
        <span> {user.address.street}</span>
        <span> {user.address.city}</span>
        </p>
        )}

    </div>
  );
}
}
export default App;
