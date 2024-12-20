// Player one
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// player two
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// game logic
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Dice Game!";
}


// var img1 = document.querySelector(".img1");
// img1.src = "images/dice1.png";

// var img2 = document.querySelector(".img1");
// img2.src = "images/dice2.png";

// var img3 = document.querySelector(".img1");
// img3.src = "images/dice3.png";

// var img4 = document.querySelector(".img1");
// img4.src = "images/dice4.png";

// var img5 = document.querySelector(".img1");
// img5.src = "images/dice5.png";

// var img6 = document.querySelector(".img1");
// img6.src = "images/dice6.png";

// var img11 = document.querySelector(".img2");
// img1.src = "images/dice1.png";

// var img22 = document.querySelector(".img2");
// img2.src = "images/dice2.png";

// var img33 = document.querySelector(".img2");
// img3.src = "images/dice3.png";

// var img44 = document.querySelector(".img2");
// img4.src = "images/dice4.png";

// var img55 = document.querySelector(".img2");
// img5.src = "images/dice5.png";

// var img66 = document.querySelector(".img2");
// img6.src = "images/dice6.png";

// var classDices1 = document.querySelector(".img1")
// var arrayImgPlayer1 = [img1, img2, img3, img4, img5, img6];
// var randomImg1 = Math.floor(Math.random() * arrayImgPlayer1.length + 1);

// var classDices2 = document.querySelector(".img2")
// var arrayImgPlayer2 = [img11, img22, img33, img44, img55, img66];
// var randomImg2 = Math.floor(Math.random() * arrayImgPlayer2.length + 1);

// if(randomImg1 == randomImg2){
//     var dices = document.querySelector("h1");
//     dices.innerHTML = "Dice Game";
//     arrayImgPlayer1[randomImg1].src = "images/dice" + randomImg1 + ".png";
//     arrayImgPlayer2[randomImg2].src = "images/dice" + randomImg2 + ".png";
// }else if(randomImg1 > randomImg2){
//     var player1 = document.querySelector("h1");
//     player1.innerHTML = "🚩 Player 1 Wins!";
//     arrayImgPlayer1[randomImg1].src = "images/dice" + randomImg1 + ".png";
//     arrayImgPlayer2[randomImg2].src = "images/dice" + randomImg2 + ".png";
// }else if(randomImg1 < randomImg2){
//     var player1 = document.querySelector("h1");
//     player1.innerHTML = "Player 2 Wins! 🚩";
//     arrayImgPlayer1[randomImg1].src = "images/dice" + randomImg1 + ".png";
//     arrayImgPlayer2[randomImg2].src = "images/dice" + randomImg2 + ".png";
// }else if(randomImg1 === 0 || randomImg2 === 0){

// }

// arrayImgPlayer1[randomImg1].src = "images/dice" + randomImg1 + ".png";
// arrayImgPlayer2[randomImg2].src = "images/dice" + randomImg2 + ".png";
