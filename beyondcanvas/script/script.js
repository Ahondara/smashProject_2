function setup() {
  let canvas = createCanvas(500, 500);

  canvas.class("apple");
  background("black");
}

function draw() {

  
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}