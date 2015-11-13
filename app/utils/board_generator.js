const DefaultSize = 70;

class BoardGenerator {
  emptyGeneration(size = DefaultSize) {
    return this._makeGeneration(size, () => false)
  }

  randomGeneration(size = DefaultSize) {
    return this._makeGeneration(size, () => Math.random() < 0.5)
  }

  nextGeneration(generation) {
    return this._makeGeneration(
      DefaultSize,
      (x, y) => this._checkCellAlive(x, y, arguments[0]),
      generation
    )
  }

  _makeGeneration(size, callback, ...args) {
    let cells = [];
    for(let x = 0; x < size; x++) {
      cells[x] = [];

      for(let y = 0; y < size; y++) {
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
