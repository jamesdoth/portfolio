import { useState, useEffect } from 'react';
import Square from './Square';

type Scores = {
  [key: string]: number;
};

const INITIAL_GAME_STATE = ['', '', '', '', '', '', '', '', ''];
const INITIAL_SCORES: Scores = { X: 0, O: 0 };
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [scores, setScores] = useState(INITIAL_SCORES);

  useEffect(() => {
    const storedScores = localStorage.getItem('scores');
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  useEffect(() => {
    if (gameState === INITIAL_GAME_STATE) {
      return;
    }

    checkForWinner();
  }, [gameState]);

  const resetBoard = () => setGameState(INITIAL_GAME_STATE);

  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);

    const newPlayerScore = scores[currentPlayer] + 1;
    const newScores = { ...scores };
    newScores[currentPlayer] = newPlayerScore;
    setScores(newScores);
    localStorage.setItem('scores', JSON.stringify(newScores));

    resetBoard();
  };

  const handleDraw = () => {
    window.alert('The game ended in a draw');

    resetBoard();
  };

  const checkForWinner = () => {
    const roundWon = WINNING_COMBOS.some((winCombo) => {
      const [a, b, c] = winCombo.map((i) => gameState[i]);
      return a && b === a && c === a;
    });

    if (roundWon) {
      setTimeout(handleWin, 500);
      return;
    }

    if (!gameState.includes('')) {
      setTimeout(handleDraw, 500);
      return;
    }

    changePlayer();
  };

  const changePlayer = () =>
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

  const handleCellClick = (event: any) => {
    const cellIndex = Number(event.target.getAttribute('data-cell-index'));
    if (gameState[cellIndex]) return;
    setGameState([
      ...gameState.slice(0, cellIndex),
      currentPlayer,
      ...gameState.slice(cellIndex + 1),
    ]);
  };

  const resetScore = () => {
    setScores({ X: 0, O: 0 });
    localStorage.setItem('scores', JSON.stringify({ X: 0, O: 0 }));
    resetBoard();
  };

  return (
    <div className='border-2 border-blue-300 p-6'>
      <h1 className='text-center text-5xl mb-4 font-display text-white'>
        Tic Tac Toe
      </h1>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-3 w-56'>
          {gameState.map((player, index) => (
            <Square
              key={index}
              onClick={handleCellClick}
              {...{ index, player }}
            />
          ))}
        </div>

        <div className='flexmx-auto w-96 text-2xl text-serif'>
          <p className='text-white mt-2'>
            Next Player: <span>{currentPlayer}</span>
          </p>
          <p className='text-white mt-2'>
            Player X wins: <span>{scores['X']}</span>
          </p>
          <p className='text-white mt-2'>
            Player O wins: <span>{scores['O']}</span>
          </p>
          <div className='flex justify-center gap-3'>
            <button
              className='text-white mt-2 border-2 rounded p-1'
              onClick={resetScore}
            >
              Reset
            </button>
            <button
              className='text-white mt-2 border-2 rounded p-1'
              onClick={changePlayer}
            >
              Change Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
