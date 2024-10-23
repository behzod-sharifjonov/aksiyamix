import React from 'react'
import MacBro from '../../assets/images/MacBro.png'
import { HiStar } from "react-icons/hi";
import { IoIosMan } from "react-icons/io";
import profile from '../../assets/images/profile.png'
import heart from '../../assets/images/heart.png'

function DetailShop() {
    return (

<div className="detail-right">


        <div className="detailRight">

            <div className="detailRightTop">


                <div>
                    <div className="MacBro">

                        <img src={MacBro} alt="" />
                        <div className="MacBroText">

                            <h1>
                                MacBro
                            </h1>

                            <h2>
                                MacBro
                            </h2>
                        </div>

                    </div>

                </div>


                <div className="MacBroText">

                    <h2>
                      <img src={profile} alt="" /> 11.2 тыс.
                    </h2>

                    <h2>
                        <img src={heart} alt="" />
                        120
                    </h2>

                </div>

            </div>
            <div className="stars">

                <HiStar className='star' />
                <HiStar className='star' />
                <HiStar className='star' />
                <HiStar className='star' />
                <HiStar className='star' />
            </div>


            <div className='PhoneNumber'>
                <h1>+998 33  <p>Показать телефон</p></h1>
            </div>

            <h1>
                По своей сути рыбатекст является
                <br />
                альтернативой традиционному
                <br />
                lorem ipsum, который вызывает у
                <br />
                некторых людей недоумение при
                <br />
                попытках прочитать рыбу текст. В
                <br />
                отличии от lorem ipsum
            </h1>

<button className="follow">
Подписаться
</button>

        </div>

        <div className="detail-right-bottom">
            <h1>coming soon </h1>
        </div>
</div>
        
    )
}

export default DetailShop
