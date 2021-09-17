function callback6(callback1, callback2, callback3, boards, lists, cards) {
    setTimeout(() => {
        let result = boards.find((element) => element.name === "Thanos");
        const cardListId = [];

        callback1(result.id, boards)
            .then((data) => {
                console.log(data);
                callback2(result.id, lists)
                    .then((data) => {
                        console.log(data);
                        data.forEach((element) => cardListId.push(element.id));
                        cardListId.pop();
                        cardListId.forEach((listId) => {
                            callback3(listId, cards)
                                .then((data) => console.log(data))
                                .catch((err) => console.log(err));
                        });
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }, 2 * 1000);
}

module.exports = callback6;
