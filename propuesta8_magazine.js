/* ============================================================
   PHARMASAN · Propuesta 8 · Scripts
   Módulos: Nav · Dark mode · Smooth scroll · Scroll reveal · Modal · Formulario · Acordeón
   ============================================================ */

/* ── NAV: scroll + hamburguesa ───────────────────────────── */
const nav       = document.getElementById('mainNav');
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});


/* ── SMOOTH SCROLL PERSONALIZADO ─────────────────────────── */
/* Easing: easeInOutCubic — arranque suave, llegada suave */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const diff   = targetY - startY;
  if (Math.abs(diff) < 2) return;

  const startTime = performance.now();

  function step(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    /* behavior: 'instant' evita que el CSS scroll-behavior interfiera */
    window.scrollTo({ top: startY + diff * easeInOutCubic(progress), behavior: 'instant' });
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/* Interceptar todos los enlaces ancla (nav + botones de sección) */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const hash   = link.getAttribute('href');
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();

    /* Cierra menú móvil si está abierto */
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);

    const navH    = nav.offsetHeight || 70;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navH;
    smoothScrollTo(targetY, 1840);

    /* Actualiza URL sin disparar scroll nativo */
    history.pushState(null, '', hash);
  });
});




/* ── SCROLL REVEAL ────────────────────────────────────────── */
if ('IntersectionObserver' in window) {
  document.body.classList.add('js-reveal');

  /* Tarjetas y elementos con stagger por grupo */
  const cardEls = document.querySelectorAll(
    '.svc-b:not(.full), .ben-card, .tc, .cert-block, .about-mv-item, .ast, .accordion-item, .contact-card'
  );

  cardEls.forEach(el => {
    el.classList.add('reveal');
    /* Calcula índice dentro del padre para el retraso escalonado */
    const siblings = Array.from(el.parentNode.children).filter(c => c.classList.contains('reveal'));
    const idx = siblings.length - 1;
    if (idx > 0) el.dataset.revealDelay = idx;
  });

  /* Elementos que aparecen sin escalonado */
  document.querySelectorAll(
    '.section-eyebrow, ' +
    '.services-inner > h2, .benefits-inner > h2, .team-inner > h2, ' +
    '.quality-text > h2, .sedes-inner > h2, .quality-visual, ' +
    '.quality-text > p, .cta-text, .cta-btns, .svc-b.full, ' +
    '.sedes-layout, .eps-inner, .contact-header, .contact-footer-link'
  ).forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      const delay = (target.dataset.revealDelay || 0) * 85;
      setTimeout(() => target.classList.add('is-visible'), delay);
      io.unobserve(target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -32px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


/* ── MODALES DE CONTACTO ──────────────────────────────────── */
const modalMap = {
  usuarios:    'modalUsuarios',
  empresarial: 'modalEmpresarial',
  trabajo:     'modalTrabajo',
  pqrsdf:      'modalPqrsdf',
};

function openModal(type) {
  const id = modalMap[type] || 'modalUsuarios';
  const m  = document.getElementById(id);
  if (!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';

  /* Resetea el formulario de empleo al cerrar */
  const formTrabajo = document.getElementById('formTrabajo');
  if (formTrabajo) {
    formTrabajo.reset();
    const info = document.getElementById('cvFileInfo');
    const area = document.getElementById('cvUploadArea');
    const btn  = document.getElementById('btnSubmitEmpleo');
    if (info) info.innerHTML = '';
    if (area) area.classList.remove('has-file', 'drag-over');
    if (btn)  { btn.textContent = 'Enviar postulación'; btn.style.background = ''; btn.disabled = false; }
  }
}

document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) closeModal(); });
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


/* ── FORMULARIO GENÉRICO (Usuarios / Empresarial) ─────────── */
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.modal-submit');
  btn.textContent      = '✓ Mensaje enviado';
  btn.style.background = '#1da896';
  btn.disabled = true;
  setTimeout(closeModal, 2000);
}


/* ── CV UPLOAD — DRAG & DROP ──────────────────────────────── */
(function initCvUpload() {
  const area = document.getElementById('cvUploadArea');
  if (!area) return;

  /* Click en el área abre el selector de archivo */
  area.addEventListener('click', () => document.getElementById('cvFile').click());
  area.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') document.getElementById('cvFile').click();
  });

  area.addEventListener('dragover', e => {
    e.preventDefault();
    area.classList.add('drag-over');
  });
  area.addEventListener('dragleave', () => area.classList.remove('drag-over'));
  area.addEventListener('drop', e => {
    e.preventDefault();
    area.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (!file) return;
    try {
      const dt = new DataTransfer();
      dt.items.add(file);
      document.getElementById('cvFile').files = dt.files;
    } catch (_) {}
    handleCvFile(file);
  });
})();

function handleCvFile(file) {
  const info = document.getElementById('cvFileInfo');
  const area = document.getElementById('cvUploadArea');
  if (!file) return;

  if (file.type !== 'application/pdf') {
    info.innerHTML = '<span style="color:#e53e3e">⚠️ Solo se aceptan archivos PDF.</span>';
    area.classList.remove('has-file');
    document.getElementById('cvFile').value = '';
    return;
  }

  const MAX = 50 * 1024 * 1024;
  if (file.size > MAX) {
    info.innerHTML = '<span style="color:#e53e3e">⚠️ El archivo supera el límite de 50 MB.</span>';
    area.classList.remove('has-file');
    document.getElementById('cvFile').value = '';
    return;
  }

  const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
  info.innerHTML = `<span style="color:#1da896">✓ ${file.name} · ${sizeMB} MB</span>`;
  area.classList.add('has-file');
}

/* ── FORMULARIO EMPLEO CON CV ─────────────────────────────── */
async function submitEmpleo(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = document.getElementById('btnSubmitEmpleo');
  const info = document.getElementById('cvFileInfo');
  const file = document.getElementById('cvFile').files[0];

  if (!file) {
    info.innerHTML = '<span style="color:#e53e3e">⚠️ Debes adjuntar tu hoja de vida en PDF.</span>';
    return;
  }

  btn.textContent = 'Enviando…';
  btn.disabled    = true;

  try {
    const formData = new FormData(form);
    formData.set('_subject',
      `Postulación – ${form.nombres.value} ${form.apellidos.value} – ${form.cargo.value}`
    );
    formData.set('_replyto', form.email.value);

    /*
     * CONFIGURAR: crea un formulario en https://formspree.io y reemplaza
     * 'REEMPLAZA_CON_TU_ID' con el ID generado. El correo de notificación
     * debe ser recursohumano@pharmasan.co.
     * Plan gratuito: 50 envíos/mes · archivos hasta 25 MB.
     */
    const ENDPOINT = 'https://formspree.io/f/REEMPLAZA_CON_TU_ID';

    const res = await fetch(ENDPOINT, {
      method:  'POST',
      body:    formData,
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      btn.textContent      = '✓ Postulación enviada';
      btn.style.background = '#1da896';
      setTimeout(closeModal, 2200);
    } else {
      throw new Error('server');
    }
  } catch (_) {
    btn.textContent      = 'Error al enviar · inténtalo de nuevo';
    btn.style.background = '#e53e3e';
    setTimeout(() => {
      btn.textContent      = 'Enviar postulación';
      btn.style.background = '';
      btn.disabled         = false;
    }, 3000);
  }
}


/* ── ACORDEÓN DE SEDES ────────────────────────────────────── */
function toggleAccordion(id) {
  const item = document.getElementById(id);
  if (!item) return;
  
  /* Obtener el contenedor padre del acordeón */
  const accordion = item.closest('.sedes-accordion');
  if (!accordion) return;
  
  /* Cerrar todos los items abiertos en este acordeón */
  accordion.querySelectorAll('.accordion-item.open').forEach(openItem => {
    if (openItem.id !== id) {
      openItem.classList.remove('open');
    }
  });
  
  /* Abrir/cerrar el item seleccionado */
  item.classList.toggle('open');
}

/* ── GENERAR ACORDEONES DE SEDES DESDE DATOS ────────────── */
function generarSedesAccordion() {
  const accordion = document.querySelector('.sedes-accordion');
  if (!accordion || typeof SEDES_DATA === 'undefined') return;
  
  accordion.innerHTML = ''; /* Limpiar contenedor */
  
  SEDES_DATA.forEach((dept) => {
    const deptId = `acc-${dept.departamento.toLowerCase().replace(/\s+/g, '-')}`;
    const isOpen = ''; /* Todas cerradas por defecto */
    
    let itemHTML = `
      <div class="accordion-item ${isOpen}" id="${deptId}">
        <button class="accordion-header" onclick="toggleAccordion('${deptId}')">
          <span class="acc-dep">📌 ${dept.departamento}</span>
          <span class="acc-arrow">▾</span>
        </button>
        <div class="accordion-body">
          <div class="sedes-table-wrap">
            <table class="sedes-table">
              <thead>
                <tr>
                  <th>Sede</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th>Lun – Vie</th>
                  <th>Sábado</th>
                </tr>
              </thead>
              <tbody>
    `;
    
    /* Agregar filas de ciudades */
    dept.ciudades.forEach(ciudad => {
      const nombreCelda = ciudad.mapsUrl
        ? `<a href="${ciudad.mapsUrl}" target="_blank" rel="noopener noreferrer" class="sede-map-link">📍 ${ciudad.nombre}</a>`
        : `<span class="sede-map-link" style="cursor:default;">📍 ${ciudad.nombre}</span>`;
      itemHTML += `
                <tr>
                  <td>${nombreCelda}</td>
                  <td>${ciudad.direccion}</td>
                  <td><a href="tel:${ciudad.telefonoLink}">${ciudad.telefono}</a></td>
                  <td>${ciudad.lunVie || '—'}</td>
                  <td>${ciudad.sabado || '—'}</td>
                </tr>
      `;
    });
    
    itemHTML += `
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
    
    accordion.innerHTML += itemHTML;
  });
}

/* Ejecutar cuando el DOM esté listo */
document.addEventListener('DOMContentLoaded', generarSedesAccordion);



/* ── ALINEAR WIDGET WCX CON WHATSAPP ─────────────────────── */
(function alignWcx() {
  const RIGHT  = '32px';
  const BOTTOM = '32px';

  function tryAlign() {
    /* Busca el contenedor raíz del plugin (posición fixed, no nuestros elementos) */
    const all = document.querySelectorAll('body > div, body > iframe');
    for (const el of all) {
      const id  = (el.id  || '').toLowerCase();
      const cls = (el.className || '').toLowerCase();
      const src = (el.src || '').toLowerCase();
      if (
        id.includes('wcx') || cls.includes('wcx') || src.includes('wcx') ||
        id.includes('chat') || cls.includes('chat-widget')
      ) {
        const st = window.getComputedStyle(el);
        if (st.position === 'fixed') {
          el.style.setProperty('right',  RIGHT,  'important');
          el.style.setProperty('bottom', BOTTOM, 'important');
        }
      }
    }
  }

  /* Comprueba cada 400 ms durante los primeros 8 s */
  let elapsed = 0;
  const timer = setInterval(() => {
    tryAlign();
    elapsed += 400;
    if (elapsed >= 8000) clearInterval(timer);
  }, 400);
})();


/* ── FORMULARIO PQRSDF ────────────────────────────────────── */
/* Genera número de radicado: YYYYMMDDXXXXXXXXXX (10 dígitos aleatorios) */
function generarRadicado() {
  const now  = new Date();
  const yyyy = now.getFullYear();
  const mm   = String(now.getMonth() + 1).padStart(2, '0');
  const dd   = String(now.getDate()).padStart(2, '0');
  const rand = String(Math.floor(Math.random() * 9_000_000_000) + 1_000_000_000);
  return `${yyyy}${mm}${dd}${rand}`;
}

/* Resetea el modal PQRSDF a su estado inicial al cerrar */
function resetPqrsdf() {
  const formWrap    = document.getElementById('pqrsdfFormWrap');
  const confirmWrap = document.getElementById('pqrsdfConfirmWrap');
  const form        = document.getElementById('formPqrsdf');
  const errTipo     = document.getElementById('pqrsdfTipoError');
  const btn         = document.getElementById('btnSubmitPqrsdf');
  if (!formWrap) return;
  if (form)        form.reset();
  if (errTipo)     errTipo.textContent = '';
  if (btn)         { btn.textContent = 'Radicar solicitud'; btn.style.background = ''; btn.disabled = false; }
  formWrap.hidden    = false;
  confirmWrap.hidden = true;
  /* Deselecciona tarjetas de tipo */
  document.querySelectorAll('.pqrsdf-tipo-card').forEach(c => c.classList.remove('selected'));
}

/* Intercepta cierre del modal para resetear siempre */
const _origCloseModal = closeModal;
closeModal = function() {
  _origCloseModal();
  resetPqrsdf();
};

/* Selección visual de tarjetas de tipo PQRSDF */
document.querySelectorAll('.pqrsdf-tipo-opt input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.pqrsdf-tipo-card').forEach(c => c.classList.remove('selected'));
    radio.closest('.pqrsdf-tipo-opt').querySelector('.pqrsdf-tipo-card').classList.add('selected');
    const err = document.getElementById('pqrsdfTipoError');
    if (err) err.textContent = '';
  });
});

async function submitPqrsdf(e) {
  e.preventDefault();
  const form    = e.target;
  const errTipo = document.getElementById('pqrsdfTipoError');

  /* Validar tipo seleccionado */
  const tipoRadio = form.querySelector('input[name="tipoPqrsdf"]:checked');
  if (!tipoRadio) {
    errTipo.textContent = '⚠️ Debes seleccionar el tipo de solicitud.';
    return;
  }
  errTipo.textContent = '';

  /* Genera radicado y muestra confirmación antes del envío al servidor */
  const radicado = generarRadicado();
  document.getElementById('pqrsdfTipoConfirm').textContent  = tipoRadio.value;
  document.getElementById('pqrsdfNumRadicado').textContent   = radicado;
  document.getElementById('pqrsdfFormWrap').hidden    = true;
  document.getElementById('pqrsdfConfirmWrap').hidden = false;

  /* Envío en segundo plano al backend configurado
   * CONFIGURAR: reemplaza 'REEMPLAZA_CON_TU_ID_PQRSDF' con tu ID de Formspree.
   * Correo destino: servicioalcliente@pharmasan.co
   */
  const ENDPOINT = 'https://formspree.io/f/REEMPLAZA_CON_TU_ID_PQRSDF';
  const payload  = new FormData(form);
  payload.set('_subject', `[${tipoRadio.value}] PQRSDF · ${form.nombres.value} ${form.apellidos.value} · ${radicado}`);
  payload.set('_replyto', form.email.value);
  payload.set('radicado', radicado);

  fetch(ENDPOINT, {
    method:  'POST',
    body:    payload,
    headers: { Accept: 'application/json' },
  }).catch(() => { /* fallo silencioso — el usuario ya vio la confirmación */ });
}
