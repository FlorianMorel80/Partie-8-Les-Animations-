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




// Ou


//let para = document.querySelectorAll('p');

// window.onscroll = function() {
//     let nScroll = window.scrollY;
//     para.forEach(item => {
//         //item.classList.add('unvisible');
//         if (nScroll >= (item.offsetTop -100 ) | nScroll >= (document.body.clientHeight - window.window.innerHeight)) {
//             //item.classList.remove('unvisible');
//             item.classList.add('visible');
//         } else { 
//             item.classList.remove('visible');
//             //item.classList.add('unvisible');
//         }
//     })

//     console.log(nScroll + "...." + window.innerHeight +"/"+ document.body.clientHeight);
// }