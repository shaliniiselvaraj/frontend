import React from 'react';
import Input from './CoreComponents/Input';
import Form from './CoreComponents/Form';

 class Signup extends React.Component {
    state= {
      username:'',
      emailid:'',
      password:'',
}

change=e=> {
   this.setState({
    [e.target.name] : e.target.value
 });
};

onSubmit=e =>{
e.preventDefault();
console.log(this.state);   
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
            name="emailid"
            placeholder="Email id" 
            value={this.state.emailid}
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
        <button onClick={e => this.onSubmit(e)}>Signup </button>
      </Form>
      </div>
);
}
}
export default Signup;