const callback2 = require("../callback2.js");
const lists = require("../input/lists.json");

callback2("mcu453ed", lists)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
