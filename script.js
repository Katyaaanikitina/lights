
// Getting needed sizes to culculate the number of needed bulbs
const windowWidth = document.documentElement.clientWidth;
const bulbWidth = parseInt(window.getComputedStyle(document.getElementsByClassName('Bulb')[0]).width);
const wireWidth = parseInt(window.getComputedStyle(document.getElementsByClassName('Bulb')[0]).marginRight);
const numberOfLamps = Math.floor(windowWidth / (bulbWidth + wireWidth)) - 1;


// Creating bulbs due to the length of the window
for (let i=0; i <= numberOfLamps; i++) {
    const bulb = document.createElement('div');
    bulb.classList.add('Bulb');
    document.getElementsByClassName('Lights')[0].append(bulb);
}


// Getting needed bulbs to color in particular shade

const FirstBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n+1)'));
const SecondBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n-2)'));
const ThirdBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n+3)'));
const FourthBulbsAll = Array.from(document.querySelectorAll('#lights :nth-child(4n+4)'));
const colorChangingPanel = document.getElementsByClassName('Control-panel__setting-bar_color')[0];

const basicColorPalette = document.getElementById('basic');
const brightColorPalette = document.getElementById('bright');
const violetColorPalette = document.getElementById('violet');


//Functions to turn on and turn off lights
function turnOnLights() {
    if(basicColorPalette.checked) turnOnBasicLights();
    if(brightColorPalette.checked) turnOnBrightLights();
    if(violetColorPalette.checked) turnOnVioletLights();
}

function turnOffLights() {
    FirstBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__first'));
    SecondBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__second'));
    ThirdBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__third'));
    FourthBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__fourth'));

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



//Event listener for changing the shape of bulbs 
const shapeChangingPanel = document.getElementsByClassName('Control-panel__setting-bar_shape')[0];

const bulbs = Array.from(document.getElementsByClassName('Bulb'));

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


//Event listener for changing the color of bulbs 
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
   




















function turnOnBasicLights() {
    FirstBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__first');
        bulb.style.background = '#E3170AFF';
        bulb.style.color = '#E3170AFF';
    });
    
    SecondBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__second');
        bulb.style.background = '#A9E5BBFF';
        bulb.style.color = '#A9E5BBFF';
    });
    
    ThirdBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__third');
        bulb.style.background = '#FCF6B1FF';
        bulb.style.color = '#FCF6B1FF';
    });
    
    FourthBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__fourth');
        bulb.style.background = '#F7B32BFF';
        bulb.style.color = '#F7B32BFF';
    });
}
    
function turnOnBrightLights() {
    FirstBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__first');
        bulb.style.background = '#26dfd0';
        bulb.style.color = '#26dfd0';
    });
    
    SecondBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__second');
        bulb.style.background = '#b8ee30';
        bulb.style.color = '#b8ee30';
    });
    
    ThirdBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__third');
        bulb.style.background = '#f62aa0';
        bulb.style.color = '#f62aa0';
    });
    
    FourthBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__fourth');
        bulb.style.background = '#f9d030';
        bulb.style.color = '#f9d030';
    });
}
    
function turnOnVioletLights() {
    FirstBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__first');
        bulb.style.background = '#ffc36d';
        bulb.style.color = '#ffc36d';
    });
    
    SecondBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__second');
        bulb.style.background = '#fe6f9b';
        bulb.style.color = '#fe6f9b';
    });
    
    ThirdBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__third');
        bulb.style.background = '#c64ab3';
        bulb.style.color = '#c64ab3';
    });
    
    FourthBulbsAll.forEach((bulb) => {
        bulb.classList.add('Bulb__fourth');
        bulb.style.background = '#7b50b9';
        bulb.style.color = '#7b50b9';
    });
}
