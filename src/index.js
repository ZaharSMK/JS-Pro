import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
// import SenseiWalk from './assets/Female-3-Walk.png';
// import terrainAtlas from './assets/terrain.png';
// import worldCFG from './configs/world.json';
// import sprites from "./configs/sprites";
//
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
// const spriteW = 48;
// const spriteH = 48;
//
// const terrain = document.createElement('img');
// terrain.src= terrainAtlas;
//
// terrain.addEventListener('load', () => {
//   console.log(sprites);
//     const {map} = worldCFG;
//     map.forEach((cfgRow,y) => {
//       cfgRow.forEach((cfgCell, x) => {
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//       });
//     })
// });
//
// const shots = 3;
// let cycle = 0;
// let direction = 0;
// let bottomPressed = false;
// let pY = canvas.height / 2 - spriteW / 2;
// let pX = canvas.width / 2 - spriteH / 2;
//
//
// function keyDownHandler(e) {
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = 'down';
//     direction = 0;
//   }
//   if (e.key === 'Up' || e.key === 'ArrowUp') {
//     bottomPressed = 'up';
//     direction = 3;
//   }
//   if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     bottomPressed = 'left';
//     direction = 1;
//   }
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     bottomPressed = 'right';
//     direction = 2;
//   }
//   if (e.key === 'Right' && e.key === 'Down') {
//     bottomPressed = 'right-down';
//   }
// }
//
// function keyUpHandler(e) {
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = false;
//   }
//   if (e.key === 'Up' || e.key === 'ArrowUp') {
//     bottomPressed = false;
//   }
//   if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     bottomPressed = false;
//   }
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     bottomPressed = false;
//   }
//   console.log(e);
// }
//
// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);
//
// const img = document.createElement('img');
// img.src = SenseiWalk;
// function walk(timestamp) {
//   if (bottomPressed === 'down') {
//     pY += 10;
//     cycle = (cycle + 1) % shots;
//     console.log(pX, pY);
//     if (pY >= canvas.height - spriteH) {
//       pY = canvas.height - spriteH;
//     }
//     ctx.clearRect(0, 0, 600, 600);
//     ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
//     if (pY >= canvas.height - spriteH) {
//       pY = canvas.height - spriteH;
//     }
//   }
//   if (bottomPressed === 'up') {
//     pY -= 10;
//     cycle = (cycle + 1) % shots;
//     console.log(pX, pY);
//     if (pY <= 0) {
//       pY = 0;
//     }
//     ctx.clearRect(0, 0, 600, 600);
//     ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
//   }
//   if (bottomPressed === 'left') {
//     pX -= 10;
//     cycle = (cycle + 1) % shots;
//     console.log(pX, pY);
//     if (pX <= 0) {
//       pX = 0;
//     }
//     ctx.clearRect(0, 0, 600, 600);
//     ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
//   }
//   if (bottomPressed === 'right') {
//     pX += 10;
//     cycle = (cycle + 1) % shots;
//     console.log(pX, pY);
//     if (pX >= canvas.width - spriteW) {
//       pX = canvas.width - spriteW;
//     }
//     ctx.clearRect(0, 0, 600, 600);
//     ctx.drawImage(img, cycle * spriteW, spriteW * direction, spriteW, spriteH, pX, pY, 48, 48);
//   }
//   ctx.clearRect(0, 0, 600, 600);
//   ctx.drawImage(img, 48, 0, spriteW, spriteH, pX, pY, 48, 48);
//   window.requestAnimationFrame(walk);
// }
// img.addEventListener('load', () => {
//     window.requestAnimationFrame(walk);
//
// });
