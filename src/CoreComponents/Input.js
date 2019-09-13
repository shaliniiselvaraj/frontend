import React from 'react';

export default function Input(props) {
    change=e=> {
        this.setState({
         [e.target.name] : e.target.value
      });
     };
    return(
        <input
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            password={props.password}
            onChange={e => this.change(e)}
        ></input>
        
    );
}