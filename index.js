//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
    //for (let i = 0; i < gifts.length; i++) {
        //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //}
    // return gifts;
//}

//wrapGifts(gifts);

const messageComplete = [];
const names = ["Guadalupe", "Ollie", "Aki"];
const cardEvent = "surprise";

function writeCards(names, cardEvent) {
  for (let x = 0; x < names.length; x++) {
    messageComplete.push(`Thank you, ${names[x]}, for the wonderful ${cardEvent} gift!`);
  }
  return messageComplete;
}

console.log(messageComplete);

function countDown() {
    let number = 10
    while (number >= 0) {
        console.log(number--);
    }
}
countDown();