import React, { lazy, useEffect, useState } from 'react'
import DetailText from './detailText/DetailText'
import DetailTop from './detailTop/DetailTop'
// import Header from '../../components/Header/Header'
import iphone from '../../assets/images/iphone15pro.png'
import blue from '../../assets/images/iphone15blue.png'
import gold from '../../assets/images/iphone15gold.png'
import silver from '../../assets/images/iphone15silver.png'

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoChevronLeft } from "react-icons/go";


function Detail() {



  const [displayy, setDisplayy] = useState(false)

  const [ip,setIp]=useState(0)
  const [data, setData] = useState([])


  const arr = [
    {
      img: iphone,
      id: 0
    },
    {
      img: blue,
      id: 1
    },
    {
      img: gold,
      id: 2
    },
    {
      img: silver,
      id: 3
    },
  ]
  useEffect(() => {

    if (ip <= arr.length-1 && ip >= 0) {

      const filtered = arr.filter(item => item.id === ip)
      setData(filtered)
    }
    else {
      setIp((ip) => 0)
    }
    // console.log(ip)




    // console.log(arr.length)
  }, [ip])

  return (
    <div className='main-detailing'>

      <DetailText />

      <DetailTop displayHandler={() => displayy ? setDisplayy(false) : setDisplayy(true)} />

      <div className={displayy ? "displey" : "none"} >
        <button className='displayBTN' onClick={() => setDisplayy(false)}>X</button>

        <h1>{ip + 1}/{arr.length}</h1>
        <div className='prevNext'>

          <button className='changeBtn' onClick={() => setIp((ip) => ip - 1)}><GoChevronLeft /></button>
          {
            data && data.map(item => (
              <div key={item.id}>

                <img className='displayImg' src={item.img} alt={item.id} />
              </div>
            ))
          }
          <button className='changeBtn' onClick={() => setIp((ip) => ip + 1)}><MdOutlineKeyboardArrowRight /></button>
        </div>
      </div>


    </div>
  )
}

export default Detail