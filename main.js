// Guess a Number Game

let restartGame = document.getElementById("btn")
let startGame = document.getElementById("start");

function guessNumber(){
  let win = new Audio("win.wav");
  let lose = new Audio("lose.wav")
  let result = document.getElementById("result");
  let userValue = prompt("Type a number- 1 to 1000");
  
  userValue = Number.parseInt(userValue)
  
  if(userValue == 19){
    result.innerHTML = `Congratulations,You are Guess Right Number ${userValue} ❤️`
    result.style.color = ""
    win.play()
  }
  else if(isNaN(userValue)){
    alert("Please Enter Number")
    startGame.style.display = "none"
  }
  else{
    result.innerHTML = "You Are Guess Wrong number 😂"
    result.style.color = "red"
    startGame.style.display = "none"
    lose.play()
  }
}

startGame.addEventListener("click",() => {
  guessNumber()
})

restartGame.addEventListener("click",() => {
  guessNumber()
})