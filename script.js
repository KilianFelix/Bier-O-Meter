function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const beerTexture = document.getElementById("beerTexture");
const beer = document.getElementById("beer");
const beerFoam = document.getElementById("beerFoam");
const beerFoamHeight = 100;

function beerChange() {
    var beerTotal = (data.values[0][0]);
    console.log(data.values[0][0]);
    var beerDrank = (data.values[0][1]);
    console.log(data.values[0][1]);
    var beerPercent = (beerDrank / beerTotal) * 100;
    var glassHeight = 1080;
    var beerHeight = (glassHeight / 100) * beerPercent;

    document.title = ("Bier-O-Meter " + (beerDrank / 1000) + "/" + (beerTotal / 1000));

    document.getElementById("beerTextFull").textContent = ((beerTotal / 1000) + " L")
    document.getElementById("beerTextHalf").textContent = ((beerTotal / 1000) / 2 + " L")

    beer.style.height = (beerHeight + "px");
    beer.style.top = (glassHeight - beerHeight - 29 + "px");
    beerFoam.style.top = (glassHeight - beerFoamHeight - beerHeight + "px");
}

function fetchData() {
    const sheetId = getUrlParameter('sheet');
    const apiKey = getUrlParameter('api');

    if (!apiKey) {
        console.error('Missing api in the URL parameters (?api=)');
        document.getElementById("error").textContent = "Missing api in the URL parameters (?api=)"
        return;
    }

    if (!sheetId) {
        console.error('Missing sheet ID in the URL parameters (?sheet=)');
        document.getElementById("error").textContent = "Missing sheet ID in the URL parameters (?sheet=)"
        return;
    }

    const dataRange = 'Counter!B1:B2';
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${dataRange}?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                console.error('Error with the fetch request:', response);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.values[1][0]);
            beerChange(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData();

setInterval(fetchData, 5000);