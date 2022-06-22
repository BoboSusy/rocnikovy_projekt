import React from 'react';
import './Navbar.css'

export const Navbar = () => {
    return (
        <ul>
            <li className="main">Japonsko</li>
            <li><a href="/">Úvod</a></li>
            <li><a href="/history">Historie</a></li>
            <li><a href="/geography">Geografie</a></li>
            <li><a href="/cities">Města</a></li>
            <li><a href="/cultures">Kultura</a></li>
        </ul >
    );
}