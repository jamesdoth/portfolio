import React from 'react';

const images = [
  { name: 'Image 1', src: '/images/image1.png' },
  { name: 'Image 2', src: '/images/image2.png' },
  { name: 'Image 3', src: '/images/image3.png' },
];

const Gallery = () => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {images.map((image, index) => (
        <div key={index} className='w-1/3 p-4'>
          <div className='bg-gray-100 h-80'>
            <img
              src={image.src}
              alt={image.name}
              className='w-full h-full object-cover'
            />
          </div>
          <p className='mt-2 text-center font-medium'>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
