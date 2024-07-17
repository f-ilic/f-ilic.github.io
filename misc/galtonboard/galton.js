var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Body = Matter.Body;


var ballradius = 2
// Create an engine
var engine = Engine.create({ timing: { timeScale: 1 } });

// Get the wrapper element and its dimensions
var wrapper = document.getElementById('simulation-wrapper');
var width = wrapper.offsetWidth;
var height = wrapper.offsetHeight;

// Get the canvas element and set its dimensions
var canvas = document.getElementById('simulation');
canvas.width = width;
canvas.height = height;

// Create a renderer
var render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: width,
        height: height,
        wireframes: false,
        background: '#fafafa',
        pixelRatio: window.devicePixelRatio // Adjust pixel ratio for sharpness

    }
});

// Adding walls and funnel
var walls = [
    Bodies.rectangle(width / 2, height, width, 20, { isStatic: true, render: { fillStyle: '#E8E8E8', } }),
    Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true, render: { fillStyle: '#fafafa' } }),
    Bodies.rectangle(0, height / 2, 20, height, { isStatic: true, render: { fillStyle: '#fafafa' } }),
    Bodies.rectangle(width, height / 2, 20, height, { isStatic: true, render: { fillStyle: '#fafafa' } })
];
Composite.add(engine.world, walls);

// Adding funnel


// Adding pegs and bins
const rowsOfPegs = 15;
const startingY = height * 0.38;
const pegHeight = height / 2;
const spacingY = pegHeight / rowsOfPegs;
const pegRadius = 5;
for (let row = 0; row < rowsOfPegs; row++) {

    if (row < rowsOfPegs - 2) {
        for (let col = -3; col <= row + 3; col++) {
            var peg = Bodies.circle(
                width / 2 + (col - row / 2) * spacingY,
                startingY + spacingY * row,
                pegRadius,
                {
                    isStatic: true, render: {
                        fillStyle: '#E8E8E8', strokeStyle: 'black',
                        lineWidth: 3,
                    }
                }
            );
            Composite.add(engine.world, peg);
        }
    }

    if (row == (rowsOfPegs - 2)) {
        for (let col = -3; col <= row + 3; col++) {
            var peg = Bodies.rectangle(
                width / 2 + (col - row / 2) * spacingY,
                height - 10,
                4,
                350,
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

var funnelR = Bodies.trapezoid(width, height / 3, 80, 450, -8, {
    isStatic: true, render: {
        fillStyle: '#E8E8E8', strokeStyle: 'black',
        lineWidth: 3,
    }
});
Body.rotate(funnelR, Math.PI / 2);

var funnelL = Bodies.trapezoid(0, height / 3, 80, 450, -8, {
    isStatic: true, render: {
        fillStyle: '#E8E8E8', strokeStyle: 'black',
        lineWidth: 3,
    }
});
Body.rotate(funnelL, -Math.PI / 2);

Composite.add(engine.world, [funnelR, funnelL]);


// Add circles in the funnel
const totalCircles = 2000;


// Run the renderer
Render.run(render);

// Create and run the runner
var runner = Runner.create();
Runner.run(runner, engine);
function resetSimulation() {
    // Filter out the balls based on the label and remove them
    Composite.allBodies(engine.world).forEach(body => {
        if (body.label === 'Ball') {
            Composite.remove(engine.world, body);
        }
    });

    // Recreate the balls at the top of the simulation
    for (let i = 0; i < totalCircles; i++) {
        var radius = ballradius;
        var circle = Bodies.circle(
            Math.random() * width / 2 + width / 4,
            Math.random() * (height / 6 - 2 * radius) + radius,
            radius,
            {
                label: "Ball",
                restitution: 0.7,
                friction: 0.01,
                frictionAir: 0.05,
                render: {
                    fillStyle: 'red'
                }
            }
        );
        Composite.add(engine.world, circle);
    }
}