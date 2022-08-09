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
