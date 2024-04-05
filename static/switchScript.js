const _switch = document.querySelector('#switch');
const switchLayout = document.querySelector('#switch-layout');
const main = document.querySelector('main');
const p = document.querySelectorAll('p');
const mainDiv = document.querySelector('div.main');
// let theme = "light";

function darkMode(){
    main.style.backgroundColor = '#262626';
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
    main.style.backgroundColor = '#CCC1BE';
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


document.querySelector('body').onload = (async () => {
    theme = JSON.parse(localStorage.getItem('theme'));
    await theme == 'light'?lightMode(): darkMode();
})();

