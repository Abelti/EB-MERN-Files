import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'

//ReactDOM.render(<h1>Testing</h1>, document.getElementById('root'));

//with jsx

const var1 = <h1>I LOVE JSX</h1>;

const root1 = createRoot(document.getElementById('root'));
root1.render(var1);

//without jsx

const myElement = React.createElement('h6', {}, 'I do not use JSX!');

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(myElement);

//expressions

const myElement1 = <h1>React is 5 + 5 times better with JSX</h1>;

const root3 = createRoot(document.getElementById('root'));
root3.render(myElement1);

//block of HTML

const myElement3 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  
  const root4 = ReactDOM.createRoot(document.getElementById('root'));
  root4.render(myElement3);

//parent element or one top level

const elements = (
    <body>
<div>
        <p> P1 </p>
        <p> p2 </p>
    </div>
    <div>

    </div>
    </body>
    
);

const root5 = ReactDOM.createRoot(document.getElementById('root'));
  root5.render(elements);

//fragments

const el = (
    <>
        <h1>Hello</h1>
        <h3>world</h3>
    </>
);

const root6 = ReactDOM.createRoot(document.getElementById('root'));
root6.render(el);

//elements must be closed

const emt = <input type="text" />

const root7 = ReactDOM.createRoot(document.getElementById('root'));
root7.render(emt);

//class name

const classel = <h1 className="myclass">Hello World</h1>;

const root8 = ReactDOM.createRoot(document.getElementById('root'));
root8.render(classel);

//id name

const idel = <h1 id="hel">hi there</h1>;

const root9 = ReactDOM.createRoot(document.getElementById('root'));
root9.render(idel);

//if statement

const x = 5;
let text = "Greater than 10";
if (x < 10) {
  text = "Less than 10";
}

const ifel = <h1>{text}</h1>;

const root10 = ReactDOM.createRoot(document.getElementById('root'));
root10.render(ifel);


//ternary operator

const y = 6;

const var2 = <h1>{ (x) < 5 ? "less than ten" : "the value is ten" }</h1>;
const root11 = ReactDOM.createRoot(document.getElementById('root'));
root11.render(var2);

//loops
