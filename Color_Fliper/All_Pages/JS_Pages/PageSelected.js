var rgb;
var Simple;
var Hex;
var mainPage;
var i;

function rgbClicked() {
  rgb = 1;
  mainPage = Hex = Simple = 0;
  console.log("r = " + rgb + "s = " + Simple + "h = " + Hex);
}
function SimpleClicked() {
    Simple = 1;
    mainPage = Hex = rgb = 0;
  console.log("r = " + rgb + "s = " + Simple + "h = " + Hex);
}
function HexClicked() {
    Hex = 1;
    mainPage = Simple = rgb = 0;
  console.log("r = " + rgb + "s = " + Simple + "h = " + Hex);
}
function MainPageClicked() {
  mainPage = 1;
  Hex = Simple = rgb = 0;
  console.log("main = " + mainPage);
}