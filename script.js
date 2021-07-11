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

const originalColor = getRandomColor();

const cornerTopLeft = {
    left: '0%',
    top: '0%',
    color: getRandomColor()
}

const cornerBtmLeft = {
    left: '0%',
    top: '95%',
    color: getRandomColor()
}

const cornerBtmRght = {
    left: '80%',
    top: '95%',
    color: getRandomColor()
}

const cornerTopRght = {
    left: '80%',
    top: '0%',
    color: getRandomColor()
}

const positions = [cornerTopLeft, cornerBtmLeft, cornerBtmRght, cornerTopRght];

let actualPosition = 0;


const moveButton = () => {
    button.style.left = positions[actualPosition].left;
    button.style.top = positions[actualPosition].top;
    setBackgroundColor(positions[actualPosition].color);
};

button.addEventListener('click', () => {
    actualPosition = (actualPosition + 1) % 4 ;
    moveButton();
})

moveButton();

// setBackgroundColor(originalColor)

// SET A RANDOM BACKGROUND COLOR
// button.addEventListener('click', () => setBackgroundColor(getRandomColor()))

// BACK TO INITIAL COLOR 
// const backInitial = () => setTimeout(() => setBackgroundColor(originalColor), 5000)

// button.addEventListener('click', backInitial);