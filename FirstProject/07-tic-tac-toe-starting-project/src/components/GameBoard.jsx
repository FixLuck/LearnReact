

// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

//create a maxtrix to store the value of the symbol of player

export default function GameBoard({ onSelectSquare, board }) {

    //const [gameBoard, setGameBoard] = useState(initialGameBoard);
    //function handleSelectSquare(rowIndex, colIndex) {
    //   setGameBoard((prevGameBoard) => {
    //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])] //create a new array 
    //to reference to the old array by separators
    //in a immutable way
    //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //     return updatedBoard;
    // });

    //onSelectSquare();
    //quản lý càng ít state càng tốt, và lấy được càng nhìu thông tin từ state càng tốt
    // let gameBoard = initialGameBoard;
    // for (const turn of turns) {
    //     const { square, player } = turn;
    //     const { row, col } = square;
    //     gameBoard[row][col] = player
    // }


    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )

}



