const container = document.querySelector('.container');
let posX = 0;
let posY = 0;
let rotation = 0;

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const step = 10;
  let angle = 0; // Initialize angle

  switch(key) {
    case 'w':
      posY -= step;
      angle = -90;  
      break;
    case 'a':
      posX -= step;
      angle = 180;
      break;
    case 's':
      posY += step;
      angle = 90; 
      break;
    case 'd':
      posX += step;
      break;
    default:
      return;
  }

  container.style.transform = `translate(${posX}px, ${posY}px) rotate(${angle}deg)`;
});
