import React, { Component, useState } from 'react';

import Person from './components/Person';

import './App.css';

// function FApp() {
//   const [state, setState] = useState(() => {
//     return {
//       persons: [
//         { name: 'Max', text: Math.random().toString() },
//         { name: 'John', text: 'I like to play footbal' },
//         { name: 'Alex', text: 'I like to play footbal' },
//       ],
//     };
//   });

//   const [someNewState, setSomeNewState] = useState('text');

//   const chnageName = () =>
//     setState({
//       persons: [
//         { name: 'no name', text: null },
//         { name: 'John', text: 'I like to play footbal' },
//         { name: 'Alex', text: 'I like to play footbal' },
//       ],
//     });

//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <button onClick={() => setSomeNewState('new text')}>change</button>
//       <Person name={state.persons[0].name} chnageName={chnageName}>
//         {state.persons[0].text}
//       </Person>
//       <Person name={state.persons[1].name}>{state.persons[1].text}</Person>
//       <Person name={state.persons[2].name}>{state.persons[2].text}</Person>
//       <p>{someNewState}</p>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { name: 'Max', text: 'I like to play footbal' },
      { name: 'John', text: 'I like to play footbal' },
      { name: 'Alex', text: 'I like to play footbal' },
    ],
    someNewState: 'text',
  };

  chnageName = () =>
    this.setState({
      persons: [
        { name: 'no name', text: null },
        { name: 'John', text: 'I like to play footbal' },
        { name: 'Alex', text: 'I like to play footbal' },
      ],
    });

  render() {
    return (
      <div className="App">
        <h1 style={{ border: '1px solid red' }}>Hello world</h1>
        <Person name={this.state.persons[0].name} chnageName={this.chnageName}>
          {this.state.persons[0].text}
        </Person>
        <Person name={this.state.persons[1].name}>
          {this.state.persons[1].text}
        </Person>
        <Person name={this.state.persons[2].name}>
          {this.state.persons[2].text}
        </Person>
        <p>{this.state.someNewState}</p>
      </div>
    );
  }
}

export default App;
