let canvas = document.getElementById('canvas0');
let ctx = canvas.getContext('2d');
let bufferCanvas = document.createElement('canvas');
let bufferCtx = bufferCanvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
bufferCanvas.width = width;
bufferCanvas.height = height;
let centerX = width / 2;
let centerY = height / 2;
let radius = width / 2;
let noiselevel = 0.10;
let rotationAngle = 0;
let scaleFactor = 1.0;
let xOffset = 0;
let yOffset = 0;


function createNoiseWithinCircle() {
    bufferCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    bufferCtx.fillRect(0, 0, width, height);

    bufferCtx.beginPath();
    bufferCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    bufferCtx.clip();

    for (let i = 0; i < Math.PI * radius * radius * noiselevel; i++) {
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
    drawDisk(centerX + xOffset, centerY + yOffset, rotationAngle, scaleFactor); // Draw top disk with rotation and scale
}

// ROTATE
document.getElementById('rotateSlider').addEventListener('input', () => {
    rotationAngle = parseFloat(document.getElementById('rotateSlider').value);
    draw();
});


// SCALE
document.getElementById('scaleSlider').addEventListener('input', () => {
    scaleFactor = parseFloat(document.getElementById('scaleSlider').value);
    draw();
});

// X-OFFSET
document.getElementById('xOffsetSlider').addEventListener('input', () => {
    xOffset = parseFloat(document.getElementById('xOffsetSlider').value);
    draw();
});

// Y-OFFSET
document.getElementById('yOffsetSlider').addEventListener('input', () => {
    yOffset = parseFloat(document.getElementById('yOffsetSlider').value);
    draw();
});

// RESET
document.getElementById('resetBtn').addEventListener('click', () => {
    rotationAngle = 0;
    scaleFactor = 1;
    xOffset = 0;
    yOffset = 0;
    document.getElementById('rotateSlider').value = rotationAngle;
    document.getElementById('scaleSlider').value = scaleFactor;
    document.getElementById('xOffsetSlider').value = xOffset;
    document.getElementById('yOffsetSlider').value = yOffset
    draw();
});

createNoiseWithinCircle(); // Create noise once
draw(); // Initial draw


function initializeCanvas(canvasId, rotation, scale, xOff, yOff) {
    let canvas = document.getElementById(canvasId);
    let ctx = canvas.getContext('2d');
    let bufferCanvas = document.createElement('canvas');
    let bufferCtx = bufferCanvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    bufferCanvas.width = width;
    bufferCanvas.height = height;
    let centerX = width / 2;
    let centerY = height / 2;
    let radius = width / 2;
    let noiselevel = 0.10;
    let rotationAngle = rotation;
    let scaleFactor = scale;
    let xOffset = xOff;
    let yOffset = yOff;


    function createNoiseWithinCircle() {
        bufferCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        bufferCtx.fillRect(0, 0, width, height);

        bufferCtx.beginPath();
        bufferCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        bufferCtx.clip();

        for (let i = 0; i < Math.PI * radius * radius * noiselevel; i++) {
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
        drawDisk(centerX + xOffset, centerY + yOffset, rotationAngle, scaleFactor); // Draw top disk with rotation and scale
    }

    createNoiseWithinCircle(); // Create noise once
    draw(); // Initial draw
}

initializeCanvas('glassRotation1', 0, 1.0, 0, 0);
initializeCanvas('glassRotation2', 1, 1.0, 0, 0);
initializeCanvas('glassRotation3', 2, 1.0, 0, 0);
initializeCanvas('glassRotation4', 3, 1.0, 0, 0);
initializeCanvas('glassRotation5', 4, 1.0, 0, 0);
initializeCanvas('glassRotation6', 6, 1.0, 0, 0);


initializeCanvas('glassScale1', 0, 1.0, 0, 0);
initializeCanvas('glassScale2', 0, 0.99, 0, 0);
initializeCanvas('glassScale3', 0, 0.98, 0, 0);
initializeCanvas('glassScale4', 0, 0.97, 0, 0);
initializeCanvas('glassScale5', 0, 0.96, 0, 0);
initializeCanvas('glassScale6', 0, 0.95, 0, 0);

initializeCanvas('glassScaleRot1', 1, 0.96, 0, 0);
initializeCanvas('glassScaleRot2', 2, 0.96, 0, 0);
initializeCanvas('glassScaleRot3', 3, 0.96, 0, 0);
initializeCanvas('glassScaleRot4', 4, 0.96, 0, 0);
initializeCanvas('glassScaleRot5', 5, 0.96, 0, 0);
initializeCanvas('glassScaleRot6', 6, 0.96, 0, 0);

initializeCanvas('glassScaleTrans1', 0, 0.95, 0, 0);
initializeCanvas('glassScaleTrans2', 0, 0.95, 0.5, 0);
initializeCanvas('glassScaleTrans3', 0, 0.95, 1, 0);
initializeCanvas('glassScaleTrans4', 0, 0.95, 1.5, 0);
initializeCanvas('glassScaleTrans5', 0, 0.95, 2, 0);
initializeCanvas('glassScaleTrans6', 0, 0.95, 2.5, 0);

initializeCanvas('glassRotationTrans1', 8, 1.0, -4, 0);
initializeCanvas('glassRotationTrans2', 8, 1.0, -3, 0);
initializeCanvas('glassRotationTrans3', 8, 1.0, -2, 0);
initializeCanvas('glassRotationTrans4', 8, 1.0, 1, 0);
initializeCanvas('glassRotationTrans5', 8, 1.0, 0, 0);
initializeCanvas('glassRotationTrans6', 8, 1.0, 1, 0);