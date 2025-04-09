function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const beerTexture = document.getElementById("beerTexture");
const beer = document.getElementById("beer");
const beerFoam = document.getElementById("beerFoam");
const beerFoamHeight = 100;

function beerChange() {
    var beerTotal = getUrlParameter('total');
    var beerDrank = getUrlParameter('drank');
    var beerPercent = (beerDrank / beerTotal) * 100;
    var glassHeight = 1080;
    var beerHeight = (glassHeight / 100) * beerPercent;

    if(beerTotal === null) {
        console.log("Missing ?total=");
        document.getElementById("beerTextFull").textContent = "Missing ?total=";
        return;
    } 
    
    if (beerDrank === null) {
        console.log("Missing ?drank=");
        document.getElementById("beerTextHalf").textContent = "Missing ?drank=";
        return;
    }

    document.title = ("Bier-O-Meter " + (beerDrank / 1000) + "/" + (beerTotal / 1000));

    document.getElementById("beerTextFull").textContent = ((beerTotal / 1000) + " L")
    document.getElementById("beerTextHalf").textContent = ((beerTotal / 1000) / 2 + " L")
    
    beer.style.height = (beerHeight + "px");
    beer.style.top = (glassHeight - beerHeight - 29 + "px");
    beerFoam.style.top = (glassHeight - beerFoamHeight - beerHeight + "px");
}

beerChange()