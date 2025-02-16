import React from 'react'
import signature from '../../assets/sign.png'

const About = () => {
  return (
    <>
    <div
    id="about"
    className={`relative bg-none lg:bg-[url(src/assets/pattern-8.png)] lg:bg-cover lg:bg-center lg:bg-no-repeat`}
    // style={{ backgroundImage: `url(${background})` }} // Applies only on large screens
    >      
  <div className='w-[90%] grid grid-cols-1 gap-14 lg:grid-cols-2 py-16 mx-auto mt-16' dir='rtl'>
        <div className='h-full p-4 bg-white shadow-lg w-fit place-self-end hidden lg:block'>
        <img src="https://picsum.photos/300/200" alt="" className='h-full' />
        </div>
        <div>
        <h1 className='text-5xl font-bold mb-5'>عن المركز</h1>
        <p className='text-secondary-text text-sm max-w-[75%] tracking-wide leading-relaxed lg:text-lg'>
            يقوم بإدارة المركز نخبة من أفضل الأطباء تحت إشراف الأستاذ الدكتور أحمد مصطفى الشريف، مع الاهتمام الدائم بتقديم أفضل خدمة ورعاية صحية لضمان راحة ورضاء عملائنا، مع توفر أفضل أجهزة التعقيم، وأحدث الأجهزة في مجال الأسنان لضمان أفضل نتيجة ممكنة في أسرع وقت.
        </p>
        <div className='flex mt-6 lg:mt-14 gap-2 md:gap-4 lg:items-center lg:gap-6 flex-col md:flex-row'>
        <img src={signature} alt="" className='w-1/3 max-w-[150px]' />
        <div>
        <h2 className='text-xl font-semibold text-header-text'>
          احمد الشريف
        </h2>
        <p className='text-secondary-text mt-1 text-sm tracking-wide leading-relaxed lg:text-lg'>
          مؤسس مركز الشريف للأسنان
        </p>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 justify-around my-3 gap-3 w-[90%] md:w-[80%] lg:w-3/5 xl:w-[50%] mx-auto'>
      <div className='text-center py-4 shadow-lg '>
      <div className='flex justify-center font-semibold gap-1 text-primary-text font-serif'>
        <h3 >عملية</h3>
        <h3 >1000+</h3>
        </div>
        <p className='text-primary-text mt-1 font-light'>زراعة ناجحة</p>
      </div>
      <div className='text-center py-4 shadow-lg'>
      <div className='flex justify-center font-semibold gap-1 text-primary-text font-serif'>
        <h3 >سنة</h3>
        <h3 >20+</h3>
        </div>
        <p className='text-primary-text mt-1 font-light'>خبرة</p>
      </div>
      <div className='text-center py-4 shadow-lg'>
      <div className='flex justify-center font-semibold gap-1 text-primary-text font-serif'>
        <h3 >نسبة</h3>
        <h3 >100%</h3>
        </div>
        <p className='text-primary-text mt-1 font-light'>رضا عملائنا</p>
      </div>
    </div>
    </>
  )
}

export default About
