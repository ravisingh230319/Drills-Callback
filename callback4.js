function callback4(callback1, callback2, callback3, boards, lists, cards) {
    setTimeout(() => {
        let result = boards.find((element) => element.name === "Thanos");

        callback1(result.id, boards)
            .then((data) => {
                console.log(data);
                return callback2(result.id, lists);
            })
            .then((listData) => {
                console.log(listData);
                const mind = listData.find((element) => element.name === "Mind");
                return callback3(mind.id, cards);
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, 2 * 1000);
}

module.exports = callback4;
