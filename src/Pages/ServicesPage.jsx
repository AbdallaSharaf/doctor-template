import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

const servicesArray = [
    { name: 'زراعة الاسنان', to: '/services/زراعة الاسنان', description: 'تعويض الأسنان المفقودة أو التالفة', icon: faTooth, color: '#ff6347' },
    { name: 'عمليات ضرس العقل', to: '/services/عمليات ضرس العقل', description: 'إزالة ضرس العقل المتأثر', icon: faTooth, color: '#4682b4' },
    { name: 'التقويم', to: '/services/التقويم', description: 'تصحيح اصطفاف الأسنان والفكين', icon: faTooth, color: '#32cd32' },
    { name: 'الحشوات التجميلية', to: '/services/الحشوات التجميلية', description: 'إعادة بناء الأسنان المتضررة', icon: faTooth, color: '#ff4500' },
    { name: 'تنظيف الأسنان', to: '/services/تنظيف الأسنان', description: 'الحفاظ على صحة الأسنان من الترسبات', icon: faTooth, color: '#1e90ff' },
];

const ServicesListPage = () => {
  return (
    <div className="container mx-auto mt-10 px-4 text-right mb-20">
      <h1 className="text-3xl font-bold mb-6">جميع الخدمات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        {servicesArray.map((service, id) => (
          <div key={id} className="bg-white shadow-md w-[90%] mx-auto rounded-lg p-6 h-[200px]">
            <Link to={service.to} className="flex flex-col items-end">
              <FontAwesomeIcon icon={service.icon} className="text-4xl  mb-4" color={service.color} />
              <h2 className="text-xl font-bold mb-2 ">{service.name}</h2>
              <p className="text-sm  text-gray-600">{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesListPage;
