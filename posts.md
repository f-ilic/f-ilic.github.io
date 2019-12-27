---
layout: default
title: Posts
permalink: /posts/
published: True
order: 3
---


<!-- ## Articles
---

<table class='clickable-tiles'>
{% for article in site.categories.articles %}
<tr >
<td>
    <a href="{{ article.url }}" style='display:block;text-decoration:none;'>
    <div class="time">{{article.date | date: "%b %Y"}}</div>
    <div class="post-list-title">{{article.title}}</div>
    <div class="subheading">
        {{article.subheading}}
    </div>

    </a>
</td>
</tr>
{% endfor %}
</table> -->

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

