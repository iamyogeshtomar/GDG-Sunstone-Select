const p1 = new Promise((resolve, reject) => {
    let a = 24;
    if (a % 2 === 0) {
        console.log(`a is even`);
        resolve(`5000 returned`);
    }
    else {
        console.log(`konse 5000`);
        reject(a + 1);
    }
});

p1.then((message) => { console.log(message); }).catch((num) => { console.log(num + ` number was odd `); });