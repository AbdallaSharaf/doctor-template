import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex justify-center w-full text-xs items-center p-3 mb-[60px] bg-black text-white">
      <Link to='https://www.facebook.com/sabergroupeg'>
        <FontAwesomeIcon icon={faCopyright} className="mr-2" />
        <span>powered by Saber Group</span>
      </Link>
    </div>
  );
};

export default Footer;
