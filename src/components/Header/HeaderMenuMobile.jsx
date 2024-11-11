import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import { IoHome } from "react-icons/io5";
import { BiCategory } from "react-icons/bi"; 
import { IoStorefrontOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

function HeaderMenuMobile() {

    const [activeIndex, setActiveIndex] = useState(0 && index);
    const navigate = useNavigate(); // For navigation

    const buttons = [
        { label: <IoHome />, path: '/' },
        { label: <BiCategory />, path: '/categories' },
        { label: <IoStorefrontOutline />, path: '/page3' },
        { label: <GoHeart />, path: '/page4' },
        { label: <FaRegUser />, path: '/page5' }
    ];

    // Handle button click
    const handleClick = (index, path) => {
        setActiveIndex(index);
        navigate(path); // Navigate to the page
    };
    return (
        <div className='header-mobile-menu'>
                <div className="button-group">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={activeIndex === index ? 'active' : ''}
                            onClick={() => handleClick(index, button.path)}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
        </div>
    )
}

export default HeaderMenuMobile