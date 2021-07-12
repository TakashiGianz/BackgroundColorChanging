// const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

const getRandomColor = () => {
    let rNumber = Math.round(Math.random() * 255);
    let gNumber = Math.round(Math.random() * 255);
    let bNumber = Math.round(Math.random() * 255);

    let rgb = {
        red: rNumber,
        green: gNumber,
        blue: bNumber
    }

    return rgb;
}

const setBackgroundColor = (red,green,blue) => {
    document.body.style.backgroundColor = 'rgb' + '(' + red + ', ' + green +  ', ' + blue + ')';
}

const button = document.querySelector("#color-changer");

const setButtonColor = array => {
    button.style.backgroundColor = 'rgb' + '(' + array[0] + ', ' + array[1] +  ', ' + array[2] + ')';
}

const cornerTopLeft = {
    left: '0%',
    top: '0%',
    redColor: getRandomColor().red,
    greenColor: getRandomColor().green,
    blueColor: getRandomColor().blue,
}

const cornerBtmLeft = {
    left: '0%',
    top: '95%',
    redColor: getRandomColor().red,
    greenColor: getRandomColor().green,
    blueColor: getRandomColor().blue,
}

const cornerBtmRght = {
    left: '80%',
    top: '95%',
    redColor: getRandomColor().red,
    greenColor: getRandomColor().green,
    blueColor: getRandomColor().blue,
}

const cornerTopRght = {
    left: '80%',
    top: '0%',
    redColor: getRandomColor().red,
    greenColor: getRandomColor().green,
    blueColor: getRandomColor().blue,
}

const positions = [cornerTopLeft, cornerBtmLeft, cornerBtmRght, cornerTopRght];

let actualPosition = 0;

let colorRgb = {
  red:  "",
  green: "",
  blue: "" 
};

const moveButton = () => {
    button.style.left = positions[actualPosition].left;
    button.style.top = positions[actualPosition].top;
    setBackgroundColor(positions[actualPosition].redColor,positions[actualPosition].greenColor,positions[actualPosition].blueColor);
};

button.addEventListener('click', () => {
    actualPosition = (actualPosition + 1) % 4 ;
    moveButton();
    colorRgb.red = positions[actualPosition].redColor,
    colorRgb.green = positions[actualPosition].greenColor,
    colorRgb.blue = positions[actualPosition].blueColor
    console.log(colorRgb);

    let activeRgb = [colorRgb.red,colorRgb.green,colorRgb.blue];
    let maxRgb = Math.max(...activeRgb);
    console.log(maxRgb);

    let indiceRgb = activeRgb.indexOf(maxRgb);
    console.log(indiceRgb); 

    if(maxRgb > 128){
        const changeColorValueTo0 = () => activeRgb[indiceRgb] = 0;
        changeColorValueTo0();
        setButtonColor(activeRgb);
    } else if(maxRgb < 128) {
        const changeColorValueTo255 = () => activeRgb[indiceRgb] = 255;
        changeColorValueTo255();
        setButtonColor(activeRgb);
    }
})

moveButton();