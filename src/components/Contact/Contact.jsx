import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { faLocationDot, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import axiosInstance from '../../helpers/Axios'; // Ensure Axios instance is imported
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha(); // use this to trigger reCAPTCHA
  
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, 'الاسم يجب أن يحتوي على حروف عربية أو إنجليزية فقط')
        .min(3, 'الاسم يجب أن يكون على الأقل ٣ أحرف')
        .required('الاسم مطلوب'),
      phone: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, 'رقم الهاتف غير صحيح')
        .required('رقم الهاتف مطلوب'),
      subject: Yup.string()
        .required('العنوان مطلوب'),
      message: Yup.string()
        .required('الرسالة مطلوبة'),
    }),
    onSubmit: async (values) => {
      if (!executeRecaptcha) {
        console.error('reCAPTCHA not loaded');
        return;
      }
    
      try {
        // Trigger reCAPTCHA and get the token
        const recaptchaToken = await executeRecaptcha('submit_form');
    
        if (!recaptchaToken) {
          console.error('Failed to retrieve reCAPTCHA token');
          return;
        }
    
        const contactData = {
          name: values.name,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          timestamp: new Date().toISOString(),
          unread: true,
          isArchived: false,
          recaptchaToken, // Include the reCAPTCHA token
        };
    
        // Push contact form data to Firebase
        await axiosInstance.post('/messages.json', contactData);
    
        Swal.fire({
          title: 'عمل جيد',
          text: 'تم إرسال الرسالة بنجاح',
          icon: 'success',
        });
    
        formik.resetForm();
      } catch (error) {
        console.error('Error submitting contact form:', error);
        Swal.fire({
          title: 'خطأ!',
          text: 'حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى لاحقاً.',
          icon: 'error',
        });
      }
    }
    
  });
  // Google Maps and WhatsApp links
  const openGoogleMaps = () => {
    window.open('https://goo.gl/maps/your-location', '_blank');
  };

  const sendWhatsApp = () => {
    window.open('https://wa.me/201101161961', '_blank');
  };

  return (
    <div id="contact" className="mt-16 w-[90%] mx-auto text-end lg:flex flex-row-reverse gap-10">
      <div className='lg:w-2/5'>
        <h1 className='text-2xl font-bold'>تواصل معانا</h1>   
        <h1 className='my-4 font-semibold'>احصل على إجابات ونصائح من المستشارين المحترفين</h1>
          <div 
            onClick={openGoogleMaps} 
            className='cursor-pointer flex items-center justify-end group py-3 border-b-[1px] border-gray-500 border-opacity-10 gap-4'
            >
            <div>
              <h1 className='font-semibold py-1'>العنوان</h1>
              <p className='text-sm'>شارع البحر مبنى طنطا تاون مول الدور الخامس</p>
            </div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className='text-primary-text size-8'
              />
          </div>
          <div 
            onClick={sendWhatsApp} 
            className='cursor-pointer flex items-center justify-end group py-3 border-b-[1px] border-gray-500 border-opacity-10 gap-3'
          >
            <div>
              <h1 className='font-semibold py-1'>كلمنا</h1>
              <p className='text-sm'>+20 110 1161961</p>
            </div>
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className='text-primary-text size-9'
              />
          </div>
          <div className='flex items-center group py-3 justify-end gap-4'>
            <div>
              <h1 className='font-semibold py-1'>ابعتلنا ايميل</h1>
              <p className='text-sm'>info@example.com</p>
            </div>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-primary-text size-8'
              />
          </div>
          </div>
          <div className='lg:w-3/5'>
          <h1 className='text-2xl font-bold lg:mt-0 mt-10'>ابعتلنا رسالة</h1>   
          <form onSubmit={formik.handleSubmit} className='mt-6'>
              <div className='mb-4 w-full'>
                <input
                  className='mb-1 px-5 py-3 w-full border-[1px] text-end border-gray-200 text-primary-text bg-primary-bg focus:border-gray-400 focus:outline-none'
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
                  className='mb-1 px-5 py-3 w-full border-[1px] text-end border-gray-200 text-primary-text bg-primary-bg focus:border-gray-400 focus:outline-none'
                  {...formik.getFieldProps('phone')}
                  type="text"
                  placeholder="رقم الهاتف"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p className='text-red-800 w-full'>{formik.errors.phone}</p>
                ) : null}
              </div>
            <div className='mb-4 w-full'>
              <input
                className='mb-1 px-5 py-3 w-full border-[1px] text-end border-gray-200 text-primary-text bg-primary-bg focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('subject')}
                type="text"
                placeholder="عنوان رسالتك"
                />
              {formik.touched.subject && formik.errors.subject ? (
                <p className='text-red-800 w-full'>{formik.errors.subject}</p>
              ) : null}
            </div>
            <div className='w-full'>
              <textarea
                className='w-full h-[110px] px-5 py-3 border-[1px] text-end border-gray-200 text-primary-text bg-primary-bg focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('message')}
                placeholder="رسالتك"
                />
              {formik.touched.message && formik.errors.message ? (
                <p className='text-red-800'>{formik.errors.message}</p>
              ) : null}
            </div>
            <div className='w-auto flex lg:justify-start justify-center'>
              <button className='px-7 py-3 mt-5 bg-primary rounded-sm lg:mx-0 mx-auto text-white font-bold' type="submit"><FontAwesomeIcon className='mr-2' icon={faPaperPlane}/>ارسال الرسالة</button>
            </div>
          </form>
    </div>
    </div>
  );
};

const Contact = () => (
  <GoogleReCaptchaProvider reCaptchaKey="6LcHumcqAAAAAPkBItqZp4rMXtN322MHmySsyqje">
    <ContactForm />
  </GoogleReCaptchaProvider>
);

export default Contact;
