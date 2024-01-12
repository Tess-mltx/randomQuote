const randomQuoteAPI = "https://thatsthespir.it/api"
const randomQuoteBtn = document.getElementById('randomQuoteBtn')

function randomQuote() {
    fetch(randomQuoteAPI)
        .then((data) => data.json())
        .then((data) => {
            console.log(data.slug);
            displayRandomQuote(data);
        })
        .catch( (error) => {
        console.log("There was an error!", error);
        })
}

function displayRandomQuote(data) {
    let quoteDsp = document.querySelector('.main-sectionQuote-dataContainer-blockquote-quote');
    let authorDsp = document.querySelector('.main-sectionQuote-dataContainer-blockquote-author');
    let pictureDsp = document.querySelector('.main-sectionQuote-dataContainer-footer-picture');
    let totalQuoteDsp = document.querySelector('.main-sectionQuote-dataContainer-footer-totalQuote');

    let quoteData = data.quote;
    let authorData = data.author;
    let pictureData = data.photo;
    let totalQuoteData = data.total_quotes;

    quoteDsp.textContent = quoteData;
    authorDsp.textContent = authorData;
    pictureDsp.setAttribute("src", pictureData );
    totalQuoteDsp.textContent = `${totalQuoteData} quotes`
}
randomQuoteBtn.addEventListener('click', randomQuote)

async function displayRandomQuoteV2(params) {
    
} 