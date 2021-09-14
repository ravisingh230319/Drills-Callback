const lists=require("./input/lists.json");

function callback2(boardId,getAllList){

    setTimeout(() => {
        // Your code here      
            const result=getAllList(boardId,lists);
            console.log(result);
        
    }, 3 * 1000);

}

module.exports=callback2;