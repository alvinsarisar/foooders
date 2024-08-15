import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
 return (
 <nav>
 <Link to="/">Menu</Link>
 <Link to="/cart">Cart</Link>
<Link to="/checkout">Checkout</Link>
<Link to="/about">About</Link>
<Link to="/review">Review</Link>
</nav>
 );
}

export default Navbar;