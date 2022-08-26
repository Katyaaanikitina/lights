
// Creating bulbs due to the length of the window
const windowWidth = document.documentElement.clientWidth;
const bulbWidth = parseInt(window.getComputedStyle(document.getElementsByClassName('Bulb')[0]).width);
const wireWidth = parseInt(window.getComputedStyle(document.getElementsByClassName('Bulb')[0]).marginRight);
const numberOfLamps = Math.floor(windowWidth / (bulbWidth + wireWidth)) - 1;

for (let i=0; i <= numberOfLamps; i++) {
    const bulb = document.createElement('div');
    bulb.classList.add('Bulb');
    document.getElementsByClassName('Lights')[0].append(bulb);
}



//Functions to turn on and turn off lights
function turnOnLights() {
    if(basicColorPalette.checked) turnOnBasicLights();
    if(brightColorPalette.checked) turnOnBrightLights();
    if(violetColorPalette.checked) turnOnVioletLights();
}

function turnOffLights() {
    bulbs.forEach((bulb) => bulb.classList.remove('Bulb__glow'));
    bulbs.forEach((bulb) => bulb.style.background = '#00a572');
    bulbs.forEach((bulb) => bulb.style.color = '#00a572');
}



// Funtions for opening and closing setting bar
function openSettingsBar() {
    document.getElementsByClassName('Control-panel__button_settings')[0].style.display = 'none';
    document.getElementsByClassName('Control-panel__setting-bar')[0].style.display = 'block';
}

function closeSettingsBar() {
    document.getElementsByClassName('Control-panel__button_settings')[0].style.display = 'block';
    document.getElementsByClassName('Control-panel__setting-bar')[0].style.display = 'none';
}



//Changing the shape of bulbs 
const shapeChangingPanel = document.getElementsByClassName('Control-panel__setting-bar_shape')[0];

shapeChangingPanel.onclick = function(event) {
    const shapeButton = event.target.closest('label');
    if(!shapeButton) return;

    changeShape(shapeButton);
}

function changeShape(clickedButton) {
    if(clickedButton.innerHTML == 'circle') {
        bulbs.forEach(function (bulb) {
            bulb.classList.remove('Bulb__square', 'Bulb__oval');
            bulb.classList.add('Bulb__circle');
        });
    }

    if(clickedButton.innerHTML == 'square') {
        bulbs.forEach(function (bulb) {
            bulb.classList.remove('Bulb__circle', 'Bulb__oval');
            bulb.classList.add('Bulb__square');
        });
    }

    if(clickedButton.innerHTML == 'oval') {
        bulbs.forEach(function (bulb) {
            bulb.classList.remove('Bulb__square', 'Bulb__circle');
        });
    }
}



//Changing the color palette
const bulbs = Array.from(document.getElementsByClassName('Bulb'));

const FirstBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n+1)'));
const SecondBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n-2)'));
const ThirdBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n+3)'));
const FourthBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n+4)'));

const basicColorPalette = document.getElementById('basic');
const brightColorPalette = document.getElementById('bright');
const violetColorPalette = document.getElementById('violet');

const colorChangingPanel = document.getElementsByClassName('Control-panel__setting-bar_color')[0];
colorChangingPanel.onclick = function(event) {
    const colorButton = event.target.closest('input');
    if(!colorButton) return;

    changeColorPalette(colorButton);
}

function changeColorPalette(clickedButton) {
    let id = clickedButton.id;
    switch (id) {
        case ('bright'): turnOnBrightLights();
        break;

        case ('violet'): turnOnVioletLights();
        break;

        default: turnOnBasicLights();
    }
}



//Changing the glowing mode
let mode = 'twoBytwo';
let speed = '2';

const modeChangingPanel = document.getElementsByClassName('Control-panel__setting-bar_mode')[0];
modeChangingPanel.onclick = function(event) {
    const modeButton = event.target.closest('input');
    if(!modeButton) return;

    changeMode(modeButton);
}

function changeMode(clickedButton) {
    if(clickedButton.id == 'one_by_one') {
        if(speed == '1') onModeOnebyOneSpeed1();
        if(speed == '2') onModeOnebyOneSpeed2();
        if(speed == '3') onModeOnebyOneSpeed3();
        mode = 'oneByone';
    }
    if(clickedButton.id == 'two_by_two') {
        if(speed == '1') onModeTwobyTwoSpeed1();
        if(speed == '2') onModeTwobyTwoSpeed2();
        if(speed == '3') onModeTwobyTwoSpeed3();
        mode = 'twoBytwo';
    }
}



//Changing the speed
const speedChangingPanel = document.getElementsByClassName('Control-panel__setting-bar_speed')[0];
speedChangingPanel.onclick = function(event) {
    const speedButton = event.target.closest('input');
    if(!speedButton) return;

    changeSpeed(speedButton);
}

function changeSpeed(clickedButton) {
    let speedId = clickedButton.id;
    switch (speedId) {
        case ('speed1'): 
            if (mode == 'oneByone') onModeOnebyOneSpeed1();
            if (mode == 'twoBytwo') onModeTwobyTwoSpeed1();
            speed = '1';   
        break;

        case ('speed3'): 
            if (mode == 'oneByone') onModeOnebyOneSpeed3();
            if (mode == 'twoBytwo') onModeTwobyTwoSpeed3();
            speed = '3';  
        break;

        default: 
            if (mode == 'oneByone') onModeOnebyOneSpeed2();
            if (mode == 'twoBytwo') onModeTwobyTwoSpeed2();
            speed = '2';  
    }
}




























//Functions of different color Palette
function turnOnBasicLights() {
    FirstBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__first');
        bulb.style.background = '#E3170AFF';
        bulb.style.color = '#E3170AFF';
    });
    
    SecondBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__second');
        bulb.style.background = '#A9E5BBFF';
        bulb.style.color = '#A9E5BBFF';
    });
    
    ThirdBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__third');
        bulb.style.background = '#FCF6B1FF';
        bulb.style.color = '#FCF6B1FF';
    });
    
    FourthBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__fourth');
        bulb.style.background = '#F7B32BFF';
        bulb.style.color = '#F7B32BFF';
    });
}
    
function turnOnBrightLights() {
    FirstBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__first');
        bulb.style.background = '#26dfd0';
        bulb.style.color = '#26dfd0';
    });
    
    SecondBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__second');
        bulb.style.background = '#b8ee30';
        bulb.style.color = '#b8ee30';
    });
    
    ThirdBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__third');
        bulb.style.background = '#f62aa0';
        bulb.style.color = '#f62aa0';
    });
    
    FourthBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__fourth');
        bulb.style.background = '#f9d030';
        bulb.style.color = '#f9d030';
    });
}
    
function turnOnVioletLights() {
    FirstBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__first');
        bulb.style.background = '#ffc36d';
        bulb.style.color = '#ffc36d';
    });
    
    SecondBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__second');
        bulb.style.background = '#fe6f9b';
        bulb.style.color = '#fe6f9b';
    });
    
    ThirdBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__third');
        bulb.style.background = '#c64ab3';
        bulb.style.color = '#c64ab3';
    });
    
    FourthBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__glow', 'Bulb__fourth');
        bulb.style.background = '#7b50b9';
        bulb.style.color = '#7b50b9';
    });
}



//Functions of different speed
function onModeOnebyOneSpeed1() {
    bulbs.forEach((bulb) => bulb.style.animationDuration = '5s');
    SecondBulbsAll.forEach((bulb) => bulb.style.animationDelay = '3s');
    ThirdBulbsAll.forEach((bulb) => bulb.style.animationDelay = '4s');
    FourthBulbsAll.forEach((bulb) => bulb.style.animationDelay = '6s');
};

function onModeOnebyOneSpeed2() {
    bulbs.forEach((bulb) => bulb.style.animationDuration = '4s');
    SecondBulbsAll.forEach((bulb) => bulb.style.animationDelay = '2s');
    ThirdBulbsAll.forEach((bulb) => bulb.style.animationDelay = '4s');
    FourthBulbsAll.forEach((bulb) => bulb.style.animationDelay = '5s');
};

function onModeOnebyOneSpeed3() {
    bulbs.forEach((bulb) => bulb.style.animationDuration = '3s');
    SecondBulbsAll.forEach((bulb) => bulb.style.animationDelay = '1s');
    ThirdBulbsAll.forEach((bulb) => bulb.style.animationDelay = '2s');
    FourthBulbsAll.forEach((bulb) => bulb.style.animationDelay = '3s');
};

function onModeTwobyTwoSpeed1() {
    bulbs.forEach((bulb) => bulb.style.animationDuration = '3s');
    SecondBulbsAll.forEach((bulb) => bulb.style.animationDelay = '3s');
    ThirdBulbsAll.forEach((bulb) => bulb.style.animationDelay = '0s');
    FourthBulbsAll.forEach((bulb) => bulb.style.animationDelay = '3s');
};

function onModeTwobyTwoSpeed2() {
    bulbs.forEach((bulb) => bulb.style.animationDuration = '2s');
    SecondBulbsAll.forEach((bulb) => bulb.style.animationDelay = '2s');
    ThirdBulbsAll.forEach((bulb) => bulb.style.animationDelay = '0s');
    FourthBulbsAll.forEach((bulb) => bulb.style.animationDelay = '2s');
};

function onModeTwobyTwoSpeed3() {
    bulbs.forEach((bulb) => bulb.style.animationDuration = '1s');
    SecondBulbsAll.forEach((bulb) => bulb.style.animationDelay = '1s');
    ThirdBulbsAll.forEach((bulb) => bulb.style.animationDelay = '0s');
    FourthBulbsAll.forEach((bulb) => bulb.style.animationDelay = '1s');
};