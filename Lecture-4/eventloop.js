console.log(`A`);

Promise.resolve().then(() => { console.log(`B`); });

setTimeout(() => { console.log(`C`); }, 3000);

Promise.resolve().then(() => {
    setTimeout(() => { console.log(`D`); }, 1000);
});

setTimeout(() => { console.log(`E`); }, 0);

console.log(`F`);