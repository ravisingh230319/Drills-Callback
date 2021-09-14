function callback1(boardId,boards,cb){
    setTimeout(() => { 
        let result=boards.find(element => boardId===element.id);

        if (result) {
            cb(null, result);
        } else {
            cb(new Error("Invalid Board Id"));
        }
    }, 2 * 1000);
}

module.exports=callback1;

