---
layout: post
title: Representing Objects in Video as Space-Time Volumes by Combining Top-Down and Bottom-Up Processes
permalink: /STVI
subheading: <b>Filip Ilic</b>, Axel Pinz 
venue: WACV 2020
exclude: true
---

<a href="papers/STVI/ilic20stvi.pdf">[Paper]</a>
<a href="papers/STVI/poster.pdf">[Poster]</a>
<a href="papers/STVI/bib.txt">[BibTex]</a>



<em>We show how to obtain a scalable representation of objects, which preserves their decomposition into parts. For that we extract features from appearance and motion cues, select the appropriate scale in spatio-temporal Gaussian scale space and perform clustering.</em>

Object tracking and decomposition into parts
<table>
<tr>
<td>
  <video controls autoplay loop muted width="100%">
  <source  src="papers/STVI/girl.mp4" type="video/mp4">
</video> 
</td>
</tr>
<tr>
<td>
Figure 1: Our approach (right) bridges the conceptual gap between low-level video representations such as (left) TSPs  which tend to fall apart over time and do not model objects directly, and instance segmentation methods such as (center) Mask R-CNN  which lack a decomposition into parts, and temporal consistency. Our unsupervised approach is able to detect salient object parts based on motion and appearance.
</td>
</tr>
</table>




Different object sclales
<table>
<tr>
<td>
  <video controls autoplay loop muted width="100%">
    <source  src="papers/STVI/jumpingjack.mp4" type="video/mp4">
  </video> 
</td>
</tr>
<tr>
<td>
Figure 2: Space-Time Volumes of Interest extracted at increasing spatial and temporal scales from a jumping-jack sequence. Note how finer scales capture more detail at the cost of temporal and spatial coherence, whereas coarser scales model more fundamental patterns. 
</td>
</tr>
</table>



Viewer/Object-centered representation 
<table>
<tr>
<td>
  <video controls autoplay loop muted height="120">
    <source  src="papers/STVI/rollerblade.mp4" type="video/mp4">
  </video> 
</td>

<td bgcolor='#F7F7F7'>
Figure 3: The trajectory w.r.t. the observer is shown on the left. The relative motion of object parts w.r.t. the object centroid is shown on the right. This is useful because objects are represented as the sum of their parts, and not just as instance masks.
</td>
</tr>
</table>



## Supplement
---

<table class='tiles'>
  <tr>
  <td colspan='3'>  
    <div class="paper-info">
    <div class="paper-head">
      <span class="paper-title">The DAVIS Parts Dataset</span>
      <span class="paper-published"><b>A new dataset for object part segmentation and tracking</b></span>
              <a href="papers/STVI/DAVISParts_v1.zip">[Download]</a>
    </div>
    </div>

  </td>
</tr>  

<tr>
<td><video controls autoplay loop muted width="100%"><source  src="papers/STVI/parts/parkour_wipe.mp4" type="video/mp4"></video></td>
<td><video controls autoplay loop muted width="100%"><source  src="papers/STVI/parts/stroller_wipe.mp4" type="video/mp4"></video></td>
<td><video controls autoplay loop muted width="100%"><source  src="papers/STVI/parts/train_wipe.mp4" type="video/mp4"></video></td>
</tr>

<tr>

<td colspan='3' bgcolor='#F7F7F7'>Figure 4: The DAVIS Parts Dataset contains a varity of densely annotated objects and their parts.<br>
Three samples ('parkour', 'stroller', and 'train') are shown.</td>
</tr>

</table>
