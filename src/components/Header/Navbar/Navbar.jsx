import React, { useContext } from 'react'
import '../Header.css'
import logo from '../../../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { Context } from '../../../App';

function Navbar() {

    const { openModal } = useContext(Context);

    return (
        <nav className='container'>
            <ul className='nav-pc'>
                <li>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </li>
                <li className='catalog'>
                    <button>
                        <IoMenu className='menu' /><span>Каталог</span>
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
                    <button onClick={openModal}>Login</button>
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