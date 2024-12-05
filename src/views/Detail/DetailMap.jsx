import React from 'react'

function DetailMap() {
  return (
    <div className='detail-map'>
      <h1>Адрес</h1>
      <iframe  className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11412.600736661672!2d69.27583359999998!3d41.2965909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b005b3903f1%3A0x25306b1503992b7e!2sOybek%20Metro!5e1!3m2!1sen!2s!4v1731503574005!5m2!1sen!2s" ></iframe>
   
   {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
    </div>
  )
}

export default DetailMap
