const _switch = document.querySelector('#switch');
const switchLayout = document.querySelector('#switch-layout');
const main = document.querySelector('main');
const p = document.querySelectorAll('p');
const mainDiv = document.querySelector('div.main');

function pBlack(val){
    element = val.style;
    element.color = 'black';
    // element.textShadow = '2px 2px white';    
}

function pWhite(val){
    element = val.style;
    element.color = 'white';
    // element.textShadow = '2px 2px black';
}

// content windows color changes
function windowBlack(){
    mainDiv.style.backgroundColor = '#525252';
} 

function windowWhite(){
    mainDiv.style.backgroundColor = 'white';
}

_switch.addEventListener('click', ()=>{ 
    _switch.getAttribute('id')=='switch'? _switch.setAttribute('id', 'activeSwitch'): _switch.setAttribute('id', 'switch');
    _switch.getAttribute('id')=='switch'? main.setAttribute('class', 'main-white'): main.setAttribute('class', 'main-black'); //changing color of main window
    if (_switch.getAttribute('id')=='switch'){
        p.forEach(pBlack);
        windowWhite();
    } else if (_switch.getAttribute('id')=='activeSwitch'){
        p.forEach(pWhite);
        windowBlack();
    }
})

switchLayout.addEventListener('click', ()=>{ 
    _switch.getAttribute('id')=='switch'? _switch.setAttribute('id', 'activeSwitch'): _switch.setAttribute('id', 'switch');
    _switch.getAttribute('id')=='switch'? main.setAttribute('class', 'main-white'): main.setAttribute('class', 'main-black'); //changing color of main window
    if (_switch.getAttribute('id')=='switch'){
        p.forEach(pBlack);
        windowWhite();
    } else if (_switch.getAttribute('id')=='activeSwitch'){
        p.forEach(pWhite);
        windowBlack();
    }
})

