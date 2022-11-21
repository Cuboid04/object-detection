var img="";
var status="";
var object=[];
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
    object=results;
}
function preload(){
    img=loadImage("tv&ac.jpg");
}
function draw(){
    image(img, 0, 0, 640, 480);
    if(status != ""){
        for(i=0;i< object.length ; i++){
            fill("green");
            document.getElementById("status").innerHTML="Status : Objects Detected";
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+ percent+"%", object[i].x + 15, object[i].y+15);
            noFill();
            stroke("cyan");
            rect(object[i].x, object[i].y , object[i].width, object[i].height);
        }
    }
}