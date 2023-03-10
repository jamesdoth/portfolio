import { useState } from 'react';

const CardForm = () => {
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
    </div>
  );
};

export default CardForm;
