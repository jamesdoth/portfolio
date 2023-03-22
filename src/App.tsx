import ScrollButton from './components/ScrollButton';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Game from './content/TicTacToe/Game';
import Survey from './content/Survey/Survey';
import TodoList from './content/TodoList/ToDoList';
import WeatherApp from './content/Weather/Weather';
import CCForm from './content/CCForm/CCForm';

function App() {
  return (
    <div className='border-2 border-red-600 min-h-screen bg-slate-800'>
      <Navbar />
      <div
        id='first-section'
        className='border-2 border-green-600 flex h-screen justify-center items-center'
      >
        <div className='border-2 border-red-600 flex flex-col mb-16'>
          <p className='border-2 border-green-600 text-center text-gray-200 max-w-none text-7xl mb-12 tracking-3'>
            Jim Han
          </p>
          <svg
            className='border-2 border-green-600 placeholder-svg w-24 h-24 mb-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
          </svg>
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
        className='border-2 border-green-600 flex flex-col gap-1 h-screen justify-center items-center'
      >
        <div className='border-2 border-red-600 mb-12'>
          <Card title='TicTacToe' content={<Game />} />
        </div>
        <div className='border-2 border-red-600 mb-12'>
          <Card title='Survey' content={<Survey />} />
        </div>
        <div className='border-2 border-red-600 mb-12'>
          <Card title='Todo List' content={<TodoList />} />
        </div>
        <div className='border-2 border-red-600 mb-12'>
          <Card title='Weather App' content={<WeatherApp />} />
        </div>
        <div className='border-2 border-red-600 mb-12'>
          <Card title='CC Form' content={<CCForm />} />
        </div>
        <div>
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
    </div>
  );
}

export default App;
