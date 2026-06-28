// baanbok landing — theme state. Single source of truth: localStorage['baanbok-theme'].
// Shared key with the app screens; values: 'light' | 'dark' (absent / 'system' => follow OS).
(function () {
  var KEY = 'baanbok-theme';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function effectiveTheme() {
    var p = stored() || 'system';
    if (p === 'light' || p === 'dark') return p;
    return (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  function apply() {
    document.documentElement.setAttribute('data-theme', effectiveTheme());
  }

  // Toggle to the opposite of the currently-effective theme, and persist.
  window.toggleTheme = function () {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(KEY, next); } catch (e) {}
    apply();
  };

  apply();

  // Follow OS changes while in 'system' (no explicit choice stored).
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () {
      var p = stored() || 'system';
      if (p !== 'light' && p !== 'dark') apply();
    };
    try { mq.addEventListener('change', onChange); } catch (e) { mq.addListener(onChange); }
  }
})();
