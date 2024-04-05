const _switch = document.querySelector('#switch');
const switchLayout = document.querySelector('#switch-layout');
const main = document.querySelector('main');
const p = document.querySelectorAll('p');
const mainDiv = document.querySelector('div.main');
// let theme = "light";

function darkMode(){
    main.setAttribute('class', 'main-black');
    
    _switch.setAttribute('class', 'activeSwitch');
    p.forEach((val) => {
        val.style.color = "white";
    } )
    localStorage.setItem('theme', JSON.stringify('dark'));
    try{
        mainDiv.style.backgroundColor = "#525252";}
    catch{

    }
}

function lightMode(){
    main.setAttribute('class', 'main-white');
    
    _switch.setAttribute('class', 'switch');
    p.forEach((val) => {
        val.style.color = "black";
    } )
    localStorage.setItem('theme', JSON.stringify('light'));
    try{
        mainDiv.style.backgroundColor = "white";}
    catch{}
}

_switch.addEventListener('click', () => {
    theme = JSON.parse(localStorage.getItem('theme'));
    if(theme == 'light'){
        darkMode()
    }else{
        lightMode()
    }
})


switchLayout.addEventListener('click', () => {
    theme = JSON.parse(localStorage.getItem('theme'));
    if(theme == 'light'){
        darkMode()
    }else{
        lightMode()
    }
})


document.querySelector('body').onload = () => {
    theme = JSON.parse(localStorage.getItem('theme'));
    theme == 'light'?lightMode(): darkMode();
}

