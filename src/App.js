import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons:[
      {name: 'max', age: 28},
      {name: 'manu', age: 29},
      {name: 'stephanie', age: 26}
    ],
    other: 'otherrrr',
    showPerson: false
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  switchNameHandler=(newName)=>{
    this.setState(
      {
        persons:[
          {name: newName, age: 28},
          {name: 'manu', age: 29},
          {name: 'stephanie', age: 27}
        ]
      }
    )
  }


  changedNameHandler=(event)=>{
    this.setState(
      {
        persons:[
          {name: 'max', age: 28},
          {name: event.target.value, age: 29},
          {name: 'stephanie', age: 27}
        ]
      }
    )
  }
  
  render(){
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
          <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'nmaximllian')} changed={this.changedNameHandler}>my hobbies : racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      )
    }
    return(
      <div className="App"> 
        <h1>
          Hi am a react app
        </h1>
        <button 
        style={style} 
        onClick={this.togglePersonHandler}>switch name</button>
        {persons}
      </div>

    );
  }
}

export default App;
