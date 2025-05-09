import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'

function Header() {
    const cartItems = useSelector(function (state) {
        return state.cart.items;
    });

    function getTotalItems() {
        return cartItems.reduce(function (total, item) {
            return total + item.quantity;
        }, 0);
    }

    return (
        <header className="header-container">
            <nav className="nav-container">
                <Link to="/" className="brand-link">
                    🛒 Shoppy Globe
                </Link>
                <Link to="/cart" className="cart-link">
                    🛍️ Cart ({getTotalItems()})
                </Link>
            </nav>
        </header>
    );
}

export default Header;

