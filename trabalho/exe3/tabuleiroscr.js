let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let playerXWins = 0;
let playerOWins = 0;

function makeMove(row, col) {
    if (board[row][col] === '') {
        let mathExpression = prompt(`Resolva a seguinte conta para jogar:\n${generateMathExpression()}`);
        let result;

        try {
            result = eval(mathExpression);
        } catch (error) {
            result = NaN;
        }

        if (!isNaN(result)) {
            board[row][col] = currentPlayer;
            document.getElementById(`cell${row}${col}`).innerText = currentPlayer;

            if (checkWinner()) {
                alert(`Player ${currentPlayer} wins!`);
                updateWins();
                resetBoard();
            } else if (boardIsFull()) {
                alert('It\'s a draw!');
                resetBoard();
            } else {
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        } else {
            alert('Resposta incorreta ou formato inválido! Passando para o próximo jogador.');
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    } else {
        alert('Essa posição já está ocupada. Escolha outra.');
    }
}

function generateMathExpression() {
    let num1 = Math.floor(Math.random() * 100) + 1;  
    let num2 = Math.floor(Math.random() * 100) + 1;
    let operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];  

    return `${num1} ${operator} ${num2}`;
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;  // Horizontal
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;  // Vertical
        }
    }
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;  // Diagonal \
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;  // Diagonal /
    }
    return false;
}

function boardIsFull() {
    return board.every(row => row.every(cell => cell !== ''));
}

function updateWins() {
    if (currentPlayer === 'X') {
        playerXWins++;
    } else {
        playerOWins++;
    }

    document.getElementById('playerXWins').innerText = `Player X Wins: ${playerXWins}`;
    document.getElementById('playerOWins').innerText = `Player O Wins: ${playerOWins}`;
}

function resetBoard() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`cell${i}${j}`).innerText = '';
        }
    }
}
