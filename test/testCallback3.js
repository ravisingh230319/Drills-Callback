const callback3 = require("../callback3.js");
const cards = require("../input/cards.json");

callback3("qwsa221", cards)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
