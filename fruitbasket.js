var img="";
var status="";
function setup(){
    canvas= createCanvas(640, 480);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status : Dectecting Object...";
}
function modelloaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotresult);
}
function gotresult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function preload(){
    img=loadImage("fruitbasket.jpg");
}
function draw(){
    image(img, 0, 0, 640, 480);
}