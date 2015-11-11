import alt from "../alt";
import BoardActions from "../actions/board_actions";

const Size = 50;

function makeGeneration(callback) {
  let cells = [];
  for(let x = 0; x < Size; x++) {
    cells[x] = [];

    for(let y = 0; y < Size; y++) {
      cells[x][y] = callback(x, y, arguments);
    }
  }
  return cells;
}

function emptyGeneration() {
  return makeGeneration(() => false)
}

function randomGeneration() {
  return makeGeneration(() => Math.random() < 0.5)
}

function nextGeneration(generation) {
  return makeGeneration(
    (x, y) => checkCellAlive(x, y, arguments[0]),
    generation
  )
}

function checkCellAlive(x, y, generation) {
  let count = neighborhoodsCount(generation, x, y);
  let live = generation[x][y];

  if (count == 3) return true;
  if (count == 2 && live) return true;
  return false;
}

function neighborhoodsCount(generation, x, y) {
  let count = 0;
  for(let i = -1; i < 2; i++) {
    for(let j = -1; j < 2; j++) {
      if(!i && !j) continue;
      if(!generation[x + i]) continue;
      if(!generation[x + i][y + j]) continue;
      count++;
    }
  }
  return count;
}

class BoardStore {
  constructor() {
    this.cells = randomGeneration();

    this.bindListeners({
      makeNewGeneration: BoardActions.NEXT_GENERATION,
      makeRandomGeneration: BoardActions.RANDOMIZE,
      makeEmptyGeneration: BoardActions.CLEAR,
      toggleCell: BoardActions.TOGGLE_CELL
    });
  }

  makeEmptyGeneration() { this.cells = emptyGeneration() }
  makeRandomGeneration() { this.cells = randomGeneration() }
  makeNewGeneration() { this.cells = nextGeneration(this.cells) }

  toggleCell(cell) {
    this.cells[cell.x][cell.y] = !this.cells[cell.x][cell.y];
  }
}

export default alt.createStore(BoardStore, "BoardStore");
