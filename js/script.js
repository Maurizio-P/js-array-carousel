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
const titleImg = document.querySelector(".title-img")
const carousel = document.querySelector(".side-carousel")

console.log(titleImg)

let currentSelect = 0

let x = ""


for (let x = 0; x < items.length; x++) {
    
    const imgCurrent = items[x]
    
    let opZero = ""
    
    if (x === currentSelect) {
        opZero = "active"
    }
    
    const tagImg = `<img class="${opZero}" src="${imgCurrent}" alt="">`
    
    heroImg.innerHTML += tagImg
    
    const titleText = `<div class="${opZero} text-img"><h4>${title[x]}</h4>${text[x]}</div>`
    
    document.querySelector(".title-img").innerHTML += titleText
}

const arrowTop = document.querySelector(".arrow-top")
const arrowBottom= document.querySelector(".arrow-bottom")

arrowTop.addEventListener("click", function(){

    const activeImg = document.querySelector(".hero-large>.active")
    activeImg.classList.remove("active")

    const activeText = document.querySelector(".title-img>.active ")
    activeText.classList.remove("active")

    currentSelect--

    if (currentSelect < 0 ) {
        currentSelect = items.length - 1
    }

    console.log("current select", currentSelect)

    const imgAdding = heroImg.querySelectorAll("img")
    const imgActive = imgAdding[currentSelect]

    const textAdding = document.querySelectorAll(".text-img")
    const textActive = textAdding[currentSelect]

    imgActive.classList.add("active")
    textActive.classList.add("active")
})

arrowBottom.addEventListener("click", function(){

    const activeImg = document.querySelector(".hero-large>.active")
    activeImg.classList.remove("active")

    const activeText = document.querySelector(".title-img>.active ")
    activeText.classList.remove("active")

    currentSelect++

    if (currentSelect > items.length - 1 ) {
        currentSelect = 0
    }

    console.log("current select", currentSelect)

    const imgAdding = heroImg.querySelectorAll("img")
    const imgActive = imgAdding[currentSelect]

    const textAdding = document.querySelectorAll(".text-img")
    const textActive = textAdding[currentSelect]

    imgActive.classList.add("active")
    textActive.classList.add("active")
})


//// PER COL2 ////

const imgSide = document.querySelector(".col-2 .side-carousel")

// imgSide.innerHTML += `  <img class="side-img" src="img/01.jpg">
//                         <img class="side-img" src="img/02.jpg">
//                         <img class="side-img" src="img/03.jpg">
//                         <img class="side-img" src="img/04.jpg">
//                         <img class="side-img" src="img/05.jpg">`