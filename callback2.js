function callback2(boardId, lists) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = lists[boardId];

            if (result) {
                resolve(result);
            } else {
                reject(new Error("Invalid Board Id"));
            }
        }, 2 * 1000);
    });
}

module.exports = callback2;
