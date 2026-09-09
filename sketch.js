//Projeto 1-
function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke("red")
  fill("0,0,0");

  if(mouseIsPressed)
    rect(mouseX,mouseY,10,10)
}