var column = ["", "", ""];
var row = [[...column], [...column], [...column]];

var board = {
  board: row,
};

let winStates = [
  [
    [[0], [0]],
    [[0], [1]],
    [[0], [2]],
  ],
  [
    [[1], [0]],
    [[1], [1]],
    [[1], [2]],
  ],
  [
    [[2], [0]],
    [[2], [1]],
    [[2], [2]],
  ],

  [
    [[0], [0]],
    [[1], [0]],
    [[2], [0]],
  ],
  [
    [[0], [1]],
    [[1], [1]],
    [[2], [1]],
  ],
  [
    [[0], [2]],
    [[1], [2]],
    [[2], [2]],
  ],

  [
    [[0], [0]],
    [[1], [1]],
    [[2], [2]],
  ],
  [
    [[0], [2]],
    [[1], [1]],
    [[2], [0]],
  ],
];

let playerTime = 0;
let players = ["x", "o"];

let gameOver = false;
function updateSquare(index, index1) {
  if (board.board[index][index1].innerHTML == "") {
    if (gameOver == false) {
      return true;
    }
  }
}

function findSquare(object) {
  for (let index = 0; index < 3; index++) {
    for (let index1 = 0; index1 < 3; index1++) {
      if (
        board.board[index][index1].getAttribute("id") ==
        object.getAttribute("id")
      ) {
        if (updateSquare(index, index1)) {
          playerMove(index, index1);
          if (gameOver == true) {
            return true;
          }
          break;
        }
      }
    }
  }
}

function playerMove(index, index1) {
  board.board[index][index1].innerHTML = players[playerTime];

  gameOver = isWin();

  if (gameOver == false) {
    if (playerTime == 0) {
      playerTime = 1;
    } else {
      playerTime = 0;
    }
  } else {
  }
  return gameOver;
}

function isWin() {
  for (let index = 0; index < winStates.length; index++) {
    let checkSequency = winStates[index];

    let pos1 = checkSequency[0];
    let pos2 = checkSequency[1];
    let pos3 = checkSequency[2];

    if (
      board.board[pos1[0]][pos1[1]].innerHTML ==
        board.board[pos2[0]][pos2[1]].innerHTML &&
      board.board[pos1[0]][pos1[1]].innerHTML ==
        board.board[pos3[0]][pos3[1]].innerHTML &&
      board.board[pos1[0]][pos1[1]].innerHTML != ""
    ) {
      return (gameOver = true);
    } else {
      gameOver = false;
    }
  }
  return gameOver;
}

function resetGameStatus() {
  return (gameOver = false);
}
function resetPlayerTime() {
  return (playerTime = 0);
}
function resetBoard() {
  for (let index = 0; index < 3; index++) {
    for (let index1 = 0; index1 < 3; index1++) {
      board.board[index][index1].innerHTML = "";
    }
  }
  return board.board;
}
