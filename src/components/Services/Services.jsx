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
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
          ]       
    };

  return (
    <>
      <div className='flex mx-auto items-center justify-between md:justify-end gap-4 mt-16 w-[90%]'>
          <Link to='/services' className='text-primary-link text-xs font-thin'>عرض الكل</Link>
          <h1 className='text-2xl font-bold'>خدماتنا</h1>
      </div>
      <div className='w-full md:w-[90%] mx-auto mt-5 overflow-x-auto flex direction-rtl md:grid grid-cols-2 lg:grid-cols-3 py-2 gap-2'>
          {servicesArray.map((item, id) => {
              return (
                <>
                  <div key={id} className="text-right text-primary-text px-4 cursor-pointer outline-none md:hidden">
                      <Link to={`/services/${item.name}`}>
                          <div className='mobileM:min-w-[150px] bg-primart-bg rounded-md shadow-md  flex flex-col items-start pt-5 px-4 h-[150px]'>
                              {/* Apply dynamic color to the FontAwesomeIcon */}
                                <FontAwesomeIcon className='text-5xl' icon={item.icon} color={item.color} />
                              <h1 className='text-sm font-semibold mobileM:text-nowrap my-2'>{item.name}</h1>
                              <h2 className='text-sm font-light'>كلمة تانية</h2>
                          </div>
                      </Link>
                  </div>
                  <div key={id} className="text-right text-primary-text  px-4 cursor-pointer outline-none">
                      <Link to={`/services/${item.name}`}>
                          <div className='mobileM:min-w-[150px] bg-primart-bg rounded-md shadow-md  flex flex-col items-start pt-5 px-4 h-[150px]'>
                              {/* Apply dynamic color to the FontAwesomeIcon */}
                                <FontAwesomeIcon className='text-5xl' icon={item.icon} color={item.color} />
                              <h1 className='text-sm font-semibold mobileM:text-nowrap my-2'>{item.name}</h1>
                              <h2 className='text-sm font-light'>كلمة تانية</h2>
                          </div>
                      </Link>
                  </div>
                </>
              );
          })}
      </div>
    </>
  );
};

export default Services;
