---
layout: home
title: Homepage
permalink: /
published: true
order: 1
---

## About
<p>
I'm a Computer Vision & Machine Learning Engineer at Snap, passionate about developing models that can understand and interpret the world around us.
</p>

<p>
During my PhD I investigated motion in videos — its modeling and importance — in deep video understanding models with my supervisors Thomas Pock, and Richard Wildes. Additionally, I was also lucky enough to have wonderful collaborators and projects that allowed me to work on other topics such as denoising, generative modeling, and implicit neural representations.
</p>

<p>
Before that, I worked at CERN for the CMS experiment on performance critical monitoring and analysis software.
</p>

## Experience
<ul class="experience">
  <li>Computer Vision & Machine Learning Engineer at <a href="https://www.snapchat.com">Snap Inc. — Vienna</a></li>
  <li>PhD at <a href="https://www.tugraz.at/institute/icg/research/team-pock">Vision, Learning & Optimization Group — ICG — TU Graz</a></li>
  <li>Visiting Researcher at <a href="https://vision.eecs.yorku.ca/main/">Center for Vision Research — York University — Toronto</a></li>
  <li>Technical Student at <a href="https://cms.cern/">CMS Experiment — CERN — Geneva</a></li>
</ul>

## Publications

<div class="card-list">
{% for paper in site.papers reversed %}
  {% include paper_table.html title=paper.title %}
{% endfor %}
</div>

## Miscellaneous

<div class="card-list">
{% for post in site.misc reversed %}
  {% include post_table.html title=post.title %}
{% endfor %}
</div>
