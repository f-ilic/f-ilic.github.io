---
layout: home
title: Homepage
permalink: /
published: true
order: 1
---



## Mini-CV 
---
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
    <td width="10%"><div class="badge">{{paper.venue}}</div></td>
    <td width="90%" style="padding: 0px">  
      <div class="paper-info">
      <div class="paper-head">
        <span class="paper-title">{{paper.title}}</span>
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


## Various tinkering
---

{% for post in site.misc %}
<table>
  <tr>
    <td width="100%" style="padding: 0px">  
      <div class="paper-info">
      <div class="paper-head">
      <a href="{{ post.url | relative_url }}"></a>
        <span class="paper-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></span>
        <span class="paper-published">{{ post.subheading }}</span>
      </div>
      </div>
    </td>
  </tr>
</table>  
{% endfor %}
