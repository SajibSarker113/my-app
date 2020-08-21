import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {name: 'Sajib Sarker',
                job: 'web Developer'};
var person2 = {name: 'Dipto Sarker',
                job: 'software engineer'};
var style = {color: 'red',
              backgroundColor: 'yellow'
           }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  <h1 style={style} >My Heading: {person.name +" " + person.job} </h1>
  <h1 style={{color: 'red', backgroundColor: 'cyan'}}>My Heading2: {person2.name +" " + person2.job} </h1>
        <p>My first paragraph by emmet</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
