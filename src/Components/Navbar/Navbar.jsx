import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='text-center space-x-6'>
            <NavLink to={'/'}> Home  </NavLink>
            <NavLink to={'/about'}> About  </NavLink>            
            <NavLink to={'/login'}> Login  </NavLink>
            <NavLink to={'/users'}> User  </NavLink>
            <NavLink to={'/users2'}> User2  </NavLink>
            <NavLink to={'/posts'}> Posts   </NavLink>


        </div>
    );
};

export default Navbar;