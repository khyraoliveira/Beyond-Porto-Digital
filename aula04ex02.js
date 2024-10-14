function sominha(a, b) {
    return new Promise((res) => {
        setTimeout(() => {
            res(a + b);
        }, 1000);
    });
}


sominha(10, 2)
    .then((result) => {
        console.log("Soma 1:", result);
        return sominha(result, 10);
    })
    .then((anotherResult) => {
        console.log("Soma 2:", anotherResult);
    })
    .catch((erro) => {
        console.error("Error:", erro);
    });
