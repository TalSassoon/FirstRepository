'use strict';
debugger
var gBoard;
    var gSize = 4;
    var gMineCell;
    var gameOn = false;

innit()
function innit() {


    

    gBoard = getBoard();
    getRandom2Mine();
    getMineNegs(gBoard);
    
    renderBoard(gBoard);

    console.table(gBoard);
}

function getBoard() {
    var board = [];
    for (var i = 0; i < gSize; i++) {
        board[i] = [];
        for (var j = 0; j < gSize; j++) {
            var cell = {
                isShown: false,
                isMine: false,
                mineCountNeg: 0,
            }

            board[i][j] = cell;



        }

    }
    return board;
}
function renderBoard(board) {
    var strHtml = '';
    var tdId;
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];

            if (cell.isMine === true) {
                gMineCell = "X";

            } else { gMineCell = "O"; }

            tdId = `cell-${i}-${j}`;
            strHtml += `<td id="${tdId}" class="cell" onmousedown="markCell(event, this)" onclick="cellClicked(this)" data-i="${i}" data-j="${j}"">
                            ${gMineCell}
                        </td>`;
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector('.mine-board');
    elMat.innerHTML = strHtml;
}
function getMineNegs(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            checkNegs(i, j);
        }
    }

}
function checkNegs(posI, posJ) {

    for (var i = posI - 1; i <= posI + 1; i++) {
        for (var j = posJ - 1; j <= posJ + 1; j++) {
            if (i < 0 || i >= gBoard.length || j < 0 || j >= gBoard.length) continue;
            if (posI === i && posJ === j) continue;

            if (gBoard[i][j].isMine === true) {

                gBoard[posI][posJ].mineCountNeg++;
            }
        }
    }

}
function cellClicked(elcell) {
    
      if(!gameOn){
        startTime()
}

    gameOn = true;
    var dataSet = elcell.dataset;
    var posI = +dataSet.i;
    var posJ = +dataSet.j;
    var mineNeg = gBoard[posI][posJ].mineCountNeg;
    console.log(elcell);
    if (gBoard[posI][posJ].isMine === true) {
        elcell.innerText = ".!.";
    } else {

        elcell.innerText = mineNeg;
    }
    
}
function getRandom2Mine() {
    var loc1 = getRandomMineIdx(0, gBoard.length - 1)
    var loc2 = getRandomMineIdx(0, gBoard.length - 1)

    gBoard[loc1.i][loc1.j].isMine = true;
    gBoard[loc2.i][loc2.j].isMine = true;

}
function getRandomMineIdx(min, max) {
    var i = Math.floor(Math.random() * (max - min + 1)) + min;
    var j = Math.floor(Math.random() * (max - min + 1)) + min;


    var loc = {
        i: i,
        j: j,
    }
    return loc
}