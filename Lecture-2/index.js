// var b = 23;
// var a = 4 - "2" + b - 0 + "str";

// var a = 23 - "str";

// console.log(a);
// console.log(typeof a);

const fun = () => { console.log(`Hello`); };

function myFun(a) {
    a();
}

// myFun(fun);

var x = function cheer(message) {
    console.log(message);
};

// x(`Hello there`);

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.cheer = function (message) {
        console.log(message);
    };
}

const arr = [1, 2, 3, 4, 5, "Hello there", false];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [1, 2, 3, 4, 5, 7, 132, 43254];
const arr4 = [1, 2, 3, 4, 5, 6789, 456789, 489];
const arr5 = [1, 2, 3, 4, 5, 34567890, 456789];
const arr6 = [1, 2, 3, 4, 5, 2345789];

console.log(arr.length);

function checkOddEven(arr) {
    if (arr.length % 2 == 0) {
        console.log(`Length is even`);
    }
    else {
        console.log(`Length is Odd`);
    }
}

function findLength(arr) {
    let x = 0;
    for (var i = 0; i < arr.length; i++) {
        x++;
    }
    return x;
}

// checkOddEven(arr);
// checkOddEven(arr2);
// checkOddEven(arr3);
// checkOddEven(arr4);
// checkOddEven(arr5);
// checkOddEven(arr6);

const Yogesh = new Person(`Yogesh`, 27, "Delhi");

const SR = Object.create(Yogesh);

const Karan = Object.create(SR);

const Shivam = Object.create(Karan);

// console.log(Yogesh);
// console.log(SR);

// SR.name = "ShrutiRanjan";
// console.log(Karan);
// console.log(Shivam.name);

// console.log(Shivam.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

// console.log(Yogesh);

// Yogesh.cheer("Not undefined");

Array.prototype.checkOddEven = function () {
    if (this.length % 2 === 0) {
        console.log(`Array has even length`);
    }
    else {
        console.log(`Array has odd length`);
    }
};

arr.checkOddEven();
arr2.checkOddEven();
arr3.checkOddEven();
arr4.checkOddEven();
arr5.checkOddEven();

// Array.prototype.push = function () {
//     console.log(`Push triggered!!!`);
// };

// arr.push(12);

/*
attendance 23012026

Shivam Kumar
Karan Roshan
ShrutiRanjan
Aditi Srivastava
Riya
Chirag
Shaksham Singh
Hitesh
Manan
Manender
Manav
Vinay Kumar
Krishan
Vinay Kumar Yadav
Baji

*/