var arr=[
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];

var player1=Math.random();
player1=Math.floor(player1*6);

var player2=Math.random();
player2=Math.floor(player2*6);

var data = document.querySelectorAll("img");
data[0].setAttribute("src",arr[player1]);

data[1].setAttribute("src",arr[player2]);

if (player1 == player2){
    document.querySelector("h1").textContent="Draw!";
}
else if(player1> player2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else if(player1<player2){
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}