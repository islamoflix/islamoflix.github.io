const search = document.querySelector('#search-bar');
const suggestions = document.querySelector('#suggestions');
const searchArea = document.querySelector('.search-area');



const index = {
    Home : 'https://islamoflix.github.io/template/index.html',
    "Pillars of Islam" : 'https://islamoflix.github.io/template/pillars.html',
    "Faith in Islam": "https://islamoflix.github.io/template/faith.html",
    "Sharia law": "https://islamoflix.github.io/template/sharia.html",
    "Prophet Muhmmad(S.A.W)": "https://islamoflix.github.io/template/prophet.html",
    "Concept of allah/god": "https://islamoflix.github.io/template/allah.html",
    "Agenda of Islam": "https://islamoflix.github.io/template/agenda.html",
    "Refutations": "https://islamoflix.github.io/template/refutations/refutations.html",
    "Revert Section": "https://islamoflix.github.io/template/revert-section/revert-section.html",
    "Did Allah prayed to or for prophet": "https://islamoflix.github.io/template/refutations/refutation5-31-24.html"
}

let key = Object.keys(index); //stores keys of index obj as an array for ease to access keys by indexing
const keywords = {
    "home, Home, main, Main" : key[0],
    "pillars of islam, , pillras of islam, Pillars of islam, Pillars of Islam, pillars in islam, Pillars in islam" : key[1],
    "faith in islam, Faith in islam, FAITH IN ISLAM": key[2],
    "sharia law, sharia in islam, Sharia law": key[3],
    "muhammad, Muhammad, muhmmad, prophet, saw, SAW, prophet muhammad, Prophet Muhammad": key[4],
    "god, Allah, concept of god, concept of allah, Concept of god, Concept of allah, Concept of Allah": key[5],
    "agenda of islam, Agenda of islam, what is islam, why islam, Islam": key[6],
    "Refutations, refutations, answers, solutions, Solutions, Why?, why?": key[7],
    "revert section, Revert section, Revert Sections, reverts, Reverts, materials, Materials": key[8],
    "Did Allah prayed to or for prophet": key[9]
}

let query = "";
// not very efficient but data is low so linear search will not consume much time
function linearSearch(query){
    let searchResults = [];//stores search results in an array based on keywords
    for(let i in keywords){
        if(query == ''){
            searchResults.splice(0);    //is there is no query or the query got cleared, the prev results deletes
        }else if(i.toLowerCase().includes(query.toLowerCase())){
            searchResults.push(keywords[i]);
        }
    }
    return searchResults;
}


//clear all the search on suggestions dialog
function clearSearch(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}


//display suggestions on suggestions dialog
function displaySearch(searchResults){
    if(searchResults.length === 0){
        clearSearch(suggestions);
    }else{
        for(let i of searchResults){
            let el = document.createElement('a');
            el.innerText = i;
            el.setAttribute('class', 'suggestions'); //suggestions class styles suggestion box elements
            el.setAttribute('href', index[i]); //link for pages in suggestion div
            suggestions.append(el);
        }
        
    }
}

search.addEventListener('input', () => {
    query = search.value.trim();
    let searchResults = linearSearch(query); //searchResults comes as an array
    clearSearch(suggestions);  //clear old search when new query come
    displaySearch(searchResults); //array of search results display row by row as block
});