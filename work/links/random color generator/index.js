var color;
var hexCode;

function generateColor(){
    let r = Math.floor((Math.random()*255)+1);
    let g = Math.floor((Math.random()*255)+1);
    let b = Math.floor((Math.random()*255)+1);

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

$(".button").click(function(){
    color = generateColor();
    console.log(color);
    $("body").css("background-color", color);
    $("p").text(color);
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

$(".submit").click(function () { 
    hexCode=document.getElementById("code").value;
    $("body").css("background-color", hexCode);
    $("p").text(hexCode);
});


