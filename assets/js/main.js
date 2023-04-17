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
let thumbDiv = document.querySelector('#thumbs');
let prev = document.querySelector('.left-arrow');
let next = document.querySelector('.right-arrow');



images.forEach( (element, index) => {

    const {image, title, text} = element;

    if (index === 0) {
        imgDiv.innerHTML += `
        <div class="item position-relative active">
            <img src="./assets/${image}" alt="Foto Carosello" class="img-fluid">
            <div class="info-img text-light position-absolute bottom-0 end-0 me-2">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        `
        thumbDiv.innerHTML += `
        <img src="./assets/${image}" alt="" class="thumb-active">
        `
     
    } else {
        imgDiv.innerHTML += `
        <div class="item position-relative">
        <img src="./assets/${image}" alt="Foto Carosello" class="img-fluid">
            <div class="info-img text-light position-absolute bottom-0 end-0 me-2">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        `

        thumbDiv.innerHTML += `
        <img src="./assets/${image}" alt="" class="thumb-active">
        `
    }
});


let active = 0;
// next image
next.addEventListener('click', function() {

    if (active == images.lenght - 1) {
        active = 0
    } else {
        active++
    }

    let activeItem = document.querySelector('.item.active');
    activeItem.classList.remove('active');
    imgDiv.getElementsByClassName('item')[active].classList.add('active')

})

// previous image
prev.addEventListener('click', function() {

    if (active == 0) {
        active = images.length -1
    } else {
        active--
    }

    let activeItem = document.querySelector('.item.active');
    activeItem.classList.remove('active');
    imgDiv.getElementsByClassName('item')[active].classList.add('active')
})