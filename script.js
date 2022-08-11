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