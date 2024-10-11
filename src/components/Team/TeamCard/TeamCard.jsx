import React from 'react'
import image from '../../../assets/hero.png';

const TeamCard = ({member}) => {
  return (
    <div className={`text-center flex flex-col p-4 justify-center  items-center ${member.colorClass} bg-opacity-20 rounded-xl h-80`}>
            <div className='h-40 bg-white rounded-3xl relative flex justify-center w-full overflow-visible'>
                <img 
                src={image} 
                className='scale-[1] absolute -bottom-0' 
                alt={member.name} 
                />
            </div>
            <div className='min-w-[160px]'>
            <h2 className="text-base font-bold mt-4">{member.name}</h2>
            <p className='text-[12px] mt-2'>{member.job}</p>
            <p className='text-[12px] mt-2'>{member.college}</p>
            </div>
    </div>
  )
}

export default TeamCard