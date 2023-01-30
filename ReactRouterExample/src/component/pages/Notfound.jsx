import React from 'react'
import { Link } from "react-router-dom";

function Notfound() {
  return (
      <>
    <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
<div className='navbar-div'>
             <Link to={'/'}>Home</Link>
    <Link to={'/contact'}>Contact Us</Link>
    <Link to={'/about'}>About Us</Link>
    </div>
    </>
  )
}

export default Notfound