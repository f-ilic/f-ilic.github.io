---
layout: post
title: Representing Objects in Video as Space-Time Volumes by Combining Top-Down and Bottom-Up Processes
permalink: /STVI
subheading: <b>Filip Ilic</b>, Axel Pinz 
venue: 2020 IEEE Winter Conference on Applications of Computer Vision (WACV)
exclude: true
---
<div class="paper-links">
<a href="papers/STVI/ilic20stvi.pdf">Paper</a>
<a href="papers/STVI/poster.pdf">Poster</a>
<a href="papers/STVI/bib.txt">BibTex</a>
<a href="https://drive.google.com/open?id=1-I8f44UddQZBbYDT9ravd-ueAiKqxV68">Download DAVIS Parts Dataset</a>
</div>
<br>



We show how to obtain a scalable representation of objects, which preserves their decomposition into parts. For that we extract features from appearance and motion cues, select the appropriate scale in spatio-temporal Gaussian scale space and perform clustering.



<table>
<tr>
<td>
  <video controls autoplay loop muted width="100%">
  <source  src="papers/STVI/girl.mp4" type="video/mp4">
</video> 
</td>
</tr>
<tr>
<td align="justify">
Object tracking and decomposition into parts: Our approach (right) bridges the conceptual gap between low-level video representations such as (left) TSPs  which tend to fall apart over time and do not model objects directly, and instance segmentation methods such as (center) Mask R-CNN  which lack a decomposition into parts, and temporal consistency. Our unsupervised approach is able to detect salient object parts based on motion and appearance.
</td>
</tr>
</table>





<table>
<tr>
<td>
  <video controls autoplay loop muted width="100%">
    <source  src="papers/STVI/jumpingjack.mp4" type="video/mp4">
  </video> 
</td>
</tr>
<tr>
<td align="justify">
Different object sclales: Space-Time Volumes of Interest extracted at increasing spatial and temporal scales from a jumping-jack sequence. Note how finer scales capture more detail at the cost of temporal and spatial coherence, whereas coarser scales model more fundamental patterns. 
</td>
</tr>
</table>



<table>
<tr>
<td>
<center>
  <video controls autoplay loop muted width="50%">
    <source  src="papers/STVI/rollerblade.mp4" type="video/mp4">
  </video> 
</center>
</td>
</tr>
<tr>
<td align="justify">
Viewer/Object-centered representation: The trajectory w.r.t. the observer is shown on the left. The relative motion of object parts w.r.t. the object centroid is shown on the right. This is useful because objects are represented as the sum of their parts, and not just as instance masks.
</td>
</tr>
</table>

## Supplement
---


<table>
<tr>
<td>
<center>
  <video controls autoplay loop muted width="60%">
    <source  src="papers/STVI/parts/DAVIS_parts.mp4" type="video/mp4">
  </video> 
</center>
</td>
</tr>
<tr>
<td align="justify">
The DAVIS Parts Dataset contains a varity of densely annotated objects and their parts. We envision this dataset being used for object part tracking and detection. 
</td>
</tr>
</table>
