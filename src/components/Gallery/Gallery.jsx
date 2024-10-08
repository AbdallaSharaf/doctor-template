import React from 'react';
import { Link } from "react-router-dom";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import iconImage from '../../assets/images/download-icon-double+arrow+doublechevronleftright+left+right+arrow+icon-1320185729067056308_24.png'; // Import the image

const allImages = import.meta.glob('../../assets/images/gallery/*.{jpg,png}', { eager: true });

const delimiterIconStyles = {
  width: '30px',
  height: '30px',
  backgroundSize: 'cover',
  borderRadius: 'none',
  backgroundImage: `url(${iconImage})`,
  animation: 'pulse 5s infinite',
};

const images = [];

// Store all images directly into the images array
Object.keys(allImages).forEach((path) => {
  const imageUrl = allImages[path].default;
  const imageName = path.split('/').pop().split('.')[0];
  images.push({ url: imageUrl, name: imageName });
});

const minifiedImages = images.slice(2)

const Gallery = () => {
  return (
    <div id="gallery" className="mt-16">
      <div className='flex mx-auto items-center justify-between mt-10 w-[90%]'>
        <Link to='/gallery' className='text-primary text-xs font-thin'>عرض الكل</Link>
        <h1 className='text-2xl font-bold'>تجارب عملائنا</h1>
      </div>

      {/* Image Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {minifiedImages.map((image, index, array) => {
          const nextIndex = (index + 1) % array.length; // Loop to the first image when reaching the last
          return (
            <Link key={index} to={`/gallery/${image.name}`}>
            <div  className="flex flex-col items-center justify-center">
              <ReactBeforeSliderComponent
                firstImage={{ imageUrl: image.url, alt: image.name }}
                secondImage={{ imageUrl: array[nextIndex].url, alt: array[nextIndex].name }} // Safely handle next image
                delimiterIconStyles={delimiterIconStyles}
              />
              <h2 className="my-2">{image.name}</h2>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Gallery;
