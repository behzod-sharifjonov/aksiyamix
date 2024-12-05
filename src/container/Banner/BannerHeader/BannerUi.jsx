import React from 'react'

function BannerUi({ item, key }) {
    return (
        <div className={key}>
            <img src={item.image} alt="Slide 1" />
        </div>

    )
}

export default BannerUi