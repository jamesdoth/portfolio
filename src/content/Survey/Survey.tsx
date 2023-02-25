import { useState } from 'react';

export function Survey() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRatingClicked = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className='flex justify-center'>
      <form
        onSubmit={handleFormSubmitted}
        className='bg-slate-900 p-10 rounded-3xl'
      >
        <img
          src='/star.svg'
          className='bg-slate-700 rounded-full p-3 h-9 w-9 mb-4'
        ></img>
        <h1 className='text-slate-200 text-2xl font-semibold mb-2'>
          How did we do?
        </h1>
        <p className='text-slate-500 mb-5'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering.
        </p>
        {/* {selectedRating} */}
        {/* used to verify if we are updating state*/}
        {/* mx-3 was max for individual buttons. mx inside div was the correct way to move buttons closer together */}
        <div className='flex justify-between'>
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              type='button'
              onClick={() => handleRatingClicked(rating)}
              className='bg-slate-800 hover:bg-slate-400 focus:bg-orange-500 rounded-full w-12 h-12 text-slate-200'
            >
              {rating}
            </button>
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            disabled={selectedRating === undefined}
            className='rounded-3xl w-full p-2 text-sm tracking-2 font-medium text-slate-200 bg-orange-500 hover:bg-slate-200 hover:text-orange-500 focus:bg-slate-200 focus:text-orange-500 mt-6'
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
