import { useState } from 'react';

const CCForm = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardholderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardholderName(e.target.value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpMonth(e.target.value);
  };

  const handleExpYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpYear(e.target.value);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(e.target.value);
  };

  return (
    <div className='max-w-md mx-auto mt-8'>
      <div className='mb-4'>
        <label className='block font-medium mb-1'>CARDHOLDER NAME</label>
        <input
          type='text'
          placeholder='e.g. Jane Appleseed'
          className='w-full p-2 border-2 border-gray-200 rounded'
          value={cardholderName}
          onChange={handleCardholderNameChange}
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-1'>CARD NUMBER</label>
        <input
          type='text'
          placeholder='e.g. 1234 5678 9123 0000'
          className='w-full p-2 border-2 border-gray-200 rounded'
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>
      <div className='flex mb-4'>
        <div className='w-1/2 mr-2'>
          <label className='block font-medium mb-1'>EXP. DATE (MM/YY)</label>
          <div className='flex'>
            <input
              type='text'
              placeholder='MM'
              className='w-1/2 p-2 border-2 border-gray-200 rounded text-center'
              value={expMonth}
              onChange={handleExpMonthChange}
            />
            <span className='flex items-center justify-center w-8 text-gray-400'>
              /
            </span>
            <input
              type='text'
              placeholder='YY'
              className='w-1/2 p-2 border-2 border-gray-200 rounded text-center'
              value={expYear}
              onChange={handleExpYearChange}
            />
          </div>
        </div>
        <div className='w-1/2 ml-2'>
          <label className='block font-medium mb-1'>CVC</label>
          <input
            type='text'
            placeholder='e.g. 123'
            className='w-full p-2 border-2 border-gray-200 rounded'
            value={cvc}
            onChange={handleCvcChange}
          />
        </div>
      </div>
      <div className='mb-4 flex justify-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default CCForm;
