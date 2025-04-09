const beerTotal = 200;
const beerDrank = 10;
const beerPercent = (beerDrank / beerTotal) * 100;
const glassHeight = 1080;
const beerHeight = (glassHeight / 100) * beerPercent;

const beerTexture = document.getElementById("beerTexture");
const beer = document.getElementById("beer");

const beerInputDrank = document.getElementById("beerInputDrank");

function test() {
    console.log(beerInputDrank.value)   
}

beer.style.height = (beerHeight + "px");
beer.style.top = (glassHeight - beerHeight - 29 + "px");
