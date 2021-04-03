import React from 'react';
import './Person.css';


//Stateless Component or Presentational Component or Dump Component
export default function Person(props) {
    return (
        //in class use this.props
        <div className="Person">
            <h4 onClick={props.click}>I am a {props.name}! and I am {props.age} years old.</h4>
            <input type="text" onChange={props.changes} value={props.name} />
        </div>
    )
}
