import { el, setChildren } from 'redom';
//import Navigo from 'navigo';

const div = el('div', { class: 'container' });

const divLeft = el('div', { class: 'left' });

const h1 = el('h1', { 
    class: 'text-center' 
}, 'Bank Card');
const cardWrapper = el('div', { class: 'card-wrapper' });

const cardBack = el('div', { class: 'card-back' });


const cardBackLine = el('div', { class: 'card-back-line' });
const inputCvv = el('input', { type: 'text', id: 'cvv' });

const cardFront = el('div', { class: 'card-front' });
const cardImg = el('img', { class: 'card-image', src: './svg/tinkoff.svg'});
const cardLogo = el('img', { class: 'card-logo', src: './svg/visa.svg' });
const cardNumber = el('input', { type: 'text', id: 'card-number' });
const cardMonth = el('input', { type: 'text', id: 'card-to-month' });
const cardYear = el('input', { type: 'text', id: 'card-to-year' });

setChildren(cardFront, [
    cardImg,
    cardLogo,
    cardNumber,cardMonth,
    cardYear
]);
setChildren(cardBack, [
    cardBackLine,
    inputCvv
])
setChildren(cardWrapper, [
    cardBack,
    cardFront
]);
setChildren(divLeft, [
    h1,
    cardWrapper
]);
setChildren(div, divLeft);
setChildren(window.document.body, div);


// const router = new Navigo('/');

// function catalogList() {
//     const body = el('div', 'Loading...');

//     fetch('https://fakestoreapi.com/products').then(async (res) => {
//         const data = await res.json();

//         const ul = el('ul');

//         setChildren(ul, data.map(product => el(
//             'li',
//             el('a', {
//                 href: `/product/${product.id}`,
//                 onclick(event) {
//                     event.preventDefault();
//                     router.navigate(event.target.getAttribute('href'));
//                 }
//             }, product.title)
//         )));

//         body.innerHTML = '';
//         setChildren(body, ul);
//     });

//     return el('div', [
//         el('h1', 'Product List'),
//         body,
//     ]);
// }

// function catalogDetails(id) {
//     const body = el('div', 'Loading...');

//     fetch(`https://fakestoreapi.com/products/${id}`).then(async (res) => {
//         const data = await res.json();

//         body.innerHTML = '';

//         setChildren(body, [
//             el('a', {
//                 href: `/`,
//                 onclick(event) {
//                     event.preventDefault();
//                     router.navigate(event.target.getAttribute('href'));
//                 },
//             }, 'Back to list'),
//             el('h2', data.title),
//             el('p', data.description),
//             el('img', {
//                 src: data.image,
//                 alt: data.title,
//             }),
//         ])
//     });

//     return el('div', [
//         el('h1', `Product details ${id}`),
//         body,
//     ]);
// }

// router.on('/', () => {
//     setChildren(window.document.body, catalogList());
// });

// router.on('/product/:id', ({ data: { id } }) => {
//     setChildren(window.document.body, catalogDetails(id));
// });

// router.resolve();