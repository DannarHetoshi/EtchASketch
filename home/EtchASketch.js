let divCount = 1;               

const btn = document.querySelector('button');


function createDiv(e) {
    //console.log(e);
    const divCount1 = document.querySelector('#numOfDivs');
    if (divCount1.value > 100) {
        divCount1.value = 100;
        alert("Maximum number of Grid Rows is 100.");
    }
    let numDiv = (divCount1.value)*(divCount1.value);
    const maxWidth = (1 / divCount1.value)*100;
    divCount = divCount + 1;    
    const container = document.querySelector("#DH-container");
    container.innerHTML = '';
    for (i = 1; i <= numDiv; i++) {
        const container = document.querySelector("#DH-container");
        const content = document.createElement('div');
        //console.log(i);
        content.classList.add('content');
        content.addEventListener('mouseover',changeColor);
        content.setAttribute('id', 'div' + i);
        content.setAttribute('style', 'order: ' + i + '; width: '+maxWidth+'%;');
        content.textContent = '';
        container.appendChild(content);
    }
}

function random_rgb(){
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba('+o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s);
}

function changeColor(e) {
    const divX = document.getElementById(e);
    
    e.target.style.backgroundColor = random_rgb();
} 

btn.addEventListener('click', createDiv);
var hovEvent = document.querySelectorAll('div');
for (let i=0;i<hovEvent.length;i++) {
    hovEvent[i].addEventListener('click', changeColor, false);
}
