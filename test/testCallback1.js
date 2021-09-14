const callback1=require('../callback1.js');

function getBoardInformation(boardId,boards){
    let result=[];
    boards.forEach(element => {
        if(boardId===element.id)
        result=element;

    });
    return result;    
}

callback1("mcu453ed",getBoardInformation);