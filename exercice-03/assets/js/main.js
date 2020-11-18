const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const oui = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            observer.unobserve(entry.target)
            entry.target.classList.add('visible')
        } else {
            console.log('. . .')
        }
    })
}

const observer = new IntersectionObserver(oui, options);
let p = document.querySelectorAll('.invisible').forEach(function (r) {
    observer.observe(r);
})







// Ici on va avoir un objet qui permet de définir l'ensemble des options de notre intersection observer (check MDN : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API) 


// const threshold = .1
// const options = {


    // root est l'élément racine qui servir d'affichage et qui va détecter si l'élément est visible ou non
    
    
    // root: null,   
    
    //Nul ici car on ne veut pas que l'élément soit visible à l'écran


    // rootMargin: '0px', threshold 

    //le threshhold va permettre d'indiquer à quel moment le système s'intersection va être détecté si il est a 1 ça veut dire que l'entièreté de l'élément doit être visible dans l'écran. O.1 pour dire que dè que 10%  de l'événement est visible on va déclencher les choses 
    
//   }
  
//   const handleIntersect = function (entries, observer) {
//     entries.forEach(function (entry) {
//       if (entry.intersectionRatio > threshold) {
//         entry.target.classList.remove('reveal')
//         observer.unobserve(entry.target)
//       }
      
//   })
// }

  
// document.documentElement.classList.add('reveal-loaded')

// window.addEventListener("DOMContentLoaded", function () {


  //On créeait un nouveau intersectionObserver et ensuite on lui attribut le premier paramètre handleIntersect qui sera la fonction qui sera executé lordque l'élément deviendra visible ou sera masqué de la zone. Deuxème paramètre, l'objezt qui va contenir les options 


//   const observer = new IntersectionObserver(handleIntersect, options)
//   const targets = document.querySelectorAll('.reveal')
//   targets.forEach(function (target) {
//     observer.observe(target)
//   })
// })
