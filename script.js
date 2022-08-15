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

function turnOnLights() {
    FirstBulbsAll.forEach((bulb) => bulb.classList.add('Bulb__first'));
    SecondBulbsAll.forEach((bulb) => bulb.classList.add('Bulb__second'));
    ThirdBulbsAll.forEach((bulb) => bulb.classList.add('Bulb__third'));
    FourthBulbsAll.forEach((bulb) => bulb.classList.add('Bulb__fourth'));
}

function turnOffLights() {
    FirstBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__first'));
    SecondBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__second'));
    ThirdBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__third'));
    FourthBulbsAll.forEach((bulb) => bulb.classList.remove('Bulb__fourth'));
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

shapeChangingPanel.onclick = function(event) {
    const shapeButton = event.target.closest('label');
    if(!shapeButton) return;

    changeShape(shapeButton);
}

function changeShape(clickedButton) {
    const bulbs = Array.from(document.getElementsByClassName('Bulb'));

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