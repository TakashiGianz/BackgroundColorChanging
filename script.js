const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const setBackgroundColor = color => {
    document.body.style.backgroundColor = color
}

const button = document.querySelector("#color-changer");

const originalColor = getRandomColor()
const cornerBtmLeftColor = getRandomColor();
const cornerBtmRghtColor = getRandomColor();
const cornerTopLeftColor = getRandomColor();
const cornerTopRghtColor = getRandomColor();


setBackgroundColor(originalColor)

const moveButtons = position => button.addEventListener('click', () => button.style.left = position);

let count = 0
button.onclick = () => {
    count += 1;
    console.log(count);
}

// SET A RANDOM BACKGROUND COLOR
// button.addEventListener('click', () => setBackgroundColor(getRandomColor()))

// BACK TO INITIAL COLOR 
// const backInitial = () => setTimeout(() => setBackgroundColor(originalColor), 5000)

// button.addEventListener('click', backInitial);