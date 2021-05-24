
var img="";
var status  = "";
function preload(){
img= loadImage("mobile.jpeg");
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(250,130);
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
image(img,0,0,600,600);
fill("white");
text("MOBILE PHONE ",200,190);
noFill();
stroke("black");
strokeWeight(3);
rect(190,170,230,130);
}

function modelLoaded(){
    console.log("cocossd is loaded");
status = "true";
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
    }
}