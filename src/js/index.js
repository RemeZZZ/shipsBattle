import GameController from "./src/GameController/GameController.js";
import BoardController from "./src/DOMControllers/BoardController.js";
import DOMController from "./src/DOMControllers/DOMController.js";
import { debounce } from "./src/utils/utils.js";

GameController.newGame();

const board = GameController.getBoard();

BoardController.create(board);

BoardController.on("click", (event) => {
  const { x, y } = DOMController.getAttributes(event.target);

  GameController.setCell({ x, y });
});

const onMousemove = debounce(250, (event) => {
  ///
});

BoardController.on("mousemove", onMousemove);
