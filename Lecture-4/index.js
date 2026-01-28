// console.log("Program started");

// setTimeout(() => { console.log(`Timer poora hua!!!`); }, 5000);

// console.log(`Short break`);

// setTimeout(() => { console.log(`Ek aur timer!!!!`); }, 2000);

// console.log(`Tea break`);

// setTimeout(() => { console.log(`Last Timer!!!`); }, 4000);

// console.log("Program ended");

// const startButton = document.getElementById("start");

// const space = document.querySelector(`#space`);

// const item3 = document.querySelector(`#item-3`);

// const list = document.querySelector(`#item-list`);

// const btn = document.createElement(`button`);

// btn.innerHTML = "<span>Don't Click</span>";

// btn.classList.add("Safe-btn");

// btn.classList.remove(`Safe-btn`);

// btn.setAttribute("name", "safe");

// space.appendChild(btn);

// const clickBtn = document.querySelector(`#click`);

// btn.addEventListener(`click`, function (){
//     list.lastElementChild.remove();
// })

// const start = document.querySelector(`#start`);
// const defuse = document.querySelector(`.defuse`);
// const space = document.querySelector(`#space`);

// let id;

// start.addEventListener(`click`, function handleBoom() {
//     const heading = document.createElement(`h1`);
//     heading.textContent = "Boooom!!!!";
//     id = setTimeout(() => {
//         space.appendChild(heading);
//     }, 5000);
// });

// defuse.addEventListener(`click`, () => {
//     clearTimeout(id);
//     const heading = document.createElement(`h1`);
//     heading.textContent = "Bomb defused!!!";
//     space.appendChild(heading);
// });


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubleMap = arr.map((num, i) => { return num * 2; });

const evenMap = arr.filter((value) => {
    if (value % 2 === 0) {
        return value;
    }
});

const sum = arr.reduce((sum, value,) => { return value + sum; }, 50);

const SR  = {
    name:"ShrutiRanjan",
    age:25,
}

// console.log(doubleMap);