// Cores originais da Monalisa (paleta realista)
const COLORS = {
  skin: { r: 219, g: 178, b: 143 },      // Tons de pele
  skinLight: { r: 240, g: 200, b: 165 }, // Pele mais clara
  skinDark: { r: 180, g: 140, b: 100 },  // Sombras
  hairDark: { r: 70, g: 50, b: 40 },     // Cabelo escuro
  eyeWhite: { r: 255, g: 255, b: 255 },  // Branco dos olhos
  eyeBrown: { r: 101, g: 67, b: 33 },    // Íris castanha
  pupil: { r: 20, g: 20, b: 20 },        // Pupila
  background: { r: 100, g: 90, b: 70 },  // Fundo neutro
  lips: { r: 180, g: 100, b: 90 },       // Lábios
  nostril: { r: 150, g: 110, b: 80 }     // Narinas
};

let eyeLeft, eyeRight;
let mouseTrack = { x: 0, y: 0 };

function setup() {
  let container = document.getElementById('p5-container');
  let width = min(container.offsetWidth, 600);
  let height = width * 1.3;
  
  let canvas = createCanvas(width, height);
  canvas.parent('p5-container');
  
  // Posições dos olhos (aproximadas ao rosto)
  eyeLeft = { x: width * 0.35, y: height * 0.35 };
  eyeRight = { x: width * 0.65, y: height * 0.35 };
}

function draw() {
  // Atualizar posição do cursor
  mouseTrack.x = mouseX;
  mouseTrack.y = mouseY;
  
  // Fundo
  background(COLORS.background.r, COLORS.background.g, COLORS.background.b);
  
  // Desenhar Monalisa
  drawMonalisa();
}

function drawMonalisa() {
  noStroke();
  
  // Cabeça (forma oval)
  fill(COLORS.skin.r, COLORS.skin.g, COLORS.skin.b);
  ellipse(width / 2, height * 0.4, width * 0.5, height * 0.55);
  
  // Cabelo
  fill(COLORS.hairDark.r, COLORS.hairDark.g, COLORS.hairDark.b);
  arc(width / 2, height * 0.25, width * 0.55, height * 0.35, PI, TWO_PI);
  
  // Sombreado do rosto (anatomia)
  drawFaceShadows();
  
  // Olhos (interativos)
  drawEyes();
  
  // Nariz
  drawNose();
  
  // Boca (sorriso característico)
  drawMouth();
  
  // Pescoço
  drawNeck();
}

function drawFaceShadows() {
  // Sombras laterais para dar volume
  fill(COLORS.skinDark.r, COLORS.skinDark.g, COLORS.skinDark.b, 80);
  ellipse(width * 0.3, height * 0.4, width * 0.15, height * 0.3);
  ellipse(width * 0.7, height * 0.4, width * 0.15, height * 0.3);
  
  // Luz na testa
  fill(COLORS.skinLight.r, COLORS.skinLight.g, COLORS.skinLight.b, 100);
  ellipse(width / 2, height * 0.25, width * 0.3, height * 0.1);
}

function drawEyes() {
  // Olho esquerdo
  drawEye(eyeLeft.x, eyeLeft.y, true);
  
  // Olho direito
  drawEye(eyeRight.x, eyeRight.y, false);
}

function drawEye(x, y, isLeft) {
  // Branco do olho
  fill(COLORS.eyeWhite.r, COLORS.eyeWhite.g, COLORS.eyeWhite.b);
  stroke(0);
  strokeWeight(1);
  ellipse(x, y, 20, 25);
  
  // Calcular ângulo e distância para o cursor
  let dx = mouseTrack.x - x;
  let dy = mouseTrack.y - y;
  let angle = atan2(dy, dx);
  let distance = constrain(sqrt(dx * dx + dy * dy) * 0.02, 0, 6);
  
  // Posição da pupila que segue o cursor
  let pupilX = x + cos(angle) * distance;
  let pupilY = y + sin(angle) * distance;
  
  // Íris
  fill(COLORS.eyeBrown.r, COLORS.eyeBrown.g, COLORS.eyeBrown.b);
  ellipse(pupilX, pupilY, 12, 15);
  
  // Pupila
  fill(COLORS.pupil.r, COLORS.pupil.g, COLORS.pupil.b);
  ellipse(pupilX, pupilY, 6, 8);
  
  // Brilho nos olhos
  fill(255, 255, 255, 200);
  noStroke();
  ellipse(pupilX - 1.5, pupilY - 2, 2);
}

function drawNose() {
  stroke(COLORS.nostril.r, COLORS.nostril.g, COLORS.nostril.b);
  strokeWeight(2);
  line(width / 2, height * 0.38, width / 2, height * 0.48);
  
  // Narinas
  noStroke();
  fill(COLORS.nostril.r, COLORS.nostril.g, COLORS.nostril.b, 150);
  ellipse(width / 2 - 4, height * 0.47, 3, 4);
  ellipse(width / 2 + 4, height * 0.47, 3, 4);
}

function drawMouth() {
  // Lábio superior (sorriso característico)
  stroke(COLORS.lips.r, COLORS.lips.g, COLORS.lips.b);
  strokeWeight(2);
  noFill();
  
  // Curva suave do sorriso da Monalisa
  beginShape();
  curveVertex(width * 0.4, height * 0.58);
  curveVertex(width * 0.4, height * 0.58);
  curveVertex(width / 2, height * 0.62);
  curveVertex(width * 0.6, height * 0.58);
  curveVertex(width * 0.6, height * 0.58);
  endShape();
  
  // Preenchimento dos lábios
  fill(COLORS.lips.r, COLORS.lips.g, COLORS.lips.b, 150);
  stroke(COLORS.lips.r - 50, COLORS.lips.g - 30, COLORS.lips.b - 30);
  strokeWeight(1);
  ellipse(width / 2, height * 0.6, 30, 8);
}

function drawNeck() {
  fill(COLORS.skin.r, COLORS.skin.g, COLORS.skin.b);
  noStroke();
  rect(width / 2 - 20, height * 0.58, 40, height * 0.15);
  
  // Sombra no pescoço
  fill(COLORS.skinDark.r, COLORS.skinDark.g, COLORS.skinDark.b, 80);
  ellipse(width / 2 - 15, height * 0.65, 12, 30);
  ellipse(width / 2 + 15, height * 0.65, 12, 30);
}

function windowResized() {
  if (document.getElementById('p5-container')) {
    let container = document.getElementById('p5-container');
    let width = min(container.offsetWidth, 600);
    let height = width * 1.3;
    resizeCanvas(width, height);
    
    // Atualizar posições dos olhos
    eyeLeft = { x: width * 0.35, y: height * 0.35 };
    eyeRight = { x: width * 0.65, y: height * 0.35 };
  }
}