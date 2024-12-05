import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import { useTranslation } from 'react-i18next';
import '../../i18n'
import uzb_flag from '../../assets/language/uzbekistan (1).png'
import rus_flag from '../../assets/language/russia.png'
import HeaderMenu from './HeaderBottom';
import Catalog from '../Category/Category';

function Header() {


    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header>
            <div className="header-top">
                <span>+998 99 999 99 99</span>
                <span>+998 99 999 99 99</span>
                <div className="language-btn">
                    <button
                        onClick={() => handleLanguageChange('uz')}
                        style={{
                            backgroundColor: i18n.language === 'uz' ? 'rgba(12, 164, 250, 0.1)' : 'transparent',
                            color: i18n.language === 'uz' ? 'rgba(12, 164, 250, 1)' : 'black',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            height: '32px',
                            width: '60px',
                            gap: '5px'
                        }}
                    >
                        <img src={uzb_flag} alt="" />
                        Uz
                    </button>
                    <span>|</span>
                    <button
                        onClick={() => handleLanguageChange('ru')}
                        style={{
                            backgroundColor: i18n.language === 'ru' ? 'rgba(12, 164, 250, 0.1)' : 'transparent',
                            color: i18n.language === 'ru' ? 'rgba(12, 164, 250, 1)' : 'black',
                            height: '32px',
                            width: '60px',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}
                    >
                        <img src={rus_flag} alt="" />
                        Ру
                    </button>
                </div>
            </div>
            <Navbar />
            <Catalog />
            <div className="header-bottom">
                <HeaderMenu />
            </div>
        </header>
    )
}

export default Header