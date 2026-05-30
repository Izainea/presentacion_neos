/* =========================================================
   Estadística · USTA — Lógica de la presentación
   - Inicializa Reveal.js
   - Genera diagramas SmartArt (ciclo radial) por JS
   - Anima contadores
   - Dibuja gráficas con Chart.js (al entrar a la diapositiva)
   ========================================================= */

/* ---------- 1. Reveal.js ---------- */
const deck = new Reveal({
  hash: true,
  slideNumber: 'c/t',
  controls: true,
  progress: true,
  center: false,
  transition: 'slide',
  backgroundTransition: 'fade',
  width: 1280,
  height: 720,
  margin: 0.04,
  plugins: [RevealZoom, RevealNotes]
});

deck.initialize().then(() => {
  buildCycles();
  // Render del estado inicial
  handleSlide(deck.getCurrentSlide());
});

/* Cada vez que se cambia de diapositiva, activa sus animaciones */
deck.on('slidechanged', (e) => handleSlide(e.currentSlide));

function handleSlide(slide) {
  if (!slide) return;
  animateCounters(slide);
  revealCycle(slide);
  drawCharts(slide);
}

/* =========================================================
   2. SMART · CICLO radial (posiciona items en círculo)
   ========================================================= */
function buildCycles() {
  document.querySelectorAll('.smart-cycle').forEach((host) => {
    const center = host.dataset.center || '';
    let items = [];
    try { items = JSON.parse(host.dataset.items || '[]'); } catch (_) { items = []; }

    // Nodo central
    const c = document.createElement('div');
    c.className = 'cycle-center';
    c.textContent = center;
    host.appendChild(c);

    // Nodos perimetrales
    const R = 42; // % del radio
    items.forEach((txt, i) => {
      const angle = (-90 + (360 / items.length) * i) * (Math.PI / 180);
      const x = 50 + R * Math.cos(angle);
      const y = 50 + R * Math.sin(angle);
      const node = document.createElement('div');
      node.className = 'cycle-item';
      node.style.left = x + '%';
      node.style.top = y + '%';
      node.style.transitionDelay = (i * 0.09) + 's';
      node.textContent = txt;
      host.appendChild(node);
    });
  });
}

function revealCycle(slide) {
  slide.querySelectorAll('.smart-cycle').forEach((host) => {
    host.querySelectorAll('.cycle-item').forEach((n) => n.classList.add('show'));
  });
}

/* =========================================================
   3. Contadores animados
   ========================================================= */
function animateCounters(slide) {
  slide.querySelectorAll('.stat-num[data-count]').forEach((el) => {
    if (el.dataset.done === '1') return;
    el.dataset.done = '1';
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = prefix + val.toLocaleString('es-CO') + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* =========================================================
   4. Gráficas Chart.js
   ========================================================= */
const NAVY = '#0a2240', SKY = '#2f80c8', GOLD = '#e8a33d', TEAL = '#2bb6a8';
const charts = {};

function baseOpts(extra = {}) {
  return Object.assign({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: NAVY }
    },
    animation: { duration: 1200, easing: 'easeOutQuart' }
  }, extra);
}

function drawCharts(slide) {
  if (typeof Chart === 'undefined') return;

  const dataEl = slide.querySelector('#chartData');
  if (dataEl && !charts.data) {
    charts.data = new Chart(dataEl, {
      type: 'line',
      data: {
        labels: ['2018', '2020', '2022', '2024', '2026', '2028*'],
        datasets: [{
          data: [33, 64, 97, 149, 221, 330],
          borderColor: SKY, backgroundColor: 'rgba(47,128,200,.15)',
          fill: true, tension: .35, borderWidth: 3,
          pointBackgroundColor: GOLD, pointRadius: 5
        }]
      },
      options: baseOpts({
        scales: {
          y: { beginAtZero: true, grid: { color: '#eef2f8' }, ticks: { color: '#5a6b82' } },
          x: { grid: { display: false }, ticks: { color: '#5a6b82' } }
        }
      })
    });
  }

  const jobsEl = slide.querySelector('#chartJobs');
  if (jobsEl && !charts.jobs) {
    charts.jobs = new Chart(jobsEl, {
      type: 'bar',
      data: {
        labels: ['Datos', 'IA / ML', 'Actuaría', 'BI / Analítica', 'Riesgo'],
        datasets: [{
          data: [100, 92, 74, 81, 69],
          backgroundColor: [SKY, TEAL, GOLD, NAVY, '#1c5390'],
          borderRadius: 8, barThickness: 38
        }]
      },
      options: baseOpts({
        scales: {
          y: { beginAtZero: true, grid: { color: '#eef2f8' }, ticks: { color: '#5a6b82' } },
          x: { grid: { display: false }, ticks: { color: '#5a6b82' } }
        }
      })
    });
  }
}
