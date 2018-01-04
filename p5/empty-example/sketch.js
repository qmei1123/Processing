function setup() {
    createCanvas (500, 500);
};

function draw() {
    if (mouseIsPressed) {
        fill(10);
    } else {
        fill(500);
    }
  ellipse(mouseX, mouseY); 
}
//translate x, translate y, measure x, measure y
