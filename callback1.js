/*Problem 1: Write a function that will return a particular board's information based on the boardID that 
is passed from the given list of boards in boards.json and then pass control back to the code that called
it by using a callback function.*/
function callback1(boardId, boards) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = boards.find((element) => boardId === element.id);

            if (result) {
                resolve(result);
            } else {
                reject(new Error("Invalid Board Id"));
            }
        }, 2 * 1000);
    });
}

module.exports = callback1;
