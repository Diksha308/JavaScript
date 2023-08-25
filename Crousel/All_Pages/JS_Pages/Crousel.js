
function prevImg()
 {
    
   var ImagePath;
console.log("I am here!");

fetch('../JS_Pages/ImagesOrder.json')
    .then((response) => response.json())
    .then((json) => {
        this.SetImage(json)});
}

 function SetImage(img)
 {
    
Object.keys(img).forEach(function(key) {
    console.log('Key : ' + key + ', Value : ' + img[key])


document.getElementById('imgDisp').src = '../../All_Pages/Images/'+ img[key];

})
 }