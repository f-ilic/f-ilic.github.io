// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Body = Matter.Body;

const baseWidth = 600;
const baseHeight = 400;
const totalCircles = 2000;

let engine, render, runner, mouseConstraint, baseRadius, wallThickness, scaleFactor;

function initialize() {
    // Create an engine
    engine = Engine.create({
        timing: {
            timeScale: 0.3
        }
    });

    // Create a runner
    runner = Runner.create();

    // Get the wrapper element and its dimensions
    const wrapper = document.getElementById('simulation-wrapper');
    updateDimensions(wrapper);

    // Create and set up the canvas element
    const canvas = document.getElementById('simulation');
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;

    // Create a renderer
    render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
            width: wrapper.offsetWidth,
            height: wrapper.offsetHeight,
            wireframes: false,
            background: '#fafafa',
            pixelRatio: window.devicePixelRatio // Adjust pixel ratio for sharpness
        }
    });

    addWalls();
    addCircles();
    addMouseControl();

    // Run the renderer and the runner
    Render.run(render);
    Runner.run(runner, engine);

    // Add event listeners for buttons
    addButtonEventListeners();

    // Add event listener for window resize
    window.addEventListener('resize', resizeCanvas);
}

function updateDimensions(wrapper) {
    const width = wrapper.offsetWidth;
    const height = wrapper.offsetHeight;
    scaleFactor = Math.min(width / baseWidth, height / baseHeight);
    baseRadius = 4.5 * scaleFactor; // Example: makes the radius 2% of the smaller dimension
    wallThickness = 100 * scaleFactor;
}

function addWalls() {
    const width = render.options.width;
    const height = render.options.height;

    const walls = [
        Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true, render: { fillStyle: '#E8E8E8' } }), // Bottom wall
        Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true, render: { fillStyle: '#E8E8E8' } }), // Top wall
        Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, render: { fillStyle: '#E8E8E8' } }), // Left wall
        Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true, render: { fillStyle: '#E8E8E8' } }) // Right wall
    ];
    Composite.add(engine.world, walls);
}

function addCircles() {
    const width = render.options.width;
    const height = render.options.height;

    for (let i = 0; i < totalCircles; i++) {
        const radius = baseRadius;

        const circle = Bodies.circle(
            Math.random() * (width - 2 * radius) + radius,
            Math.random() * (height - 2 * radius) + radius,
            radius,
            {
                restitution: 0.2,  // much lower restitution
                friction: 4,    // add some friction to reduce sliding
                frictionAir: 0.01, // add air resistance
                render: {
                    fillStyle: 'red',
                    strokeStyle: 'white',
                    // lineWidth: 1
                }
            }
        );
        Composite.add(engine.world, circle);
    }
}

function addMouseControl() {
    const mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    Composite.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;
}

function addButtonEventListeners() {
    document.getElementById('jiggleSmallButton').addEventListener('click', () => jiggleCircles(0.02));
    document.getElementById('jiggleMediumButton').addEventListener('click', () => jiggleCircles(0.028));
    document.getElementById('jiggleLargeButton').addEventListener('click', () => jiggleCircles(0.05));
}

function jiggleCircles(forceMultiplier) {
    const bodies = Composite.allBodies(engine.world);

    for (let body of bodies) {
        if (!body.isStatic) {  // Only apply to non-static bodies (i.e., your circles)
            const forceMagnitude = forceMultiplier * body.mass;  // Scale the force by the body's mass

            // Apply force vector with random direction and fixed magnitude
            Matter.Body.applyForce(body, body.position, {
                x: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1),
                y: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1)
            });
        }
    }
}

function resizeCanvas() {
    const wrapper = document.getElementById('simulation-wrapper');
    const canvas = document.getElementById('simulation');

    // Calculate new dimensions and scale factor
    const oldWidth = render.options.width;
    const oldHeight = render.options.height;

    // Update dimensions and scale factor
    updateDimensions(wrapper);

    const newWidth = wrapper.offsetWidth;
    const newHeight = wrapper.offsetHeight;

    const widthScale = newWidth / oldWidth;
    const heightScale = newHeight / oldHeight;

    // Update canvas size
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Update render bounds
    render.bounds.max.x = newWidth;
    render.bounds.max.y = newHeight;
    render.options.width = newWidth;
    render.options.height = newHeight;
    Matter.Render.setPixelRatio(render, window.devicePixelRatio);

    // Scale all bodies
    Composite.allBodies(engine.world).forEach(body => {
        Body.scale(body, widthScale, heightScale);
        Body.setPosition(body, {
            x: body.position.x * widthScale,
            y: body.position.y * heightScale
        });
    });

    // Redraw the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: newWidth, y: newHeight }
    });
}

// Initialize the simulation
initialize();