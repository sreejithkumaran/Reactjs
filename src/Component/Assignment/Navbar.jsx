import React from "react";
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/addContact'>Add New User</NavLink>
        </nav>
    )
}