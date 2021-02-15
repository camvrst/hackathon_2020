// Crée un lien autour d'une icone par ex *Fontawesome
export const createALink = (el) => `<a href=#> ${el} </a>`;

// Prend le dernier élément d'un array
export const getLast = (array) => array[array.length - 1];

// Ajoute au body HTML
export const addToBody = (el) => { document.body.innerHTML += el; };

export const addToMain = (el) => { document.querySelector('main').innerHTML = el; };

export const addToHeader = (el) => { document.querySelector('header').innerHTML += el; };
