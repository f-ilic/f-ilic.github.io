---
layout: default
title: Posts
permalink: /posts/
published: true
order: 3
---

{% for post in site.categories.posts %}

<div class="item-wrapper">
<div class="item">
        <div class="upper-row">
            <div class="time">{{post.date | date: "%b %Y"}}</div>
            <div class="post-list-title"><a href="{{ post.url }}">{{post.title}}</a></div>
        </div>
        <div class="subheading">
            {{post.subheading}}
        </div>
    </div>
</div>

{% endfor %}
