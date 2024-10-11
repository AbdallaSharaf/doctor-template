import React from 'react';
import TeamCard from './TeamCard/TeamCard';

const teamMembers = [
  {
    name: "د. أحمد عبد الله",
    college: "كلية طب الأسنان - القاهرة",
    job: "أخصائي جراحة الفم والفكين",
    colorClass: "bg-team-red",
  },
  {
    name: "د. سارة محمد",
    college: "كلية طب الأسنان - الإسكندرية",
    job: "أخصائية تقويم الأسنان",
    colorClass: "bg-team-blue",
  },
  {
    name: "د. خالد يوسف",
    college: "كلية طب الأسنان - عين شمس",
    job: "أخصائي طب الأسنان التجميلي",
    colorClass: "bg-team-green",
  },
  {
    name: "د. منى علي",
    college: "كلية طب الأسنان - المنصورة",
    job: "أخصائية علاج جذور الأسنان",
    colorClass: "bg-team-orange",
  },
  {
    name: "د. هاني إبراهيم",
    college: "كلية طب الأسنان - الأزهر",
    job: "أخصائي زراعة الأسنان",
    colorClass: "bg-team-sky",
  },
];

const Team = () => {

  return (
    <>
    <div id='team' className="relative mt-16 w-[90%] mx-auto">
      <div className='flex mx-auto items-center justify-end mt-16 w-full'>
        <h1 className='text-2xl font-bold'>فريق العمل</h1>
      </div>
      </div>
      <div className='mr-auto flex direction-rtl overflow-x-auto pt-10 w-[95%] gap-6'>
        {teamMembers.map((member, index) => (
          <TeamCard member={member} key={index}/>
        ))}
        </div>
    </>
  );
};

export default Team;
