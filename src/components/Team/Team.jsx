import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard/TeamCard';
import axios from '../../helpers/Axios';
import LoadingSpinner from '../../helpers/LoadingSpinner';

const Team = () => {
  const [loading, setLoading] = useState(true); // State for loading
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('/teamMembers.json');
        const data = response.data;

        const teamArray = data ? Object.values(data) : [];
        
        // Sort team members by order property
        const sortedTeamMembers = teamArray.sort((a, b) => a.order - b.order);
        
        setTeamMembers(sortedTeamMembers);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      <div id='team' className="relative mt-16 w-[90%] mx-auto">
        <div className='flex mx-auto items-center justify-end mt-16 w-full'>
          <h1 className='text-2xl font-bold'>فريق العمل</h1>
        </div>
      </div>
      {loading ? ( // Show spinner while loading
        <div className='flex  justify-center items-center w-full h-96 py-10'><LoadingSpinner /></div>
      ) : (
        <div className='mr-auto scrollbar-hide flex direction-rtl overflow-x-auto pt-10 w-[95%] gap-6'>
          {teamMembers.map((member, index) => (
            member.isVisible && <TeamCard member={member} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Team;
