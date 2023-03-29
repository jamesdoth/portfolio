import React from 'react';

interface ExpandedContentModalProps {
  isOpen: boolean;
  content: React.ReactNode;
  onClose: () => void;
}

const ExpandedContentModal: React.FC<ExpandedContentModalProps> = ({
  isOpen,
  content,
  onClose,
}) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'
      onClick={handleBackdropClick}
    >
      <div className='bg-slate-500 p-4'>
        <div className='text-right'>
          <button className='text-red-500' onClick={onClose}>
            Close
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default ExpandedContentModal;
