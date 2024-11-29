import React, { useState, useEffect } from 'react'
import iphone from '../../../assets/images/iphone15pro.png'
import blue from '../../../assets/images/iphone15blue.png'
import gold from '../../../assets/images/iphone15gold.png'
import silver from '../../../assets/images/iphone15silver.png'
import MacBro from '../../../assets/images/MacBro.png'
import up from '../../../assets/images/thumb-up.png'
import down from '../../../assets/images/thumb-down.png'

import { FaRegEye } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { GoScreenFull } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoChevronLeft } from "react-icons/go";
import DetailShop from '../DetailShop'
import { HiOutlineExclamationCircle } from "react-icons/hi";


function DetailTop({ displayHandler }) {

  const [ip, setIp] = useState(2)
  const [data, setData] = useState([])


  const arr = [

    {
      img: gold,
      id: 0
    },
    {
      img: blue,
      id: 1
    },
    {
      img: iphone,
      id: 2
    },
    {
      img: silver,
      id: 3
    },
  ]
  useEffect(() => {

    if (ip <= arr.length - 1 && ip >= 0) {

      const filtered = arr.filter(item => item.id === ip)
      setData(filtered)
    }
    else {
      setIp((ip) => 0)
    }



  }, [ip])

  return (
    <div className='detailTop'>


      <div className='detailTopLeft'>

        <div className='iphone15pro'>

          <div className='bigImg'>
            <button className='changeBtnleft' onClick={() => setIp((ip) => ip - 1)}><GoChevronLeft /></button>
            {
              data && data.map(item => (
                <div key={item.id}>

                  <img className='displayImg' src={item.img} alt={item.id} />
                </div>
              ))
            }

            <button className='changeBtnright' onClick={() => setIp((ip) => ip + 1)}><MdOutlineKeyboardArrowRight /></button>

            <button className='biggerBtn' onClick={displayHandler} >


              <GoScreenFull className='icon' />

            </button>
          </div>
          <div className='miniphoneconteiner'>


            {
              arr && arr.map(item => (
                <img className='miniphonecard' onClick={() => setIp(item.id)} src={item.img} alt={item.id} key={item.id} />
              ))
            }
          </div>



        </div>

        <div className='detailTopdata'>

          <div className="detailTopId">

            <h1 className='id'>ID: <p>120481</p></h1>
            <h1 className='id'>
              <TbCalendarTime />
              осталось
              <p >
                12
              </p>
              дней
            </h1>
            <h1 className='id'>
              <FaRegEye />
              124
            </h1>

          </div>

          <h1>Смартфон Apple iPhone 13 <br /> 256 ГБ, Dual: nano SIM + eSIM</h1>

          <div className='detailTop-Price'>
            <div className='detailTop-digrate'>

              <h1>
                15 000 000сум
              </h1>

              <a href="">
                10%
              </a>

            </div>

            <h1>
              13 499 000 сум

            </h1>

          </div>



          <div className='detailTop-configuration'>

            <h1>
              Встроенная память (ROM)
            </h1>

            <div className="detailTop-conteiner">

              <div className='detailTop-card' >

                <h1>
                  64 ГБ
                </h1>

              </div>
              <div className='detailTop-card' >

                <h1>
                  128 ГБ
                </h1>

              </div>
              <div className='detailTop-card' >

                <h1>
                  256 ГБ
                </h1>

              </div>

            </div>

            <h1>
              Цвет товара: Черный
            </h1>
            <div className="detailTop-conteiner">

              <div className='detailTop-card-color' >



              </div>
              <div className='detailTop-card-color' >



              </div>
              <div className='detailTop-card-color' >



              </div>
              <div className='detailTop-card-color' >



              </div>


            </div>





            <h1>
              Цвет товара: Черный
            </h1>

            <div className="detailTop-conteiner">

              <div className='detailTop-card' >

                <h1>
                  1 SIM
                </h1>

              </div>
              <div className='detailTop-card' >

                <h1>
                  eSIM
                </h1>

              </div>


            </div>

          </div>


          <div className='detailTop-data-digrate'>

            <h1>

              Дата начала и окончания скидки

            </h1>

            <div>
              <h2>
                С 20.10.2023 -
              </h2>
              <h1>
                До 20.10.2023
              </h1>

            </div>

          </div>


          <div className="detail-top-data-like">


            <div className="like-left">


              <div className="like-dislike">

                <div className='like-count'>

                  <img src={up} alt="" />

                  <h1>1 200</h1>

                </div>

                <img src={down} alt="" />
              </div>

            </div>

            <div className="like-left">

              <HiOutlineExclamationCircle className='exclamation' />
              <h1 className='complaint'>
                Жалоба
              </h1>

            </div>


          </div>






        </div>
      </div>
      <DetailShop />


    </div>
  )
}

export default DetailTop
