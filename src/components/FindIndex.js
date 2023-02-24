import React, { useState } from 'react'
import '../App.css';
import Header from './Header';

function FindIndexPage( { array } ) {
const [value, setValue] = useState("🐼")
  return (
    <div>
      <header className="App-header">
        <Header array={array}/>
        <h1>Find index</h1>
        <h2>
            {array.map(({ name, family}) => 
                <button 
                value={name} 
                onClick={e => setValue(e.target.value)}
                >
                    {name}
                </button>
            )}
        </h2>
        <h2>
            {array.findIndex(({ name, family}) => name === value)+1}
        </h2>
      </header>
    </div>
  )
}

export default FindIndexPage