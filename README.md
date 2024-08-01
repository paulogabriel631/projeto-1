# projeto1
function setup() {
  createCanvas(1000, 800);
  background("#0006D4");
}
function draw() {

  fill("purple")
  stroke("lightblue");
if (mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
