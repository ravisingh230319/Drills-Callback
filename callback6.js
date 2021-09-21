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
        const cardListId = [];

        callback1(result.id, boards)
            .then((data) => {
                console.log(data);
                return callback2(result.id, lists);
            })
            .then((listData) => {
                console.log(listData);
                listData.forEach((element) => cardListId.push(element.id));
                cardListId.pop();
                return cardListId;
            })
            .then((cardListId) => {
                let promises = [];
                cardListId.forEach((listId) => {
                    promises.push(callback3(listId, cards));
                });
                return Promise.all(promises);
            })
            .then((data) => {
                data.forEach((element) => {
                    console.log(element);
                });
            })
            .catch((err) => console.log(err));
    }, 2 * 1000);
}

module.exports = callback6;
