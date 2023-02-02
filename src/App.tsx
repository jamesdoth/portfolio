import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <body className='min-h-screen bg-slate-800'>
      <div id='first-section' className='flex h-screen justify-center items-center'>
        <div className='flex flex-col'>
          <p className='text-center text-gray-200 text-9xl mb-4'>Hello World</p>
          <ScrollButton id='first-section-button' section='second-section' label='Click me' />
        </div>
      </div>
      <div id='second-section' className='flex h-screen justify-center items-center'>
        <div className='flex flex-col'>
          <p className='text-center text-gray-200 text-9xl mb-4'>Hello World</p>
          <ScrollButton id='second-section-button' section='first-section' label='Click me' />
        </div>
      </div>
    </body>
  )
}

    // <body className='min-h-screen bg-slate-800'>
    //   <div id='first-section' className='flex h-screen justify-center items-center'>
    //     <div className='flex flex-col'>
    //       <p className='text-center text-gray-200 text-9xl mb-4'>Hello World</p>
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded w-48 mx-auto" onClick={() => {
    //         const secondSection = document.getElementById('second-section');
    //         if (secondSection) {
    //           secondSection.scrollIntoView({ behavior: 'smooth' });
    //         }
    //       }}>Click me</button>
    //     </div>
    //   </div>
    //   <div id='second-section' className='flex h-screen justify-center items-center'>
    //     <div className='flex flex-col'>
    //       <p className='text-center text-gray-200 text-9xl mb-4'>Hello World</p>
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded w-48 mx-auto" onClick={() => {
    //         const firstSection = document.getElementById('first-section');
    //         if (firstSection) {
    //           firstSection.scrollIntoView({ behavior: 'smooth' });
    //         }
    //       }}>Click me</button>
    //     </div>
    //   </div>
    // </body>

export default App
