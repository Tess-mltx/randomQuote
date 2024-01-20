const randomQuoteAPI = "https://thatsthespir.it/api"
const cocktailsAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="
const randomQuoteBtn = document.getElementById('randomQuoteBtn')

// function randomQuote() {
//     fetch(randomQuoteAPI)
//         .then((response) => response.json())
//         .then((file) => {
//             console.log(file.slug);
//             displayRandomQuote(file);
//         })
//         .catch((error) => {
//             console.log("There was an error!", error);
//         })
// }

function displayRandomQuote(data, favDrink) {
    let quoteDsp = document.querySelector('.main-sectionQuote-dataContainer-blockquote-quote');
    let authorDsp = document.querySelector('.main-sectionQuote-dataContainer-blockquote-author');
    let pictureDsp = document.querySelector('.main-sectionQuote-dataContainer-footer-picture');
    let totalQuoteDsp = document.querySelector('.main-sectionQuote-dataContainer-footer-totalQuote');
    let favDrinkDsp = document.querySelector('.main-sectionQuote-dataContainer-footer-favCocktail');

    let quoteData = data.quote;
    let authorData = data.author;
    let pictureData = data.photo;
    let totalQuoteData = data.total_quotes;

    quoteDsp.textContent = quoteData;
    authorDsp.textContent = authorData;
    pictureDsp.setAttribute("src", pictureData);
    totalQuoteDsp.textContent = `${totalQuoteData} quotes`
    favDrinkDsp.textContent = `At this instant, de drink on the table was : ${favDrink}`

    let datacontainer = document.querySelector('.main-sectionQuote-dataContainer');
    datacontainer.style.display = 'flex';
    
}

async function v2RandomQuote() {
    try {
        let response = await fetch(randomQuoteAPI);
        let data = await response.json();

        let author = data.author;
        let firstletter = author[0];
        let favCocktail = await assignCocktail(firstletter);

        displayRandomQuote(data, favCocktail);

    }
    catch (error) {
        console.error('Erreur de récupération des données :', error);
    }
}

async function assignCocktail(letter) {
    try {
        let response = await fetch(cocktailsAPI + letter);
        let data = await response.json();
        // console.log(data);
        
        let favDrink = data.drinks[0].strDrink;
        return(favDrink)

    }
    catch (error) {
        console.error('Erreur de récupération des données :', error);
        favDrink = "Mana potion for overthinkers";
        return(favDrink);
    }
}

randomQuoteBtn.addEventListener('click', v2RandomQuote)