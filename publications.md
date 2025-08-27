---
title: Publications
---

<ul class="pub-list">
{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% for p in pubs %}
  <li>
    <a class="pub"
       href="{{ p.url }}"
       data-summary="{{ p.summary | strip_newlines | escape }}">
      {{ p.authors }} — “{{ p.title }},”
      <em>{{ p.journal }}</em>{% if p.volume %} <strong>{{ p.volume }}</strong>{% endif %}
      {% if p.pages %}, {{ p.pages }}{% endif %}
      {% if p.year %} ({{ p.year }}){% endif %}.
    </a>
  </li>
{% endfor %}
</ul>

