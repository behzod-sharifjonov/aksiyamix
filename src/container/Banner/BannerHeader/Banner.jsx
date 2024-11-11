import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BannerUi from './BannerUi'
import './Banner.css'

import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banners, api } from '../../../database/api';

function Banner() {

    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        async function fetchBannerData() {
            try {
                const res = await axios.get(`${Banners}`)
                setBannerData(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchBannerData()
    }, [])

    console.log(bannerData)

    const settings = {
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed:4000, // Set autoplay speed
    };

    return (
        <div className='banner'>
            <div className="main-first-banner">
                <Slider {...settings}>
                    {bannerData.map((item, index) => (
                        <BannerUi item={item} key={index} />
                    ))}
                </Slider>
            </div>
            <div className="main-second-banner">
                <div className="main-banner-image">
                    <img src="https://avatars.mds.yandex.net/get-yablogs/28577/file_1648638201640/orig" alt="" />
                </div>
                <div className="main-banner-image">
                    <img src="https://assets.aboutamazon.com/85/66/592bcf7240308152a9541d6f6a18/ads-ai-hero-2000x1125-v2-branding-removed.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner