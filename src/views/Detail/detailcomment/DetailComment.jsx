import React, { useState, useEffect } from 'react'
import TovarData from './TovarData'
import Xarakteristika from './Xarakteristika'
import Otziv from './Otziv'
import DetailMap from '../DetailMap'



function DetailComment() {

    const [ip, setIp] = useState(3)
    const [selected, setSelected] = useState(0)
    const [data, setData] = useState([])


    const arr = [

        {
            name: ' О товаре',

            id: 0
        },
        {
            name: 'Характеристики',
            id: 1
        },

        {
            name: "отзывы",
            id: 2
        },
    ]
    // useEffect(() => {

    //     if (ip <= arr.length - 1 && ip >= 0) {

    //         const filtered = arr.filter(item => item.id === ip)
    //         setData(filtered)
    //     }
    //     else {
    //         setIp((ip) => 0)
    //     }



    // }, [ip])
    useEffect(() => {


        const filtered = arr.filter(item => item.id === selected)
        setData(filtered)





    }, [selected])

    return (
        <div className='commit'>



            <div className="commit-catalog">
                {
                    arr && arr.map(item => (
                        // <img className='miniphonecard' onClick={() => setIp(item.id)} src={item.img} alt={item.id} key={item.id} />
                        <button className={item.id === selected ? 'commit-btn-white' : 'commit-btn'} onClick={() => (setIp(item.id), setSelected(item.id))} key={item.id}>

                            {item.name}
                        </button>

                    ))
                }

                {/* 
    <button className='commit-btn white'>О товаре</button>
    <button className='commit-btn'>Характеристики</button>
    <button className='commit-btn '>отзывы <p className='red'>25</p> </button> */}
            </div>









            {
                data && data.map(item =>
                    item.id === 0 ?
                        <TovarData key={item.id} />
                        :
                        item.id === 1
                            ?
                            <Xarakteristika key={item.id} />
                            :
                            <Otziv key={item.id} />
                )
            }


        </div>
    )
}

export default DetailComment
