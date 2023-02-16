export function Survey() {
  return (
    <div className='flex justify-center'>
      <div className='bg-slate-900 p-10 rounded-3xl'>
        <img
          src='/star.svg'
          className='bg-slate-700 rounded-full p-3 h-9 w-9 mb-2'
        ></img>
        <h1 className='text-slate-200 text-2xl font-semibold mb-2'>
          How did we do?
        </h1>
        <p className='text-slate-500'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering.
        </p>
        <button className='border rounded-full text-slate-200'>1</button>
        <button className='border rounded-full text-slate-200'>2</button>
        <button className='border rounded-full text-slate-200'>3</button>
        <button className='border rounded-full text-slate-200'>4</button>
        <button className='border rounded-full text-slate-200'>5</button>
        <button className='border rounded text-slate-200'>Submit</button>
      </div>
    </div>
  );
}
