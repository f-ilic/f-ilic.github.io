---
layout: post
title: Dense packing with spheres
permalink: /misc/densepacking
subheading: A model for grain formation in steel, and other packing problems.<br>Built with acrylic glass and steel ball bearings. 
venue: Physicalization
teaser: misc/densepacking/teaser.gif
date: 2021-01-01  
---

<script src="matter.js"></script>

<center>
  <img  src="teaser.gif">
</center>

# Introduction
---

<!-- * worked on project estimating the graindensity in steel
* annealing (and alloy composition) play a major part in the formation of the grain sizes
* an intuitive explaination is that quick quentching freezes the chaotic structures in place
* however slowly reheating and annealling the steel gives each atom (or sphere in this model) enough energy to find its lowest energy state, which can be this grid of spheres
* In this model annealing is simmulated by tapping on the glass, introducing more energy.
* Funnily enough at around the same time i created this model a popular youtuber steve mold did a video on this same phenomenon. Check it out, its really cool. -->

In the world of metallurgy, the characteristics of steel can be significantly influenced by the processes it undergoes during and after its production. One such process is annealing, which plays a pivotal role in determining the grain density within steel. A project I worked on,<a href="/RobustFeatureAustenit"> link here</a>, focused on estimating this grain density and unraveling the effects of annealing alongside the alloy composition.

Annealing is essentially a heat treatment process where steel is heated to a high temperature and then cooled slowly. This method is crucial because it affects the microstructure and, thus, the physical properties of the steel. The primary reason for annealing steel is to soften it, relieve internal stresses, and improve its ductility and toughness.

To understand this better, consider the process of quick quenching, which rapidly cools the steel. This method tends to “freeze” the chaotic structures within the metal, trapping various forms of imperfections. On the other hand, slowly reheating and annealing the steel allows the atoms—modeled as spheres in this scenario—to gain enough energy to move and settle into their lowest energy state. This state often resembles a well-organized grid of spheres.

# Simulating Dense Packing in 2D
---


<div id="simulation-wrapper" style="width: 80%; margin: auto; height: 400px;">
    <canvas id="simulation"></canvas>
</div>
<br>
<center>
<button id="jiggleSmallButton">Small Jiggle</button>
<button id="jiggleMediumButton">Medium Jiggle</button>
<button id="jiggleLargeButton">Earthquake Jiggle</button>
</center>


# The Model
---
In an attempt to simulate the annealing process in a more visual and interactive way, I incorporated a method in my model that involves ‘tapping’ on the glass. This action introduces additional energy into the system, mimicking the real-life process of heating the steel, which energizes the atoms to find their optimal arrangement.

Interestingly, around the same time I was developing this model, popular YouTuber Steve Mould released a video discussing a similar phenomenon. His engaging and educational content adds another layer of understanding to this complex process, and I highly recommend checking out his video for a dynamic explanation of how annealing impacts material properties.

This project not only highlighted the crucial role of annealing in controlling the properties of steel but also brought an abstract concept to life, allowing for a more tangible grasp of the intricate dance of atoms that determines the strength and flexibility of one of our most used materials.


<script>
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create({
    timing: {
        timeScale: 0.2
    }
});
// get the wrapper element and its dimensions
var wrapper = document.getElementById('simulation-wrapper');
var width = wrapper.offsetWidth;
var height = wrapper.offsetHeight;

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
var ground = Bodies.rectangle(width / 2, height, width, 2, {
    isStatic: true,
    render: {
        fillStyle: '#E8E8E8'  // Set the color of the rectangle
    }
});
var ceiling = Bodies.rectangle(width / 2, 0, width, 2, {
    isStatic: true,
    render: {
        fillStyle: '#E8E8E8'
    }
});
var leftWall = Bodies.rectangle(0, height / 2, 2, height, {
    isStatic: true,
    render: {
        fillStyle: '#E8E8E8'
    }
});
var rightWall = Bodies.rectangle(width, height / 2, 2, height, {
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
    var radius = 5;

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
window.addEventListener('resize', function() {
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

document.getElementById('jiggleSmallButton').addEventListener('click', function() {
    var bodies = Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (!body.isStatic) {  // Only apply to non-static bodies (i.e., your circles)
            var forceMagnitude = 0.01 * body.mass;  // Scale the force by the body's mass

            // Apply force vector with random direction and fixed magnitude
            Matter.Body.applyForce(body, body.position, {
                x: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1),
                y: (forceMagnitude + Math.random() * forceMagnitude) * (Math.random() < 0.5 ? -1 : 1)
            });
        }
    }
});

document.getElementById('jiggleMediumButton').addEventListener('click', function() {
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

document.getElementById('jiggleLargeButton').addEventListener('click', function() {
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
</script>