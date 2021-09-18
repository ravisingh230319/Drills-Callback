function callback5(callback1, callback2, callback3, boards, lists, cards) {
    setTimeout(() => {
        let result = boards.find((element) => element.name === "Thanos");

        callback1(result.id, boards)
            .then((data) => {
                console.log(data);
                return callback2(result.id, lists);
            })
            .then((listData) => {
                console.log(listData);
                let promises = [];
                const mind = listData.find((element) => element.name === "Mind");
                const space = listData.find((element) => element.name === "Space");
                promises.push(callback3(mind.id, cards));
                promises.push(callback3(space.id, cards));
                return Promise.all(promises);
            })
            .then(([mindCardData,spaceCardData]) => {  
                console.log(mindCardData);  
                console.log(spaceCardData);
            })
            .catch((err) => console.log(err));
    }, 2 * 1000);
}

module.exports = callback5;
