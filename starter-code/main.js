var cards = ["queen", "queen", "king", "king"];
var cards2 = ["queen1", "queen2", "king1", "king2"];
var cardsInPlay = [];
var cardsInCheck = []; //check whether user click same card.

var gameBrd = document.getElementById("game-board");

var createBoard = function (){
// instead of looping through a fixed number
// loop through the length of the cards
	for (var i = 0; i < cards.length; i++)
{
	var cardElement = document.createElement('div');
	cardElement.className = "card";
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.setAttribute('data-card2', cards2[i]);

  // when a card is clicked the function isTwoCards will be executed
	cardElement.addEventListener('click', isTwoCards);
	gameBrd.appendChild(cardElement);
}
}

//checks to see if there are cards in play
var isTwoCards = function() {
// add card to array of cards in play
// 'this' hasn't been covered in this prework, but
// for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));
  cardsInCheck.push(this.getAttribute('data-card2'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='https://goo.gl/6MnGJ1' alt='King of spade'/>"; 
  } else {
    this.innerHTML = "<img src='http://goo.gl/GnP1LL' alt='queen of heart'/>"; 
  }
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
  // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay, cardsInCheck);
 // clear cards in play array for next try
    cardsInPlay = [];
    cardsInCheck = [];
  }
}
var isMatch = function(cards, cards2) {
  // alert winning message
  //console.log(cards2[0]);
  //console.log(cards2[1]);
if (cards2[0] === cards2[1])
{
  setTimeout(function(){ alert("You clicked the same Card!!"); }, 200);
}
else{
if (cards[0] === cards[1]) {
    setTimeout(function()
      { alert("You found a match!"); 
    }, 200);
} 
else {
    setTimeout(function(){ alert("Sorry, try again."); }, 200);  }
}
}

createBoard();