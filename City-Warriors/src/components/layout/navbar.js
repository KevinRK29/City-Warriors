import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return(
    
    <nav className="nav nav-wrapper grey darken-2">
  
        <div class="container">
            <Link to='/' className="brand-logo">City Warrior </Link>
            <SignedInLinks/>
            <SignedOutLinks/>
        
        </div>
    </nav>


    )
}

export default Navbar;