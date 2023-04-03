import React, { useState } from 'react';

const images = [
  { name: 'Image 1', src: '/images/image1.png' },
  { name: 'Image 2', src: '/images/image2.png' },
  { name: 'Image 3', src: '/images/image3.png' },
];

const Gallery = () => {
  const [searchInput, setSearchInput] = useState('');

  const filteredImages = images.filter((image) =>
    image.name
      .toLowerCase()
      .replaceAll(' ', '')
      .includes(searchInput.toLowerCase().replaceAll(' ', ''))
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-md p-4'>
        <input
          type='text'
          className='w-full p-2 rounded-md shadow-md'
          placeholder='Search images...'
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {filteredImages.map((image, index) => (
          <div key={index} className='w-1/3 p-4'>
            <div className='bg-gray-100'>
              <img
                src={image.src}
                alt={image.name}
                className='max-w-full max-h-full object-cover'
              />
            </div>
            <p className='mt-2 text-center font-medium'>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
