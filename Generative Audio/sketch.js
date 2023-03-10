let sound;

function preload(){
  sound = loadSound('GenerativeMusic.mp3');
}

function setup() {
  createCanvas(700, 700);
  
  smooth();
  noStroke();
  
  sound.loop();
  
  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  background(255, 30);
  
  let level = amp.getLevel();
  
  let wave = fft.waveform();
  let spectrum = fft.analyze();
  
  let size = map(level, 0, 1, 0, width/2);
  
  
  for (let i = 20; i < width; i+=20){
      fill(random(0,255), random(0,255), random(0,255));
      circle(i, (frameCount + random(-10,10)) % height, size/6);
  }
}

// function keyPressed() {
//   if (key === 's') {
//     saveGif('mySketch', 12);
//   }
// }
