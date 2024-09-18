let btns = document.querySelectorAll('.btn');
let resetGame = document.querySelector('#reset-game');
let newGame = document.querySelector('#new-game');
let winner = document.querySelector('#winner');
let oWin = document.querySelector('#o-win');
let xWin = document.querySelector('#x-win');
console.log(oWin.innerHTML);
console.log(oWin.innerText);
let playerO = true; // it is the turn of playerO
let oWinCount = 0, xWinCount = 0;
let winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let checkWinner = () => {
    for (let i = 0; i < winArray.length; i++) {
        console.log('ok');
        let text1 = btns[winArray[i][0]].innerText;
        let text2 = btns[winArray[i][1]].innerText;
        let text3 = btns[winArray[i][2]].innerText;
        if (text1 !== '' && text2 !== '' && text3 !== '' && (text1 === text2) && (text2) === (text3)) {
            return text1;
        }
    }
    return false;
}
let disableBtns = () => {
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
    }
}
let count = 0;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        if (playerO) {
            btns[i].innerText = 'o';
            btns[i].style.color = `#6EC207`;
            playerO = false;
        }
        else {
            btns[i].innerText = 'x';
            btns[i].style.color = 'red';
            playerO = true;
        }
        count++;
        btns[i].disabled = true;
        console.log("count is : ", count);
        let val = checkWinner();
        if (val === 'x' || val === 'o') {
            disableBtns()
            if (val === 'x') {
                winner.innerText = 'Winner is X';
                xWinCount++;
            }
            else {
                winner.innerText = 'Winner is O';
                oWinCount++;
            }
            oWin.innerHTML = `O-won: ${oWinCount} times,`;
            xWin.innerText = `X-won: ${xWinCount} times`;
        }
        else if (count === 9) {
            winner.innerText = 'No one Wins!'
            disableBtns();
        }
    })
}
let reset = () => {
    count = 0;
    playerO = true;
    for (let i = 0; i < btns.length; i++) {
        btns[i].innerText = '';
        btns[i].disabled = false;
    }
}
resetGame.addEventListener('click', () => {
    reset();
})
newGame.addEventListener('click', () => {
    reset();
    oWinCount = 0;
    xWinCount = 0;
    oWin.innerHTML = `O-won:`;
    xWin.innerHTML = `X-won:`;
    winner.innerText='';
})

