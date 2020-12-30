import React, { Component } from 'react';
import Person from "./components/Person/Person";
import './App.css';

export default class App extends Component {

  state={
    persons:[
      {name:"Siddhant",age:23},{name:"Joe", age:40},{name:"Mili",age:12}
    ],
  }


  switchNameHandler = () => console.log("Was clicked correctly");



  render() {
    //Another Way of writing a JSX
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Hello, I m learning React-16.'));
    return(
      <div className="App">
        <h1>Hello , I m lerning  React-16</h1>
        <h3>This is so cool!!!</h3>
        {/* dont use paranthesis it will execute function immediatelty after rendering */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
  }
}
