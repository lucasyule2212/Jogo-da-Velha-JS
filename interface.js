function clickStart() {
    document.getElementById("btn").style.transitionDuration = "0s";
    document.getElementById("btn").style.visibility = "hidden";
    document.getElementById("btn").style.height = "0px";
    document.getElementById("main").style.paddingTop = "0px";
    showTable();
}
function showTable() {
    document.getElementById("tabuleiro").style.visibility = "visible";
    tabuleiro.style.height="500px";
    restoreTable();
}
var array = [];

document.getElementById("restart").style.height="0px";
       

let squares = document.querySelectorAll(".square");
document.addEventListener('DOMContentLoaded', () => {

    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    })

    var countSqr = 0;
    for (let index = 0; index < 3; index++) {
        for (let index1 = 0; index1 < 3; index1++) {
            board.board[index][index1] = squares[countSqr];
            countSqr++;
        }
    }

})

let endgameStatus = false;

function handleClick() {
    endgameStatus = findSquare(event.target)
    if (endgameStatus == true) {
        endgame();
    }

}

let tabuleiro = document.getElementById("tabuleiro");

function endgameTable() {
    tabuleiro.style.backgroundColor = "#fff47c";
    document.getElementById("1").style.backgroundColor = "#272624"
    document.getElementById("2").style.backgroundColor = "#272624"
    document.getElementById("3").style.backgroundColor = "#272624"
    document.getElementById("4").style.backgroundColor = "#272624"
    document.getElementById("5").style.backgroundColor = "#272624"
    document.getElementById("6").style.backgroundColor = "#272624"
    document.getElementById("7").style.backgroundColor = "#272624"
    document.getElementById("8").style.backgroundColor = "#272624"
    document.getElementById("9").style.backgroundColor = "#272624"

    document.getElementById("1").style.color = "#fff47c"
    document.getElementById("2").style.color= "#fff47c"
    document.getElementById("3").style.color = "#fff47c"
    document.getElementById("4").style.color = "#fff47c"
    document.getElementById("5").style.color = "#fff47c"
    document.getElementById("6").style.color = "#fff47c"
    document.getElementById("7").style.color = "#fff47c"
    document.getElementById("8").style.color = "#fff47c"
    document.getElementById("9").style.color = "#fff47c"
}
function restoreTable() {
    tabuleiro.style.backgroundColor = "#272624";
    document.getElementById("1").style.backgroundColor = "#fff47c"
    document.getElementById("2").style.backgroundColor = "#fff47c"
    document.getElementById("3").style.backgroundColor = "#fff47c"
    document.getElementById("4").style.backgroundColor = "#fff47c"
    document.getElementById("5").style.backgroundColor = "#fff47c"
    document.getElementById("6").style.backgroundColor = "#fff47c"
    document.getElementById("7").style.backgroundColor = "#fff47c"
    document.getElementById("8").style.backgroundColor = "#fff47c"
    document.getElementById("9").style.backgroundColor = "#fff47c"

    document.getElementById("1").style.color = "#272624"
    document.getElementById("2").style.color= "#272624"
    document.getElementById("3").style.color = "#272624"
    document.getElementById("4").style.color = "#272624"
    document.getElementById("5").style.color = "#272624"
    document.getElementById("6").style.color = "#272624"
    document.getElementById("7").style.color = "#272624"
    document.getElementById("8").style.color = "#272624"
    document.getElementById("9").style.color = "#272624"
}
function endgame() {

    endgameTable();

    setTimeout(() => {
       tabuleiro.style.visibility="hidden";
       tabuleiro.style.height="0px";
       let endMsg = document.getElementById("endGame");
       endMsg.style.width="700px";
       endMsg.style.height="auto";
       endMsg.style.visibility="visible";
       endMsg.innerHTML=`<p id="endmsg">${players[playerTime]}</p>`;
       endMsg.innerHTML+='<p>venceu!</p>';
       document.getElementById("restart").style.height="50px";
       document.getElementById("restart").style.visibility="visible";
       document.getElementById("restart").style.marginTop="20px";
    }, 2500);

   
}
function clickRestart() {
    endgameStatus=false;
    resetBoard();
    resetGameStatus();
    resetPlayerTime();

    collapseEndMsg();
    collapseRestartBtn();
    showTable()
}
function collapseRestartBtn(){
    document.getElementById("restart").style.height="0px";
    document.getElementById("restart").style.visibility="hidden";
    document.getElementById("restart").style.marginTop="0px";
}
 function collapseEndMsg() {
    let endMsg = document.getElementById("endGame");
    endMsg.style.height="0px";
    endMsg.style.visibility="hidden";
 }