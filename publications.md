---
title: Publications
---

<div class="pub-tabs">

  <!-- Tabs (CSS-only) -->
  <input type="radio" name="pubtabs" id="tab-all" checked />
  <label class="tab" for="tab-all">All</label>

  <input type="radio" name="pubtabs" id="tab-cat" />
  <label class="tab" for="tab-cat">By category</label>

  <!-- Panels -->
  <div class="panels">

    <!-- All publications -->
    <section class="panel" data-tab="all">
      <ol class="pub-list">
      {% assign pubs = site.data.publications | sort: "year" | reverse %}
      {% for p in pubs %}
        <li>
          <a class="pub" href="{{ p.url }}" data-summary="{{ p.summary | strip_newlines | escape }}">
            {{ p.authors }} — “{{ p.title }},” <em>{{ p.journal }}</em>{% if p.volume %} <strong>{{ p.volume }}</strong>{% endif %}{% if p.pages %}, {{ p.pages }}{% endif %}{% if p.year %} ({{ p.year }}){% endif %}.
          </a>
        </li>
      {% endfor %}
      </ol>
    </section>

    <!-- By category -->
    <section class="panel" data-tab="cat">

      ### Observational tests of strong-field gravity {#strong-gravity}
      <ol class="pub-list">
      {% for p in site.data.publications %}{% if p.cats contains "strong-gravity" %}
        <li>
          <a class="pub" href="{{ p.url }}" data-summary="{{ p.summary | strip_newlines | escape }}">
            {{ p.authors }} — “{{ p.title }},” <em>{{ p.journal }}</em>{% if p.volume %} <strong>{{ p.volume }}</strong>{% endif %}{% if p.pages %}, {{ p.pages }}{% endif %}{% if p.year %} ({{ p.year }}){% endif %}.
          </a>
        </li>
      {% endif %}{% endfor %}
      </ol>

      ### Multi-messenger astronomy {#multi-messenger}
      <ol class="pub-list">
      {% for p in site.data.publications %}{% if p.cats contains "multi-messenger" %}
        <li>
          <a class="pub" href="{{ p.url }}" data-summary="{{ p.summary | strip_newlines | escape }}">
            {{ p.authors }} — “{{ p.title }},” <em>{{ p.journal }}</em>{% if p.volume %} <strong>{{ p.volume }}</strong>{% endif %}{% if p.pages %}, {{ p.pages }}{% endif %}{% if p.year %} ({{ p.year }}){% endif %}.
          </a>
        </li>
      {% endif %}{% endfor %}
      </ol>

      ### Stochastic GW background {#stochastic}
      <ol class="pub-list">
      {% for p in site.data.publications %}{% if p.cats contains "stochastic" %}
        <li>
          <a class="pub" href="{{ p.url }}" data-summary="{{ p.summary | strip_newlines | escape }}">
            {{ p.authors }} — “{{ p.title }},” <em>{{ p.journal }}</em>{% if p.volume %} <strong>{{ p.volume }}</strong>{% endif %}{% if p.pages %}, {{ p.pages }}{% endif %}{% if p.year %} ({{ p.year }}){% endif %}.
          </a>
        </li>
      {% endif %}{% endfor %}
      </ol>

      ### ML applications in GW data analysis {#ml-gw}
      <ol class="pub-list">
      {% for p in site.data.publications %}{% if p.cats contains "ml-gw" %}
        <li>
          <a class="pub" href="{{ p.url }}" data-summary="{{ p.summary | strip_newlines | escape }}">
            {{ p.authors }} — “{{ p.title }},” <em>{{ p.journal }}</em>{% if p.volume %} <strong>{{ p.volume }}</strong>{% endif %}{% if p.pages %}, {{ p.pages }}{% endif %}{% if p.year %} ({{ p.year }}){% endif %}.
          </a>
        </li>
      {% endif %}{% endfor %}
      </ol>

    </section>

  </div>
</div>
