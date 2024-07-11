---
layout: home
title: Homepage
permalink: /
published: true
order: 1
---



## About
---
<p>
My interests are Computer Vision and Machine Learning. I investigated motion in videos — its modeling and importance — in deep video understanding models during my PhD. Additionally, I was also lucky enough to have wonderful collaborators and projects that allowed me to work on other topics such as denoising, representation learning, and implicit neural representations.
</p>

<p>
Before that, I worked on my other passion: High Energy Physics and related monitoring tools at CERN for the CMS experiment.
</p>
<p>
PhD at <a href="https://www.tugraz.at/institute/icg/research/team-pock">Vision, Learning & Optimization Group - ICG - TU Graz </a><br>
<!-- Thesis: Action recognition & Spatio-Temporal Modeling<br> -->

Visiting Researcher at <a href='https://vision.eecs.yorku.ca/main/'>Center for Vision Research - York University - Toronto</a> <br>

Technical Student at <a href='https://cms.cern/'>CMS Experiment - CERN - Geneva</a> <br>

<br>

</p>


## Publications
---

{% for paper in site.papers reversed%}
<table>
  <tr>
    <!-- <td width="5%"><div class="badge">{{paper.venue}}</div></td> -->
      <td width="35%">
      <div class="badge">{{paper.venue}}</div>
      {% assign file_extension = paper.teaser | split: '.' | last | downcase %}
      {% if file_extension == "mp4" or file_extension == "webm" or file_extension == "ogg" %}
    <video autoplay loop muted playsinline style="width: 100%;">
      <source src="{{ paper.teaser }}" type="video/{{ file_extension }}">
      Your browser does not support the video tag.
    </video>
  {% elsif file_extension == "gif" or file_extension == "jpg" or file_extension == "jpeg" or file_extension == "png" %}
    <img src="{{ paper.teaser }}" style="width: 100%;">
  {% else %}
    <p>Unsupported media type.</p>
  {% endif %}
  </td>
    <td width="65%" style="padding: 0px">  
      <div class="paper-info">
      <div class="paper-head">
        <span class="paper-title"><a href="{{ paper.paper }}">{{paper.title}}</a></span>
        <span class="paper-authors">{{paper.subheading}}</span>
        <span class="paper-published">{{paper.published}}</span>
      </div>
      </div>
      <div class="paper-links">
        {% if paper.permalink != nil %}
          <a href="{{ paper.url }}">Project Page</a>
        {% endif %}
        {% if paper.code != nil %}
          <a href="{{ paper.code }}">Code</a>
        {% endif %}
        {% if paper.paper != nil %}
          <a href="{{ paper.paper }}">Paper</a>
        {% endif %}
      </div>
    </td>
  </tr>
</table>    
{% endfor %}


## Misc.
---

{% for post in site.misc %}
<table>
  <tr>
    <td width="55%" style="padding: 0px">  
      <div class="paper-info">
      <div class="paper-head">
      <a href="{{ post.url | relative_url }}"></a>
        <span class="paper-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></span>
        <span class="paper-author">{{ post.subheading }}</span>
      </div>
      </div>
    </td>
        <td width="45%">
      <div class="badge">{{post.venue}}</div>
      {% assign file_extension = post.teaser | split: '.' | last | downcase %}
      {% if file_extension == "mp4" or file_extension == "webm" or file_extension == "ogg" %}
    <video autoplay loop muted playsinline style="width: 100%;">
      <source src="{{ post.teaser }}" type="video/{{ file_extension }}">
      Your browser does not support the video tag.
    </video>
  {% elsif file_extension == "gif" or file_extension == "jpg" or file_extension == "jpeg" or file_extension == "png" %}
    <img src="{{ post.teaser }}" style="width: 100%;">
  {% else %}
    <p>Unsupported media type.</p>
  {% endif %}
  </td>
  </tr>
</table>  
{% endfor %}
