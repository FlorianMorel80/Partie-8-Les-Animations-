const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    window.scrollTo({
        top : 0,
        left : 0, 
        behavior: "smooth"

        //document.body.scrollTop = 0;    incstruction fonctionnelle sur safari//
        //document.documentElement.scrollTop = 0   fonctionne avec les autres navigateurs //
        
    })

})

