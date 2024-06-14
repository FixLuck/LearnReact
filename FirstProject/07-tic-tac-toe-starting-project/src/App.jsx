import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;

}

function App() {

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  // const [activePlayer, setActivePlayer] = useState('X');



  function handleSelectSquare(rowIndex, colIndex) { // truyền trạng thái của activePlayer qua props từ Component cha vào Component con
    // setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');

    //vì set state mới dựa trên state trước đó nên là sẽ dùng hàm để thay đổi state

    setGameTurns((prevTurns) => {
      // let currentPlayer = 'X'

      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'O'
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer }
        , ...prevTurns,
      ]
      return updatedTurns;
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log 
        turns={gameTurns}
      />
    </main>
  )
}

export default App
