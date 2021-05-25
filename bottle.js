
var img="";
var status  = "";
object = [];
function preload(){
img= loadImage("bottle.jpeg");
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(250,130);
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
image(img,0,0,600,600);
if(status != ""){

    for(i=0; i<object.length; i++){

document.getElementById("status").innerHTML = "Status: Objects Detected";
fill("red");
percent = floor(object[i].confidence * 100);

text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("red");
rect(object[i].x,object[i].y-50,object[i].width,object[i].height);

}
}}
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
        object=results;

    }
}

