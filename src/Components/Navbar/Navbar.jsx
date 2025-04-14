import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='text-center space-x-6'>
            <NavLink to={'/'}> Home  </NavLink>
            <NavLink to={'/about'}> About  </NavLink>            
            <NavLink to={'/login'}> Login  </NavLink>
            <NavLink to={'/user'}> User  </NavLink>
            <NavLink to={'/user2'}> User2  </NavLink>


        </div>
    );
};

export default Navbar;