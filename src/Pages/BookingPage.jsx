import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

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
                text: `اسم: ${values.name}\nرقم الهاتف: ${values.phone}\nالعمر: ${values.age}\nالجنس: ${values.gender === 'male' ? 'ذكر' : 'أنثى'}\nالمشكلة: ${values.problem}\nالتاريخ: ${date.toLocaleDateString()}\nالوقت: ${selectedTime}`,
                icon: 'success',
                confirmButtonText: 'موافق',
            });
            setSubmitted(true);
        },
    });

    return (
        <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-5 text-center">حجز موعد</h2>

            <Calendar
                onChange={setDate}
                value={date}
                minDate={new Date()} // Disable past dates
                tileDisabled={({ date }) => {
                    const day = date.getDay();
                    return day === 5 || day === 6 || date < new Date(); // Disable Fridays and Saturdays
                }}
            />

            <div className="mt-5">
                <h3 className="text-lg font-semibold">اختر الوقت المتاح:</h3>
                <select
                    className="border rounded p-2 w-full mt-2"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    disabled={availableTimes.length === 0}
                >
                    <option value="">اختر الوقت</option>
                    {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>

            <form onSubmit={formik.handleSubmit} className="mt-5">
                <div>
                    <label htmlFor="name" className="block mb-1">
                        الاسم:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded p-2 w-full"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-600">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="mt-3">
                    <label htmlFor="phone" className="block mb-1">
                        رقم الهاتف:
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="border rounded p-2 w-full"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red-600">{formik.errors.phone}</div>
                    ) : null}
                </div>

                <div className="mt-3">
                    <label htmlFor="age" className="block mb-1">
                        العمر:
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        className="border rounded p-2 w-full"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                    />
                    {formik.touched.age && formik.errors.age ? (
                        <div className="text-red-600">{formik.errors.age}</div>
                    ) : null}
                </div>

                <div className="mt-3">
                    <label htmlFor="gender" className="block mb-1">
                        الجنس:
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        className="border rounded p-2 w-full"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                    >
                        <option value="">اختر الجنس</option>
                        <option value="male">ذكر</option>
                        <option value="female">أنثى</option>
                    </select>
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="text-red-600">{formik.errors.gender}</div>
                    ) : null}
                </div>

                <div className="mt-3">
                    <label htmlFor="problem" className="block mb-1">
                        الوصف:
                    </label>
                    <textarea
                        id="problem"
                        name="problem"
                        className="border rounded p-2 w-full"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.problem}
                    />
                    {formik.touched.problem && formik.errors.problem ? (
                        <div className="text-red-600">{formik.errors.problem}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2 mt-5 w-full"
                    disabled={!selectedTime || submitted}
                >
                    تأكيد الحجز
                </button>
            </form>
        </div>
    );
};

export default BookingPage;
