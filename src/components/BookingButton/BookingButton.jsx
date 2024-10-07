import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons/faCalendarPlus'

const BookingButton = ({classes}) => {
  return (
    <button className={`${classes} rounded-md bg-primary py-2 `}><Link to='/book' className='flex justify-center items-center gap-2 text-white'>احجز الآن <FontAwesomeIcon icon={faCalendarPlus}/></Link></button>
  )
}

export default BookingButton