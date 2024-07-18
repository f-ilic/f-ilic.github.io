const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const bufferCanvas = document.createElement('canvas');
const bufferCtx = bufferCanvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
bufferCanvas.width = width;
bufferCanvas.height = height;
const centerX = width / 2;
const centerY = height / 2;
const radius = width / 2;
let rotationAngle = 0;
let scaleFactor = 1.0;

function createNoiseWithinCircle() {
    bufferCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    bufferCtx.fillRect(0, 0, width, height);

    bufferCtx.beginPath();
    bufferCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    bufferCtx.clip();

    for (let i = 0; i < Math.PI * radius * radius * 0.05; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = radius * Math.sqrt(Math.random());
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        bufferCtx.fillStyle = 'black';
        bufferCtx.fillRect(x, y, 1, 1);
    }
}

function drawDisk(x, y, rotation, scale) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
    ctx.clip();
    ctx.drawImage(bufferCanvas, -centerX, -centerY);
    ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    drawDisk(centerX, centerY, 0, 1); // Draw bottom disk without rotation and scale
    drawDisk(centerX, centerY, rotationAngle, scaleFactor); // Draw top disk with rotation and scale
}

document.getElementById('rotateSlider').addEventListener('input', () => {
    rotationAngle = parseFloat(document.getElementById('rotateSlider').value);
    draw();
});

document.getElementById('rotateBtnadd').addEventListener('click', () => {
    rotationAngle += 1;
    document.getElementById('rotateSlider').value = rotationAngle;
    draw();
});

document.getElementById('rotateBtnsub').addEventListener('click', () => {
    rotationAngle -= 1;
    document.getElementById('rotateSlider').value = rotationAngle;
    draw();
});

document.getElementById('scaleSlider').addEventListener('input', () => {
    scaleFactor = parseFloat(document.getElementById('scaleSlider').value);
    draw();
});


document.getElementById('scaleBtnadd').addEventListener('click', () => {
    scaleFactor += 0.01
    document.getElementById('scaleSlider').value = scaleFactor;
    draw();
});

document.getElementById('scaleBtnsub').addEventListener('click', () => {
    scaleFactor -= 0.01
    document.getElementById('scaleSlider').value = scaleFactor;
    draw();
});


document.getElementById('resetBtn').addEventListener('click', () => {
    rotationAngle = 0;
    scaleFactor = 1;
    document.getElementById('rotateSlider').value = rotationAngle;
    document.getElementById('scaleSlider').value = scaleFactor;
    draw();
});

createNoiseWithinCircle(); // Create noise once
draw(); // Initial draw