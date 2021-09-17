function callback3(listId, cards) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = cards[listId];

            if (result) {
                resolve(result)
            } else {
                reject(new Error("Invalid List Id"));
            }
        }, 2 * 1000);
    });
}

module.exports = callback3;
