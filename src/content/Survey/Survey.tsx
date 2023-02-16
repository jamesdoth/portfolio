export function Survey() {
  return (
    <div className='flex justify-center'>
      <div className='bg-slate-900 p-10 rounded-3xl'>
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
        <div className='flex justify-between'>
          <button className='bg-slate-800 rounded-full w-9 h-9 text-slate-200 mx-3'>
            1
          </button>
          <button className='bg-slate-800 rounded-full w-9 h-9 text-slate-200 mx-3'>
            2
          </button>
          <button className='bg-slate-800 rounded-full w-9 h-9 text-slate-200 mx-3'>
            3
          </button>
          <button className='bg-slate-800 rounded-full w-9 h-9 text-slate-200 mx-3'>
            4
          </button>
          <button className='bg-slate-800 rounded-full w-9 h-9 text-slate-200 mx-3'>
            5
          </button>
        </div>
        <div className='flex justify-center'>
          <button className='border rounded text-slate-200 mt-6'>Submit</button>
        </div>
      </div>
    </div>
  );
}
