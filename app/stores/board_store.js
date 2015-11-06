import alt from "../alt";

const Size = 100;
const MaxIndex = Size - 1;

function nextGeneration(m) {
  let next = [];
  for(let x = 0; x < MaxIndex; x++) {
    next[x] = [];

    for(let y = 0; y < MaxIndex; y++) {
      next[x][y] = checkCellAlive(m, x, y);
    }
  }

  return next;
}

function checkCellAlive(m, x, y) {
  let count = neighborhoodsCount(m, x, y);
  let live = m[x][y];

  if (count == 3) return true;
  if (count == 2 && live) return true;

  return false;
}

function neighborhoodsCount(m, x, y) {
  let count = 0;

  for(let i = -1; i < 2; i++) {
    for(let j = -1; j < 2; j++) {
      if(!i && !j) continue;
      if(!m[x + i][y + j]) continue;

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
      generateNewState: BoardActions.NEXT_GENERATION;
    });
  }

  generateNewState() {
    setState(nextGeneration(this.cells));
  }
}

export default alt.createStore(BoardStore, "BoardStore");
