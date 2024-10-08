import React from 'react';
import { useParams } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import iconImage from '../assets/Images/chevronIcon.png'; // Import the image

// Import all images using Vite's import.meta.glob
const allImages = import.meta.glob('../assets/Images/gallery/*.{jpg,png}', { eager: true });

const delimiterIconStyles = {
  width: '30px',
  height: '30px',
  backgroundSize: 'cover',
  borderRadius: 'none',
  backgroundImage: `url(${iconImage})`,
  animation: 'pulse 5s infinite',
};

// Combined array of images with static names and descriptions
const images = [];

// Store all images directly into the images array with names and descriptions
Object.keys(allImages).forEach((path) => {
  const imageUrl = allImages[path].default;
  const imageName = "تحول رائع"; // Use a static name for all images
  const imageDescription = "تظهر هذه الصورة الفرق المذهل قبل وبعد. الجهود المبذولة لتحسين الجودة واضحة في كل التفاصيل. التحول الذي تم تحقيقه هنا هو شهادة على العمل الجاد والاحترافية."; // Static description for all images

  images.push({
    url: imageUrl,
    name: imageName,
    description: imageDescription,
  });
});

const SpecificPhotoPage = () => {
  const { photoName } = useParams(); // Get the photo name from the URL
  const currentImageIndex = images.findIndex(image => image.url.includes(photoName)); // Find the specific image index

  if (currentImageIndex === -1) {
    return <div>Image not found!</div>; // Handle case where image is not found
  }

  const currentImage = images[currentImageIndex];
  const nextIndex = (currentImageIndex + 1) % images.length; // Loop to the first image when reaching the last
  const nextImage = images[nextIndex];

  return (
    <div className="mt-10 mb-20 w-[90%] mx-auto">
      <div className="flex justify-center">
        <ReactBeforeSliderComponent
          firstImage={{ imageUrl: currentImage.url }}
          secondImage={{ imageUrl: nextImage.url }} // Safely handle next image
          delimiterIconStyles={delimiterIconStyles}
        />
      </div>
      <h1 className="text-2xl mt-6 font-bold text-right">{currentImage.name}</h1>
      <p className="text-right mt-4">{currentImage.description}</p>
    </div>
  );
};

export default SpecificPhotoPage;
