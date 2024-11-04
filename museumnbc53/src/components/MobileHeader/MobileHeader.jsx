import React, { useState } from 'react';
import './Mobile.css'; // Импортируем стили
import logo from '../MainFirst/Img/a.svg'
const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <div className="burger-menu">
            <div className="burger-icon" onClick={toggleMenu}>
                <img src={logo} alt="" />
            </div>
            {isOpen && (
                <nav className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MobileHeader;
