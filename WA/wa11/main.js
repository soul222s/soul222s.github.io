const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// /* Declaring the array of image filenames */

const catImg = ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png"];
const catAlt = ["A goofy kitty", "A silly cat with it's tongue out", "A judgemental cat", "Another silly cat", "A wide stared cat"]

const images = [
    {src: 'p1.png', alt: 'A goofy kitty'},
    {src: 'p2.png', alt: 'A silly cat with its tongue out'},
    {src: 'p3.png', alt: 'A judgemental cat'},
    {src: 'p4.png', alt: 'Another silly cat'},
    {src: 'p5.png', alt: 'A wide stared cat'}
]

// /* Declaring the alternative text for each image file */

// /* Looping through images */

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.src = `images/${images[i].src}`;
    newImage.alt = images[i].alt;
    newImage.addEventListener('click', () => {
        displayedImage.src = `images/${images[i].src}`;
        displayedImage.alt = images[i].alt;
    });
    thumbBar.appendChild(newImage);
}


// // const newImage = document.createElement('img');
// // newImage.setAttribute('src', catImg[i]);
// // newImage.setAttribute('alt', catAlt[i]);
// // thumbBar.appendChild(newImage);

// /* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });