const boards=require("./input/boards.json");

function callback1(boardId,getBoardInformation){
    setTimeout(() => {
        // Your code here        
        const result=getBoardInformation(boardId,boards);
        console.log(result);        
    }, 3 * 1000);
}

module.exports=callback1;

