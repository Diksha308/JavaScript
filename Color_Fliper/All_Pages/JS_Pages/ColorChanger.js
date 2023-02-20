function BtnClicked() {
  if (rgb == 1) {
    var color = "rgb(240, 239, 253)";
    var body = document.getElementById("rgbBodyID").style.backgroundColor;
    console.log(color);

    ColorPlt_r = Math.floor(Math.random() * 1000 + 1);
    ColorPlt_g = Math.floor(Math.random() * 1000 + 1);
    ColorPlt_b = Math.floor(Math.random() * 1000 + 1);
    if (ColorPlt_r == 1000) ColorPlt_r = ColorPlt_r - 1;
    if (ColorPlt_g == 1000) ColorPlt_g = ColorPlt_g - 1;
    if (ColorPlt_b == 1000) ColorPlt_b = ColorPlt_b - 1;

    body = "rgb(" + ColorPlt_r + "," + ColorPlt_g + "," + ColorPlt_b + ")";
    console.log(body);
    document.getElementById("rgbBodyID").style.backgroundColor = body;
    
    document.getElementById("ClrValue").innerHTML="Background Color is " +  body;
  }
  if (Simple == 1) {
    var Colors = ["red", "yellow", "green", "blue", "black"];
    if (i == null) i = 0;
    if (i == 5) i = 0;
    document.getElementById("simpleBodyID").style.backgroundColor = Colors[i];
    document.getElementById("ClrValue").innerHTML="Background Color is " +  Colors[i];
    i++;
  }
  if (Hex == 1) {
    console.log(Hex);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    document.getElementById("hexBodyID").style.backgroundColor = "#" + randomColor;
    document.getElementById("ClrValue").innerHTML="Background Color is #" + randomColor;
  }
}
