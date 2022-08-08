---
layout: post
title: Is Appearance Free Action Recognition Possible?
permalink: /AppearanceFreeActionRecognition
subheading: <b>Filip Ilic</b>, Thomas Pock, Richard P. Wildes
venue: ECCV
exclude: true
---

<div class="paper-links">
<a href="https://github.com/f-ilic/AppearanceFreeActionRecognition">Code</a>
<a href="https://f-ilic.github.io/AppearanceFreeActionRecognition/quiz">Quiz</a>
<a href="https://arxiv.org/pdf/2207.06261.pdf">Paper</a>
</div>
<br>







<style>
video {
      border: 1px solid black;

}
img.poster{
  /* max-width:80%;
  max-height:80%;
  position: absolute;
  display:block;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center; */
  z-index: 1;
  border: 1px solid black;

}

</style>

# Overview
We investigate 11 state-of-the-art action recognition networks with respect to their performance on a dataset where no static information is present. The video shows random noise animated with motion extracted from real human motion (the UCF101 dataset). We find that no network inherently learns a dynamics representation that equals optical flow, with respect to performance.
<video controls autoplay loop muted playsinline width="100%" >
  <source  src="../papers/AppearanceFreeActionReconigtion/demo.mp4">
</video> 
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

<center>
  <video controls autoplay loop muted playsinline width="49%">
  <source  src="../papers/AppearanceFreeActionReconigtion/BoxingPunchingBag.mp4" type="video/mp4">
</video> 

<video controls autoplay loop muted playsinline width="49%">
  <source  src="../papers/AppearanceFreeActionReconigtion/TrampolineJumping.mp4" type="video/mp4">
</video> 

  <video controls autoplay loop muted playsinline width="49%">
  <source  src="../papers/AppearanceFreeActionReconigtion/JumpingJack.mp4" type="video/mp4">
</video> 

<video controls autoplay loop muted playsinline width="49%">
  <source  src="../papers/AppearanceFreeActionReconigtion/HulaHoop.mp4" type="video/mp4">
</video>


</center>

We provide the AFD101 dataset based on UCF101, and also the necessary tools to generate other appearance free videos.
For details, code, and data see the github page. We also perform a user study, showing that human participants perform much better than current networks. Userstudy code is also in the github repo, and a quick quiz demo is also online:
<div class="paper-links">
<a href="https://github.com/f-ilic/AppearanceFreeActionRecognition">Code</a>
<a href="https://f-ilic.github.io/AppearanceFreeActionRecognition/quiz">Quiz</a>
</div>
<br>

# Findings

We introduce a new Two-Stream architecture built on tried and tested priciples in action recognition. Furthermore we employ a state of the art optical flow estimator to generate a rich dynamics representation that outperforms all others on Appearance Free Data, and closes the gap to human performance significantly.
<center>
<img src='../papers/AppearanceFreeActionReconigtion/schematic.png' width='60%;'>
</center>
For details, see our paper:
<div class="paper-links">
<a href="https://arxiv.org/pdf/2207.06261.pdf">Paper</a>
</div>





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
<img class='poster' src='../papers/AppearanceFreeActionReconigtion/poster.png'>

<br>