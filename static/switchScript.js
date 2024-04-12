const _switch = document.querySelector('#switch');
const switchLayout = document.querySelector('#switch-layout');
const main = document.querySelector('main');
const p = document.querySelectorAll('p');
const mainDiv = document.querySelector('div.main');
const body = document.querySelector('body');
const nav = document.querySelectorAll('a.header')
const logo = document.querySelector('#logo');
const options= document.querySelector('ul#options')
const header = document.querySelector('header');
// let theme = "light";

function darkMode(){
    _switch.setAttribute('class', 'activeSwitch');
    logo.setAttribute('class', 'logo-dark');
    options.style.backgroundColor = '#262626';
    header.style.backgroundColor = '#262626'
    p.forEach((val) => {
        val.style.color = "white";
    } )
    nav.forEach((val) => {
        val.style.color = 'white';
    })
    body.style.backgroundColor = '#262626';
    localStorage.setItem('theme', JSON.stringify('dark'));
    try{
        mainDiv.style.backgroundColor = "#525252";}
    catch{

    }
}

function lightMode(){
    _switch.setAttribute('class', 'switch');
    body.style.backgroundColor = 'white';
    logo.setAttribute('class', 'logo-light');
    options.style.backgroundColor = 'white';
    header.style.backgroundColor = 'white';
    p.forEach((val) => {
        val.style.color = "black";
    } )
    nav.forEach((val) => {
        val.style.color = 'black';
    })
    localStorage.setItem('theme', JSON.stringify('light'));
    try{
        mainDiv.style.backgroundColor = "rgb(204, 193, 190)";}
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


document.querySelector('body').onload = (async () => {
    theme = JSON.parse(localStorage.getItem('theme'));
    await theme == 'light'?lightMode(): darkMode();
})();

