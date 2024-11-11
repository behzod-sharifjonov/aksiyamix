import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../../database/api'
import CardUi from './CardUi'
import './Card.css'

function Card() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${api}/datas`)
                setDatas(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    console.log(datas)

    return (
        <div className="card-container">
            <h1>Лучшие объявления</h1>
            <div className='card-parent'>
                {datas.map((item) => (
                    <CardUi item={item} />
                ))}
            </div>
        </div>
    )
}

export default Card