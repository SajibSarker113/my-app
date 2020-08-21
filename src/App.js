import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
      <Person name="Munna" job="Footballer"></Person>
      <Person name="Sajib" job="Viewer"></Person>
      <Person name="Jafor Iqbal" job="Nayok"></Person>


      </header>
    </div>
  );
}
function Person(props){
  const personStyle = {
    border:'2px solid red', margin:'10px'
  }
  return (
  <div style={{border:'3px solid red', margin: '10px', width:'600px'}}>
    <h1>Name: {props.name} </h1>
    <h2>My profession: {props.job} </h2>
  </div>
  )
}
export default App;
