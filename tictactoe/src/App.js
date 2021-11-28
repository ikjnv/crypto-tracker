import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width': '60px',
  'height': '60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square(props) {
  return (
    <button
      className="square"
      style={squareStyle}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);

  const handleClick = i => {
    const squares = boardSquares.slice();
    if(findWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isXnext ? "X" : "O";
    setBoardSquares(squares);
    setIsXnext(!isXnext);
  };

  const winner = findWinner(boardSquares);
  let status;
  if(winner) {
    status = 'Winner ' + winner;
  } else {
    status = 'Next Player: ' + (isXnext ? "X" : "O" ); 
  }

  const handleReset = () => {
    setBoardSquares(Array(9).fill(null));
    setIsXnext(true);
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}><span>{status}</span></div>
      <button style={buttonStyle} onClick={handleReset}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={boardSquares[0]} onClick={() => handleClick(0)} />
          <Square value={boardSquares[1]} onClick={() => handleClick(1)} />
          <Square value={boardSquares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={boardSquares[3]} onClick={() => handleClick(3)} />
          <Square value={boardSquares[4]} onClick={() => handleClick(4)} />
          <Square value={boardSquares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={boardSquares[6]} onClick={() => handleClick(6)} />
          <Square value={boardSquares[7]} onClick={() => handleClick(7)} />
          <Square value={boardSquares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default App;

function findWinner(squares) {
  // winning combinations
  const combs = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
  ];

  for(let i=0; i<combs.length; i++) {
    const [a,b,c] = combs[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  };
  return null;
}