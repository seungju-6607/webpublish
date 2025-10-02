function callbackStyleFunction(param, callback) {
    setTimeout(() => {
        if (param) {
            callback(null, "성공!"); // (에러, 결과)
        } else {
            callback("실패!", null);
        }
    }, 1000);
}

function promiseWrapper(param) {
    return new Promise((resolve, reject) => {
        callbackStyleFunction(param, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

promiseWrapper(true)
    .then(result => console.log("결과:", result))
    .catch(err => console.error("에러:", err));
