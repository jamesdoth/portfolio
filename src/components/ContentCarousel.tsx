import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import ExpandedContentModal from './ExpandedContentModal';

interface ContentCarouselProps {
  contents: Array<{ title: string; content: React.ReactNode }>;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ contents }) => {
  const [activeDot, setActiveDot] = React.useState(0);
  const [expandedCardIndex, setExpandedCardIndex] = React.useState<
    number | null
  >(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<React.ReactNode>(null);
  const sliderRef = React.useRef<Slider>(null);

  const handleCardClick = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    customPaging: (i: number) => (
      <div
        className={`bg-white w-2 h-2 my-5 rounded-full ${
          i === activeDot ? 'opacity-100' : 'opacity-50'
        } cursor-pointer`}
      />
    ),
    beforeChange: (current: number, next: number) => setActiveDot(next),
    arrows: false,
  };

  const contentGrid = contents.reduce((acc, content, index) => {
    const rowIndex = Math.floor(index / 2);
    const colIndex = index % 2;

    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }

    const expanded = expandedCardIndex === index;

    if (expandedCardIndex === null || expanded) {
      acc[rowIndex][colIndex] = (
        <Card
          key={index}
          title={content.title}
          content={content.content}
          onClick={() => handleCardClick(content.content)}
          expanded={expanded}
        />
      );
    }
    return acc;
  }, [] as JSX.Element[][]);

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {contentGrid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((col, colIndex) => (
              <div key={colIndex}>{col}</div>
            ))}
          </div>
        ))}
      </Slider>
      {isModalOpen && (
        <ExpandedContentModal
          isOpen={isModalOpen}
          content={modalContent}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ContentCarousel;
