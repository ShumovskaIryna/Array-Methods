import React from 'react'
import '../App.css';
import Header from './Header';

function HomePage({array}) {

  return (
    <div>
      <header className="App-header">
        <Header array={array}/>
        <h1>Use some array methods</h1>
      </header>
    </div>
  )
}

export default HomePage