const search = document.querySelector('#search-bar');
const suggestions = document.querySelector('#suggestions');
const searchArea = document.querySelector('.search-area');


const index = {
    home : 'https://islamoflix.github.io/template/index.html',
    "pillars of islam" : 'https://islamoflix.github.io/template/pillars.html',
    "faith in islam": "https://islamoflix.github.io/template/faith.html",
    "sharia law": "https://islamoflix.github.io/template/sharia.html",
    "prophet Muhmmad(S.A.W)": "https://islamoflix.github.io/template/prophet.html",
    "concept of allah/god": "https://islamoflix.github.io/template/allah.html",
    "agenda of Islam": "https://islamoflix.github.io/template/agenda.html",
    "refutations": "https://islamoflix.github.io/template/refutations/refutations.html",
    "revert Section": "https://islamoflix.github.io/template/revert-section/revert-section.html"
}
let query = "";

function linearSearch(index, query){
    let searchResults = [];
    for(let i in index){
        console.log(`index ${i} and query ${query}`);
        if(query == ''){
            searchResults.splice(0);
        }else if(i.includes(query)){
            searchResults.push(i);
        }
    }
    return searchResults;
}

function clearSearch(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

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
    let searchResults = linearSearch(index, query);
    console.log(`${searchResults} length ${searchResults.length} query for ${search.value}`);
    clearSearch(suggestions);
    displaySearch(searchResults);
});