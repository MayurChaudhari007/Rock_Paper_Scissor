let userscore = 0;
let compscore = 0;
let drawscore = 0;
let user_score_msg = document.querySelector("#user-score");
let comp_score_msg = document.querySelector("#comp-score");
let draw_score_msg = document.querySelector("#draw-score");
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const compChoice = () => {
  const opt = ["rock", "paper", "scissor"];
  const randind = Math.floor(Math.random() * 3);
  return opt[randind];
};

const userWin = () => {
  userscore++;
  user_score_msg.innerText = userscore;
  msg.innerText = "User is win";
  //   msg.setAttribute("class","userWin")
  msg.style.backgroundColor = "green";
};

const compWin = () => {
  compscore++;
  comp_score_msg.innerText = compscore;
  msg.innerText = "Comp is win";
  //   msg.setAttribute("class","compWin")
  msg.style.backgroundColor = "red";
};

const drawgame = () => {
  drawscore++;
  draw_score_msg.innerText = drawscore;
  msg.innerText = "Game is draw";
  //   msg.setAttribute("class","gameDraw")
  msg.style.backgroundColor = "black";
};

const playGame = (userChoice) => {
  // console.log("userchoice =",userChoice);
  // console.log(compChoice());
  let comp = compChoice();

  console.log(userChoice, "=", comp);

  if (
    (userChoice === "rock" && comp === "scissor") ||
    (userChoice === "paper" && comp === "rock") ||
    (userChoice === "scissor" && comp === "paper")
  ) {
    userWin();
    console.log(`User win`, userscore);
  } else if (
    (userChoice === "rock" && comp === "rock") ||
    (userChoice === "paper" && comp === "paper") ||
    (userChoice === "scissor" && comp === "scissor")
  ) {
    drawgame();
    console.log("Draw", drawscore);
  } else {
    compWin();
    console.log("Comp win", compscore);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);

  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was click",userChoice);
    playGame(userChoice);
  });
});

let rock = document.querySelector("#rock");
// console.log(rock.dataset.score);
