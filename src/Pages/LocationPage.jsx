import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import MapComponent from '../components/Map/Map';

const LocationPage = () => {
    return (
        <>
        <div className="max-w-5xl mx-auto mt-10 p-5">
            <h1 className="text-3xl font-bold text-end mb-4">تواصل معنا</h1>

            {/* Contact Details */}
            <div className="space-y-5 text-center">
                {/* Address */}
                <div className='h-32 gap-2 flex flex-col justify-center items-center shadow-md'>
                    <h2 className="text-xl font-semibold">العنوان</h2>
                    <p>شارع البحر مبنى طنطا تاون مول الدور الخامس</p>
                </div>

                {/* WhatsApp */}
                <div className='h-32 gap-2 flex flex-col justify-center items-center shadow-md'>
                    <h2 className="text-xl font-semibold">واتساب</h2>
                    <p className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
                        <a href="https://wa.me/201101161961" target="_blank" rel="noopener noreferrer">
                            +201101161961
                        </a>
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="space-y-3 h-32 gap-2 flex flex-col justify-center items-center shadow-md">
                    <h2 className="text-xl font-semibold">تابعنا على</h2>
                    <div className="flex justify-center gap-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-3xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-3xl" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className="text-primary-text text-3xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Map Component */}
        </div>
        <div className="mt-10 mb-16 w-full">
            <h2 className="text-xl font-semibold text-center mb-5">موقعنا على الخريطة</h2>
            <MapComponent /> {/* Place your existing MapComponent here */}
        </div>
        </>
    );
};

export default LocationPage;
