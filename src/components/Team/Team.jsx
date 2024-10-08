import React from 'react';
import image from '../../assets/images/hero.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "د. أحمد عبد الله",
    college: "كلية طب الأسنان - جامعة القاهرة",
    job: "أخصائي جراحة الفم والفكين",
    colorClass: "bg-team-red",
  },
  {
    name: "د. سارة محمد",
    college: "كلية طب الأسنان - جامعة الإسكندرية",
    job: "أخصائية تقويم الأسنان",
    colorClass: "bg-team-blue",
  },
  {
    name: "د. خالد يوسف",
    college: "كلية طب الأسنان - جامعة عين شمس",
    job: "أخصائي طب الأسنان التجميلي",
    colorClass: "bg-team-green",
  },
  {
    name: "د. منى علي",
    college: "كلية طب الأسنان - جامعة المنصورة",
    job: "أخصائية علاج جذور الأسنان",
    colorClass: "bg-team-orange",
  },
  {
    name: "د. هاني إبراهيم",
    college: "كلية طب الأسنان - جامعة الأزهر",
    job: "أخصائي زراعة الأسنان",
    colorClass: "bg-team-sky",
  },
];

const Team = () => {

    const settings = {
        arrows: false,
        speed: 500,
        infinite: true,
        swipeToSlide: true,
        variableWidth: true,
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
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 2,
              }
            },
          ]        
    };

  return (
    <>
    <div id='team' className="relative mt-16 w-[90%] mx-auto">
      <div className='flex mx-auto items-center justify-end mt-16 w-full'>
        <h1 className='text-2xl font-bold'>فريق العمل</h1>
      </div>
      </div>
      <div className='w-full overflow-hidden pt-5 '>
      <Slider {...settings} className='w-[125%] mx-auto mobileM:translate-x-[-17%] mobileL:translate-x-[-6%] '>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`max-w-[200px] min-w-[200px] mx-3 text-center flex flex-col p-4 justify-center  items-center ${member.colorClass} bg-opacity-20 rounded-xl h-80`}
          >
            <div className='h-40 bg-white rounded-3xl relative flex justify-center w-full overflow-visible'>
              <img 
                src={image} 
                className='scale-[0.75] absolute -bottom-8' 
                alt={member.name} 
              />
            </div>
            <h2 className="text-base font-bold mt-8">{member.name}</h2>
            <p className='text-[10px] font-light mt-2'>{member.job}</p>
            <p className='text-[10px] font-light mt-2'>{member.college}</p>
          </div>
        ))}
        </Slider>
        </div>
    </>
  );
};

export default Team;
