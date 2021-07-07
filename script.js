const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const initialColor = () => {
    document.body.style.backgroundColor = getRandomColor();
}

const setColor = () => document.body.style.backgroundColor = getRandomColor();

const button = document.querySelector("#color-changer");

initialColor();
button.addEventListener('click', setColor);
let initial = document.querySelector('.color').style.backgroundColor;
const backInitial = () => setTimeout( () => document.body.style.backgroundColor = initial, 5000)
button.addEventListener('click', backInitial);