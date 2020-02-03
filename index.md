---
layout: default
title: Research
permalink: /
published: true
order: 1
---



## Short bio
---

<p>
I'm currently a PhD student at the TU Graz, interested in machine learning and its applications in computer vision.
My current work focuses on the spatio-temporal relation between objects and their parts in video.
</p>


## Publications
---

<table class='tiles'>
  <tr>
    <td width="20%" class='teaserimg'> <img src="/wacv2020_thumb.png"></td>
    <td width="80%">  
      <div class="paper-info">
      <div class="paper-head">
          <div class="time">Mar 2020 </div>
        <span class="paper-title">Representing Objects in Video as Space-Time Volumes by<br> Combining Top-Down and Bottom-Up Processes</span>
        <span class="paper-authors"><b>Filip Ilic</b>, Axel Pinz</span>
        <span class="paper-published"><b>2020 IEEE Winter Conference on Applications of Computer Vision (WACV)</b></span>
      </div>
      </div>
      <div class="paper-links">
      <a href="/STVI">[Project Page]</a>
      <a href="papers/STVI/ilic20stvi.pdf">[Paper]</a>
      </div>
    </td>
  </tr>
</table>



## Teaching
---

<table class='tiles'>
  <tr>
    <td>
    <div class="time">Winter semester </div>
        <div class="post-list-title">Image Based Measurement</div>
        <div class="subheading">Laboratory (438.019)</div>
      <div class="paper-links">
      <a href="../teaching/report_template.tex">[Report Template]</a>
      </div>    
    </td>
  </tr>
</table>


## Open Student Projects
---
<table class='tiles'>
  <tr>
    <td width="20%" class='teaserimg'> <img src="../teaching/stip.png"></td>
    <td width="80%">  
        <div class="time">May 2019</div>
        <div class="post-list-title">Space-Time Interest Points</div>
        <div class="subheading">Bachelor's Thesis, Master's Project</div>
        <p>
        Implement a Space-Time Interest Point detector and experiment with different descriptors for action recognition.
        </p>
      <div class="paper-links">
      <a href="../teaching/stip.pdf">[Info PDF]</a>
      <a href="https://www.irisa.fr/vista/Papers/2005_ijcv_laptev.pdf">[Reference paper]</a>
      </div>
    </td>

  </tr>
</table>


## Notes
---

<table class='clickable-tiles'>
{% for post in site.categories.notes %}
<tr >
<td>
    <a href="{{ post.url }}" style='display:block;text-decoration:none;'>
    <div class="time">{{post.date | date: "%b %Y"}}</div>
    <div class="post-list-title">{{post.title}}</div>
    <div class="subheading">
        {{post.subheading}}
    </div>
    </a>
</td>
</tr>
{% endfor %}
</table>
