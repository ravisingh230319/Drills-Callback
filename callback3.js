const cards=require("./input/cards.json");

function callback3(listId,getAllCards){

    setTimeout(() => {     
            const result=getAllCards(listId,cards);
            console.log(result);
        
    }, 3 * 1000);

}

module.exports=callback3;