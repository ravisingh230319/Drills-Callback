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