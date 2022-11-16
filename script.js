
// Creating bulbs due to the length of the window
const windowWidth = document.documentElement.clientWidth;
const bulbWidth = parseInt(window.getComputedStyle(getElementByClassName('Bulb')).width);
const wireWidth = parseInt(window.getComputedStyle(getElementByClassName('Bulb')).marginRight);
const numberOfLamps = Math.floor(windowWidth / (bulbWidth + wireWidth)) - 1;

for (let i = 0; i <= numberOfLamps; i++) {
    const bulb = document.createElement('div');
    bulb.classList.add('Bulb');
    getElementByClassName('Bulbs').append(bulb);
}


//Functions to turn on and turn off Bulbs
function turnOnBulbs() {
    let colorButtons = Array.from(document.getElementsByName('color'));
    colorButtons.forEach((button) => {
        if (button.checked) turnOnLightsByColor(button.id);
    });
}

function turnOffBulbs() {
    bulbs.forEach((bulb) => {
        bulb.classList.remove('Bulb__Glow');
        bulb.style.background = '#00a572';
    })   
}



// Funtions for opening and closing setting bar
function openSettingsBar() {
    getElementByClassName('Control-panel__Button_settings').style.display = 'none';
    getElementByClassName('Setting-bar').style.display = 'block';
}

function closeSettingsBar() {
    getElementByClassName('Control-panel__Button_settings').style.display = 'block';
    getElementByClassName('Setting-bar').style.display = 'none';
}



//Changing the shape of bulbs 
const shapeChangingPanel = getElementByClassName('Setting-bar__Shape');

shapeChangingPanel.onclick = (event) => {
    const clickedShapeButton = event.target.closest('label');
    if (!clickedShapeButton) return;

    changeShape(clickedShapeButton);
}

function changeShape(clickedButton) {
    switch (clickedButton.innerHTML) {
        case ('circle'): {
            bulbs.forEach((bulb) => {
                bulb.classList.remove('Bulb__Square', 'Bulb__Oval');
                bulb.classList.add('Bulb__Circle');
            });
        }
        break;

        case ('square'): {
            bulbs.forEach((bulb) => {
                bulb.classList.remove('Bulb__Circle', 'Bulb__Oval');
                bulb.classList.add('Bulb__Square');
            });
        }
        break;

        case ('oval'): {
            bulbs.forEach((bulb) => {
                bulb.classList.remove('Bulb__Square', 'Bulb__Circle');
            });
        }
        break;

        default: return;
    }
}



//Changing the color palette
const bulbs = Array.from(document.getElementsByClassName('Bulb'));

const colorChangingPanel = getElementByClassName('Setting-bar__Color');
colorChangingPanel.onclick = (event) => {
    const colorButton = event.target.closest('input');
    if (!colorButton) return;

    turnOnLightsByColor(colorButton.id);
}


//Changing the glowing mode
let mode = 'two_by_two';
let speed = '2';

const modeChangingPanel = getElementByClassName('Setting-bar__Mode');
modeChangingPanel.onclick = (event) => {
    const modeButton = event.target.closest('input');
    if (!modeButton) return;

    changeMode(modeButton, speed);
}

function changeMode(clickedButton, selectedSpeed) {
    (clickedButton.id === 'one_by_one') ? onModeOnebyOneBySpeed(selectedSpeed) : onModeTwobyTwoBySpeed(selectedSpeed);
    mode = clickedButton.id;
}


//Changing the speed
const speedChangingPanel = getElementByClassName('Setting-bar__Speed');
speedChangingPanel.onclick = (event) => {
    const speedButton = event.target.closest('input');
    if (!speedButton) return;

    changeSpeed(speedButton, mode);
}

function changeSpeed(clickedButton, selectedMode) {
    (selectedMode === 'one_by_one') ? onModeOnebyOneBySpeed(clickedButton.id) : onModeTwobyTwoBySpeed(clickedButton.id);
    speed = clickedButton.id;
}


function getElementByClassName(className) {
    return document.getElementsByClassName(className)[0];
}

//function for changing color
function turnOnLightsByColor(clickedColorPallete) {
    turnOffBulbs();
    bulbs.forEach((bulb, index) => {
        if (((index + 1) % 4) === 0) {
            bulb.style.background = colorPalette[clickedColorPallete].fourthColor;
            bulb.style.color = colorPalette[clickedColorPallete].fourthColor;
            bulb.classList.add('Bulb__Fourth');
        } else if (((index + 1) % 4) === 3) {
            bulb.style.background = colorPalette[clickedColorPallete].thirdColor;
            bulb.style.color = colorPalette[clickedColorPallete].thirdColor;
            bulb.classList.add('Bulb__Third');
        } else if (((index + 1) % 4) === 2) {
            bulb.style.background = colorPalette[clickedColorPallete].secondColor;
            bulb.style.color = colorPalette[clickedColorPallete].secondColor;
            bulb.classList.add('Bulb__Second');
        } else if (((index + 1) % 4) === 1) {
            bulb.style.background = colorPalette[clickedColorPallete].firstColor;
            bulb.style.color = colorPalette[clickedColorPallete].firstColor;
            bulb.classList.add('Bulb__First');
        }
        bulb.classList.add('Bulb__Glow');
    })
}


//Functions for changing mode due to the speed
function onModeOnebyOneBySpeed(clickedSpeed) {
    
    bulbs.forEach((bulb, index) => {
        bulb.style.animationDuration = OneByOneSettingsBySpeed[clickedSpeed].bulbsDuration;
        if (((index + 1) % 4) === 0) bulb.style.animationDelay = OneByOneSettingsBySpeed[clickedSpeed].fourthBulbsAllDelay;
        else if (((index + 1) % 4) === 3) bulb.style.animationDelay = OneByOneSettingsBySpeed[clickedSpeed].thirdBulbsAllDelay;
        else if (((index + 1) % 4) === 2) bulb.style.animationDelay = OneByOneSettingsBySpeed[clickedSpeed].secondBulbsAllDelay;
        else if (((index + 1) % 4) === 1) bulb.style.animationDelay = OneByOneSettingsBySpeed[clickedSpeed].firstBulbsAllDelay;
    });
}

function onModeTwobyTwoBySpeed(clickedSpeed) {
    bulbs.forEach((bulb, index) => {
        bulb.style.animationDuration = TwobyTwoSettingsBySpeed[clickedSpeed].bulbsDuration;
        if (((index + 1) % 2 === 0)) bulb.style.animationDelay = TwobyTwoSettingsBySpeed[clickedSpeed].evenBulbsDelay;
        else bulb.style.animationDelay = TwobyTwoSettingsBySpeed[clickedSpeed].oddBulbsDelay;
    });
}


//data
const colorPalette = {
    basic: {
        firstColor: '#E3170AFF',
        secondColor: '#A9E5BBFF',
        thirdColor: '#FCF6B1FF',
        fourthColor: '#F7B32BFF',
    },

    violet: {
        firstColor: '#ffc36d',
        secondColor:'#fe6f9b',
        thirdColor: '#c64ab3',
        fourthColor: '#7b50b9',
    },

    bright: {
        firstColor: '#26dfd0',
        secondColor: '#b8ee30',
        thirdColor: '#f62aa0',
        fourthColor: '#f9d030',
    },
};

const OneByOneSettingsBySpeed = {
    1: {
        bulbsDuration: '5s',
        firstBulbsAllDelay: '0s',
        secondBulbsAllDelay: '3s',
        thirdBulbsAllDelay: '4s',
        fourthBulbsAllDelay: '6s',
    }, 

    2: {
        bulbsDuration: '4s',
        firstBulbsAllDelay: '0s',
        secondBulbsAllDelay: '2s',
        thirdBulbsAllDelay: '4s',
        fourthBulbsAllDelay: '5s',
    },

    3: {
        bulbsDuration: '3s',
        firstBulbsAllDelay: '0s',
        secondBulbsAllDelay: '1s',
        thirdBulbsAllDelay: '2s',
        fourthBulbsAllDelay: '3s',
    }

}

const TwobyTwoSettingsBySpeed = {
    1: {
        bulbsDuration: '3s',
        evenBulbsDelay: '3s',
        oddBulbsDelay: '0s',
    }, 

    2: {
        bulbsDuration: '2s',
        evenBulbsDelay: '2s',
        oddBulbsDelay: '0s',
    },

    3: {
        bulbsDuration: '1s',
        evenBulbsDelay: '1s',
        oddBulbsDelay: '0s',
    }
}
