import alt from "../alt";
import BoardActions from "../actions/board_actions";

const Size = 50;
const MaxIndex = Size - 1;

function nextGeneration(generation) {
  let nextGeneration = [];
  for(let x = 0; x < MaxIndex; x++) {
    nextGeneration[x] = [];

    for(let y = 0; y < MaxIndex; y++) {
      nextGeneration[x][y] = checkCellAlive(generation, x, y);
    }
  }

  return nextGeneration;
}

function checkCellAlive(generation, x, y) {
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
    this.cells = [];
    for(let x = 0; x < MaxIndex; x++) {
      this.cells[x] = [];

      for(let y = 0; y < MaxIndex; y++) {
        this.cells[x][y] = Math.random() < .5;
      }
    }

    this.bindListeners({
      makeNewGeneration: BoardActions.NEXT_GENERATION
    });
  }

  makeNewGeneration() {
    console.log("generate new generation")
    this.cells = nextGeneration(this.cells);
  }
}

export default alt.createStore(BoardStore, "BoardStore");
