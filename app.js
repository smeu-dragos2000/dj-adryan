// --- Header Slideshow ---

let slides = document.querySelector('#slides');
let imgList = ['header1', 'header2', 'header3', 'header4'];
imgList.push(imgList[0])
let imgItem = "";

imgList.forEach(element => {
    imgItem += `<div class="slide"><img src="./Images/${element}.jpg"></div>`;
})
slides.innerHTML = imgItem;
let slide = document.querySelectorAll('.slide');

// CSS Styling ---

let width = 100 * imgList.length;
slides.style.width = `${width}%`;


let controlNumber = 0;
let translateX = (100 / imgList.length) * controlNumber;
slides.style.transform = `translateX(${-translateX}%)`;

function slideShow () {
    controlNumber++;
    if (controlNumber < imgList.length) {
        translateX = (100 / imgList.length) * controlNumber;
        slides.style.transition = 'transform 500ms ease-out';
        slides.style.transform = `translateX(${-translateX }%)`;
    }
    else {
        controlNumber = 0;
        translateX = (100 / imgList.length) * controlNumber;
        slides.style.transition = 'transform 0ms linear';
        slides.style.transform = `translateX(${-translateX }%)`;
    }
};

setInterval (slideShow, 4000);


// --- YouTube Gallery populate ---

let galleryContainer = document.querySelector('.gallery-container');

fetch('youtube.json')
    .then (response => response.json())
    .then (data => {
        
        data.forEach(element => {
            let itemTitle = `<h4 class="item-title">${element.title}</h4>`;
            let itemThumb = `<img src="${element.thumbnail}" alt=""></img>`
            let itemURL = element.link;
            let girdItem = `<div class="grid-item"><a href="${itemURL}">${itemThumb} ${itemTitle}</a></div>`
            galleryContainer.innerHTML += girdItem;
        })
    })


