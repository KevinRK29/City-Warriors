import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/create'> Report New Issue </NavLink> </li>
            <li><NavLink to='/'> Logout </NavLink> </li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>GR</NavLink> </li>

        </ul>
    

    )
}

export default SignedInLinks;