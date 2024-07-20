// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create({
    timing: {
        timeScale: 0.3
    }
});
// get the wrapper element and its dimensions
var wrapper = document.getElementById('simulation-wrapper');
var width = wrapper.offsetWidth;
var height = wrapper.offsetHeight;

// Calculate radius based on canvas size
var baseRadius = 1.2 * Math.min(width, height) / 100; // Example: makes the radius 2% of the smaller dimension


// get the canvas element and set its dimensions
var canvas = document.getElementById('simulation');
canvas.width = width;
canvas.height = height;

// create a renderer
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

// Adding walls
var ground = Bodies.rectangle(width / 2, height, width, 10, {
    isStatic: true,
    render: {
        fillStyle: '#E8E8E8'  // Set the color of the rectangle
    }
});
var ceiling = Bodies.rectangle(width / 2, 0, width, 10, {
    isStatic: true,
    render: {
        fillStyle: '#E8E8E8'
    }
});
var leftWall = Bodies.rectangle(0, height / 2, 10, height, {
    isStatic: true,
    render: {
        fillStyle: '#E8E8E8'
    }
});
var rightWall = Bodies.rectangle(width, height / 2, 10, height, {
    isStatic: true,
    render: {
        fillStyle: '#E8E8E8'
    }
});

// Add walls to the world
Composite.add(engine.world, [ground, ceiling, leftWall, rightWall]);

// Add circles with lower restitution and added friction
const totalCircles = 2000;
for (let i = 0; i < totalCircles; i++) {
    var radius = baseRadius;

    var circle = Bodies.circle(
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

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// Handle window resizing or changes in the div size
window.addEventListener('resize', function () {
    var width = wrapper.offsetWidth;
    var height = wrapper.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    render.options.width = width;
    render.options.height = height;
    // Update walls
    Matter.Body.setPosition(ground, { x: width / 2, y: height });
    Matter.Body.setPosition(ceiling, { x: width / 2, y: 0 });
    Matter.Body.setPosition(leftWall, { x: 0, y: height / 2 });
    Matter.Body.setPosition(rightWall, { x: width, y: height / 2 });
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: width, y: height }
    });
});

document.getElementById('jiggleSmallButton').addEventListener('click', function () {
    var bodies = Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (!body.isStatic) {  // Only apply to non-static bodies (i.e., your circles)
            var forceMagnitude = 0.02 * body.mass;  // Scale the force by the body's mass

            // Apply force vector with random direction and fixed magnitude
            Matter.Body.applyForce(body, body.position, {
                x: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1),
                y: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1)
            });
        }
    }
});

document.getElementById('jiggleMediumButton').addEventListener('click', function () {
    var bodies = Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (!body.isStatic) {  // Only apply to non-static bodies (i.e., your circles)
            var forceMagnitude = 0.08 * body.mass;  // Scale the force by the body's mass

            // Apply force vector with random direction and fixed magnitude
            Matter.Body.applyForce(body, body.position, {
                x: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1),
                y: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1)
            });
        }
    }
});

document.getElementById('jiggleLargeButton').addEventListener('click', function () {
    var bodies = Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (!body.isStatic) {  // Only apply to non-static bodies (i.e., your circles)
            var forceMagnitude = 0.15 * body.mass;  // Scale the force by the body's mass

            // Apply force vector with random direction and fixed magnitude
            Matter.Body.applyForce(body, body.position, {
                x: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1),
                y: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1)
            });
        }
    }
});