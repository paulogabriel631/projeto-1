function setup() {
  createCanvas(800, 500);
  background("#0006D4");
}
function draw() {

  fill("purple")
  stroke("lightblue");
if (mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
