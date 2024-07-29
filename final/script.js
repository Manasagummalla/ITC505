document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
    const board = document.getElementById('game-board');
    const restartButton = document.getElementById('restart-button');

    function createBoard() {
        board.innerHTML = ''; // Clear the board
        for (let i = 0; i < boardSize * boardSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', () => toggleSquare(i));
            board.appendChild(square);
        }
    }

    function toggleSquare(index) {
        const row = Math.floor(index / boardSize);
        const col = index % boardSize;

        // Toggle the clicked square and its neighbors
        toggle(row, col);
        toggle(row - 1, col);
        toggle(row + 1, col);
        toggle(row, col - 1);
        toggle(row, col + 1);

        // Check if the game is won
        if (isGameWon()) {
            setTimeout(() => alert('You win!'), 100);
        }
    }

    function toggle(row, col) {
        if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
            const index = row * boardSize + col;
            const squares = Array.from(document.getElementsByClassName('square'));
            squares[index].classList.toggle('is-off');
        }
    }

    function isGameWon() {
        const squares = Array.from(document.getElementsByClassName('square'));
        return squares.every(square => !square.classList.contains('is-off'));
    }

    function randomizeBoard() {
        for (let i = 0; i < boardSize * boardSize; i++) {
            if (Math.random() > 0.5) {
                toggleSquare(i);
            }
        }
    }

    restartButton.addEventListener('click', () => {
        createBoard();
        randomizeBoard();
    });

    createBoard();
    randomizeBoard();
});