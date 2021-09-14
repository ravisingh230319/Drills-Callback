const callback2=require('../callback2.js');
const lists=require("../input/lists.json");

function cb(error,allListOnBoardId){
    if (error) {
        console.log(error);
    } else {
        console.log(allListOnBoardId);
    }
}

callback2("mcu453ed",lists,cb);