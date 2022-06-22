import React from 'react';
import './Footer.css';


export const Footer = () => {
    let year = new Date().getFullYear();
    
    return (
        <footer className='footer'>
            <p><b> {year} - IT2 - &copy; Robin Harazim, Michael Meinhard,</b><b className="matej">Matěj Kotrba</b></p>
        </footer>
    );
}