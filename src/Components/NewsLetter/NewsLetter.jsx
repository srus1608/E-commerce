import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOU EMAIL</h1>
        <p>Suscribe to our newletter and stay updated </p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Suscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter