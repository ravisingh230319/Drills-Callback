const callback1=require('../callback1.js');
const callback2=require('../callback2.js');
const callback3=require('../callback3.js');
const boards=require("../input/boards.json");
const lists=require("../input/lists.json");
const cards=require("../input/cards.json");
const callback4=require('../callback4.js');

callback4(callback1, callback2, callback3, boards, lists, cards);