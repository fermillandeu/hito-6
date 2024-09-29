import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  CartContext  from '../../context/CartContext'; 
import './Navbar.css'; 

const Navbar = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((acc, pizza) => acc + pizza.count, 0); 
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                Pizzeria
            </Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-button">Home</Link>
                <Link to="/login" className="navbar-button">Login</Link>
                <Link to="/register" className="navbar-button">Register</Link>
                <Link to="/cart" className="navbar-button"> </Link>
                    Carrito {totalItems > 0 && `(${totalItems})`} 
            </div>
        </nav>
    );
};

export default Navbar;
