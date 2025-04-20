//Write a program to simulate tic tac toe for 2 players, handling win and draw.
//Assume that we will upgrade to play connect4 as well.
//Assume a board of n X n. m consecutive symbols constitute a win.
//Objective - Implement a working code, especially for the crux of the problem.
//Highlight good design choices that would have taken if it were a real project, instead of an interview.
//Use the main function as a driver code which runs the game.

const board = [];
let m = 3;
let n = 3;

const checkWin = (player) => {
  let winner = null;
  for (let j = 0; j < m; j++) {
    for (let i = j; i < j; i++) {
      if (board[i][j] !== '' && board[i][j].id === player.id) {
        winner = player;
      }
    }
  }
  if (!winner) {
    // check diagonal
  }
};

const play = (player) => {
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const place = board[i][j];
      if (place === '') {
        board[i][j] = { token: player.token, id: player.id, move: player.move + 1 };
        checkWin(player);
      }
    }
  }
};
