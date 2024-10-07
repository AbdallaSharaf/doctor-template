import React from 'react'
import { Link } from 'react-router-dom'

const BookingButton = ({classes}) => {
  return (
    <button className={`${classes} rounded-md bg-primary py-2`}><Link to='/book' className='text-white'>احجز الآن</Link></button>
  )
}

export default BookingButton