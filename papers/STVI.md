---
layout: post
title: Space-Time Volumes of Interest
permalink: /STVI
subheading: Representing Objects in Video by Combining Top-Down and Bottom-Up Processes
exclude: true
---

<table class='tiles'>
  <tr>
    <td width="20%" class='teaserimg'> <img src="/wacv2020_thumb.png"></td>
    <td width="80%">  
      <div class="paper-info">
      <div class="paper-head">
        <span class="paper-title">Representing Objects in Video as Space-Time Volumes by Combining Top-Down and Bottom-Up Processes</span>
        <span class="paper-authors"><b>Filip Ilic</b>, Axel Pinz</span>
        <span class="paper-published"><b>WACV 2020</b></span>
      </div>
      </div>
      <div class="paper-links">
      <a href="papers/STVI/stvi.pdf">[Paper]</a>
      <a href="papers/STVI/poster.pdf">[Poster]</a>
      <a href="papers/STVI/bib.txt">[BibTex]</a>
      </div>
    </td>
  </tr>
</table>



**TL;DR**<br>
We show how to obtain a scalable representation of objects, which preserves their decomposition into parts. For that we extract features from appearance and motion cues, select the appropriate scale in spatio-temporal scale space and perform clustering.
<!-- <i>As top-down based approaches of object recognition from video are getting more powerful, a structured way to combine them with bottom-up grouping processes becomes feasible. When done right, the resulting representation is able to describe objects and their decomposition into parts at appropriate spatio-temporal scales.
We propose a method that uses a modern object detector to focus on salient structures in video, and a dense optical flow estimator to supplement feature extraction. From these structures we extract space-time volumes of interest (STVIs) by smoothing in spatio-temporal Gaussian Scale Space that guides bottom-up grouping.
The resulting novel representation enables us to analyze and visualize the decomposition of an object into meaningful parts
while preserving temporal object continuity.
Our experimental validation is twofold. First, we achieve competitive results on a common video object segmentation benchmark. Second, we extend this benchmark with high quality object part annotations, DAVIS Parts, on which we establish a strong baseline by showing that our method yields spatio-temporally meaningful object parts. Our new representation will support applications that require high-level space-time reasoning at the parts level.</i> -->

**Object tracking and decomposition into parts**<br>
<video controls autoplay loop width="100%">
  <source  src="papers/STVI/girl.mp4" type="video/mp4">
</video> 
Our approach (right) bridges the conceptual gap between low-level video representations such as (left) TSPs  which tend to fall apart over time and do not model objects directly, and instance segmentation methods such as (center) Mask R-CNN  which lack a decomposition into parts, and temporal consistency. Our unsupervised approach is able to detect salient object parts based on motion and appearance.


**Different object sclales**<br>
<video controls autoplay loop width="100%">
  <source  src="papers/STVI/jumpingjack.mp4" type="video/mp4">
</video> 
Space-Time Volumes of Interest (**STVIs**) extracted at increasing spatial and temporal scales from a jumping-jack sequence. Note how finer scales capture more detail at the cost of temporal and spatial coherence, whereas coarser scales model more fundamental patterns. 

## Supplement
---

<table class='tiles'>
  <tr>
  <td width="20%" class='teaserimg'> <img src="/davisparts_thumb.png"></td>
  <td width="80%">  
    <div class="paper-info">
    <div class="paper-head">
      <span class="paper-title">The DAVIS Parts Dataset</span>
      <span class="paper-authors"><b>Filip Ilic</b>, Axel Pinz</span>
      <span class="paper-published"><b>Supplement to WACV 2020 Paper</b></span>
    </div>
    </div>
    <div class="paper-links">
    <a href="/DAVISParts.zip">[Download]</a>
    </div>
  </td>
</tr>
  
  
</table>

The DAVIS Parts Dataset was created for the purpose of evaluating the decomposition of various objects into their parts and contains 20 annotated videos from the DAVIS2016 challenge.<br>
The total number of annotated frames is 1392, with an average of 7.15 parts per object.<br>

<img src="papers/DAVISParts/lucia.png"  height="70px" border='1' > 
<img src="papers/DAVISParts/flamingo.png" height="70px" border='1' > 
<img src="papers/DAVISParts/hike.png" height="70px" border='1' > 
<img src="papers/DAVISParts/paragliding.png" height="70px" border='1' > 
<img src="papers/DAVISParts/rollerblade.png" height="70px" border='1' > 
<img src="papers/DAVISParts/scooter-gray.png" height="70px" border='1' > 
<img src="papers/DAVISParts/tennis.png" height="70px" border='1' > 


The identified object parts are annotated throughout the whole video sequence with pixel accuracy.