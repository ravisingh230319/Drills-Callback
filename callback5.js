function callback5(callback1, callback2, callback3, boards, lists, cards) {
    setTimeout(() => {
        let result = boards.find((element) => element.name === "Thanos");

        callback1(result.id, boards)
            .then((data) => {
                console.log(data);
                callback2(result.id, lists)
                    .then((data) => {
                        console.log(data);
                        const mind = data.find((element) => element.name === "Mind");
                        const space = data.find((element) => element.name === "Space");
                        callback3(mind.id, cards)
                            .then((data) => console.log(data))
                            .catch((err) => console.log(err));

                        callback3(space.id, cards)
                            .then((data) => console.log(data))
                            .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }, 2 * 1000);
}

module.exports = callback5;
