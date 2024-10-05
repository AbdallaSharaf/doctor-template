import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='about' className='flex flex-col  w-[90%] mx-auto mt-16 md:mt-12' dir='rtl'>
        <h1 className='text-2xl font-bold mb-3'>عن المركز</h1>
        <p className='text-gray-800 text-opacity-75 text-sm'>
            يقوم بإدارة المركز نخبة من أفضل الأطباء تحت إشراف الأستاذ الدكتور أحمد مصطفى الشريف، مع الاهتمام الدائم بتقديم أفضل خدمة ورعاية صحية لضمان راحة ورضاء عملائنا، مع توفر أفضل أجهزة التعقيم، وأحدث الأجهزة في مجال الأسنان لضمان أفضل نتيجة ممكنة في أسرع وقت.
            <span> <Link to='/about' className='text-primary'>اعرف أكثر ...</Link></span>
        </p>
    </div>
  )
}

export default About
