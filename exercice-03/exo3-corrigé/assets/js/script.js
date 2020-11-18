//récupération des p
let p = document.querySelectorAll('p');

// reste à creer les listeners avec le forEach
//d'abord poser la class 'invisible' sur tout les <p> à la fin du chargement de la page
window.addEventListener('load', function (){
    p.forEach(item => {item.classList.add('invisible')
    });
});

console.log( 'body height' +body.clientHeight);
console.log(' window height' + window.innerHeight);

//ensuite remplacer par 'visible'
p.forEach(item => {
    window.addEventListener('scroll', function (){
        //pour le dernier <p> on rajoute un element dans la condition pour comparer le scrollY à la hauteur total de la page moins la taille d'un écran
        if(scrollY > (item.offsetTop - 100) || scrollY >= document.body.clientHeight - window.innerHeight){
            item.classList.replace('invisible', 'visible');
            console.log( 'scrollY '+ scrollY);

        } else {
            item.classList.replace('visible', 'invisible');
        };
    });
});

