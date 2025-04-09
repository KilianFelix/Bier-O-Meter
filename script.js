function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const beerTotal = getUrlParameter('total');
const beerDrank = getUrlParameter('drank');
const beerPercent = (beerDrank / beerTotal) * 100;
const glassHeight = 1080;
const beerHeight = (glassHeight / 100) * beerPercent;

const beerTexture = document.getElementById("beerTexture");
const beer = document.getElementById("beer");
const beerFoam = document.getElementById("beerFoam");
const beerFoamHeight = 100;

const beerInputDrank = document.getElementById("beerInputDrank");

document.getElementById("beerTextFull").textContent = ((beerTotal / 100) + " L")
document.getElementById("beerTextHalf").textContent = ((beerTotal / 100) / 2 + " L")

beer.style.height = (beerHeight + "px");
beer.style.top = (glassHeight - beerHeight - 29 + "px");
beerFoam.style.top = (glassHeight - beerFoamHeight - beerHeight + "px");