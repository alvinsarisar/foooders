import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Company</h2>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Legal</h2>
                    <ul>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/licensing">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/terms-conditions">Terms & Conditions</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Navigation</h2>
                    <ul>
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/checkout">Checkout</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2024 Food Delivery. All Rights Reserved.</span>
            </div>
        </footer>
    );
};
