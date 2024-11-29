import React from 'react'
import Comment from '../../../assets/images/comment.png'

function Otziv() {
  return (
    <div className='commit-conteiner-otziv'>

      <div className='otziv-data'>
        <img src={Comment} alt="" />
        <h1>Пока нет отзывов!</h1>
        <button>Оставить отзыв</button>
      </div>


    </div>
  )
}

export default Otziv
