const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColour = '#';
    for(let i=0; i<6; i++) {
        hexColour += hex[getRandomNum()];
    }
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
});

function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}