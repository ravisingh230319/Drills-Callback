/* 
	Problem 6: Write a function that will use the previously written functions to get the following information.
    You do not need to pass control back to the code that called it.
    
    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/
function callback6(callback1, callback2, callback3, boards, lists, cards) {
    setTimeout(() => {
        let result = boards.find((element) => element.name === "Thanos");
        let cardListId = [];

        callback1(result.id, boards, (error, result) => {
            if (result) {
                console.log(result);
                callback2(result.id, lists, (error, result) => {
                    if (result) {
                        console.log(result);
                        result.forEach((element) => cardListId.push(element));
                        cardListId.pop();
                        cardListId.forEach((list) => {
                            callback3(list.id, cards, (error, result) => {
                                if (result) {
                                    console.log(result);
                                } else {
                                    console.log(error);
                                }
                            });
                        });
                    } else {
                        console.log(error);
                    }
                });
            } else {
                console.log(error);
            }
        });
    }, 2 * 1000);
}

module.exports = callback6;
