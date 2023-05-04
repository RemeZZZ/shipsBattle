import BoardController from "../DOMControllers/BoardController.js";

class GameController {
  #board = null;
  isGameStarted = false;

  newGame() {
    if (!this.isGameStarted) {
      this.#board = new Array(10).fill(0).map(() => new Array(10).fill(0));

      this.isGameStarted = true;

      return true;
    }

    return false;
  }

  getBoard() {
    return this.#board;
  }

  getCell(coorinates) {
    return this.#board?.[coorinates.y]?.[coorinates.x];
  }
  setCell(coorinates, target = 1) {
    if (!this.isGameStarted) {
      return false;
    }

    this.#board[coorinates.y][coorinates.x] = target;

    console.log(this.#board);

    BoardController.update(this.#board);

    return true;
  }
}

export default new GameController();
