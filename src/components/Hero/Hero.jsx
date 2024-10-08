import React from 'react'
import image from '../../assets/hero.png'
const Hero = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-secondary to-primary relative w-full h-[65vh] md:h-[60%] flex flex-col justify-end'>
        <div className='flex overflow-hidden justify-around items-center h-[80%] md:max-h-[60%]'>
        <img className='w-[80%] -mb-40 -ml-16 -mr-12' src={image}/>
        <div className='w-[50%] pt-10 text-white font-semibold text-sm sm:text-2xl md:text-3xl text-end pr-3'>
            <div className=''>مركز الأستاذ الدكتور<br/> أحمد مصطفى الشريف</div>
            <h1 className=' font-bold py-2 text-2xl sm:text-3xl md:text-5xl'>للأسنان</h1>
            <h2 className='text-xs md:text-base md:pt-4 font-thin text-opacity-55'>استاذ جراحة الفم والفكين بجامعة طنطا</h2>
        </div>
        </div>
    </div>
    <div className='flex justify-around my-3 gap-3 w-[90%] mx-auto'>
      <div className='text-center w-1/3 py-4 shadow-lg '>
      <div className='flex justify-center font-semibold gap-1 text-gray-800 font-serif'>
        <h3 >عملية</h3>
        <h3 >1000+</h3>
        </div>
        <p className='text-gray-800 mt-1 font-light'>زراعة ناجحة</p>
      </div>
      <div className='text-center w-1/3 py-4 shadow-lg'>
      <div className='flex justify-center font-semibold gap-1 text-gray-800 font-serif'>
        <h3 >سنة</h3>
        <h3 >20+</h3>
        </div>
        <p className='text-gray-800 mt-1 font-light'>خبرة</p>
      </div>
      <div className='text-center w-1/3 py-4 shadow-lg'>
      <div className='flex justify-center font-semibold gap-1 text-gray-800 font-serif'>
        <h3 >نسبة</h3>
        <h3 >100%</h3>
        </div>
        <p className='text-gray-800 mt-1 font-light'>رضا عملائنا</p>
      </div>
    </div>
    </>
  )
}

export default Hero