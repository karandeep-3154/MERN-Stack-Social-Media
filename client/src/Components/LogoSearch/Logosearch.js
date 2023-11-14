import React from 'react'
import logoimg from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './Logosearch.css'
const Logosearch = () => {
  return (
    <div className='Logosearch'>
        <img src={logoimg} alt=''/>
        <div className="search">
            <input type='text' placeholder='#Explore'/>
            <div className='s-icon'>
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default Logosearch