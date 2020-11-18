let addTasks = document.getElementById('addTasks');
let toDoContainer = document.getElementById('toDoContainer');
let inputTasks = document.getElementById('inputTasks');
let number = document.getElementById('count');
let count = parseInt(number.innerText)

addTasks.addEventListener('click', function () {
    var liste = document.createElement('li');
    liste.classList.add('liste-styling');
    liste.innerText = inputTasks.value;
    // on va ajouter un noeud à la fin de la lsite des enfants 
    toDoContainer.appendChild(liste);

    inputTasks.value = "";
    count = count + 1;
    number.innerText = count;

    // toDoContainer.insertBefore(toDoContainer, liste.nextSibling);

    liste.addEventListener('click', function () {
        liste.style.textDecoration = "line-through";

    })
    liste.addEventListener('dblclick', function () {
        //  La méthode Node.removeChild() retire un nœud enfant de l'arbre DOM et retourne le nœud retiré.
        toDoContainer.removeChild(liste);
        count = count - 1;
        number.innerText = count;
    })
})