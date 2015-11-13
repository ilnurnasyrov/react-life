import alt from "../alt";
import BoardActions from "../actions/board_actions";
import BoardGenerator from "../utils/board_generator"

class BoardStore {
  constructor() {
    this.cells = BoardGenerator.randomGeneration();

    this.bindListeners({
      makeNewGeneration: BoardActions.NEXT_GENERATION,
      makeRandomGeneration: BoardActions.RANDOMIZE,
      makeEmptyGeneration: BoardActions.CLEAR,
      toggleCell: BoardActions.TOGGLE_CELL
    });
  }

  makeEmptyGeneration() { this.cells = BoardGenerator.emptyGeneration() }
  makeRandomGeneration() { this.cells = BoardGenerator.randomGeneration() }
  makeNewGeneration() { this.cells = BoardGenerator.nextGeneration(this.cells) }

  toggleCell(cell) {
    this.cells[cell.x][cell.y] = !this.cells[cell.x][cell.y];
  }
}

export default alt.createStore(BoardStore, "BoardStore");
