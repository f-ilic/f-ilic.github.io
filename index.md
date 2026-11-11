---
layout: home
title: Homepage
permalink: /
published: true
order: 1
---



# Experience
---
<ul class="experience">
  <li>Computer Vision & Machine Learning Engineer at <a href="https://www.snapchat.com">Snap Inc. — Vienna</a></li>
  <li>PhD at <a href="https://www.tugraz.at/institute/icg/research/team-pock">Vision, Learning & Optimization Group — ICG — TU Graz</a></li>
  <li>Visiting Researcher at <a href="https://vision.eecs.yorku.ca/main/">Center for Vision Research — York University — Toronto</a></li>
  <li>Technical Student at <a href="https://cms.cern/">CMS Experiment — CERN — Geneva</a></li>
</ul>

# About
---
<p>
I'm a Computer Vision & Machine Learning Engineer at Snap, developing models that understand and interpret the world around us.
During my PhD with Thomas Pock and Richard Wildes, I investigated the role of motion in deep video understanding, and worked with wonderful collaborators on denoising, generative modeling, and implicit neural representations.
Before that, I worked at CERN on performance critical monitoring and analysis software for the CMS experiment.
</p>

<br>


# Publications
---


{% for paper in site.papers reversed %}
  {% include paper_table.html title=paper.title %}
{% endfor %}





# Miscellaneous
---


{% for post in site.misc reversed %}
  {% include post_table.html title=post.title %}
{% endfor %}