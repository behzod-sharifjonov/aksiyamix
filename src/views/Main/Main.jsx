import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../../container/Banner/BannerHeader/Banner';
import './Main.css'
import Card from '../../components/Cards/Card';
import Filter from '../../components/Filter/Filter';

function Main() {
    const { t } = useTranslation()

    return (
        <div className='main'>
            <main className='container'>
                <div className="main-banner">
                    <Banner />
                </div>
                <div className="">
                    <Card />
                </div>
                <Filter/>
            </main>
        </div>
    )
}

export default Main