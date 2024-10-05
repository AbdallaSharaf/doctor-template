import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { faLocationDot, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .matches(/^[\u0600-\u06FF\s]+$/, 'الاسم يجب أن يحتوي على حروف عربية فقط')
            .min(3, 'الاسم يجب أن يكون على الأقل ٣ أحرف')
            .required('الاسم مطلوب'),
          email: Yup.string()
            .email('صيغة البريد الإلكتروني غير صحيحة')
            .required('البريد الإلكتروني مطلوب'),
          subject: Yup.string()
            .required('العنوان مطلوب'),
          message: Yup.string()
            .required('الرسالة مطلوبة'),
        }),
        onSubmit: (values) => {
          console.log(values);
          Swal.fire({
            title: "عمل جيد!",
            text: "تم إرسال الرسالة بنجاح!",
            icon: "success"
          });
        },
      });

  return (
    <div id="contact" className="mt-16 w-[90%] mx-auto text-end">
        <h1 className='text-2xl font-bold'>تواصل معانا</h1>   
        <h1 className='my-4 font-semibold'>احصل على إجابات ونصائح من المستشارين المحترفين</h1>
          <div className='flex items-center justify-end group py-3 border-b-[1px] border-gray-500 border-opacity-10 gap-4'>
            <div>
              <h1 className='font-semibold py-1'>العنوان</h1>
              <p className='text-sm'>شارع البحر مبنى طنطا تاون مول الدور الخامس</p>
            </div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className='text-primary size-8'
            />
          </div>
          <div className='flex items-center justify-end group py-3 border-b-[1px] border-gray-500 border-opacity-10 gap-4'>
            <div>
              <h1 className='font-semibold py-1'>كلمنا</h1>
              <p className='text-sm'>+20 110 1161961</p>
            </div>
            <FontAwesomeIcon
              icon={faPhone}
              className='text-primary size-8'
            />
          </div>
          <div className='flex items-center group py-3 justify-end gap-4'>
            <div>
              <h1 className='font-semibold py-1'>ابعتلنا ايميل</h1>
              <p className='text-sm'>info@example.com</p>
            </div>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-primary size-8'
            />
          </div>
          <h1 className='text-2xl font-bold mt-10'>ابعتلنا رسالة</h1>   
          <form onSubmit={formik.handleSubmit} className='mt-6'>
              <div className='mb-4 w-full'>
                <input
                  className='mb-1 px-5 py-3 w-full border-[1px] text-end text-black border-gray-200 focus:border-gray-400 focus:outline-none'
                  {...formik.getFieldProps('name')}
                  type="text"
                  placeholder="الاسم"
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className='text-red-800 w-full'>{formik.errors.name}</p>
                ) : null}
              </div>
              <div className='mb-4 w-full'>
                <input
                  className='mb-1 px-5 py-3 text-black w-full border-[1px] text-end border-gray-200 focus:border-gray-400 focus:outline-none'
                  {...formik.getFieldProps('email')}
                  type="email"
                  placeholder="ميل"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className='text-red-800 w-full'>{formik.errors.email}</p>
                ) : null}
              </div>
            <div className='mb-4 w-full'>
              <input
                className='mb-1 px-5 py-3 w-full border-[1px] text-end text-black border-gray-200 focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('subject')}
                type="text"
                placeholder="العنوان"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className='text-red-800 w-full'>{formik.errors.subject}</p>
              ) : null}
            </div>
            <div className='w-full'>
              <textarea
                className='w-full h-[110px] px-5 py-3 text-black border-[1px] text-end border-gray-200 focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('message')}
                placeholder="رسالتك"
              />
              {formik.touched.message && formik.errors.message ? (
                <p className='text-red-800'>{formik.errors.message}</p>
              ) : null}
            </div>
            <div className='w-auto flex justify-center'>
              <button className='px-7 py-3 mt-5 bg-primary rounded-sm mx-auto text-white font-bold' type="submit"><FontAwesomeIcon className='mr-2' icon={faPaperPlane}/>ارسال الرسالة</button>
            </div>
          </form>
    </div>
  );
};

export default Contact;
