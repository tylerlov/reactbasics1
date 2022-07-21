import React from 'react'

function Header( { text } ) {
  return (
    <div className='container'>
        <h1>Header Component</h1>
        <h2> - {text} - </h2>
    </div> 
  )
}

export default Header