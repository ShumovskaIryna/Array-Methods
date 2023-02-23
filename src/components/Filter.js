import React from 'react'
import '../App.css';
import Header from './Header';

function FilterPage( { array } ) {
  console.log(array.filter(el => el.family === "wild"))
  return (
    <div>
      <header className="App-header">
        <Header array={array}/>
        <h1>Filter animals</h1>
        <h2>Wild: {array.filter(el => el.family === "wild").map(({ name}) => `\n${name}`)}</h2>
        <h2>Domestic: {array.filter(el => el.family === "domestic").map(({ name}) => `\n${name}`)}</h2>
      </header>
    </div>
  )
}

export default FilterPage