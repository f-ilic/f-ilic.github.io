---
title: Space-Time Volumes of Interest
authors: Filip Ilic, Axel Pinz
---

<video width="100%" nocontrols loop autoplay>
  <source src="data/SpaceTimeVolumesOfInterest/jumpingjack.mp4" type="video/mp4">
</video> 

<span class="tiny-heading">Abstract</span>
<span class="muted-gray">
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

<span class="tiny-heading">Keywords</span>
<span class="muted-gray">Object representation, Gaussian spatio-tempora scale space, object decomposition, SLIC, top-down anchors, Mask R-CNN, Flownet2.0</span>

<span class="tiny-heading">tl;dr</span>
<span class="muted-gray">Representing objects at various spatio-temporal scales<span>

[Paper](projects/voctree/techrep.pdf){: .boxed} 
[Poster](SpaceTimeVolumesOfInterest/cvpr19_poster.pdf){: .boxed} 
[Presentation](SpaceTimeVolumesOfInterest/cvpr19_poster.pdf){: .boxed} 
[Code](https://github.com/f-ilic/space-time-volumes){: .boxed} 
[BibTex](../assets/SpaceTimeVolumesOfInterest/bib.txt){: .boxed} 