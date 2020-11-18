// //solution donnée par Tim 
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

//création des variables
let navbar = document.querySelector('.navbar');
// possibilité d'amélioration par création d'ID dans le HTML ou  1 seul QuerySelectorAll
let btnFable1 = document.querySelectorAll('a').item(1);
let btnFable2 = document.querySelectorAll('a').item(2);
let btnFable3 = document.querySelectorAll('a').item(3);
let btnFable4 = document.querySelectorAll('a').item(4);
let btnFable5 = document.querySelectorAll('a').item(5);
let fable1 = document.querySelector('#fable1');
let fable2 = document.querySelector('#fable2');
let fable3 = document.querySelector('#fable3');
let fable4 = document.querySelector('#fable4');
let fable5 = document.querySelector('#fable5');

//création des listeners
btnFable1.addEventListener('click', function (event){
    event.preventDefault();

    window.scrollTo({
        top: (fable1.offsetTop - navbar.clientHeight),
        left: 0,
        behavior:'smooth',
    });
});

btnFable2.addEventListener('click', function (event){
    event.preventDefault();

    window.scrollTo({
        top: (fable2.offsetTop - navbar.clientHeight),
        left: 0,
        behavior:'smooth',
    });
});

btnFable3.addEventListener('click', function (event){
    event.preventDefault();

    window.scrollTo({
        top: (fable3.offsetTop - navbar.clientHeight),
        left: 0,
        behavior:'smooth',
    });
});

btnFable4.addEventListener('click', function (event){
    event.preventDefault();

    window.scrollTo({
        top: (fable4.offsetTop - navbar.clientHeight),
        left: 0,
        behavior:'smooth',
    });
});

btnFable5.addEventListener('click', function (event){
    event.preventDefault();

    window.scrollTo({
        top: (fable5.offsetTop - navbar.clientHeight),
        left: 0,
        behavior:'smooth',
    });
});