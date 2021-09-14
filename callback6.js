function callback6(callback1, callback2, callback3, boards, lists, cards) {
    setTimeout(() => {
        let result = boards.find((element) => element.name === "Thanos");
        callback1(result.id, boards, (error, result) => {
            if (result) {
                console.log(result);
                callback2(result.id, lists, (error, result) => {
                    if (result) {
                        console.log(result);
                        result.forEach((list) => {
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
