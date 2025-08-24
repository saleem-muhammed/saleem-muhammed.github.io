// Respect system preference first time
(function initTheme(){
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const html = document.documentElement;
  if (stored === 'dark' || (!stored && prefersDark)) {
    html.classList.remove('light'); html.classList.add('dark');
  } else {
    html.classList.remove('dark'); html.classList.add('light');
  }
})();

function toggleTheme(){
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  if (isDark){ html.classList.remove('dark'); html.classList.add('light'); localStorage.setItem('theme','light'); }
  else { html.classList.remove('light'); html.classList.add('dark'); localStorage.setItem('theme','dark'); }
  // update button label across pages
  document.querySelectorAll('[data-theme-label]').forEach(el=>{
    el.textContent = html.classList.contains('dark') ? 'Dark' : 'Light';
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
    btn.addEventListener('click', toggleTheme);
  });
  // initial label
  const label = document.documentElement.classList.contains('dark') ? 'Dark' : 'Light';
  document.querySelectorAll('[data-theme-label]').forEach(el=> el.textContent = label);
});

