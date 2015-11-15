const DefaultYSize = 70;
const DefaultXSize = 140;

class BoardGenerator {
  emptyGeneration() {
    return this._makeGeneration(() => false)
  }

  randomGeneration() {
    return this._makeGeneration(() => Math.random() < 0.5)
  }

  nextGeneration(generation) {
    return this._makeGeneration(
      (x, y) => this._checkCellAlive(x, y, arguments[0]),
      generation
    )
  }

  _makeGeneration(callback, ...args) {
    let cells = [];
    for(let x = 0; x < DefaultXSize; x++) {
      cells[x] = [];

      for(let y = 0; y < DefaultYSize; y++) {
        cells[x][y] = callback(x, y, args);
      }
    }
    return cells;
  }

  _checkCellAlive(x, y, generation) {
    let count = this._neighborhoodsCount(generation, x, y);
    let live = generation[x][y];

    if (count == 3) return true;
    if (count == 2 && live) return true;
    return false;
  }

  _neighborhoodsCount(generation, x, y) {
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
}

export default new BoardGenerator();
