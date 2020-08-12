const board = [];

const play = (clickedId) => {
    const playerSpan = document.getElementById("player");
    const clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
        board[clickedId] = "X"
    } else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = "O"
    }


    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        resetGame();
        return;
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        resetGame();
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        resetGame();
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        resetGame();
        return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        resetGame();
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        resetGame();
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        resetGame();
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        resetGame();
        return;
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner")
        resetGame();
        
    }
}
function resetGame(){
    board.splice(0)
    const squares = document.getElementsByTagName("td")
    for(let i = 0; i < squares.length; i++){
        squares[i].innerText= "";
    }
    const playerSpan = document.getElementById("player");
    playerSpan.innerText = "X"
}