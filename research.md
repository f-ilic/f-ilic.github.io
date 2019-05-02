---
layout: default
title: Research
permalink: /research/
published: false
order: 3
---

## What's all this about?
---

<!-- <blockquote> My overarching goal is to make interpretable models for computer vision systems using machine learning techniques. 
    This enables a more explicit representation in the problem domain, 
    which can facilitate a deeper understanding - even across different domains.
</blockquote> -->

I am currently interested in video understanding and the representation of objects form video.
To build a detailed and explicit represenation on top of which can be reasoned, and which is intuitively understandable is an important consideration for me.

## Papers
---

{% for paper in site.categories.papers %}
{{paper.output}}
<hr>
{%- endfor -%}