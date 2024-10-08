import React from 'react'
import logo from '../../assets/images/logo.png'
 
const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-10 h-14 w-full flex justify-start pl-4 items-center bg-white'>
        <img src={logo} alt="" className='h-10'/>
    </div>
  )
}

export default Header