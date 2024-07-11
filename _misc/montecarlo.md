---
layout: post
title: A visual introduction to Monte Carlo Sampling
permalink: /misc/montecarlo
subheading: Importance, Rejction, and Inversion Sampling
teaser: misc/montecarlo/teaser.gif
# published: true
venue: 10 minute read
---


<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

# Monte Carlo "Hello World"
---
As is tradition with all Monte Carlo intuition posts we start by estimating $$\pi$$ by throwing darts at a circle inscribed in a square.
We chose a square with side lengths $$2$$, and inscribe a circle of radius $$1$$.
We also have to assume that our thrown darts always hit inside of the square at a point $$\mathbf{p} = (x,y)$$, such that $$x$$ and $$y$$ are $$\textit{iid}$$ and drawn from a Uniform distribution $$\mathcal{U}$$.


So, this means we have the following statements to work with:
* The point $$\mathbf{p}$$ $$(x,y) \sim \mathcal{U}_{[-1,1]}.$$
* Area of the square: $$A_\square=4$$
* Area of the circle: $$A_o = \pi$$

The question boils down to:
*Is the sampled point $$\mathbf{p} = (x,y)$$ inside of the the circle ($$x^2 + y^2 < 1$$)?*


An important observation is that the the ratio of the areas of  of both  $$\frac{A_o}{A_\square}$$ is proportional to the ratio of sampled points, $$\textit{i.e.} \frac{\color{blue}{\#o}}{\color{red}{\#\square} + \color{blue}{\#o}}$$


<img src="pi.gif" style='border: 1px solid #E8E8E8'>
<!-- ![Estimating Pi](pi.gif) -->

If we write down the ratios of the two areas we see that $$\frac{A_o}{A_\square} = \frac{\pi}{4}$$.
This means that if we want to get an estimate for $$\pi$$ we just have to compute $$\hat{\pi} = 4\cdot\frac{\color{blue}{\#o}}{\color{red}{\#\square} + \color{blue}{\#o}}$$.
The estimate $$\hat{\pi}$$ and the error of our estimate is shown in the right plot. You can see how the error decreases as we increase the number of samples.

This little toy example is of course only usefull for illustrative purposes, but introduces important concepts such as _Rejection Sampling_ which we will discuss later from a more theoretical point of view.

# What are Monte Carlo methods for?
---






Goal: calculate $$\mathop{\mathbb{E}}[f(x)] = \int f(x)~p(x)~d{x}$$


<input type="checkbox" id="toggleImages"> Show Expectation <i>(CLICK ME!)</i>
<div>
<img src="fp.svg" id="fp" alt="fp" style='border: 1px solid #E8E8E8'>
<img src="expectation.svg" id="expectation" alt="expectation" style="display:none;">
</div>

In general hard / impossible to compute the full $$p(x)f(x)$$ -> **We can not compute the integral this way**


Idea: approximate it with $$\mathbb{E}[f(x)] \approx \underbrace{\frac{1}{N} \sum_{i=1}^N(f(x_i))}_{s}, ~~~\text{where  } x_i \sim p(x)$$


<!-- ![expectation](expectation.png) -->




Width = $$2 \sqrt(\mathbb{V}_p[s])$$

$$\mathbb{V}_p[s] = \frac{1}{N}\mathbb{V}_p[f(x)]\qquad$$   -> **Variance Decreases with number of samples!**


<img src="expectation.gif" style='border: 1px solid #E8E8E8'>


# Central Limit Theorem

$$
s \rightarrow \mathcal{N}(\sigma, \mu^2) 
\begin{cases} 
\mu &= \mathbb{E}[f(x)]\\
\sigma^2 &= \frac{1}{N} \mathbb{V}[f(x)]
\end{cases}
$$



In reality you only get one sampling of $s$!





# Convergence

$$\mathbb{E}_p[f(x)] = \int p(x) f(x) dx\qquad$$   **Unbiased Estimator**

$$\mathbb{V}_p[f(x)] = \frac{\sigma^2_f}{N} = \mathcal{O} \frac{1}{N}\qquad$$   **Independent of dimension d**




# Sampling
---

> Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin.
> --- Von Neumann (1951)

* How do we sample from arbitrary distributions?
* How did I produce the $$p(x)$$ samples in the examples above?


## Rejection Sampling 




We can sample any functional form which we can evaluate such as for example a gaussian.
We do not need to know how to sample from a gaussian, but just from a uniform distribution $$\mathcal{U_{[0,1]}}$$.

<!-- ![Rejection Sampling gif]() -->
<img src="rejection.svg" style='border: 1px solid #E8E8E8'>


Basic Idea same as the $$\pi$$ example!

The downsides are pretty evident; you need to know _something_ about the underlying function that you want to sample from.
It also struggles with inefficiency, if the envelope is chosen badly.

Choosing better fitting evelopes can dramatically increase the runtime of such methods.
Another thing to consider is that the examples shown here are 1Dimensional. This class of problems generally does not scale nicely with increasing dimensionality, _i.e._ suffers from [Curse of Dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality).

What this means, is that we need to be smarter about it! Rejection sampling alone, for many problems does not suffice, but is always something to keep in the back of your mind.


<!-- ![Rejection Sampling](rejection_sampling.svg) -->
<img src="rejection_sampling.svg" style='border: 1px solid #E8E8E8'>

1) Take a distribution $Env$ that we know how to sample from (Uniform 😬)
2) Scale it so it covers the target distribution
3) Sample from $Env$ and reject them if they in the gray area!




## Inversion Sampling

**PDF** *(Probability Density Function)*


<!-- ![pdf cdf](pdf_cdf.svg) -->
<img src="pdf_cdf.svg" style='border: 1px solid #E8E8E8'>

$$
f_X(x) = \begin{cases}
   0,& x <  0\\
   e^{-x},        & x \geq 0
\end{cases}
\qquad
\begin{aligned}
P(1 < X < 3) &= \int_1^3 f_X(x) dx \\
             &= \int_1^3 e^{-x} dx \\
             &= e^{-1} - e^{-3}
\end{aligned}
$$

**CDF** *(Cumulative Density Function)*

$$
\begin{aligned}
F_X(x) &= P(X \leq x) = \int_{-\infty}^x f_X(x)~dx =  \int_{-\infty}^0 f_X(x)~dx +  \int_{0}^x f_X(x)~dx \\
       &= \int_{0}^x f_X(x)~dx \\
       &= \int_{0}^x e^{-x}~dx \\
       &= 1-e^{-x} \\
\end{aligned}
$$



$$
\begin{aligned}
P(1 < X < 3) &= P(X \leq 3) - P(X \leq 1)\\
             &=F_X(3) - F_X(1)
\end{aligned}
$$

In the end this leaves us with a rather elegant solution, such that we only need to evaluate $$F_X$$ at two points to get the area under the curve of $$f(x)$$





<!-- ![inversion sampling](inversion.gif) -->
<img src="inversion.gif" style='border: 1px solid #E8E8E8'>

So again just by knowing how to sample from $$\mathcal{U_{[0,1]}}$$ and the CDF we can draw samples from the PDF. _Pretty Cool!_



* You need access to the CDF
    * Often times this is possible in the real world; think physical experiments
* Elegent solution that does not do any *unneccessary* computation
* Does not scale well to higher dimensions




# Importance Sampling


The problem: $$f(x)$$ is large **only** in regions where $$p(x)$$ is small.
The variance $$\mathbb{V}$$ for different evaluations of $$\mathbb{E}_p$$ is large.




# Remember: 

$$\mathop{\mathbb{E}}[f(x)]$$ is what we want to approxmiate

$$
\begin{aligned}
\mathop{\mathbb{E_p}}[f(x)] &= \int p(x)~f(x)~dx  \qquad | \text{multiply by } \frac{q(x)}{q(x)}\\
                          &= \int q(x) \left[\frac{p(x)}{q(x)}  f(x) \right] dx \\
                          &= \mathbb{E}_q \left[\frac{p(x)}{q(x)} f(x) \right]
\end{aligned}
$$

## We can estimate this with samples $$x_i \sim q$$

$$
\begin{aligned}
\mathbb{E}_q \left[\frac{p(x)}{q(x)} f(x) \right] \approx \underbrace{\frac{1}{N} \sum_{i=1}^N\frac{p(x_i)}{q(x_i)} f(x_i)}_{r}
\end{aligned}
$$

<!-- ![importance sampling](importance.gif) -->
<img src="importance.gif" style='border: 1px solid #E8E8E8'>



## Convergence

Unbiased $$\mathbb{E}_q[r] = \mathbb{E}_p[f(x)]$$

Same or better variance $$\mathbb{V}_q[r] = \frac{1}{N} \mathbb{V}_q \left[\frac{p(x)}{q(x)} f(x) \right]$$
* choose $$q$$ such that $$\mathbb{V}_q \left[\frac{p(x)}{q(x)} f(x) \right] < \mathbb{V}_p[f(x)]$$

We can achieve this by choosing $$q(x)$$ to be high were $$\|p(x)f(x)\|$$ is high.

--- 

### Further Reading

Intro
* [Intro by Ian Murray](https://www.youtube.com/watch?v=Em6mQQy4wYA)
* [Another intro by Ian Murray](https://www.youtube.com/watch?v=_v4Eb09qp7Q)
* [Betancourt, Introduction to Hamiltonian Monte Carlo](https://arxiv.org/pdf/1701.02434.pdf)
* [Murphy, Advanced Topics in Probabilistic ML, Chapters 11 & 12](https://probml.github.io/pml-book/book2.html#toc)

Details
* [Bishop online](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)
* [Galton board as a Markov Chain](https://vknight.org/blog/posts/galton-board/)
* [Inversion / Box Muller](https://www.youtube.com/watch?v=Vd21DUyVccA&ab_channel=Anthroporraistes)
* [Monte Carlo with Math](https://www.youtube.com/watch?v=C3p2wI4RAi8&ab_channel=MutualInformation)
* [Deriving the Normal Distribution Probability Density Function Formula](https://www.youtube.com/watch?v=N-bI-Dsm-rw&ab_channel=MolloyMaths)
* [MCMC slides (nice overview)](http://www.cs.cmu.edu/~aarti/Class/10701_Spring14/slides/MCMC.pdf)
* [German MCMC slides (mathy)](https://user.math.uni-bremen.de/dickhaus/downloads/Methoden-WS1213/mcmc.pdf)
* Another nice slide set on Monte Carlo + MCMC + MH algorithm:
    * [MC](https://www.sas.upenn.edu/~jesusfv/LectureNotes_5_montecarlo.pdf)
    * [MCMC](https://www.sas.upenn.edu/~jesusfv/LectureNotes_6_mcmc.pdf)
    * [MH](https://www.sas.upenn.edu/~jesusfv/LectureNotes_7_MH.pdf)



---
*Most of this page is built based from my [MCMC intro jupyter notebook](https://github.com/f-ilic/cib_seminar).
The only real difference is that the notebook is interactive; feel free to tinker with it and let me know if you create some additional nice visualizations.*

---

<!-- JAVSCRIPT STUFF -->

<script>
const toggleImagesCheckbox = document.getElementById('toggleImages');
const image1 = document.getElementById('fp');
const image2 = document.getElementById('expectation');

toggleImagesCheckbox.addEventListener('change', function () {
    if (toggleImagesCheckbox.checked) {
    image1.style.display = 'none';
    image2.style.display = 'block';
    } else {
    image1.style.display = 'block';
    image2.style.display = 'none';
    }
});
</script>