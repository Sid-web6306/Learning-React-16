import React from 'react'


//Stateless Component or Presentational Component or Dump Component
export default function Person(props) {
    return (
        //in class use this.props
        <div>
            <h4>I am a {props.name}! and I am {props.age} years old. {props.children}</h4>
        </div>
    )
}
