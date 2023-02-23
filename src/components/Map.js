import React from 'react'
import '../App.css';
import Header from './Header';

function MapPage( { array } ) {

  return (
    <div>
      <header className="App-header">
        <Header array={array}/>
        <h1>All animals</h1>
        <h2>{array.map(({ name, family}) => `\n${name}`)}</h2>
      </header>
    </div>
  )
}

export default MapPage