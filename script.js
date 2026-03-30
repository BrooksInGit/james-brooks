/* =========================================
   PORTFOLIO SCRIPT
   ========================================= */

// ── NAV SCROLL ─────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── HAMBURGER ──────────────────────────────
const hamburger    = document.querySelector('.hamburger');
const navLinksList = document.getElementById('nav-links-list');

function closeMenu() {
  navLinksList?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
}

hamburger?.addEventListener('click', () => {
  const isOpen = navLinksList.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinksList?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', e => { if (!nav.contains(e.target)) closeMenu(); });

// ── TERMINAL ANIMATION ─────────────────────
function initTerminal() {
  const body = document.getElementById('terminalBody');
  if (!body) return;

  const lines = [
    { text: '$ dbt build --select +mart_customer_propensity', type: 'cmd',    delay: 400  },
    { text: '',                                                type: 'blank',  delay: 100  },
    { text: '  Running with dbt-core==1.8.3',                 type: 'dim',    delay: 350  },
    { text: '  Found 34 models, 8 sources, 22 tests',         type: 'dim',    delay: 250  },
    { text: '',                                                type: 'blank',  delay: 80   },
    { text: '  12:14:01  START model stg_customers ... [RUN]',    type: 'muted', delay: 320 },
    { text: '  12:14:02  OK    model stg_customers ... [0.83s]',  type: 'muted', delay: 160 },
    { text: '  12:14:02  START model int_interactions  [RUN]',    type: 'muted', delay: 280 },
    { text: '  12:14:04  OK    model int_interactions  [1.47s]',  type: 'muted', delay: 150 },
    { text: '  ...',                                           type: 'dim',    delay: 460  },
    { text: '',                                                type: 'blank',  delay: 80   },
    { text: '  ✓  Completed. 34/34 OK in 18.2s',              type: 'success', delay: 500  },
    { text: '  22 tests passed, 0 errors, 0 warnings',        type: 'dim',    delay: 200  },
  ];

  // Pre-create a cursor and append it
  const cursor = document.createElement('span');
  cursor.className = 't-cursor';
  body.appendChild(cursor);

  let totalDelay = 0;

  lines.forEach(line => {
    totalDelay += line.delay;
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 't-line';

      if (line.type === 'cmd') {
        // Render the prompt char separately so it's coloured
        span.innerHTML =
          '<span class="t-prompt">❯</span> ' +
          '<span class="t-cmd">' + escapeHtml(line.text.slice(2)) + '</span>';
      } else if (line.type === 'success') {
        span.className += ' t-success';
        span.textContent = line.text;
      } else if (line.type === 'muted') {
        span.className += ' t-muted';
        span.textContent = line.text;
      } else if (line.type === 'dim') {
        span.className += ' t-dim';
        span.textContent = line.text;
      } else {
        span.innerHTML = '&nbsp;'; // blank line with height
      }

      body.insertBefore(span, cursor);
    }, totalDelay);
  });

  // Dim cursor after animation completes
  setTimeout(() => {
    cursor.style.opacity = '0.25';
  }, totalDelay + 800);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── PROJECT FILTER ─────────────────────────
function initFilter() {
  const buttons = document.querySelectorAll('.filter');
  const cards   = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

// ── ACTIVE NAV HIGHLIGHT ───────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

// ── SCROLL REVEAL ──────────────────────────
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay
        ? parseInt(entry.target.dataset.delay)
        : i * 60;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ── INIT ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
  initFilter();
  initActiveNav();
  initReveal();
});
