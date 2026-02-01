const div1 = document.querySelector("#div-1");
const div2 = document.querySelector("#div-2");
const div3 = document.querySelector("#div-3");
const div = document.querySelector(".div");


// document.addEventListener("click", (e)=>{
//     console.log(e.target);
// }, {capture:true});

// div.forEach((div) => {
//     div.addEventListener("click", (e) => {
//         console.log(e.target);
//     });
// });

// div.addEventListener("click", (e) => {
//     console.log(e.target);
// }, { capture: true });

function callMsg(e) {
    // e.stopPropagation();
    console.log(e.target);
}

// function globalEventhandler(event, selector,callback) {
//     selector.addEventListener(event, callback);
// }

// callMsg("click", div, callMsg);


div1.addEventListener("click", callMsg, { capture: true });

div2.addEventListener("click", callMsg, { capture: true });

div3.addEventListener("click", callMsg, { capture: true });


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.checkThis = function () {
//         console.log(this);
//     };
// }

// const SR = new Person("SR", 23);

// function getName(message) {
//     console.log(this.name);
//     console.log(message, this);
// }

// getName.call(SR, "Hello World");

// getName.apply(SR, ["Hello from apply"]);


// const checkName = getName.bind(SR, "Hello from bind");

// checkName();


// function f1() {
//     // const a = 23;
//     function f2() {
//         // const a = 34;
//         function f3() {
//             // const a = 45;
//             function f4() {
//                 // const a = 98;
//                 console.log(a);
//             }
//             f4();
//         }
//         f3();
//     }
//     f2();
// }
// f1();