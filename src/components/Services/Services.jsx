import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const servicesArray = [
    { name: 'زراعة الاسنان', to: '/services/consulting', icon: faTooth, color: '#ff6347' },
    { name: 'عمليات ضرس العقل', to: '/services/consulting', icon: faTooth, color: '#4682b4' },
    { name: 'التقويم', to: '/services/consulting', icon: faTooth, color: '#32cd32' },
    { name: 'الحشوات التجميلية', to: '/services/consulting', icon: faTooth, color: '#ff4500' },
    { name: 'تنظيف الأسنان', to: '/services/consulting', icon: faTooth, color: '#1e90ff' },
];

const Services = () => {

    const settings = {
        arrows: false,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        rtl: true,
        swipeToSlide: true,
    };

  return (
    <>
      <div className='flex mx-auto items-center justify-between mt-16 w-[90%]'>
          <Link to='/services' className='text-primary text-xs font-thin'>عرض الكل</Link>
          <h1 className='text-2xl font-bold'>خدماتنا</h1>
      </div>
      <div className='w-full mt-5 overflow-hidden'>
        <Slider {...settings} className="w-[125%] mx-auto translate-x-[-22%]">
          {servicesArray.map((item, id) => {
              return (
                  <div key={id} className="text-end px-4 cursor-pointer outline-none">
                      <Link to={item.to}>
                          <div className='bg-white rounded-md shadow-md text-5xl flex flex-col items-end pt-5 gap-4 px-4 h-[150px]'>
                              {/* Apply dynamic color to the FontAwesomeIcon */}
                                <FontAwesomeIcon className='' icon={item.icon} color={item.color} />
                              <h1 className='text-sm font-semibold mt-2'>{item.name}</h1>
                          </div>
                      </Link>
                  </div>
              );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Services;
