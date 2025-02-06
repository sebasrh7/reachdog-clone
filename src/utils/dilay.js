function dilay(promise) {
    return promise.then(data => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    });
}

export default dilay;