const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let particlesArray;

// get mouse position
let mouse = {
  x: null,
  y: null,
  radius: (canvas2.height / 80) * (canvas2.width / 80),
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// create particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  // method to draw individual particle
  draw() {
    ctx2.beginPath();
    ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx2.fillStyle = "white";
    ctx2.fill();
  }
  // check particle position, check mouse position, move the particle, draw the particle
  update() {
    // check if particle is till within canvas2
    if (this.x > canvas2.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas2.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // check collision detection - mouse position / particle position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas2.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas2.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    // move particle
    this.x += this.directionX;
    this.y += this.directionY;
    // draw particle
    this.draw();
  }
}

// create particle array
function init() {
  particlesArray = [];
  let numberOfParticles = (canvas2.height * canvas2.width) / 9000;
  for (let i = 0; i < numberOfParticles * 3; i++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = "white";

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// check if particles are close enough to draw line between them
function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) + (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
      if (distance < (canvas2.width / 7) * (canvas2.height / 7)) {
        opacityValue = 1 - distance / 20000;
        ctx2.strokeStyle = "rgba(255,255,255," + opacityValue + ")";
        ctx2.lineWidth = 1;
        ctx2.beginPath();
        ctx2.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx2.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx2.stroke();
      }
    }
  }
}

// animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx2.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

// resize event
window.addEventListener("resize", function () {
  canvas2.width = innerWidth;
  canvas2.height = this.innerHeight;
  mouse.radius = (canvas2.height / 80) * (canvas2.height / 80);
  init();
});

// mouse out event
window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

init();
animate();
