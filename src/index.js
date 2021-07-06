import './index.scss';
import SenseiWalk from './assets/Female-3-Walk.png';

const can = document.getElementById('bg');
const rtx = can.getContext('2d');
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;
let direction = 0;
let bottomPressed = false;
let pY = canvas.height / 2 - spriteW / 2;
let pX = canvas.width / 2 - spriteH / 2;

rtx.beginPath();
rtx.moveTo(270, 0);
rtx.lineTo(270, 600);
rtx.moveTo(320, 600);
rtx.lineTo(320, 0);
rtx.moveTo(295, 0);
rtx.lineTo(295, 50);
rtx.moveTo(295, 100);
rtx.lineTo(295, 150);
rtx.moveTo(295, 200);
rtx.lineTo(295, 250);
rtx.moveTo(295, 300);
rtx.lineTo(295, 350);
rtx.moveTo(295, 400);
rtx.lineTo(295, 450);
rtx.moveTo(295, 500);
rtx.lineTo(295, 550);

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = 'down';
    direction = 0;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    bottomPressed = 'up';
    direction = 3;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    bottomPressed = 'left';
    direction = 1;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    bottomPressed = 'right';
    direction = 2;
  }
  if (e.key === 'Right' && e.key === 'Down') {
    bottomPressed = 'right-down';
  }
}

function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = false;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    bottomPressed = false;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    bottomPressed = false;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    bottomPressed = false;
  }
  console.log(e);
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = SenseiWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, 48, 0, spriteW, spriteH, pX, pY, 48, 48);
    if (bottomPressed === 'down') {
      pY += 10;
      cycle = (cycle + 1) % shots;
      console.log(pX, pY);
      if (pY >= canvas.height - spriteH) {
        pY = canvas.height - spriteH;
      }
      ctx.clearRect(0, 0, 600, 600);
      ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
      if (pY >= canvas.height - spriteH) {
        pY = canvas.height - spriteH;
      }
    }
    if (bottomPressed === 'up') {
      pY -= 10;
      cycle = (cycle + 1) % shots;
      console.log(pX, pY);
      if (pY <= 0) {
        pY = 0;
      }
      ctx.clearRect(0, 0, 600, 600);
      ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
    }
    if (bottomPressed === 'left') {
      pX -= 10;
      cycle = (cycle + 1) % shots;
      console.log(pX, pY);
      if (pX <= 0) {
        pX = 0;
      }
      ctx.clearRect(0, 0, 600, 600);
      ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
    }
    if (bottomPressed === 'right') {
      pX += 10;
      cycle = (cycle + 1) % shots;
      console.log(pX, pY);
      if (pX >= canvas.width - spriteW) {
        pX = canvas.width - spriteW;
      }
      ctx.clearRect(0, 0, 600, 600);
      ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
    }
  }, 120);
});

rtx.strokeStyle = 'white';
rtx.lineWidth = 5;
rtx.stroke();
