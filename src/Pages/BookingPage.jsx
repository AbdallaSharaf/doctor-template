import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Define available time slots based on the selected date
const getAvailableTimes = (date) => {
    const day = date.getDay(); // Get the current day (0 = Sunday, 6 = Saturday)

    // Disable time selection for Fridays (5) and Saturdays (6)
    if (day === 5 || day === 6) {
        return []; // No available times
    }

    return [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '01:00 PM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM',
    ];
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
    const [date, setDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const times = getAvailableTimes(date);
        setAvailableTimes(times);
        setSelectedTime(''); // Reset selected time when date changes
    }, [date]);

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
    html: `<pre>اسم: ${values.name}<br>رقم الهاتف: ${values.phone}<br>العمر: ${values.age}<br>الجنس: ${values.gender === 'male' ? 'ذكر' : 'أنثى'}<br>المشكلة: ${values.problem}<br>التاريخ: ${date.toLocaleDateString()}<br>الوقت: ${selectedTime}</pre>`,
    icon: 'success',
    confirmButtonText: 'موافق',
            }).then(() => {
                navigate('/'); // Redirect to homepage after confirmation
            });
            setSubmitted(true);
        },
    });

    return (
        <div className="max-w-lg mx-auto mt-10 p-5 border text-right rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-5">حجز موعد</h2>

            <Calendar
                className="mx-auto w-full"
                onChange={setDate}
                value={date}
                minDate={new Date()} 
                locale="ar"
                tileDisabled={({ date }) => {
                    const day = date.getDay();
                    return day === 5 || day === 6 || date < new Date(); // Disable Fridays and Saturdays
                }}
            />

            <div className="mt-5">
                <div className="grid grid-cols-2 gap-3 mt-2">
                    {availableTimes.length === 0 ? (
                        <div className="col-span-2 text-red-600">لا توجد أوقات متاحة لهذا اليوم</div>
                    ) : (
                        availableTimes.map((time, index) => (
                            <div
                                key={index}
                                className={`p-3 border rounded-lg text-center cursor-pointer ${
                                    selectedTime === time ? 'bg-primary text-white' : 'bg-gray-200'
                                }`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </div>
                        ))
                    )}
                </div>
            </div>

            <form onSubmit={formik.handleSubmit} className="mt-5 mb-20">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded p-2 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder='الاسم ثلاثي'
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-600">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="mt-3">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="border rounded p-2 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder='رقم التليفون'
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red-600">{formik.errors.phone}</div>
                    ) : null}
                </div>

                <div className="mt-3">
                    <input
                        type="number"
                        id="age"
                        name="age"
                        className="border rounded p-2 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        placeholder='السن'
                    />
                    {formik.touched.age && formik.errors.age ? (
                        <div className="text-red-600">{formik.errors.age}</div>
                    ) : null}
                </div>

                <div className="mt-3">
                    <div className="flex space-x-4 justify-between">
                        <button
                            type="button"
                            className={`w-full p-2 rounded border ${
                                formik.values.gender === 'male' ? 'bg-primary text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => formik.setFieldValue('gender', 'male')}
                        >
                            ذكر
                        </button>
                        <button
                            type="button"
                            className={`w-full p-2 rounded border ${
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


                <div className="mt-3">
                    <textarea
                        id="problem"
                        name="problem"
                        className="border rounded p-2 w-full text-right"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.problem}
                        placeholder='مشكلتك'
                    />
                    {formik.touched.problem && formik.errors.problem ? (
                        <div className="text-red-600">{formik.errors.problem}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white rounded px-4 py-2 mt-5 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!selectedTime || !formik.isValid || !formik.dirty || submitted}
                >
                    تأكيد الحجز
                </button>
            </form>
        </div>
    );
};

export default BookingPage;
