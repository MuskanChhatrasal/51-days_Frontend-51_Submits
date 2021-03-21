function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    strokeWeight(100);
    if(mouseIsPressed === true){
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}