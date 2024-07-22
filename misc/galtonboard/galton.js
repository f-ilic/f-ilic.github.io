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
const baseHeight = 900;
const totalCircles = 2000;
const rowsOfPegs = 15;

let engine, render, runner, mouseConstraint, ballradius, wallThickness, scaleFactor, pegRadius, circles = [];

function initialize() {
    // Create an engine
    engine = Engine.create({ timing: { timeScale: 1 } });

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

    // Add walls
    addWalls();
    addPegsAndBins();
    addFunnel();
    addMouseControl();

    // Run the renderer and the runner
    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);

    // Initial set of circles
    addCircles();
    // startPeriodicCheck();
    // Add event listener for reset button
    document.getElementById('resetButton').addEventListener('click', resetSimulation);
}

function updateDimensions(wrapper) {
    const width = wrapper.offsetWidth;
    const height = wrapper.offsetHeight;
    scaleFactor = Math.min(width / baseWidth, height / baseHeight);
    ballradius = 2.5 * scaleFactor;
    wallThickness = 30 * scaleFactor;
    pegRadius = 10 * scaleFactor;
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


function addWalls() {
    const width = render.options.width;
    const height = render.options.height;

    const walls = [
        Bodies.rectangle(width / 2, height, width, wallThickness, { isStatic: true, render: { fillStyle: '#E8E8E8' } }),
        Bodies.rectangle(width / 2, 0, width, wallThickness, { isStatic: true, render: { fillStyle: '#fafafa' } }),
        Bodies.rectangle(0, height / 2, wallThickness, height, { isStatic: true, render: { fillStyle: '#fafafa' } }),
        Bodies.rectangle(width, height / 2, wallThickness, height, { isStatic: true, render: { fillStyle: '#fafafa' } })
    ];
    Composite.add(engine.world, walls);
}

function addFunnel() {
    const width = render.options.width;
    const height = render.options.height;

    const funnelR = Bodies.trapezoid(width, height / 3, 80 * scaleFactor, 450 * scaleFactor, -8, {
        isStatic: true, render: {
            fillStyle: '#E8E8E8', strokeStyle: 'black',
            lineWidth: 3 * scaleFactor,
        }
    });
    Body.rotate(funnelR, Math.PI / 2);

    const funnelL = Bodies.trapezoid(0, height / 3, 80 * scaleFactor, 450 * scaleFactor, -8, {
        isStatic: true, render: {
            fillStyle: '#E8E8E8', strokeStyle: 'black',
            lineWidth: 3 * scaleFactor,
        }
    });
    Body.rotate(funnelL, -Math.PI / 2);

    Composite.add(engine.world, [funnelR, funnelL]);
}

function addPegsAndBins() {
    const width = render.options.width;
    const height = render.options.height;

    const startingY = height * 0.38;
    const pegHeight = height / 2;
    const spacingY = pegHeight / rowsOfPegs;

    for (let row = 0; row < rowsOfPegs; row++) {
        if (row < rowsOfPegs - 2) {
            for (let col = -3; col <= row + 3; col++) {
                const peg = Bodies.circle(
                    width / 2 + (col - row / 2) * spacingY,
                    startingY + spacingY * row,
                    pegRadius,
                    {
                        isStatic: true, render: {
                            fillStyle: '#E8E8E8', strokeStyle: 'black',
                            lineWidth: 3 * scaleFactor,
                        }
                    }
                );
                Composite.add(engine.world, peg);
            }
        }

        if (row == (rowsOfPegs - 2)) {
            for (let col = -3; col <= row + 3; col++) {
                const peg = Bodies.rectangle(
                    width / 2 + (col - row / 2) * spacingY,
                    height - (10 * scaleFactor),
                    4 * scaleFactor,
                    330 * scaleFactor,
                    {
                        isStatic: true, render: {
                            fillStyle: '#fafafa',
                        }
                    }
                );
                Composite.add(engine.world, peg);
            }
        }
    }
}

function addCircles() {
    const width = render.options.width;
    const height = render.options.height;

    for (let i = 0; i < totalCircles; i++) {
        const radius = ballradius;
        const circle = Bodies.circle(
            Math.random() * width / 2 + width / 4,
            Math.random() * (height / 6 - 2 * radius) + radius,
            radius,
            {
                label: "Ball",
                // restitution: 0.7,
                restitution: 0.89,
                friction: 0.02 * scaleFactor,
                frictionAir: 0.05 * (1 / scaleFactor),
                render: {
                    fillStyle: 'red'
                }
            }
        );
        Composite.add(engine.world, circle);
        circles.push(circle);
    }
}

function resetSimulation() {
    // Filter out the balls based on the label and remove them
    Composite.allBodies(engine.world).forEach(body => {
        if (body.label === 'Ball') {
            Composite.remove(engine.world, body);
        }
    });

    // Recreate the balls at the top of the simulation
    addCircles();
}

function startPeriodicCheck() {
    const halfHeight = render.options.height * 0.7;
    const checkevery = 2000; // in ms -> 2s
    setInterval(() => {
        const allBelowHalf = circles.every(circle => circle.position.y > halfHeight);

        if (allBelowHalf) {
            Runner.stop(runner);
        }
    }, checkevery);
}

// Initialize the simulation
initialize();