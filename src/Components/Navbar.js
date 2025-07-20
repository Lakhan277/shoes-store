import React from 'react';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="#home">Shoe Store</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#Products">Products</a></li>
                <li><a href="#categories">categories</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>
    )

}
export default Navbar;