---
layout: post
title: A DIY Galton Board
permalink: /galtonboard
subheading: Random Walks, Central Limits, and a sneaky Gaussian. <br>We’ll explore how dropping steel ball bearings into a board filled with pegs can visually simulate the binomial distribution and its gradual transformation into a normal distribution. Instructions on how to build your own are included!
venue: Physicalization
teaser: misc/galtonboard/teaser.mp4
date: 2023-09-01  
---

<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<center>
<video autoplay loop muted playsinline  width="80%" style='border: 1px solid #E8E8E8'> <source  src="../misc/galtonboard/galton.mp4" type="video/mp4"> </video>
</center>


This is a  Galton Board I built with picture frame, wood, dowels, and steel ball bearings.

# What is a Galton Board?
---

A Galton Board consists of a vertical board with a series of pegs arranged in a lattice. Balls are dropped from the top, and as they fall, they encounter pegs that deflect them left or right. At the bottom, the balls collect in bins, forming a distribution that resembles the normal distribution.


Below is a simulation of a Galton Board that I wrote in <a href='https://brm.io/matter-js/'>Matter.js</a>. <button onclick="resetSimulation()">Run Simulation</button>
<div id="simulation-wrapper" style="width: 80%; margin: auto; height: 900px;">
    <canvas id="simulation" style="border: solid 2px black;"></canvas>
</div>
<br>
<center><button onclick="resetSimulation()">Reset Simulation</button></center>

The distribution of balls resembles that of a Gaussian, for both the simulated and the real life version of the Galton Board. *Neat!*

# Mechanics of the Galton Board
---

When a ball hits a peg, it has an equal probability of deflecting to the left or right. This process can be modeled as a series of Bernoulli trials, where each trial has two possible outcomes: left (L) or right (R).

If a ball encounters $$ n $$ pegs, it will make $$ n $$ decisions. The final position of the ball will be the result of the cumulative sum of these left and right deflections.

# The Binomial Distribution
---

The distribution of the balls in the bins at the bottom follows a binomial distribution. Let's denote:
- $$n$$ as the number of pegs (or trials)
- $$p$$ as the probability of deflecting to the right (usually $$p = 0.5 $$)

The probability of a ball ending up in a particular bin can be described by the binomial distribution:

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

Where:
- $$ \binom{n}{k} $$ is the binomial coefficient
- $$ k $$ is the number of right deflections

For a Galton Board with $$ p = 0.5 $$, this simplifies to:

$$ P(X = k) = \binom{n}{k} \left(\frac{1}{2}\right)^n $$

<br>
# Central Limit Theorem
---

As the number of pegs $$ n $$ increases, the binomial distribution approaches a normal distribution due to the central limit theorem. This theorem states that the sum of a large number of independent and identically distributed random variables will be approximately normally distributed.

For a large $$ n $$, the binomial distribution $$ B(n, p) $$ can be approximated by a normal distribution with mean $$ \mu $$ and variance $$ \sigma^2 $$:

$$
\mu = np
$$

$$
\sigma^2 = np(1-p)
$$

In our case, with $$ p = 0.5 $$:

$$
\mu = \frac{n}{2}
$$

$$
\sigma^2 = \frac{n}{4}
$$

Thus, the normal approximation is:

$$
X \sim \mathcal{N} \left(\frac{n}{2}, \frac{n}{4}\right)
$$

# Remarks on building your own
---

If you make your own, let me know <a title="Email" href="mailto:{{ site.email }}"><img class="svg-social-icon" src="{{"../assets/social-icons/email.svg"}}" /></a>
I'd be very happy to see your designs.


# Further Reading
---


<script src="../../libs/matter.js"></script>
<script src="misc/galtonboard/galton.js"></script>