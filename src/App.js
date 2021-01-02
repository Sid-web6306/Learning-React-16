import React, { useState } from 'react';
import Person from "./components/Person/Person";
import './App.css';
const App = props=> {

  const [personsState,setpersonsState ] = useState({
    persons:[
         {name:"Siddhant",age:23},{name:"Joe", age:40},{name:"Mili",age:12}
    ],
    otherState:"some Other Value"
  })
  // we can use as many useState as we want
  // and when ee want to change state it overwrite previous state 
  console.log(personsState);
  const switchNameHandler = () => {
    setpersonsState({
      persons:[
        {name:"Siddhant",age:23},{name:"Rose", age:24},{name:"Rachel",age:30}
      ],
      otherState: personsState.otherState
    })
  }

    //Another Way of writing a JSX
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Hello, I m learning React-16.'));
    return(
      <div className="App">
        <h1>Hello , I m lerning  React-16</h1>
        <h3>This is so cool!!!</h3>
        {/* dont use paranthesis it will execute function immediatelty after rendering */}
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Football</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

      </div>
    );
}

export default App;


// state={
//     persons:[
//       {name:"Siddhant",age:23},{name:"Joe", age:40},{name:"Mili",age:12}
//     ],
//   }


//   switchNameHandler = () => {
    
//     // console.log("Was clicked correctly");
//     //DONT DIRECTLY CHANGE THE STATE OBJECT
//     this.setState({
//       persons:[
//         {name:"Siddhant",age:23},{name:"Rose", age:40},{name:"Monica",age:33}
//       ]
//     });
//   }
