video="";
status1="";
function setup(){
canvas=createCanvas(540,430);
canvas.center();
}
function preload(){
video=createVideo("video.mp4");
video.hide();
}
function draw(){
image(video,0,0,540,430);
}
function start(){
    object_detector =ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}
function modelloaded(){
    console.log("modelloaded");
    status1=true;
    video.loop();
    video.speed(1);
video.volume(2);
}