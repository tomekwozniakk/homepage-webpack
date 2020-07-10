import '../scss/main.scss';

/* place your code below */
import moment from 'moment';

console.log('HELLO 🚀')

const myName = "Tomek";
const age = "34";

// console.log(Myname);
// console.log(age);
// console.log(`Cześć! Nazywam się ${myName} i mam ${age} lata`);

// const where = "lasu";
// const header = document.querySelector('.day-summary__description--js');
// header.innerHTML = `Witaj DOMowy przedszkolaku! Czy wiesz, że jeż tupta nocą do ${where}?`;

// function calculate(myNumber) {
//     console.log(`Dostałam ${myNumber}`)
//     return myNumber*7;
// }

// const myResult = calculate(age);

// console.log(myResult);

// function createContent(querySelectorContent, content) {
//     const element = document.querySelector(querySelectorContent);
//     element.innerHTML = content;
// }

// createContent('.day-summary__title--js', '12.05.2020 - Siema, tutaj podmieniony tytuł!')


// function greetOne(age, myName) {
//     console.log(`Witaj! Nazywam się ${myName} i mam ${age} lata.`)
// }

// greetOne(age, myName);
// greetOne(2, 'Janusz');

// const greetTwo = (age, myName) => {
//     console.log(`Witaj przybyszu! Nazywam się ${myName} i mam ${age} lata. To jest arrowfunction`)
// }

// greetTwo(age, myName);
// greetTwo(3, 'Mariola');

// const bottle = {
//     volume: 700,
//     pour: (vessel) => {
//         console.log(`You pour mysterious liquid from the bottle. Your ${vessel} is full.`)
//     },
//     isNotEmpty: true,
//     label: 'Wyborowa',
//     percentage: 40,
// }

// console.log(bottle);
// bottle.pour('glass');
// bottle.pour('bucket(!)');


const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});


// adding moment

function addDate(querySelectorContent, date){
const element = document.querySelector(querySelectorContent);
element.innerHTML = (`Witaj, dzisiaj jest ` + date);}

addDate('.date--js', moment().locale('pl').format('LLLL'));