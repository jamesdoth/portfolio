import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

interface ContentCarouselProps {
  contents: Array<{ title: string; content: React.ReactNode }>;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ contents }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    customPaging: (i: number) => (
      <div className='bg-white w-2 h-2 rounded-full opacity-50 hover:opacity-100 cursor-pointer' />
    ),
  };

  const contentGrid = contents.reduce((acc, content, index) => {
    const rowIndex = Math.floor(index / 2);
    const colIndex = index % 2;

    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }

    acc[rowIndex][colIndex] = (
      <Card key={index} title={content.title} content={content.content} />
    );
    return acc;
  }, [] as JSX.Element[][]);

  return (
    <Slider {...settings}>
      {contentGrid.map((row, rowIndex) => (
        <div key={rowIndex} className='grid grid-cols-2 gap-1 h-full w-full'>
          {row.map((col, colIndex) => (
            <div key={colIndex}>{col}</div>
          ))}
        </div>
      ))}
    </Slider>
  );
};

export default ContentCarousel;
