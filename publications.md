---
layout: default
title: Publications
permalink: /publications/
---

# Selected Publications
<table>
  <thead><tr><th>Year</th><th>Title / Link</th></tr></thead>
  <tbody>
  {% assign pubs = site.data.publications | sort: "year" | reverse %}
  {% for p in pubs %}
    <tr>
      <td>{{ p.year }}</td>
      <td>{% if p.url %}<a target="_blank" rel="noopener" href="{{ p.url }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>

