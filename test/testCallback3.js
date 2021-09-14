const callback3=require('../callback3.js');
const cards=require("../input/cards.json");

function cb(error,allCardsOnListId){
    if (error) {
        console.log(error);
    } else {
        console.log(allCardsOnListId);
    }
}

callback3("qwsa221",cards,cb);