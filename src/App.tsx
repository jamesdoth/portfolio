import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <body className='min-h-screen bg-slate-800'>
      <div id='first-section' className='flex h-screen justify-center items-center'>
        <div className='flex flex-col'>
          <p className="text-center text-gray-200 text-7xl mb-44 tracking-3 z-10">Jim Han</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <ScrollButton id='first-section-button' section='second-section' label='Click me' />
          </div>
        </div>
      </div>
      <div id='second-section' className='flex h-screen justify-center items-center'>
        <div className='flex flex-col'>
          <p className='text-center text-gray-200 text-3xl mb-4'>About Me</p>
          <ScrollButton id='second-section-button' section='third-section' label='Click me' />
        </div>
      </div>
      <div id='third-section' className='flex h-screen justify-center items-center'>
        <div className='flex flex-col'>
          <p className='text-center text-gray-200 text-3xl mb-4'>Third Section</p>
          <ScrollButton id='third-section-button' section='fourth-section' label='Click me' />
        </div>
      </div>
      <div id='fourth-section' className='flex h-screen justify-center items-center'>
        <div className='flex flex-col'>
          <p className='text-center text-gray-200 text-3xl mb-4'>Fourth Section</p>
          <ScrollButton id='fourth-section-button' section='first-section' label='Click me' />
        </div>
      </div>
    </body>
  )
}

export default App