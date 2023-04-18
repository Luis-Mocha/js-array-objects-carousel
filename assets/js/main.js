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
console.log(thumbDiv);



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
        `;

        thumbDiv.innerHTML += `
        <img src="./assets/${image}" alt="" class="thumb active">
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
        `;

        thumbDiv.innerHTML += `
        <img src="./assets/${image}" alt="" class="thumb">
        `
    }
});



let active = 0;
// next image
next.addEventListener('click', function() {

    if (active == images.length - 1) {
        active = 0
    } else {
        active++
    };

    // Sposto la classe active all'elemento selezionato IMAGES
    changeActiveImg()

    // thumbs
    changeActiveThumb()
});

// previous image
prev.addEventListener('click', function() {

    if (active == 0) {
        active = images.length -1
    } else {
        active--
    };

    // Sposto la classe active all'elemento selezionato IMAGES
    changeActiveImg()

    // thumbs
    changeActiveThumb()
});


//CAMBIO L'IMMAGINE PRINCIPALE AL CLICK DELLA CORRISPONDENTE THUMB
let thumbsArray = document.querySelectorAll('.thumb');
console.log(thumbsArray);

thumbsArray.forEach((element, index) => { //Chiamo il parametro 

    element.addEventListener('click', function() {

        // console.log('funziono' + index)

        // Sposto la classe active all'elemento selezionato THUMBS
        document.querySelector('.thumb.active').classList.remove('active');
        element.classList.add('active');

        // Sposto la classe active all'elemento selezionato IMAGES
        document.querySelector('.item.active').classList.remove('active');
        imgDiv.getElementsByClassName('item')[index].classList.add('active');
    })
});


// ---- MY FUNCTIONS ----
function changeActiveImg() {
    // Sposto la classe active all'elemento IMG selezionato
    document.querySelector('.item.active').classList.remove('active');
    imgDiv.getElementsByClassName('item')[active].classList.add('active');
};

function changeActiveThumb() {
    // Sposto la classe active all'elemento THUMB selezionato
    document.querySelector('.thumb.active').classList.remove('active');
    thumbDiv.getElementsByClassName('thumb')[active].classList.add('active');
};  

function autoPlayFunction() {
    if (active == images.length - 1) {
        active = 0
    } else {
        active++
    };

    // Sposto la classe active all'elemento selezionato IMAGES
    changeActiveImg()

    changeActiveThumb()
};


const playBtn = document.querySelector('#playBtn')
const stopBtn = document.querySelector('#stopBtn')

let Functioner;

playBtn.addEventListener('click', function() {
   autoPlayer = setInterval( autoPlayFunction, 2000)}
)

stopBtn.addEventListener('click', function () {
    clearInterval(autoPlayer)
});