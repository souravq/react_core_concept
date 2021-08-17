import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const products=[
    {name:'Photoshop', price:'$90.66'},
    {name:'PDF', price:'$70.66'},
    {name:'Elastrator', price:'$70.66'},
    {name:'Adobe', price:'$70.66'},
 ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>I'm a react developer</h1>
        <Counter></Counter>
        
        {
         products.map(pd=><Product product={pd}></Product>)
        }
        
        
        
      </header>
    </div>
  );
}

function Counter(props){
  const [count, setCount]=useState(10);
  //const handleIncrease = ()=>setCount(count+1);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onMouseMove={ () => setCount(count-1)}>Decrease</button>
      <button onClick={ () => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price}=props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy Now</button>

    </div>

  );
}

export default App;
