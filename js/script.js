const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const heroImg = document.querySelector(".hero-large")
const titleText = document.querySelector(".text-img")
const carousel = document.querySelector(".side-carousel")

for (let x = 0; x < items.length; x++) {

    const imgCurrent = items[x]

    let opZero = ""

    if (opZero === items[x]) {
        opZero = "opacity-0"
    }

    const tagImg = `<img class="${opZero}" src="${imgCurrent}" alt="">`

    heroImg.innerHTML += tagImg

    const titleImg = `<div class="${opZero}">${title[x]}</div>`

    titleText.innerHTML += titleImg
}
