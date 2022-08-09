const images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
]

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const img = document.getElementById('img');
let count = 0;

leftButton.addEventListener('click', () => {
  count === 0 ? count = images.length - 1 : count = count - 1;
  img.src = images[count]
})


rightButton.addEventListener('click', () => {
    count === images.length - 1 ? count = 0 : count = count + 1;
    img.src = images[count]
})