function decValue(){
    var counterValue=parseInt(document.getElementById("counterValue").innerHTML);
    console.log(counterValue);
    counterValue--;
    document.getElementById("counterValue").innerHTML = counterValue;
}

function incValue(){
    var counterValue=parseInt(document.getElementById("counterValue").innerHTML);
    console.log(counterValue);
    counterValue++;
    document.getElementById("counterValue").innerHTML = counterValue;
}

function resValue(){
    document.getElementById("counterValue").innerHTML = 0;
}