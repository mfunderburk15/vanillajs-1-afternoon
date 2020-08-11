const board = [];

const play = (clickedId) => {
    const clickedElement = document.getElementById(clickedId)
    const playerSpan = document.getElementById("player")
    if(playerSpan === "X"){
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
    }else{
        playerSpan.innerText="X"
        clickedElement.innerText = "O"
    }
}