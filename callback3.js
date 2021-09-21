/*Problem 3: Write a function that will return all cards that belong to a particular list based on the listID
 that is passed to it from the given data in cards.json. Then pass control back to the code that called it by
 using a callback function.*/
function callback3(listId,cards,cb){

    setTimeout(() => {     
        const result=cards[listId];

        if (result) {
            cb(null, result);
        } else {
            cb(new Error("Invalid List Id"));
        }
        
    }, 2 * 1000);

}

module.exports=callback3;