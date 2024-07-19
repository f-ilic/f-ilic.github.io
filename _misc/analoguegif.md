---
layout: post
title: The Analogue GIF
permalink: /analoguegif
subheading: A demo piece on the perception of temporal consistency.<br>The analogue GIF explores human perception of motion from static noise patterns, revealing that effective motion detection persists even with imperfect image alignment. It also shows how robust our visual processing abilities are.
teaser: misc/analoguegif/teaser.mp4
venue: Physicalization
date: 2022-09-01  
---

<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<video autoplay loop muted playsinline width="100%" style='border: 1px solid black'>
  <source  src="../misc/analoguegif/teaser.mp4" type="video/mp4">
</video> 
<br>
# Motivation
---
I built an analogue GIF in conjunction with a paper that I wrote, <a href='/AppearanceFreeActionRecognition'>linked here</a>.
In the paper we investigated if humans can perceive motion even if it is only encoded in otherwise static noise. Turns out people can perceive it quite well!

However, i was still curious if this might only be due to the fact that on a computer screen all pixels are always in perfect alignment when it switches from one frame to the next.
So I built this little analogue GIF machine in which you can play the same noise patterns printed (and laminated) on paper, where alignment is never perfect.

From it you can hopefully see that there is some motion happening (jumping jack).
It is quite a bit harder to make out on the recording of the analogue GIF, than it is in real life. I assume that this is due to a few things like the compression that is happening when you film noise, some glaring from the illumination, and the rotational speed with which the GIF is played not matching the actual frame-rate at which the camera is recording.

# The Model
---
The full contraption is rather sturdy and works pretty well. 
The two wooden bars at to top and bottom of the frame are added such that the laminated paper can build some pressure like a spring during the rotation. Once the rotational angle of the spool exceeds the grip of the wooden bar, the paper flips rather fast due to the stored spring energy. This is important to reduce the time in which the paper is obstructing the view of the paper behind it. A few of my early prototypes were prematurely tossed before I realized that this was a significant factor, *whops*.

I built three 'rolls' that show a different action being performed. Each GIF is edited such that it loops with a period of 24 frames, which coincides with the number of images on the roll. This means, that 1 rotation per second is equivalent to playing the video at 24 frames per second (fps).
Just by cranking the handle slower you can adjust the frame rate itself, and can see how your perception of motion does break somewhere around the $$\sim$$ 5 fps marks. 
<center>
<img src="../misc/analoguegif/rolls.png" width="100%" style='border: 1px solid black'>
</center>
<br>


<table style="width: 100%; border-collapse: separate; border-spacing: 15px 0;">
    <tr>
        <td style="width: 33.333%; text-align: center;">
            <img src="../misc/analoguegif/rolls/squats.gif" alt="Squats" style="width: auto; height: 30vw; max-height: 250px;">
        </td>
        <td style="width: 33.333%; text-align: center;">
            <img src="../misc/analoguegif/rolls/jumpingjack.gif" alt="Table Tennis" style="width: auto; height: 30vw; max-height: 250px;">
        </td>
        <td style="width: 33.333%; text-align: center;">
            <img src="../misc/analoguegif/rolls/tabletennis.gif" alt="Jumping Jack" style="width: auto; height: 30vw; max-height: 250px;">
        </td>
    </tr>
</table>

<br>

# An explanation by analogy
---

Visual perception is a complex process where the brain interprets and makes sense of the visual stimuli it receives. An intriguing way to explore this phenomenon is through the study of patterns created from simple elements under transformation. An example of this is seen in experiments involving random dot patterns. In these experiments, a field of randomly distributed dots is created, and then a copy of this field is made. The duplicate is then rotated to various degrees relative to the original. 
The emerging patterns are called Glass patterns, first studied by <a href="https://ui.adsabs.harvard.edu/abs/1969Natur.223..578G/abstract">Leon Glass</a>, provides valuable insights into how the human visual system detects and interprets structure.





<center>
<div style="display: flex; align-items: flex-start;">
    <div style="margin-right: 100px;">
        <div>
            rotate<br>
            <input type="range" id="rotateSlider" class="vertical-slider" min="-5" max="5" value="0" step="0.1" style="width: 100px;">
        </div>
        <div>
            scale<br>
            <input type="range" id="scaleSlider" class="vertical-slider" min="0.9" max="1" value="1" step="0.001" style="width: 100px;">
        </div>
        <div>
            x-offset<br>
            <input type="range" id="xOffsetSlider" class="vertical-slider" min="-10" max="10" value="0" step="0.1" style="width: 100px;">
        </div>
        <div>
            y-offset<br>
            <input type="range" id="yOffsetSlider" class="vertical-slider" min="-10" max="10" value="0" step="0.1" style="width: 100px;">
        </div>
        <button id="resetBtn">Reset</button>
    </div>
    <canvas id="canvas0" width="400" height="400"></canvas>
</div>
</center>
<br>


<center>
Rotation
<div>
<canvas width=85 height=85 id="glassRotation1"></canvas>
<canvas width=85 height=85 id="glassRotation2"></canvas>
<canvas width=85 height=85 id="glassRotation3"></canvas>
<canvas width=85 height=85 id="glassRotation4"></canvas>
<canvas width=85 height=85 id="glassRotation5"></canvas>
<canvas width=85 height=85 id="glassRotation6"></canvas>
</div>
</center>

<center>
Scaling
<div>
<canvas width=85 height=85 id="glassScale1"></canvas>
<canvas width=85 height=85 id="glassScale2"></canvas>
<canvas width=85 height=85 id="glassScale3"></canvas>
<canvas width=85 height=85 id="glassScale4"></canvas>
<canvas width=85 height=85 id="glassScale5"></canvas>
<canvas width=85 height=85 id="glassScale6"></canvas>
</div>
</center>

<center>
Scaling + Rotation
<div>
<canvas width=85 height=85 id="glassScaleRot1"></canvas>
<canvas width=85 height=85 id="glassScaleRot2"></canvas>
<canvas width=85 height=85 id="glassScaleRot3"></canvas>
<canvas width=85 height=85 id="glassScaleRot4"></canvas>
<canvas width=85 height=85 id="glassScaleRot5"></canvas>
<canvas width=85 height=85 id="glassScaleRot6"></canvas>
</div>
</center>

<center>
Scaling + Translation
<div>
<canvas width=85 height=85 id="glassScaleTrans1"></canvas>
<canvas width=85 height=85 id="glassScaleTrans2"></canvas>
<canvas width=85 height=85 id="glassScaleTrans3"></canvas>
<canvas width=85 height=85 id="glassScaleTrans4"></canvas>
<canvas width=85 height=85 id="glassScaleTrans5"></canvas>
<canvas width=85 height=85 id="glassScaleTrans6"></canvas>
</div>
</center>

<center>
Rotation + Translation
<div>
<canvas width=85 height=85 id="glassRotationTrans1"></canvas>
<canvas width=85 height=85 id="glassRotationTrans2"></canvas>
<canvas width=85 height=85 id="glassRotationTrans3"></canvas>
<canvas width=85 height=85 id="glassRotationTrans4"></canvas>
<canvas width=85 height=85 id="glassRotationTrans5"></canvas>
<canvas width=85 height=85 id="glassRotationTrans6"></canvas>
</div>
</center>


<script src="../misc/analoguegif/circlepattern.js">
