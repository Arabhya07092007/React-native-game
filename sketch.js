function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let display = touches.length + " touches";
  text(display, 5, 10);
}
