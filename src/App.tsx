import * as THREE from 'three';
import ThreeCube from './components/ThreeCube';

import ScrollButton from './components/ScrollButton';
import Navbar from './components/Navbar';
import Game from './content/TicTacToe/Game';
import Survey from './content/Survey/Survey';
import TodoList from './content/TodoList/ToDoList';
import WeatherApp from './content/Weather/Weather';
import CCForm from './content/CCForm/CCForm';
import ContentCarousel from './components/ContentCarousel';
import Gallery from './content/Gallery/Gallery';

function App() {
  const contentComponents = [
    { title: 'TicTacToe', content: <Game /> },
    { title: 'Survey', content: <Survey /> },
    { title: 'Todo List', content: <TodoList /> },
    { title: 'Weather App', content: <WeatherApp /> },
    { title: 'CC Form', content: <CCForm /> },
    { title: 'Gallery', content: <Gallery /> },
  ];

  return (
    <div className='border-2 border-red-600 min-h-screen bg-slate-800'>
      <Navbar />
      <div
        id='first-section'
        className='border-2 border-green-600 flex h-screen justify-center items-center'
      >
        <div className='z-10 border-2 border-red-600 flex flex-col mb-16'>
          <p className='border-2 border-green-600 text-center text-gray-200 max-w-none text-7xl mb-60 tracking-3'>
            Jim Han
          </p>
          <ScrollButton
            id='first-section-button'
            section='second-section'
            label='Click me'
          />
        </div>
        <div className='absolute z-0'>
          <ThreeCube />
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
        className='border-2 border-green-600 flex py-44 h-screen justify-center items-center lg:justify-end lg:px-72'
      >
        <div className='border-2 border-blue-500 w-96'>
          <ContentCarousel contents={contentComponents} />
        </div>
        <div>
          {/* <ScrollButton
            id='third-section-button'
            section='fourth-section'
            label='Click me'
          /> */}
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
    </div>
  );
}

export default App;
