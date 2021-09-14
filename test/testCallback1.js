const callback1=require('../callback1.js');
const boards=require("../input/boards.json");

function cb(error,boardData){
    if (error) {
        console.log(error);
    } else {
        console.log(boardData);
    }
}

callback1("mcu453ed",boards,cb);