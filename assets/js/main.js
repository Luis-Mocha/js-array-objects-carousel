// Oggetto 
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let imgDiv = document.querySelector('#imgDiv');
let prev = document.querySelector('.left-arrow');
let next = document.querySelector('.right-arrow');

for (const key in images) {
    imgDiv.innerHTML += `
    <div class="item position-relative">
        <img src="./assets/${images[key].image}" alt="Foto Carosello" class="img-fluid">
        <div class="text-light position-absolute bottom-0">
            <h2>${images[key].title}</h2>
            <p>${images[key].text}</p>
        </div>
    </div>
    `
};

let itemElements = document.querySelectorAll('.item');
console.log(itemElements);

// Al primo elemento item aggiungo la classe "FIRST-IMG" e "ACTIVE"
itemElements[0].classList.add('active');


let imgNumber = 0;
itemElements.forEach(element => {
    imgNumber++

    element.classList.add(`itemNum-${imgNumber }`)
});