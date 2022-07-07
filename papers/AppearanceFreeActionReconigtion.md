---
layout: post
# layout: redirected
title: A study on robust feature representations for grain density estimates in austenitic steel
permalink: /AppearanceFreeActionRecognition
# redirect_to: https://github.com/f-ilic/afd
subheading: <b>Filip Ilic</b>, Marc Masana, Lea Bogensperger, Harald Ganster, Thomas Pock
venue: TODO
exclude: true
---
<h1>Redirecting...</h1>
<a href='https://github.com/f-ilic/AppearanceFreeActionRecognition'>Click here if you are not redirected.<a>
<script>location='https://github.com/f-ilic/AppearanceFreeActionRecognition'</script>

<div class="paper-links">
<a href="https://github.com/f-ilic/AppearanceFreeActionRecognition">Code</a>
<a href="papers/AppearanceFreeActionRecognition/TODO.pdf">Paper</a>
<a href="papers/AppearanceFreeActionRecognition/bib.txt">BibTex</a>
</div>
<br>


*Disclaimer:* This repository is a standalone part of https://github.com/f-ilic/AppearanceFreeActionRecognition. This repo only contains dataset related code.

---

**Is Appearance Free Action Recognition Possible?**<br>
ECCV 2022<br>
Filip Ilic, Thomas Pock, Richard Wildes<br>

---

[[Project Page]](https://f-ilic.github.io/)


Environment Setup:
```bash
git clone git@github.com:f-ilic/afd.git
conda env create -f environment.yaml
conda activate motion
```



# Appearance Free Dataset
*"The Appearance Free Dataset (AFD) is an extension to a widely used action recognition dataset that
disentangles static and dynamic video components. In particular, no single frame
contains any static discriminatory information in AFD; the action is only encoded in the temporal dimension."* - Paper

Further we not only provide the AFD101 dataset based on UCF101, but also the necessary tools to generate other appearance free videos.

Some samples from AFD101 are shown below:

![](readme_assets/BoxingPunchingBag.gif)
![](readme_assets/Hulahoop.gif)
<br>
![](readme_assets/JumpingJack.gif)
![](readme_assets/TrampolineJumping.gif)

## Download
Download link to afd101: HERE


If you wish to download the whole dataset package, including optical flow for ucf101 and afd101, run:
```bash
wget ucf101
wget afd101
wget ucf101flow
wget afd101flow
```

## Create it yourself

To create it from scratch you need to

1) Download and extract ucf101

```
wget ucf101link
unzip ucf101
```


2) Run:
```python 
python generate_afd.py --src /path/to/ucf101/ --dst /some/path/
```

**Optional:**

If you want to save the individual frames instead, which leads to higher fidelity images due to the compression induced from mp4 and the fact that random noise is hard to compress you can pass the `-images` flag. Be aware that this will use around 240gb of space.

```python 
python generate_afd.py --src /path/to/ucf101/ --dst /some/path/ -images
```

Both methods will populate `/some/path` with the AFD101 dataset.

*Hint:* For quick speedup if you have multiple GPUs:
```
CUDA_VISIBLE_DEVICES=0 python generate_afd.py --src /home/data/ucf101 --dst /home/data/afd101 --start_letter A --end_letter F
CUDA_VISIBLE_DEVICES=1 python generate_afd.py --src /home/data/ucf101 --dst /home/data/afd101 --start_letter F --end_letter J
CUDA_VISIBLE_DEVICES=2 python generate_afd.py --src /home/data/ucf101 --dst /home/data/afd101 --start_letter J --end_letter P
CUDA_VISIBLE_DEVICES=3 python generate_afd.py --src /home/data/ucf101 --dst /home/data/afd101 --start_letter P --end_letter Z
```

## Visualisation & Utilities

We also provide some basic utilities to view AFD data in context of its optical flow and the (regular rgb) video. 
This is useful to see the streghts and weaknesses of AFD video.



 To visualize a (regular) video side by side of an appearance free version and the middleburry coded optical flow of said video, run:
 ```python
python afd_single_video.py /path/to/video.mp4
 ```

![](readme_assets/demo_afd_single_video.gif)
(click on gif or zoom in to get rid of the moreau pattern)


To save the result as a gif (as seen above):

 ```python
python afd_single_video.py /path/to/video.mp4 --gif /home/Desktop/test.gif
 ```


Furthermore if you want to extract AFD from already AFD video (😳) passt the flag `--upsample INT` so that RAFT can find correspondances more easily as 320x240 images are too small with /4 downscaling in RAFT.

 ```python
python afd_single_video.py /path/to/afdvideo.mp4 --gif /home/Desktop/test.gif --upsample 2
 ```

AFD from [regular video]:
![](readme_assets/afd_ucf.gif)

AFD from [AFD from [regular video]]:
![](readme_assets/afd_afd.gif)


# Acknowledgements

Parts of this project use code from the following repositories:

* https://github.com/princeton-vl/RAFT
* https://github.com/georgegach/flowiz


# Cite
If this is useful to you, please cite

```bibtex
Waiting for google scholar to update index
```

