import React, { Component, useState } from 'react';
import Person from "./components/Person/Person";
import './App.css';

//Stateful Component or smart Component or container Component
class App extends Component{

  state={
        persons:[
          {name:"Siddhant",age:23},{name:"Joe", age:40},{name:"Mili",age:12}
        ],
        otherState:"Some other value",
        showPersons: false
      }
    
    
      switchNameHandler = (newName) => {
        
        // console.log("Was clicked correctly");
        //DONT DIRECTLY CHANGE THE STATE OBJECT
        this.setState({
          persons:[
            {name:newName,age:23},{name:"Rose", age:40},{name:"Monica",age:33}
          ]
        });
      }


      nameChangeHandler = (event) =>{
        this.setState({
          persons:[
            {name:"Siddhant",age:23},{name:event.target.value, age:40},{name:"Mili",age:33}
          ]
        });
      }


      toggleChangeHandler = () =>{
        let status = this.state.showPersons;
        this.setState({showPersons:!status})

      }
    //Another Way of writing a JSX
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Hello, I m learning React-16.'));
    render(){
      //inline Styling 
      const style = {
        backgroundColor:'White',
        padding:'10px',
        border:'1px solid blue',
        boxShadow:'0px 2px 5px #ccc',
        margin: '10px',
        font:'inherit'
      }
       let persons = (<button style={style} onClick={this.toggleChangeHandler}>Show Persons</button>);
      if(this.state.showPersons){
        persons = (
        <div>
          <button style={style} onClick ={this.toggleChangeHandler}>Hide Persons</button>
          <Person  click={()=>this.switchNameHandler("Siddhant")} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person changes = {this.nameChangeHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Football</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
        );
      }


    return(
      <div className="App">
        <h1>Hello , I m lerning  React-16</h1>
        <h3>This is so cool!!!</h3>
        {/* dont use paranthesis it will execute function immediatelty after rendering */}
        <button style={style} onClick={this.switchNameHandler.bind(this,"Siddhant jain")}>Switch Name</button>
        {persons}
      </div>
    );
    }
}

export default App;







///functional component using useState()
// const App = props=> {

//   const [this.state,setthis.state ] = useState({
//     persons:[
//          {name:"Siddhant",age:23},{name:"Joe", age:40},{name:"Mili",age:12}
//     ],
//     otherState:"some Other Value"
//   })
//   // we can use as many useState as we want
//   // and when ee want to change state it overwrite previous state 
//   console.log(this.state);
//   const switchNameHandler = () => {
//     setthis.state({
//       persons:[
//         {name:"Siddhant",age:23},{name:"Rose", age:24},{name:"Rachel",age:30}
//       ],
//       otherState: this.state.otherState
//     })
//   }

//     //Another Way of writing a JSX
//     // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Hello, I m learning React-16.'));
//     return(
//       <div className="App">
//         <h1>Hello , I m lerning  React-16</h1>
//         <h3>This is so cool!!!</h3>
//         {/* dont use paranthesis it will execute function immediatelty after rendering */}
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Football</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

//       </div>
//     );
// }

// export default App;