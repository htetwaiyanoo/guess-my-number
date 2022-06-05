let secretNumber = Math.trunc(Math.random()*30 + 1);
let scores = 20;
let highscore = 0;
let check = document.querySelector(".check");
let score = document.querySelector(".score");

const displayMessage = (message)=>{
  document.querySelector(".message").textContent = message;
}
check.addEventListener("click", ()=>{
  let guess = Number(document.querySelector(".guess").value);
  
  if (!guess){
    displayMessage("🚫 Not a number") ;
  }
  
  else if(guess === secretNumber){
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("✅ Correct Number");
    document.querySelector("body").style.backgroundColor="#3cb371";
    if(scores > highscore){
      if(scores >= 18){
        scores += 5;
        highscore = scores;
        document.querySelector(".highscore");
      }
    }
  }else if(guess > secretNumber){
      if(scores > 1){
        displayMessage("Too High");
        scores--;
        score.textContent=scores;
      }else{
        displayMessage("Game Over!");
      } 
  } else if(guess < secretNumber){
    if(scores > 1){
      displayMessage("Too Low");
      scores--;
      score.textContent=scores;
    }else{
      displayMessage("Game Over!");
      document.querySelector("body").style.backgroundColor="#ef3038";
    } 
  }
});