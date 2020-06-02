let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
let xWins = []
let oWins = []

function checkForWin (winningCombinations, playerSelections) {
    for (let index = 0; index < winningCombinations.length; index += 1) {
        let matches = 0
        for (let jindex = 0; jindex < winningCombinations[index]; jindex += 1) {
            if (playerSelections.includes(winningCombinations[index][jindex])) {
                matches += 1
            }
        }
    }
}

if (xWins === "[win, win, win]") {
    console.log("X wins")
}
if (oWins === "[win, win, win]") {
    console.log("O wins")
}

const cellElementArray = document.querySelectorAll('.grid-cell');
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]
    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target;
        console.log("You clicked on cell number: " + clickedCellElement.id)
        if (clickedCellElement.innerHTML === "") {
            if (currentPlayer === 'X') {
                clickedCellElement.innerHTML = ("X")
                playerXSelections.push(clickedCellElement.id)
                currentPlayer = "O"
                console.log(playerXSelections)
            } else {
                clickedCellElement.innerHTML = ("O")
                playerOSelections.push(clickedCellElement.id)
                currentPlayer = "X"
                console.log(playerOSelections)
            }
        }

        for (let index = 0; index < playerXSelections.length; index+= 1) {
            let doesWinningNumberInclude = playerXSelections[index]
            console.log("This is player x i " + doesWinningNumberInclude) 

            for (let index2 = 0; index2 < winningCombinations.length; index2+= 1) {
                let winningNumbers = winningCombinations[index2]
                if (xWins[2] === ("win")) {
                    console.log("X wins")
                    alert("X Wins")
                    xWins = []
                }
                xWins = []

                console.log(winningNumbers)

                    
                for (let index3 = 0; index3 < playerXSelections.length; index3+= 1) {
                    let winningNumber = winningCombinations[index2][index3]
                    console.log(winningNumber)

                    for (let index4 = 0; index4 < playerXSelections.length; index4 += 1)
                        if (playerXSelections[index4] == winningCombinations[index2][index3]) {
                        xWins.push("win")
                        console.log(xWins)
                    } 
                }
            }

        }

        for (let index = 0; index < playerOSelections.length; index+= 1) {
            let doesWinningNumberInclude = playerOSelections[index]
            console.log("This is player x i " + doesWinningNumberInclude) 

            for (let index2 = 0; index2 < winningCombinations.length; index2+= 1) {
                let winningNumbers = winningCombinations[index2]
                if (oWins[2] === ("win")) {
                    console.log("O wins")
                    alert("O Wins")
                    oWins = []
                }
                oWins = []
                console.log(winningNumbers)
   
                for (let index3 = 0; index3 < playerOSelections.length; index3+= 1) {
                    let winningNumber = winningCombinations[index2][index3]
                    console.log(winningNumber)

                    for (let index4 = 0; index4 < playerOSelections.length; index4 += 1)
                        if (playerOSelections[index4] == winningCombinations[index2][index3]) {
                        oWins.push("win")
                        console.log(oWins)
                    } 
                }
            }

        }
    });
}

