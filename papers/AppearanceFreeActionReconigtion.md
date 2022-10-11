---
layout: post
title: Is Appearance Free Action Recognition Possible?
permalink: /AppearanceFreeActionRecognition
subheading: <b>Filip Ilic</b>, Thomas Pock, Richard P. Wildes
venue: ECCV
exclude: true
---

<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

<div class="paper-links">
<a href="https://github.com/f-ilic/AppearanceFreeActionRecognition">Code</a>
<a href="https://arxiv.org/pdf/2207.06261.pdf">Paper</a>
<a href="https://f-ilic.github.io/AppearanceFreeActionRecognition/quiz">Quiz</a>
</div>
<br>
<a class="github-button" href="https://github.com/f-ilic/AppearanceFreeActionRecognition" data-icon="octicon-star" data-show-count="true" aria-label="Star f-ilic/AppearanceFreeActionRecognition on GitHub">Star</a>

<style>
  .video-container {
  position: relative;
  padding-bottom: 56.25%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<!-- https://youtu.be/QOGZ6RDLTE8 -->
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/QOGZ6RDLTE8"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    allowfullscreen></iframe>
</div>
<br>

# Overview

We investigate state-of-the-art action recognition networks with respect to their performance on a dataset where no static information is present. The video shows random noise animated with motion extracted from real human motion (the UCF101 dataset). We find that optical flow, or a similarly descriptive representation, is not an emergent property of any of the tested action recognition architectures.
<br>



# Motivation

Related work has shown often that static biases in action recognitino datasets and therefore also in the trained models exist.
A simple experiment demonstrates that singleframe classification performance of a ResNet50 on UCF101 frames yields 65.6% Top-1 accuracy.
<img src='../papers/AppearanceFreeActionReconigtion/ucf101singleframe.png'>

<br>
# Appearance Free Dataset
The Appearance Free Dataset (AFD) is an extension to a widely used action recognition dataset that
disentangles static and dynamic video components. In particular, no single frame
contains any static discriminatory information in AFD; the action is only encoded in the temporal dimension.


We provide the AFD101 dataset based on UCF101, and also the necessary tools to generate other appearance free videos.
For details, code, and data see the github page. We also perform a user study, showing that human participants perform much better than current networks. Userstudy code is also in the github repo, and a quick quiz demo is also online.


# Findings

We introduce a new Two-Stream architecture built on tried and tested priciples in action recognition. 
<center>
<img src='../papers/AppearanceFreeActionReconigtion/schematic.png' width='60%;'>
</center>
<br>
We employ a state of the art optical flow estimator to generate a rich dynamics representation that outperforms all others on Appearance Free Data, and closes the gap to human performance significantly.
<br>


# Cite
```bibtex
@InProceedings{ilic22appearancefree,
title={Is Appearance Free Action Recognition Possible?},
author={Ilic, Filip and Pock, Thomas and Wildes, Richard P.},
booktitle={European Conference on Computer Vision (ECCV)},
month={October},
year={2022},
}
```
<!-- <img class='poster' src='../papers/AppearanceFreeActionReconigtion/poster.png'> -->

<br>