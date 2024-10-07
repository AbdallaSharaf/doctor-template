import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

// Define available time slots based on the selected date
const getAvailableTimes = (date) => {
    const day = date.getDay(); // Get the current day (0 = Sunday, 6 = Saturday)

    // Disable time selection for Fridays (5) and Saturdays (6)
    if (day === 5 ) {
        return []; // No available times
    }

    return [
        '09:00 ص',
        '10:00 ص',
        '11:00 ص',
        '01:00 م',
        '02:00 م',
        '03:00 م',
        '04:00 م',
        '05:00 م',
        '06:00 م',
        '07:00 م',
        '08:00 م',
    ];
};

// Generate dates for the next week excluding Fridays
const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 2);
    
    for (let i = 0; i < 8; i++) {
        const nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + i);

        if (nextDate.getDay() !== 5) { // Exclude Fridays
            dates.push(nextDate);
        }
    }
    return dates;
};

// Form validation schema
const validationSchema = Yup.object({
    name: Yup.string()
        .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'الاسم يجب أن يحتوي على حروف عربية أو إنجليزية فقط')
        .min(3, 'الاسم يجب أن يكون على الأقل ٣ أحرف')
        .required('الاسم مطلوب'),
    phone: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, 'رقم الهاتف غير صحيح')
        .required('رقم الهاتف مطلوب'),
    age: Yup.number()
        .min(1, 'يجب أن يكون العمر أكبر من 0')
        .max(120, 'العمر غير صحيح')
        .required('العمر مطلوب'),
    gender: Yup.string()
        .oneOf(['male', 'female'], 'يرجى اختيار الجنس')
        .required('الجنس مطلوب'),
    problem: Yup.string().required('الوصف مطلوب'),
});

const BookingPage = () => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const dates = getNextWeekDates(); // Get next week dates

    useEffect(() => {
        const times = getAvailableTimes(selectedDate);
        setAvailableTimes(times);
        setSelectedTime(''); // Reset selected time when date changes
    }, [selectedDate]);

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            age: '',
            gender: '',
            problem: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            Swal.fire({
                title: 'تم الحجز بنجاح!',
                html: `<pre>اسم: ${values.name}<br>رقم الهاتف: ${values.phone}<br>العمر: ${values.age}<br>الجنس: ${values.gender === 'male' ? 'ذكر' : 'أنثى'}<br>المشكلة: ${values.problem}<br>التاريخ: ${selectedDate.toLocaleDateString()}<br>الوقت: ${selectedTime}</pre>`,
                icon: 'success',
                confirmButtonText: 'موافق',
            }).then(() => {
                navigate('/'); // Redirect to homepage after confirmation
            });
            setSubmitted(true);
        },
    });

    return (
        <div className="max-w-lg mx-auto mt-10 p-5  text-right rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-8">احجز معادك</h2>

            <div className="overflow-x-auto  flex gap-4 pb-3 direction-rtl">
                {dates.map((date, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg py-4 transition-all duration-300 ease-in-out px-4 cursor-pointer text-center flex flex-col items-center justify-center ${
                            selectedDate.toDateString() === date.toDateString()
                                ? 'bg-primary text-white'
                                : 'bg-gray-200'
                        }`}
                        onClick={() => setSelectedDate(date)}
                    >   
                        <h1 className='w-[60px] font-semibold text-xl'>{date.getDate()}</h1>
                        <p className='text-sm mt-2 text-black text-opacity-75'>{date.toLocaleDateString('ar-EG', { weekday: 'long'})}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <h1 className='text-xl font-semibold mb-8'>المواعيد المتاحة</h1>
                <div className="grid grid-cols-3 gap-3 mt-2 direction-rtl">
                    {availableTimes.length === 0 ? (
                        <div className="col-span-2 text-red-600">لا توجد أوقات متاحة لهذا اليوم</div>
                    ) : (
                        availableTimes.map((time, index) => (
                            <div
                                key={index}
                                className={`p-3 flex items-center justify-around  border text-sm rounded-lg text-center cursor-pointer transition-all duration-300 ease-in-out ${
                                    selectedTime === time ? 'bg-primary text-white' : 'bg-gray-200'
                                }`}
                                onClick={() => setSelectedTime(time)}
                            >
                                <FontAwesomeIcon className='font-semibold' icon={faClock} />
                                <div className='font-light w-3/4'>{time}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <form onSubmit={formik.handleSubmit} className="mt-12 mb-16">
                <h1 className='text-xl font-semibold mb-8'>سجل بياناتك</h1>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded px-2 py-3 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder='الاسم ثلاثي'
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-600">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="mt-5">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="border rounded px-2 py-3 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder='رقم التليفون'
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red-600">{formik.errors.phone}</div>
                    ) : null}
                </div>

                <div className="mt-5">
                    <input
                        type="number"
                        id="age"
                        name="age"
                        className="border rounded px-2 py-3 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        placeholder='السن'
                    />
                    {formik.touched.age && formik.errors.age ? (
                        <div className="text-red-600">{formik.errors.age}</div>
                    ) : null}
                </div>

                <div className="mt-5">
                    <div className="flex space-x-4 justify-between">
                        <button
                            type="button"
                            className={`w-full px-2 py-3 rounded border ${
                                formik.values.gender === 'male' ? 'bg-primary text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => formik.setFieldValue('gender', 'male')}
                        >
                            ذكر
                        </button>
                        <button
                            type="button"
                            className={`w-full px-2 py-3 rounded border ${
                                formik.values.gender === 'female' ? 'bg-primary text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => formik.setFieldValue('gender', 'female')}
                        >
                            أنثى
                        </button>
                    </div>
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="text-red-600">{formik.errors.gender}</div>
                    ) : null}
                </div>

                <div className="mt-5">
                    <textarea
                        id="problem"
                        name="problem"
                        className="border rounded px-2 py-3 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.problem}
                        placeholder='مشكلتك'
                    />
                    {formik.touched.problem && formik.errors.problem ? (
                        <div className="text-red-600">{formik.errors.problem}</div>
                    ) : null}
                </div>
                <div className='w-full flex justify-center'>
                <button
                    type="submit"
                    className="bg-primary text-white rounded px-4 py-2 mt-5 w-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!selectedTime || submitted}
                >
                    حجز الموعد
                </button>
                </div>
            </form>
        </div>
    );
};

export default BookingPage;
