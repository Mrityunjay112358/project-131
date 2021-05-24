
var img="";
var status  = "";
function preload(){
img= loadImage("Recliner.jpeg");
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
text("RECLINER",60,80);
noFill();
stroke("black");
strokeWeight(3);
rect(30,50,550,450);
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