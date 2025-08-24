// Multi-theme switcher: mode = dark|light, palette = austin|teal|nord
(function () {
  const html = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function apply(mode, palette) {
    html.classList.remove('dark','light');
    html.classList.add(mode);
    html.setAttribute('data-palette', palette);

    // Update UI
    document.querySelectorAll('[data-theme-label]').forEach(el=>{
      el.textContent = mode === 'dark' ? 'Dark' : 'Light';
    });
    document.querySelectorAll('[data-palette-select]').forEach(sel=>{
      if (sel.value !== palette) sel.value = palette;
    });
  }

  function load() {
    const mode = localStorage.getItem('mode') || (prefersDark ? 'dark' : 'light');
    const palette = localStorage.getItem('palette') || 'austin';
    apply(mode, palette);
  }

  function toggleMode() {
    const mode = html.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('mode', mode);
    apply(mode, localStorage.getItem('palette') || 'austin');
  }

  function setPalette(value) {
    localStorage.setItem('palette', value);
    apply(localStorage.getItem('mode') || (prefersDark?'dark':'light'), value);
  }

  // Init + wire up
  document.addEventListener('DOMContentLoaded', () => {
    load();
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.addEventListener('click', toggleMode);
    });
    document.querySelectorAll('[data-palette-select]').forEach(sel=>{
      sel.addEventListener('change', e => setPalette(e.target.value));
    });
  });
})();

