function callback2(boardId,lists,cb){

    setTimeout(() => {      
            const result=lists[boardId];

            if (result) {
                cb(null, result);
            } else {
                cb(new Error("Invalid Board Id"));
            }
        
    }, 2 * 1000);

}

module.exports=callback2;