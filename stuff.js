
const shapes = [];

function createShape() {
  const shape = document.createElement('div');
  shape.classList.add('shape');
  shape.style.top = `${Math.random() * 100}%`;
  shape.style.left = `${Math.random() * 100}%`;
  document.querySelector('.background').appendChild(shape);
  shapes.push(shape);
}


for (let i = 0; i < 10; i++) {
  createShape();
}


function animateShapes() {
  shapes.forEach((shape) => {
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
  });
  requestAnimationFrame(animateShapes);
}

animateShapes();
