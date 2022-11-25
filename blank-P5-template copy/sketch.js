//console.log("my script is loaded successfully")




let numOfParticles = 10;
let particles = [];
let button2;
let button1;
let confettis = [];
let totalNum = 300;

function setup() {
  
  let cnv = createCanvas(500,400);
  console.log("canvas")
    cnv.id("canvasContainer")

  for (let i = 0; i < numOfParticles; i++) {
    particles.push(new Particle(width / 2, height / 2));
  }
  let button1 = createButton("Left Jump");
  button1.mousePressed(changeRightDirection);
  button1.position(180, 400);
  button1.style("color:red");
  button1.style("backgroundColor: lightCoral")
  let button2 = createButton("Right Jump");
  button2.mousePressed(changeLeftDirection);
  button2.position(250, 400);
  button2.style("color:green");
  button2.style("backgroundColor: LightSeaGreen")
  for (let i = 0; i < totalNum; i++) {
    confettis.push(new Confetti(random(width), random(height)));
  }
}

function draw() {
  background(209, 245, 254);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if (mouseIsPressed) {
      p.top();
    }
    p.move();
    p.fall();
    p.bounce();

    if (p.x > 300 && p.x < 350 && p.y > 180 && p.y < 200) {
      particles.splice(i, 1);
    }
    if (p.x > 80 && p.x < 130 && p.y > 360 && p.y < 380) {
      particles.splice(i, 1);
    }

    p.display();
  }

  if (particles.length == 0) {
    for (let i = 0; i < confettis.length; i++) {
      let c = confettis[i];

      c.move();
      c.display();
      c.reappear();
      c.rotate();
    }
  }
}
function changeRightDirection() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].xSpd = random(-1, -3);
    particles[i].ySpd = random(-1, -3);
  }
}
function changeLeftDirection() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].xSpd = random(1, 3);
    particles[i].ySpd = random(-1, -3);
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-5, -3);
    this.dia = 30;
  }

  top() {
    this.ySpd = random(-3, -5);
  }

  bounce() {
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -1;
    } else if (this.x > width) {
      this.x = width;
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * -1;
    } else if (this.y > height) {
      this.y = height;
    }
  }

  fall() {
    this.ySpd += 0.1;
  }

  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(250, 86, 86);
    circle(0, 0, this.dia);

    pop();
    fill(203, 168, 241);
    rect(80, 330, 50);
    fill(209, 254, 217);
    rect(300, 150, 50);
  }
}
class Confetti {
  constructor(x2, y2) {
    this.x2 = x2;
    this.y2 = 0;
    this.dia = random(5, 16);
    this.xSpd2 = 0;
    this.ySpd2 = random(1, 5);
    this.rotAngle = random(TWO_PI);
    this.rotSpd = random(0.1, 1);
  }

  move() {
    this.x2 += this.xSpd2;
    this.y2 += this.ySpd2;
  }

  display() {
    push();
    translate(this.x2, this.y2);
    rotate(this.rotAngle);

    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(0, 0, this.dia, this.dia * 0.7);

    pop();
  }

  reappear() {
    if (this.x2 < 0) {
      this.x2 = width;
    } else if (this.x2 > width) {
      this.x2 = 0;
    }
    if (this.y2 < 0) {
      this.y2 = height;
    } else if (this.y2 > height) {
      this.y2 = 0;
    }
  }

  rotate() {
    this.rotAngle += this.rotSpd;
  }
}
