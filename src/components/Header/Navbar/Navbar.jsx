import React, { useContext, useEffect, useState } from 'react'
import '../Header.css'
import logo from '../../../assets/logo.png'
import { IoClose, IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { Context } from '../../../App';
import AuthModal from '../../../views/Auth/AuthModal';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (location.pathname === "/catalog") {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [location.pathname]);

    const handleClick = () => {
        if (isOpen) {
            navigate("/");
        } else {
            navigate("/catalog");
        }
    };


    const { openModal, showModal, userName, closeModal } = useContext(Context);

    return (
        <nav className='container'>
            <ul className='nav-pc'>
                <li>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </li>
                <li className='catalog'>
                    <button className="catalog-btn" onClick={handleClick}>
                        <div className="catalog-btn-link">
                            {isOpen ? <IoClose className="menu" /> : <IoMenu className="menu" />}
                            <span>Каталог</span>
                        </div>
                    </button>
                </li>
                <li>
                    <div className="search search-pc">
                        <input type="text" />
                        <div className="nav-select">
                            <select name="" id="">
                                <option value="Все регионы">Все регионы</option>
                            </select>
                        </div>
                        <IoSearchOutline className='search-icon' />
                    </div>
                </li>
                <li>
                    <div className="notification">
                        <IoNotificationsOutline className='nav-icon-notificaition nav-icon' />
                    </div>
                </li>
                <li>
                    <div className="heart">
                        <GoHeart className='nav-icon-heart nav-icon' />
                    </div>
                </li>
                <li className='login-btn'>
                    <button onClick={openModal} style={{ cursor: 'pointer' }}>Login</button>
                    <AuthModal showModal={showModal} closeModal={closeModal} />
                </li>
            </ul>
            <div className="search search-mobile">
                <input type="text" />
                <IoSearchOutline className='search-icon' />
            </div>
        </nav>
    )
}

export default Navbar