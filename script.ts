type Difficulty = 'easy' | 'medium' | 'hard';

const gridContainer = document.getElementById('sudoku-grid') as HTMLDivElement;
const newGameButton = document.getElementById('newGame') as HTMLButtonElement;
const difficultySelect = document.getElementById('difficulty') as HTMLSelectElement;

function createGrid() {
  gridContainer.innerHTML = '';
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    cell.appendChild(input);
    gridContainer.appendChild(cell);
  }
}

function startGame(difficulty: Difficulty) {
  createGrid();
  // TODO: Generate Sudoku puzzle based on difficulty
  console.log(`Starting ${difficulty} game...`);
}

newGameButton.addEventListener('click', () => {
  const difficulty = difficultySelect.value as Difficulty;
  startGame(difficulty);
});

// Initialize
createGrid();