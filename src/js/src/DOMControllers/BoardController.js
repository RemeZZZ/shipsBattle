import { DOMController } from "./DOMController.js";

class BoardController extends DOMController {
  #listeners = {};
  #$board = null;

  constructor() {
    super();
  }

  create(board) {
    if (this.#$board) {
      this.update(board);

      return;
    }

    const $elements = this.createElements(
      {
        $board: "div",
      },
      document.body
    );

    this.#$board = $elements.$board;

    this.setAttributes([
      {
        $element: this.#$board,
        attributes: { name: "test", x: "10", theme: "board_container" },
      },
    ]);

    this.#$board.addEventListener("click", this.#listener("click"));
    this.#$board.addEventListener("mousemove", this.#listener("mousemove"));

    this.update(board);
  }

  update(board) {
    this.#$board.textContent = "";

    board.forEach((row, rowIndex) => {
      const { $row } = this.createElements(
        {
          $row: "div",
        },
        this.#$board
      );

      this.setAttributes([
        {
          $element: $row,
          attributes: { theme: "board_row" },
        },
      ]);

      row.forEach((cell, cellIndex) => {
        const { $cell } = this.createElements(
          {
            $cell: "div",
          },
          $row
        );

        this.setAttributes([
          {
            $element: $cell,
            attributes: {
              x: cellIndex,
              y: rowIndex,
              theme: "board_cell",
              target: cell,
            },
          },
        ]);
      });
    });
  }

  on(action, callback) {
    if (!this.#listeners[action]) {
      this.#listeners[action] = [];
    }

    this.#listeners[action].push(callback);

    return true;
  }

  off(action, callback) {
    if (!this.#listeners[action]) {
      return false;
    }

    const listeners = this.#listeners[action];

    this.#listeners[action] = listeners.filter((item) => item !== callback);

    return true;
  }

  #listener(action) {
    return (event) => {
      const listeners = this.#listeners[action];

      if (listeners) {
        listeners.forEach((callback) => {
          callback(event);
        });
      }
    };
  }
}

export default new BoardController();
