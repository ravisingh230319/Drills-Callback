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
