import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    //Another Way of writing a JSX
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Hello, I m learning React-16.'));
    return(
      <div className="App">
        <h1>hello , I m lerning  React-16</h1>
      </div>
    );
  }
}
