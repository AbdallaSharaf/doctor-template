import React from 'react';
import { Link } from 'react-router-dom';

// Import all images using Vite's import.meta.glob
const allImages = import.meta.glob('../assets/gallery/*.{jpg,png}', { eager: true });

// Store all images into an array
const images = Object.keys(allImages).map((path) => ({
  url: allImages[path].default,
  name: path.split('/').pop().split('.')[0],
}));

const GalleryPage = () => {
    console.log(images)
  return (
    <div className="mt-10 mb-20 w-[90%] mx-auto">
      <h1 className='text-2xl text-center font-bold mb-5'>تجارب عملائنا</h1>
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Link to={`/gallery/${image.name}`} key={index}>
            <div className="flex flex-col items-center justify-center">
              <img src={image.url} alt={image.name} className="rounded-md shadow-md" />
              <h2 className="my-2">{image.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
