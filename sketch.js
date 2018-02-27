var canvas;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255, 204, 0);
}

function draw() {  
    ellipse(mouseX, mouseY, 4*(mouseY/mouseX + mouseX/mouseY), 4*(mouseY/mouseX + mouseX/mouseY));
    fill(255,40,60,5);
    stroke(60,40,200,100);
}
//translate x, translate y, measure x, measure y
 function mousePressed() {
    fill(40,60,255,5);
}