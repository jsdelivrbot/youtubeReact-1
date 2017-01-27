import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './APIKey'; //file is gitignored
//create a new component which should produce html
const App = () => {
  return <div>Jello</div>;
}
console.log(API_KEY);
//take component's generated html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
