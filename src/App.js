import React, {Component} from 'react';
import classes from './App.module.css';
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

// const StyledButton = styled.button`
//   background-color: ${props=> props.alt ? 'red' : 'green'};
//   color: white;
//   font:inherit;
//   border: 1px solid blue;
//   padding:8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props=> props.alt ? 'salmon' : 'lightgreen'};
//     color: black
//   }
// `;
class App extends Component {
  state = {
    persons:[
      {id:"afsd2", name: 'max', age: 28},
      {id:"jufn0",name: 'manu', age: 29},
      {id:"gdyu6",name: 'stephanie', age: 26}
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


  changedNameHandler=(event, id)=>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState(
      {
        persons: persons
      }
    )
  }

  deletePersonHandler= (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons})
  }
  
  render(){

    let btnClass = [classes.Button]
    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.changedNameHandler(event, person.id)}
            />
          })}
          
        </div>
      )
      btnClass = classes.Red;
    }

    const assingedClasses = [];
    if (this.state.persons.length <= 2){
      assingedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1){
      assingedClasses.push(classes.bold)
    }
    

    return(
      <div className={classes.App}> 
        <h1>
          Hi am a react app
        </h1>
        <p className={assingedClasses.join(' ')}>this is working </p>
        <button 
        className={btnClass}
        onClick={this.togglePersonHandler}>tonggle person
        </button>
        {persons}
        </div>
      

    );
  }
}

export default App;
