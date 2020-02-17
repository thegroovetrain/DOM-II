// Your code goes here

const random_color = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;


// Change nav links to a random color when the mouse enters its bounding box
const nav_links = document.querySelectorAll('.nav-link');
nav_links.forEach((link)=>link.addEventListener('mouseenter', (evt) => evt.target.style.color = random_color()));

// toggle page header between text and pentagrams
const h1 = document.querySelector('h1');
let swapText = '⛧⛧⛧ ⛧⛧⛧';
h1.addEventListener('click', (evt) => {
    let swap = h1.textContent;
    h1.textContent = swapText;
    swapText = swap;
});

// header becomes a random color when mouseentered
const header = document.querySelector('.main-navigation');
header.addEventListener('mouseenter', (evt) => {
    header.style.background = random_color();
})

// make images shrink on mouseover
const images = document.querySelectorAll('img');
images.forEach((image) => image.setAttribute('iscale', '1'))
images.forEach((image) => image.addEventListener('mouseover', (evt) => {
    iscale = parseFloat(evt.target.getAttribute('iscale'));
    if (iscale > 0.05) {
        iscale -= 0.05;
        evt.target.setAttribute('iscale', iscale.toString());
    }
    evt.target.style.transform=`scale(${iscale})`;
}));

// make buttons shrink when you mouseenter them
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => button.setAttribute('bscale', '1'))
buttons.forEach((button) => button.addEventListener('mouseenter', (evt) => {
    bscale = parseFloat(evt.target.getAttribute('bscale'));
    if (bscale > 0.05) {
        bscale -= 0.05;
        evt.target.setAttribute('bscale', bscale.toString());
    }
    evt.target.style.transform=`scale(${bscale})`;
}));

// buttons now hail satan on click
buttons.forEach((button) => button.addEventListener('click', (evt) => {
    alert('⛧Hail⛧Satan!⛧');
    evt.stopPropagation();
}));

// destinations hail lucifer on click
const destinations = document.querySelectorAll('.destination');
destinations.forEach((dest) => dest.addEventListener('click', (evt) => {
    alert('⛧Hail⛧Lucifer!⛧');
}))

// footer becomes a random color on mouseleave
const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', (evt) => {
    evt.target.style.background = random_color();
});

// p changes to random color on mouseenter
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((paragraph) => paragraph.addEventListener('mouseenter', (evt) => {
    paragraph.style.color = random_color();
}));

// h2s rotate on dblclick
const h2s = document.querySelectorAll('h2');
h2s.forEach((h) => h.setAttribute('rotation', '360'));
h2s.forEach((h) => {
    h.addEventListener('dblclick', (evt) => {
       let rotation = parseInt(evt.target.getAttribute('rotation'));
       if (rotation < 360) {
           rotation += 10;
       } else {
           rotation = 10;
       }
       evt.target.style.transform=`rotate(${rotation}deg)`;
       evt.target.setAttribute('rotation', rotation);
    });
});

// add pentagrams to footer on keydown
const footerp = footer.querySelector('p');
window.addEventListener('keydown', (evt) => {
    footerp.textContent += " ⛧";
});

// stop navigation items from refreshing the page
nav_links.forEach((link) => link.addEventListener('click', (evt) => {
    evt.preventDefault();
}));