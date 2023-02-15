import ScrollButton from './components/ScrollButton';
import Card from './components/Card';
import Game from './content/TicTacToe/Game';

function App() {
  return (
    <body className='border-2 border-red-600 min-h-screen bg-slate-800'>
      <div
        id='first-section'
        className='border-2 border-green-600 flex h-screen justify-center items-center'
      >
        <div className='border-2 border-red-600 flex flex-col mb-16'>
          <p className='border-2 border-green-600 text-center text-gray-200 max-w-none text-7xl mb-12 tracking-3 z-10'>
            Jim Han
          </p>
          <ScrollButton
            id='first-section-button'
            section='second-section'
            label='Click me'
          />
        </div>
      </div>
      <div
        id='second-section'
        className='border-2 border-green-600 flex h-screen justify-center items-center'
      >
        <div className='border-2 border-red-600 flex flex-col'>
          <p className='border-2 border-green-600 text-center text-gray-200 text-3xl mb-4'>
            About Me
          </p>
          <ScrollButton
            id='second-section-button'
            section='third-section'
            label='Click me'
          />
        </div>
      </div>
      <div
        id='third-section'
        className='border-2 border-green-600 flex h-screen justify-center items-center'
      >
        <div className='border-2 border-red-600 flex flex-col'>
          <Card />
          <ScrollButton
            id='third-section-button'
            section='fourth-section'
            label='Click me'
          />
        </div>
      </div>
      <div
        id='fourth-section'
        className='border-2 border-green-600 flex flex-col h-screen justify-center items-center'
      >
        <div className='border-2 border-red-600 flex flex-col mb-12 text-white'>
          Contact
        </div>
        <ScrollButton
          id='fourth-section-button'
          section='first-section'
          label='Click me'
        />
      </div>
    </body>
  );
}

export default App;
