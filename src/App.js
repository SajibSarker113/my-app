import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
      <Person></Person>
      <Person></Person>
      <Person></Person>


      </header>
    </div>
  );
}
function Person(){
  const personStyle = {
    border:'2px solid red', margin:'10px'
  }
  return (
  <div style={{border:'2px solid yellow', margin:'10px'}}>
    <h1>Name: Shakib Al Hasan</h1>
    <h2>hero of the year</h2>
  </div>
  )
}
export default App;
