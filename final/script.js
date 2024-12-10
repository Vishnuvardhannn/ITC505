document.addEventListener("DOMContentLoaded", () => {
    const size = 5; // 5x5 grid
    const board = document.getElementById("game-board");
    const targetMovesElement = document.getElementById("target-moves");
    const movesElement = document.getElementById("moves");
    const timeElement = document.getElementById("time");
    const restartButton = document.getElementById("restart-button");

    const targetMoves = 15; // Set a target number of moves
    targetMovesElement.textContent = targetMoves;

    let moves = 0;
    let timer = 0;
    let timerInterval;

    // Update the timer every second
    const startTimer = () => {
        timer = 0;
        timerInterval = setInterval(() => {
            timer++;
            const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
            const seconds = String(timer % 60).padStart(2, '0');
            timeElement.textContent = `${minutes}:${seconds}`;
        }, 1000);
    };

    // Create the grid
    let grid = [];
    const createGrid = () => {
        board.innerHTML = ''; // Clear the board
        grid = [];
        for (let i = 0; i < size; i++) {
            grid[i] = [];
            for (let j = 0; j < size; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = i;
                cell.dataset.col = j;
                board.appendChild(cell);
                grid[i][j] = cell;
            }
        }

        // Add click listeners
        grid.flat().forEach(cell => cell.addEventListener("click", handleClick));
    };

    // Toggle a single cell
    const toggleCell = (row, col) => {
        if (row >= 0 && row < size && col >= 0 && col < size) {
            grid[row][col].classList.toggle("is-off");
        }
    };

    // Handle click event
    const handleClick = (e) => {
        moves++;
        movesElement.textContent = moves;

        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        toggleCell(row, col);
        toggleCell(row - 1, col); // Top
        toggleCell(row + 1, col); // Bottom
        toggleCell(row, col - 1); // Left
        toggleCell(row, col + 1); // Right

        // Check if all lights are off
        if (grid.flat().every(cell => cell.classList.contains("is-off"))) {
            clearInterval(timerInterval); // Stop the timer
            setTimeout(() => {
                alert(`🎉 Congratulations! You’ve won the game in ${moves} moves and ${timeElement.textContent} time! 🎉`);
            }, 200);
        }
    };

    // Randomize the board with a solveable state
    const randomizeBoard = () => {
        for (let i = 0; i < size * size; i++) {
            const randomRow = Math.floor(Math.random() * size);
            const randomCol = Math.floor(Math.random() * size);
            toggleCell(randomRow, randomCol);
        }
    };

    // Restart the game
    const restartGame = () => {
        clearInterval(timerInterval); // Stop the timer
        moves = 0;
        movesElement.textContent = moves;
        timeElement.textContent = "00:00";
        createGrid();
        randomizeBoard();
        startTimer();
    };

    // Add restart button functionality
    restartButton.addEventListener("click", restartGame);

    // Start the game
    createGrid();
    randomizeBoard();
    startTimer();
});
