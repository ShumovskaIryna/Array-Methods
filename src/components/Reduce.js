import React from 'react'
import '../App.css';
import Header from './Header';

function ReducePage( { array } ) {
  return (
    <div>
      <header className="App-header">
        <Header array={array}/>
        <h1>use .reduce instead filter+map</h1>
        <h2>Wild: {array.reduce((newArray, el) => 
            el.family === "wild" 
            ? (newArray.push(el.name), newArray) 
            : newArray, [])}
        </h2>
        <h2>Domestic: {array.reduce((newArray, el) => 
            el.family === "domestic" 
            ? (newArray.push(el.name), newArray) 
            : newArray, [])}
        </h2>
      </header>
    </div>
  )
}

export default ReducePage