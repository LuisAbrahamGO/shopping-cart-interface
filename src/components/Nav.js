import React, { useEffect, useState, useContext } from 'react';
import Cart from './Cart';


const Nav = () => {


    return (
        <nav className="nav top">
            <h3>Logo</h3>
            <Cart></Cart>
        </nav>
    );
}

export default Nav;