function getCardValue(card) {
    if (card[0] === "A"){
      return 11;
    }else if (Number(card[0]) > 1 && Number(card[0]) <= 9 ){
      return Number(card[0]);
    }else if (card[0] === "J" || card[0] === "Q" || card[0] === "K" || Number(card) === 10) {
      return 10;
    }else {
      return "Invalid card";
    }
}
module.exports = getCardValue;