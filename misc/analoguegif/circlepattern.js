function mulberry32(seed) {
    return function () {
        var t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function initializeCanvas(canvasId, rotation = 0, scale = 1.0, xOff = 0, yOff = 0, seed = 0, noise = 0.10, addEventListeners = false) {
    let canvas = document.getElementById(canvasId);
    let ctx = canvas.getContext('2d');
    let bufferCanvas = document.createElement('canvas');
    let bufferCtx = bufferCanvas.getContext('2d');
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = (Math.min(canvas.width, canvas.height) / 2);
    let noiselevel = noise;
    let rotationAngle = rotation;
    let scaleFactor = scale;
    let xOffset = xOff;
    let yOffset = yOff;
    canvas.width = canvas.width; // Clear the canvas
    canvas.height = canvas.height;
    bufferCanvas.width = canvas.width;
    bufferCanvas.height = canvas.height;
    let random = mulberry32(seed); // Initialize PRNG with the seed

    function getCanvasStyles() {
        const canvasStyle = getComputedStyle(canvas);

        // Force reflow (important for ensuring styles are available)
        void canvas.offsetHeight;

        let fillColor = canvasStyle.getPropertyValue("background-color").trim();
        let textColor = canvasStyle.getPropertyValue("color").trim();

        // Convert to RGBA if not already transparent
        if (!fillColor.includes("rgba")) {
            fillColor = fillColor.replace("rgb", "rgba").replace(")", ", 0.5)"); // Add transparency
        }
        return { fillColor, textColor };
    }


    function updateCanvasSize() {
        const wrapper = document.getElementById('simulation-wrapper');
        canvas.width = wrapper.offsetWidth;
        canvas.height = wrapper.offsetHeight;
        bufferCanvas.width = canvas.width;
        bufferCanvas.height = canvas.height;
        draw(); // Redraw after resizing
    }

    function createNoiseWithinCircle() {
        const { fillColor, textColor } = getCanvasStyles();

        bufferCtx.clearRect(0, 0, canvas.width, canvas.height); // Clear the buffer canvas        
        bufferCtx.fillStyle = fillColor;
        bufferCtx.fillRect(0, 0, canvas.width, canvas.height);

        bufferCtx.beginPath();
        bufferCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        bufferCtx.clip();

        for (let i = 0; i < Math.PI * radius * radius * noiselevel; i++) {
            const angle = random() * Math.PI * 2; // Use seeded random number for angle
            const r = radius * Math.sqrt(random()); // Use seeded random number for radius
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            bufferCtx.fillStyle = textColor;
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
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        radius = Math.min(canvas.width, canvas.height) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDisk(centerX, centerY, 0, 1); // Draw bottom disk without rotation and scale
        drawDisk(centerX + xOffset, centerY + yOffset, rotationAngle, scaleFactor); // Draw top disk with rotation and scale
    }

    if (addEventListeners) {

        updateCanvasSize(); // Initial call to set sizes

        window.addEventListener('resize', () => {
            updateCanvasSize();
            createNoiseWithinCircle();
            draw();
        });

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

        // NOISE LEVEL
        document.getElementById('noiseLevelSlider').addEventListener('input', () => {
            noiselevel = parseFloat(document.getElementById('noiseLevelSlider').value);
            createNoiseWithinCircle();
            draw();
        });

        // RESET
        document.getElementById('resetBtn').addEventListener('click', () => {
            rotationAngle = 0;
            scaleFactor = 1;
            xOffset = 0;
            yOffset = 0;
            noiselevel = noise; // Reset noise level to initial value
            document.getElementById('rotateSlider').value = rotationAngle;
            document.getElementById('scaleSlider').value = scaleFactor;
            document.getElementById('xOffsetSlider').value = xOffset;
            document.getElementById('yOffsetSlider').value = yOffset;
            document.getElementById('noiseLevelSlider').value = noiselevel;

            createNoiseWithinCircle();
            draw();
        });
    }

    createNoiseWithinCircle();
    draw();

    // Redraw with the same seed, e.g. after the colour scheme changed.
    return function refresh() {
        random = mulberry32(seed);
        createNoiseWithinCircle();
        draw();
    };
}
// Define canvas configurations in an array
const canvasConfigs = [
    { id: 'canvas0', rotation: 0, scale: 1.0, xOff: 0, yOff: 0, seed: 42, noise: 0.1, addListeners: true },

    // Rotation Variants
    { id: 'glassRotation1', rotation: 0, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassRotation2', rotation: 1, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassRotation3', rotation: 2, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassRotation4', rotation: 3, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassRotation5', rotation: 4, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassRotation6', rotation: 6, scale: 1.0, xOff: 0, yOff: 0 },

    // Scaling Variants
    { id: 'glassScale1', rotation: 0, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassScale2', rotation: 0, scale: 0.99, xOff: 0, yOff: 0 },
    { id: 'glassScale3', rotation: 0, scale: 0.98, xOff: 0, yOff: 0 },
    { id: 'glassScale4', rotation: 0, scale: 0.97, xOff: 0, yOff: 0 },
    { id: 'glassScale5', rotation: 0, scale: 0.96, xOff: 0, yOff: 0 },
    { id: 'glassScale6', rotation: 0, scale: 0.95, xOff: 0, yOff: 0 },

    // Scaling + Rotation Variants (Might have been missing)
    { id: 'glassScaleRot1', rotation: 1, scale: 0.96, xOff: 0, yOff: 0 },
    { id: 'glassScaleRot2', rotation: 2, scale: 0.96, xOff: 0, yOff: 0 },
    { id: 'glassScaleRot3', rotation: 3, scale: 0.96, xOff: 0, yOff: 0 },
    { id: 'glassScaleRot4', rotation: 4, scale: 0.96, xOff: 0, yOff: 0 },
    { id: 'glassScaleRot5', rotation: 5, scale: 0.96, xOff: 0, yOff: 0 },
    { id: 'glassScaleRot6', rotation: 6, scale: 0.96, xOff: 0, yOff: 0 },

    // Scaling + Translation Variants (Might have been missing)
    { id: 'glassScaleTrans1', rotation: 0, scale: 0.95, xOff: 0, yOff: 0 },
    { id: 'glassScaleTrans2', rotation: 0, scale: 0.95, xOff: 0.5, yOff: 0 },
    { id: 'glassScaleTrans3', rotation: 0, scale: 0.95, xOff: 1, yOff: 0 },
    { id: 'glassScaleTrans4', rotation: 0, scale: 0.95, xOff: 1.5, yOff: 0 },
    { id: 'glassScaleTrans5', rotation: 0, scale: 0.95, xOff: 2, yOff: 0 },
    { id: 'glassScaleTrans6', rotation: 0, scale: 0.95, xOff: 2.5, yOff: 0 },

    // Rotation + Translation Variants
    { id: 'glassRotationTrans1', rotation: 8, scale: 1.0, xOff: -4, yOff: 0 },
    { id: 'glassRotationTrans2', rotation: 8, scale: 1.0, xOff: -3, yOff: 0 },
    { id: 'glassRotationTrans3', rotation: 8, scale: 1.0, xOff: -2, yOff: 0 },
    { id: 'glassRotationTrans4', rotation: 8, scale: 1.0, xOff: 1, yOff: 0 },
    { id: 'glassRotationTrans5', rotation: 8, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassRotationTrans6', rotation: 8, scale: 1.0, xOff: 1, yOff: 0 },

    // Over Rotation
    { id: 'glassOverRotate1', rotation: 2, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassOverRotate2', rotation: 3, scale: 1.0, xOff: 0, yOff: 0 },
    { id: 'glassOverRotate3', rotation: 10, scale: 1.0, xOff: 0, yOff: 0 },
];

// Function to wait until styles are ready before initializing
function waitForCanvasStyles(canvas, callback) {
    function checkStyles() {
        const computedStyle = getComputedStyle(canvas);
        const bgColor = computedStyle.getPropertyValue("background-color").trim();

        if (bgColor && bgColor !== "transparent" && bgColor !== "rgba(0, 0, 0, 0)") {
            callback(); // Styles are ready, execute the function
        } else {
            requestAnimationFrame(checkStyles); // Try again on the next frame
        }
    }
    checkStyles(); // Start checking immediately
}

// The canvases are painted with the page's text/background colours, so repaint them when the
// colour scheme changes (Light/System/Dark toggle or the operating system setting).
const canvasRefreshers = [];

function refreshAllCanvases() {
    requestAnimationFrame(() => canvasRefreshers.forEach(refresh => refresh()));
}

// Function to initialize all canvases using the config array
function initializeAllCanvases() {
    const schemeToggle = document.getElementById('colorScheme');
    if (schemeToggle) schemeToggle.addEventListener('change', refreshAllCanvases);
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', refreshAllCanvases);
    }

    canvasConfigs.forEach(config => {
        const canvas = document.getElementById(config.id);
        if (canvas) {
            waitForCanvasStyles(canvas, () => {
                canvasRefreshers.push(initializeCanvas(
                    config.id,
                    config.rotation || 0,
                    config.scale || 1.0,
                    config.xOff || 0,
                    config.yOff || 0,
                    config.seed || 42,
                    config.noise || 0.1,
                    config.addListeners || false
                ));
            });
        }
    });
}

// Ensure canvases are only initialized AFTER the DOM is fully loaded.
window.addEventListener("DOMContentLoaded", initializeAllCanvases);