---
layout: post
title: Dense packing with spheres
permalink: /densepacking
subheading: A model for grain formation in steel, and other packing problems.<br>Built with acrylic glass and steel ball bearings. 
venue: Physicalization
teaser: misc/densepacking/teaser.gif
date: 2021-01-01  
---

<script src="../libs/matter.js"></script>

<center>
  <img  src="../misc/densepacking/teaser.gif" style='border: 1px solid black'>
</center>

# Introduction
---

In the world of metallurgy, the characteristics of steel can be significantly influenced by the processes it undergoes during and after its production. One such process is annealing, which plays a pivotal role in determining the grain density within steel. A project I worked on,<a href="/RobustFeatureAustenit"> linked here</a>, focused on estimating this grain density of steel from microscopy images. Similar alloys can look vastly different based on their annealing duration.

<center>
<img src='../misc/densepacking/samplessmall.png' width="100%">
</center>
<br>
Annealing is essentially a heat treatment process where steel is heated to a high temperature and then cooled slowly. This method is crucial because it affects the microstructure and, thus, the physical properties of the steel. The primary reason for annealing steel is to soften it, relieve internal stresses, and improve its ductility and toughness.

To understand this better, consider the process of quick quenching, which rapidly cools the steel. This method tends to “freeze” the chaotic structures within the metal, trapping various forms of imperfections. On the other hand, slowly reheating and annealing the steel allows the atoms—modeled as spheres in this scenario—to gain enough energy to move and settle into their lowest energy state. This state often resembles a well-organized grid of spheres.

# Simulating Dense Packing in 2D
---

I built a small simulation of the packing problem with spheres.
It covers the essential parts that are needed to show how artifacts, introduced during the chaotic settling of the spheres in a non-expanding container. The simulation, written in <a href='https://brm.io/matter-js/'>Matter.js</a>, adheres to friction, interaction of different masses, and rolling. One thing to note is that I've chosen rather small simulation timesteps, as otherwise the whole system becomes unstable.

Anyway, you should give it a try, and jiggle the particles once they have settled.
You will observe that the initial formation and settling results in rather small coherent patches, the grains in the example of steel plasticity.

<div id="simulation-wrapper" style="width: 80%; margin: auto; height: 400px;">
    <canvas id="simulation"></canvas>
</div>
<br>
<center>
<button id="jiggleSmallButton">Small Jiggle</button>
<button id="jiggleMediumButton">Medium Jiggle</button>
<button id="jiggleLargeButton">Earthquake Jiggle</button>
</center>

<br>
Compare the results that you get with and without annealing, i.e. only earthquake jiggle vs. earthquake jiggle and then repeatedly, while the balls are still settling, small and medium jiggles, simulating a steady stream of kinetic energy, allowing the particles to find their ground state.


# Qualitative Comparison
---

This simulation also matches qualitative results that are observed using my little toy model.
In the physical model the annealing is simulated by tapping on the glass itself.

These gifs show the qualitative similarities between the real world model, and the simulation.

<style>
  .image-container {
    display: flex;   /* Use flexbox to align images */
    justify-content: center; /* Center align the images horizontally */
    align-items: center; /* Align the images vertically to ensure they are at the same height */
  }
  .image-container img {
    max-height: 200px; /* Set a maximum height for all images */
    width: auto;  /* Maintain the aspect ratio */
    margin: 0 10px; /* Add horizontal padding between images */
  }
</style>

<center>
<img src="../misc/densepacking/combined/compare.gif" width="95%">
</center>
<br>

The first and the last frame of the animation above are shown now, so that it easier to see the emerging structural similarities.

<table>
    <tr style="background-color: white;">
    <td><img src="../misc/densepacking/real/first_frame.png" alt="Image 1" style="width:100%;"></td>
    <td><img src="../misc/densepacking/real/last_frame.png" alt="Image 2" style="width:100%;"></td>
    </tr>
    <tr style="background-color: white;">
    <td><img src="../misc/densepacking/sim/0001.png" alt="Image 1" style="width:100%;"></td>
    <td><img src="../misc/densepacking/sim/0011.png" alt="Image 2" style="width:100%;"></td>
    </tr>
  <tr style="background-color: white;">
    <td style="text-align:center;"><b>Not Annealed</b> </td>
    <td style="text-align:center;"><b>Annealed </b></td>
  </tr>
</table>

# Remarks on building your own
---
If you wish to build your own model there's a few things you could take away without having to make the same mistakes as I did.
The steel bearings that I bought are 2mm in diameter, and are made of steel. When you invariably drop a 2kg bag of it on the floor, resist the urge to use a magnet to gather them. Magnetization is a real concern, especially once you put them between an isolating material such as plastic glass.

While on the topic of glass: definitely use acrylic glass, and not polycarbonate. While polycarbonate is much cheaper it also discolors and scratches much easier. Additionally bending polycarbonate by applying heat is more difficult. Get acrylic, it is amazing; the steel bearings do not scratch it, it can be broken very cleanly, and can be burnished with a handheld torch at the edges along which it was broken. 
Acrylic glass is manufactured using an extrusion or casting process, and the price between the two varies drastically. I have not found any significant differences between the two for this type of project.

It is important that the steel balls are essentially only allowed to move in 2D.
If they can stack, even slightly, behind each other you will run into a lot of issues such as the glass bending outwards, and potentially breaking.
For my model I used 3mm thick acrylic glass for the front and backplate, and 2mm acrylic glass that was cut to form the frame that is sandwiched between the 3mm plates.
The ballbearing are 2mm and the frame-plate is 2mm. To reduce the scarping, I placed washers that I cut from regular PET bottle plastic between the bolts that hold everything together.

Weight plays an important part in the equation: I first built a larger model that weight about 4 kilos. While it does produce prettier patterns, its impractical. You cannot tip it directly because the weight of the balls bulges the (polycarbonate) glass, which in turn allows the spheres to stack in 3D. You would have to use *much* thicker acrylic glass, which you then cannot break easily without specialized tools such as a laser cutter.
<center>
<video autoplay loop muted playsinline  width="80%" style='border: 1px solid black'> <source  src="../misc/densepacking/large.mp4" type="video/mp4"> </video>
</center>
<br>
Regarding the bolts: It is important that the clamping force of the plates is distributed evenly. In general this means more bolts = less pressure on a single spot = better. You can see the effects of the clamping around the bolts where individual balls sometimes get stuck, as the bolt is squeezing the acrylic *just* a little too tight and reduces the tolerances enough for it to be an issue.

To properly see the formation of the grains, I added a frosted acrylic film on the backplate that diffuses light. The dispersion in combination with a flashlight that is placed behind the prop, reveals the created structures really well.

If you make your own, let me know <a title="Email" href="mailto:{{ site.email }}"><img class="svg-social-icon" src="{{"../assets/social-icons/email.svg"}}" /></a>
I'd be very happy to see your designs.

# Further Reading
---

* Interestingly, around the same time I was building my physical model, popular YouTuber Steve Mould released a video,<a href="https://www.youtube.com/watch?v=xuL2yT-B2TM"> linked here</a>, discussing the same topic.
* <a href="https://en.wikipedia.org/wiki/Circle_packing">Wikipedia Circle Packing</a>
* <a href="https://www.gorillasun.de/blog/a-simple-solution-for-shape-packing-in-2d/">Generative Art with Circle Packing</a>
* <a href="http://datagenetics.com/blog/june32014/index.html">Optimal Packing in 2D, and 3D</a>


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

// Calculate radius based on canvas size
var baseRadius = 1.2*Math.min(width, height) / 100; // Example: makes the radius 2% of the smaller dimension


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
            var forceMagnitude = 0.02 * body.mass;  // Scale the force by the body's mass

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