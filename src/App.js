import React from 'react';
import Input from './CoreComponents/Input';
import Form from './CoreComponents/Form';
//import Items from './items';
const axios = require('axios');
export default class App extends React.Component {
    state= {
      username:'',
      password:'',
      hello:false,
}

change=e=> {
   this.setState({
    [e.target.name] : e.target.value
 });
};

onSubmit=e =>{
e.preventDefault();
console.log(this.state);   
// axios('/login');
     
// async function makeGetRequest() {
  
//    let res = await axios.get('http://localhost:3000/login/');
 
//    let data = res.data;
//    console.log(data);
//  }
 
//  makeGetRequest();
axios.get('/login')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
};
render() {return(
          <div>
       <Form>
          <Input 
            name="username"
            placeholder="Username" 
            value={this.state.username}
            onChange={e => this.change(e)}
         />
           <br />
         <Input 
            name="password"
            placeholder="password"
             value={this.state.password}
            onChange={e => this.change(e)}
         />
           <br />
        <button onClick={e => this.onSubmit(e)}>Submit </button>
      </Form>
      </div>
);
}
}
