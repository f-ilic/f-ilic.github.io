---
layout: default
title: Posts
permalink: /posts/
published: true
order: 3
---

<table class='tiles'>

{% for post in site.categories.posts %}

<tr>
<td>

        <div class="upper-row">
            <div class="time">{{post.date | date: "%b %Y"}}</div>
            <div class="post-list-title"><a href="{{ post.url }}">{{post.title}}</a></div>
        </div>
        <div class="subheading">
            {{post.subheading}}
        </div>
</td>
</tr>
{% endfor %}
</table>
