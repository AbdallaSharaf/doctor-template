import React from 'react'
import image from '../../assets/hero.png'
const Hero = () => {
  return (
    <div className=' bg-secondary relative w-full h-[60vh] md:h-[60%] flex flex-col justify-end'>
        <div className='flex overflow-hidden justify-around items-center h-[80%] md:max-h-[60%]'>
        <img className='w-[80%] -mb-40 -ml-16 -mr-12' src={image}/>
        <div className='w-[50%] pt-10 text-white font-semibold text-sm sm:text-2xl md:text-3xl text-end pr-3'>
            <div className=''>مركز الأستاذ الدكتور<br/> أحمد مصطفى الشريف</div>
            <h1 className=' font-bold py-2 text-2xl sm:text-3xl md:text-5xl'>للأسنان</h1>
            <h2 className='text-xs md:text-base md:pt-4 font-thin text-opacity-55'>استاذ جراحة الفم والفكين بجامعة طنطا</h2>
        </div>
        </div>
    </div>
  )
}

export default Hero