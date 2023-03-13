import { useState } from 'react';

// should probably just use react hook form library

const CCForm = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  const [errorMessageCCName, setErrorMessageCCName] = useState('');
  const [errorMessageExpMonth, setErrorMessageExpMonth] = useState('');
  const [errorMessageExpYear, setErrorMessageExpYear] = useState('');

  const [errorMessageCardNumber, setErrorMessageCardNumber] = useState('');
  const [cardImage, setCardImage] = useState('');
  const [maxLength, setMaxLength] = useState(16);

  const handleCardholderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardholderName(e.target.value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value;
    setCardNumber(e.target.value);

    if (!/^\d{1,16}$/.test(cardNumber)) {
      setErrorMessageCardNumber('Invalid card number');
      setCardImage('');
      return;
    }

    setErrorMessageCardNumber('');
    if (cardNumber.startsWith('4')) {
      setCardImage('visa');
    } else if (/^5[1-5]/.test(cardNumber)) {
      setCardImage('mastercard');
    } else if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
      setCardImage('amex');
    } else {
      setCardImage('default');
    }
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cardholderName) {
      setErrorMessageCCName('Cardholder name is required');
    } else if (!/^[a-zA-Z]+([- ]?[a-zA-Z]+)*$/.test(cardholderName)) {
      setErrorMessageCCName('Cardholder name is invalid');
    } else {
      setErrorMessageCCName('');
    }
    if (!expMonth) {
      setErrorMessageExpMonth('Month is required');
    } else if (!/^(0[1-9]|1[0-2])$/.test(expMonth)) {
      setErrorMessageExpMonth('Invalid');
    } else {
      setErrorMessageExpMonth('');
    }
    if (!expYear) {
      setErrorMessageExpYear('Year is required');
    } else if (!/^\d{2}$/.test(expYear)) {
      setErrorMessageExpYear('Invalid');
    } else {
      setErrorMessageExpYear('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          {errorMessageCCName && (
            <p className='text-red-600 text-sm'>{errorMessageCCName}</p>
          )}
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
          {errorMessageCardNumber && (
            <p className='text-red-600 text-sm'>{errorMessageCardNumber}</p>
          )}
          {cardImage && (
            <div className='mt-2'>
              <img src={`/images/${cardImage}.png`} alt={cardImage} />
            </div>
          )}
        </div>
        <div className='flex mb-4'>
          <div className='w-1/2 mr-2'>
            <label className='block font-medium mb-1'>EXP. DATE (MM/YY)</label>
            <div className='flex'>
              <div>
                <input
                  type='text'
                  placeholder='MM'
                  className='w-2/3 p-2 border-2 border-gray-200 rounded text-center'
                  onChange={handleExpMonthChange}
                  maxLength={2}
                />
                {errorMessageExpMonth && (
                  <p className='text-red-600 text-sm'>{errorMessageExpMonth}</p>
                )}
              </div>
              <div>
                <input
                  type='text'
                  placeholder='YY'
                  className='w-2/3 p-2 border-2 border-gray-200 rounded text-center'
                  value={expYear}
                  onChange={handleExpYearChange}
                  maxLength={2}
                />
                {errorMessageExpYear && (
                  <p className='text-red-600 text-sm'>{errorMessageExpYear}</p>
                )}
              </div>
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
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
          >
            CONFIRM
          </button>
        </div>
      </div>
    </form>
  );
};

export default CCForm;
