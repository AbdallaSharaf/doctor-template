import React from 'react';
import image from '../../assets/hero.png';

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
  return (
    <div id='team' className="relative mt-16 w-[90%] mx-auto">
      <div className='flex mx-auto items-center justify-end mt-16 w-full'>
        <h1 className='text-2xl font-bold'>فريق العمل</h1>
      </div>
      <div className="flex flex-row-reverse overflow-x-auto space-x-reverse space-x-4 scrollbar-hide mt-5">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`min-w-[170px] text-center flex flex-col p-4 justify-center relative items-center ${member.colorClass} bg-opacity-20 rounded-xl`}
          >
            <div className='h-40 bg-white rounded-3xl flex justify-center w-full overflow-visible'>
              <img 
                src={image} 
                className='w-[200px] absolute -top-0 h-[200px]' 
                alt={member.name} 
              />
            </div>
            <h2 className="text-base font-bold mt-8">{member.name}</h2>
            <p className='text-[10px] font-light mt-2'>{member.job}</p>
            <p className='text-[10px] font-light mt-2'>{member.college}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
