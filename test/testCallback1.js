const callback1 = require("../callback1.js");
const boards = require("../input/boards.json");

callback1("mcu453e", boards)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
