---
title: Space-Time Volumes of Interest
authors: Filip Ilic, Axel Pinz
---
<video width="100%" nocontrols loop autoplay>
  <source src="assets/SpaceTimeVolumesOfInterest/jumpingjack.mp4" type="video/mp4">
</video> 

<center>Representing objects at various spatio-temporal scales</center>

<br>
Abstract<br>
<span class="post-meta">
As top-down based approaches of object recognition
from video are getting more powerful, a structured way
to combine them with bottom-up grouping processes becomes
 feasible. When done right, the resulting representation 
is able to describe objects and their decomposition into
parts at appropriate spatio-temporal scales. We propose a
method that uses a modern object detector, and a dense optical flow 
estimator as top-down anchors to focus on salient
structures in video. From these structures we extract space-time 
volumes of interest by smoothing in spatio-temporal
Gaussian scale space that guides bottom-up grouping with
Simple Linear Iterative Clustering. The resulting novel representation enables us to 
analyze and visualize the decomposition of an object into meaningful parts, 
and to describe the relative motion between object components, while preserving temporal object continuity. 
Our space-time volumes of interest capture objects and their motion at object
specific scales, so that they are suitable for a variety of
classification tasks, including action recognition, analysis
of relative motion between components of an object, and
large-scale interactions between objects that model the dynamics of a scene.
</span>

Keywords<br>
<span class="post-meta">
Object representation, Gaussian spatio-tempora scale space, object decomposition, SLIC, top-down anchors, Mask R-CNN, Flownet2.0
</span>

[ [Paper] ](assets/SpaceTimeVolumesOfInterest/cvpr19.pdf) [ [Poster] ](SpaceTimeVolumesOfInterest/cvpr19_poster.pdf) [ [Code] ](https://github.com/f-ilic/space-time-volumes) [ [BibTex] ](assets/SpaceTimeVolumesOfInterest//bib.txt) 
