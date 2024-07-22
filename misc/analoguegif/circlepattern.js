function mulberry32(seed) {
    return function () {
        var t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
function initializeCanvas(canvasId, rotation = 0, scale = 0, xOff = 0, yOff = 0, seed = 0, noise = 0.10) {
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
    let noiselevel = noise;
    let rotationAngle = rotation;
    let scaleFactor = scale;
    let xOffset = xOff;
    let yOffset = yOff;
    let random = mulberry32(seed); // Initialize PRNG with the seed

    function createNoiseWithinCircle() {
        bufferCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        bufferCtx.fillRect(0, 0, width, height);

        bufferCtx.beginPath();
        bufferCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        bufferCtx.clip();

        for (let i = 0; i < Math.PI * radius * radius * noiselevel; i++) {
            const angle = random() * Math.PI * 2; // Use seeded random number for angle
            const r = radius * Math.sqrt(random()); // Use seeded random number for radius
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

initializeCanvas('canvas0', 0, 1.0, 0, 0, 42, 0.01);
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


initializeCanvas('glassOverRotate1', 2, 1.0, 0, 0, 0);
initializeCanvas('glassOverRotate2', 3, 1.0, 0, 0, 0);
initializeCanvas('glassOverRotate3', 10, 1.0, 0, 0, 0);

