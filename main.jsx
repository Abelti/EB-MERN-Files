import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import Mycar from './Car.jsx'

//class component

class CarClass extends React.Component {
  render() {
    return <h2>I am a car</h2>
  }
}

const root = createRoot(document.getElementById('roott'));
root.render(<CarClass/>);

//function component

function CarFun() {
  return <h5>Hi, I am a Car!</h5>;
}

const root1 = ReactDOM.createRoot(document.getElementById('roott'));
root1.render(<CarFun/>);

//components in components

function Car() {
  
  return (
    <>
      <Brand/>
      <Brand/>
  <h2>I am your car</h2>
    </>
  )
}

function Brand() {
  return <h1>TESLA</h1>
}

function Garage() {
  return (
    <>
      <h1>My name is:</h1>
      <Car />
    </>
  );
}

const root2 = ReactDOM.createRoot(document.getElementById('roott'));
root2.render(<Garage />);//rendered first


//components in files

const root3 = ReactDOM.createRoot(document.getElementById('roott'));
root3.render(<Mycar/>);