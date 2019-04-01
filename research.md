---
layout: default
title: Research
permalink: /research/
published: false
order: 3
---

## What's all this about?
---

<blockquote> My overarching goal is to make interpretable models for computer vision systems using machine learning techniques. 
    This enables a more explicit representation in the problem domain, 
    which can facilitate a deeper understanding - even across different domains.
</blockquote>

## Papers
---

{% for paper in site.categories.papers %}
{{paper.output}}
<hr>
{%- endfor -%}