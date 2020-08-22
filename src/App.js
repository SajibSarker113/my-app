import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Razzak', 'Jafor iqbal', 'Josim', 'Manna', 'Salman Shah','Boby']
const products = [
  {name: 'Photoshop', price:'$90.99'},
  {name: 'Illstrator', price:'$60.99'},
  {name: 'PDF Reader', price:'$40.99'},
  {name: 'PDF Extra', price:'$40.99'}
]

  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
      <ul>
        {
          nayoks.map(x => <li>{x}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {products.map(pd => <Product product={pd}></Product>)}
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2> {props.product.name} </h2>
      <h5> {props.product.price} </h5>
      <button>Buy now</button>
    </div>
  )
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
