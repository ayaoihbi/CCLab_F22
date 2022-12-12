
let weather = 'sunny';
let particles = [];
let countNum;

let cloud1;
let cloud2;
let cloud3;


function setup() {
    let cnv = createCanvas(400,400);
    console.log("canvas")
      cnv.parent("canvasContainer") 
  
  for (let i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }

  countNum = 0;

  cloud1 = new Cloud(50, 80, 2);
  cloud2 = new Cloud(150, 80, 4);
  cloud3 = new Cloud(100, 80, 6);
}

function mousePressed() {
  countNum += 1;
  
  if (countNum > 3){
    countNum = 0;
  }
}

function draw() {
   background(220);
  
  if (countNum === 1) {
    console.log("num==1");
    
  }
 


  push();
  //sky
  if (countNum === 0) {
    fill(63, 184, 241);
  } else if (countNum === 3) {
    //cloudy
    fill(63, 184, 241);
  } else if (countNum === 2) {
    fill(119, 137, 146);
  } else if (countNum === 1) {
     fill(4, 26, 64);
  }

  rect(0, 0, 400, 150);
  pop();
  
  push();
  //first building
  stroke(0);
  fill(241, 234, 205);
  quad(400, 350, 300, 300, 300, 50, 400, 100);
  fill(193, 186, 156);
  quad(400, 100, 300, 50, 350, 30, 400, 50);
  fill(120, 97, 66);
  quad(370, 335, 330, 315, 330, 190, 370, 210);
  fill(93, 68, 33);
  quad(330, 315, 330, 190, 335, 193, 335, 317);
  fill(0);
  circle(342, 260, 8);
  //first building window
  fill(87, 84, 81);
  quad(380, 190, 320, 160, 320, 80, 380, 110);
  fill(120, 116, 111);
  quad(320, 160, 320, 80, 345, 93, 345, 172);
  quad(380, 190, 380, 110, 350, 95, 350, 175);
  line(320, 90, 345, 103);
  line(320, 100, 345, 113);
  line(320, 110, 345, 123);
  line(320, 120, 345, 133);
  line(320, 130, 345, 143);
  line(320, 140, 345, 153);
  line(320, 150, 345, 163);
  line(320, 160, 345, 173);

  line(380, 120, 350, 105);
  line(380, 130, 350, 115);
  line(380, 140, 350, 125);
  line(380, 150, 350, 135);
  line(380, 160, 350, 145);
  line(380, 170, 350, 155);
  line(380, 180, 350, 165);
  line(380, 190, 350, 175);

  //second building
  fill(142, 127, 115);
  quad(0, 380, 150, 200, 150, 0, 0, 0);
  line(0, 170, 150, 50);
  line(80, 105, 80, 285);
  //left part of the second building
  fill(224, 213, 203);
  quad(10, 367, 70, 295, 70, 130, 10, 180);
  //right part of the second building
  fill(160, 149, 138);
  quad(98, 92, 98, 262, 105, 254, 105, 86);
  quad(123, 72, 130, 66, 130, 224, 123, 232);
  line(80, 150, 150, 90);
  fill(0);
  quad(110, 165, 120, 155, 120, 160, 110, 170);
  quad(114, 180, 117, 180, 117, 160, 114, 165);
  //Second building windows
  fill(120, 116, 111);
  quad(15, 65, 15, 145, 55, 113, 55, 40);
  fill(87, 84, 81);
  quad(15, 65, 55, 40, 55, 35, 15, 60);
  quad(55, 113, 55, 40, 50, 43, 50, 117);
  fill(120, 116, 111);
  quad(85, 30, 85, 90, 125, 58, 125, 5);
  fill(87, 84, 81);
  quad(85, 30, 125, 5, 125, 0, 85, 25);
  quad(125, 58, 125, 5, 120, 8, 120, 62);

  //end of the buildings
  pop();

  if (countNum === 3) {
    //clouds
    cloud1.move();
    cloud1.display();
    cloud2.move();
    cloud2.display();
    cloud3.move();
    cloud3.display();

 
  }

  if (countNum === 2) {
    
    for (let i = 0; i < 200; i++) {
      let p = particles[i];

      console.log("currently snowy");
      p.show();
      p.update();
    }
  }
  
   
   if (countNum === 1) {
    //stars
    push();
    console.log("starsnow");
    
    //stars Particle
    for (let i = 0; i < 5; i++) {
      let x = random(150, 300);
      let y = random(height - 250);
      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 2, 2);
      pop();
    }
  }
  
 
}
class Particle {
  constructor(x, y) {
    this.x = random(0, width);
    this.y = random(0, -height);
    this.speed = random(5, 10);
    this.gravity = 1;
  }
  show() {
    push();
    noStroke();
    fill(196, 211, 223);
    
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
    pop();
  }
  update() {
    this.y = this.y + this.speed * this.gravity;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 1;
    }
  }
}

class Cloud {
  constructor(x, y, nEllipses) {
    this.x = x;
    this.y = y;
    this.nEllipses = nEllipses;
    this.width = random(50, 70);
    this.height = random(30, 80);
  }

  move() {
    this.x += 1;
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.width, this.height);
  }
}


