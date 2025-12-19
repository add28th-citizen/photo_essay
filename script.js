/*
 v2 – Slice 4: Scroll progress + Back-to-top
 Progressive enhancement:
 - Thin progress bar at top
 - Back-to-top button appears after scroll
 - No layout shifts, no dependencies
*/

(function () {
  // ---------- Progress bar ----------
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  Object.assign(bar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '2px',
    width: '0%',
    background: '#222',
    opacity: '0.6',
    zIndex: '9999',
    transition: 'width 120ms linear'
  });
  document.body.appendChild(bar);

  // ---------- Back to top ----------
  const topBtn = document.createElement('button');
  topBtn.textContent = '↑';
  Object.assign(topBtn.style, {
    position: 'fixed',
    right: '1.25rem',
    bottom: '1.25rem',
    padding: '0.5rem 0.65rem',
    fontSize: '1rem',
    border: 'none',
    background: '#222',
    color: '#fff',
    borderRadius: '999px',
    cursor: 'pointer',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 200ms ease-out'
  });
  document.body.appendChild(topBtn);

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Scroll handler ----------
  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;

    if (scrollTop > 400) {
      topBtn.style.opacity = '0.7';
      topBtn.style.pointerEvents = 'auto';
    } else {
      topBtn.style.opacity = '0';
      topBtn.style.pointerEvents = 'none';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();