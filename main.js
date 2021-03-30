const BODY = document.querySelector('body');

let background = prompt('Введіть колір для фону сторінки: bisque | darkgrey | lightyellow | pink', 'bisque');
BODY.style.backgroundColor = background;

let fontFamily = prompt('Введіть тип шрифта для сторінки: arial | cursive | verdana', 'cursive');
BODY.style.fontFamily = fontFamily;

const H1 = document.querySelector('h1');
let align = prompt('Введіть розміщення заголовку: left | center | right', 'left');
H1.style.textAlign = align;

const P = document.querySelector('p');
let pBackground = prompt('Введіть фон для посилань: snow | aqua | gold', 'aqua');
P.style.backgroundColor = pBackground;
let pColor = prompt('Введіть колір тексту перед посиланнями: red | blue | grey| silver', 'blue')
P.style.color = pColor;
P.style.width = 330 + 'px';

const A = document.querySelectorAll('a');
let linkColor = prompt('Введіть колір для посилань: green | chocolate | lime | orange', 'chocolate');
A.forEach(function(value) {
    value.style.color = linkColor;
});

const H2 = document.querySelector('div > h2');
let h2Color = prompt('Введіть колір тексту другого загловку: red | yellowgreen | purple', 'red');
H2.style.color = h2Color;
let h2FontSize = prompt('Введіть розмір тексту другого загловку: 20px | 30px | 40px', '30px');
H2.style.fontSize = h2FontSize;
let h2FontWeight = prompt('Введіть товщину тексту другого загловку: 200 | 600 | 800', '600');
H2.style.fontWeight = h2FontWeight;

const UL = document.querySelector('ul');
let ulList = prompt('Виберіть тип маркування списку: circle | decimal  | georgian | square ', 'circle');
UL.style.listStyleType = ulList;

let www = 'https://www.';
const A1 = document.querySelector('#first');
let firstSite = prompt('Введіть адресу першого сайту');
A1.href = www + firstSite;
A1.textContent = firstSite;

const A2 = document.querySelector('#second');
let secondtSite = prompt('Введіть адресу другого сайту');
A2.href = www + secondtSite;
A2.textContent = secondtSite;

const A3 = document.querySelector('#third');
let thirdSite = prompt('Введіть адресу третього сайту');
A3.href = www + thirdSite;
A3.textContent = thirdSite;