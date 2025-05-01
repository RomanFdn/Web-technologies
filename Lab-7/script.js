// Індивідуальне завдання: Анімація руху кола
const circle = document.querySelector('.circle');
const circleButton = document.querySelector('.circle-button');

// Рух кола при кліку
circleButton.addEventListener('click', () => {
    circle.style.left = circle.style.left === '0px' ? '200px' : '0px';
});

// Зміна кольору кола на випадковий кожні N секунд
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

setInterval(() => {
    circle.style.backgroundColor = getRandomColor();
}, 2000);


// Рух кола при кліку
circleButton.addEventListener('click', () => {
    if (circle.style.left === '200px') {
        circle.style.left = '0px';
    } else {
        circle.style.left = '200px';
    }
    circle.style.transition = 'left 0.5s ease-in-out'; // Плавний рух
});

// Зміна кольору кола на випадковий кожні 3 секунди
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

setInterval(() => {
    circle.style.backgroundColor = getRandomColor();
}, 3000); // Інтервал 3 секунди