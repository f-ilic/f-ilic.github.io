---
layout: default
title: Posts
permalink: /posts/
published: true
order: 2
---

{% for post in site.posts %}

<div class="item-wrapper">

<div class="item">
        <div class="upper-row">
            <div class="time tiny">{{post.date | date_to_string}}</div>
            <div class="tiny-heading"><a href="{{ post.url }}">{{post.title}}</a></div>
        </div>
        <div class="company tiny">
            {{post.subheading}}
        </div>
        <div class="muted-gray">
        </div>
    </div>
</div>

{% endfor %}
