'use strict';

/* ============================================================
   DATOS — 11 canciones
   ============================================================ */
const songs = [
  { title: 'Cuán Grande es Él',    file: 'songs/music-1.mp3',  imageBase: 'images/music-1',  lyricBase: 'lyrics/music-1',  type: 'adoracion'    },
  { title: 'Santo, Santo, Santo',  file: 'songs/music-2.mp3',  imageBase: 'images/music-2',  lyricBase: 'lyrics/music-2',  type: 'alabanza'     },
  { title: 'Alabaré',              file: 'songs/music-3.mp3',  imageBase: 'images/music-3',  lyricBase: 'lyrics/music-3',  type: 'alabanza'     },
  { title: 'Dios Está Aquí',       file: 'songs/music-4.mp3',  imageBase: 'images/music-4',  lyricBase: 'lyrics/music-4',  type: 'adoracion'    },
  { title: 'Renuévame',            file: 'songs/music-5.mp3',  imageBase: 'images/music-5',  lyricBase: 'lyrics/music-5',  type: 'adoracion'    },
  { title: 'Tu Fidelidad',         file: 'songs/music-6.mp3',  imageBase: 'images/music-6',  lyricBase: 'lyrics/music-6',  type: 'instrumental' },
  { title: 'Eres Mi Todo',         file: 'songs/music-7.mp3',  imageBase: 'images/music-7',  lyricBase: 'lyrics/music-7',  type: 'gospel'       },
  { title: 'Cristo Vive',          file: 'songs/music-8.mp3',  imageBase: 'images/music-8',  lyricBase: 'lyrics/music-8',  type: 'alabanza'     },
  { title: 'Mi Esperanza',         file: 'songs/music-9.mp3',  imageBase: 'images/music-9',  lyricBase: 'lyrics/music-9',  type: 'gospel'       },
  { title: 'Bendito Sea',          file: 'songs/music-10.mp3', imageBase: 'images/music-10', lyricBase: 'lyrics/music-10', type: 'alabanza'     },
  { title: 'Aleluya',              file: 'songs/music-11.mp3', imageBase: 'images/music-11', lyricBase: 'lyrics/music-11', type: 'adoracion'    }
];

/* ============================================================
   VIDEOS EDUCATIVOS
   ============================================================ */
const educationalVideos = [
  {
    id: 'azusa',
    title: 'El Avivamiento de la Calle Azusa',
    description: 'En 1906, en una calle humilde de Los Ángeles, un hombre rechazado por todos oró hasta que el cielo respondió. Descubre cómo Dios usó a William Seymour para encender un avivamiento que llegó a 50 naciones.',
    thumbnail: 'images/logo.png',
    file: 'videos/edu/azusa.mp4',
    next: 'azusa2',
    category: 'avivamiento',
    duration: '—',
    verse: '"Y se les aparecieron lenguas repartidas, como de fuego." — Hechos 2:3',
    date: '2026-10-07'
  },
  {
    id: 'azusa2',
    title: 'El Avivamiento de la Calle Azusa — Parte 2',
    description: 'La continuación de la historia: cómo el avivamiento se extendió a 50 naciones y transformó al mundo entero.',
    thumbnail: 'images/logo.png',
    file: 'videos/edu/azusa2.mp4',
    hidden: true,
    category: 'avivamiento',
    duration: '—',
    verse: '"Y se les aparecieron lenguas repartidas, como de fuego." — Hechos 2:3',
    date: '2026-10-07'
  },
  // 👈 NUEVO — Versículo de hoy
  {
    id: 'versiculo-1',
    title: 'El Versículo de Hoy',
    description: 'Raúl comparte la Palabra de Dios para tu día. Un momento de paz, reflexión y bendición en medio de tu rutina.',
    thumbnail: 'images/logo.png',
    file: 'videos/edu/versiculo-1.mp4',
    category: 'versiculo',
    duration: '—',
    verse: '"Jehová es mi pastor; nada me faltará." — Salmos 23:1',
    date: '2026-10-08'
  }
];

const EDU_CATEGORY_LABELS = {
  avivamiento: 'Avivamiento',
  doctrina: 'Doctrina',
  testimonio: 'Testimonio',
  'historia-iglesia': 'Historia de la Iglesia',
  devocional: 'Devocional',
  profecia: 'Profecía',
  versiculo: 'Versículo'      // 👈 NUEVO
};

const TYPE_LABELS = {
  adoracion: 'Adoración',
  alabanza: 'Alabanza',
  gospel: 'Gospel',
  instrumental: 'Instrumental'
};

const versiculos = [
  { texto: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito...', ref: 'Juan 3:16' },
  { texto: 'Jehová es mi pastor; nada me faltará.', ref: 'Salmos 23:1' },
  { texto: 'Todo lo puedo en Cristo que me fortalece.', ref: 'Filipenses 4:13' },
  { texto: 'El Señor es mi luz y mi salvación; ¿a quién temeré?', ref: 'Salmos 27:1' },
  { texto: 'Confía en Jehová con todo tu corazón...', ref: 'Proverbios 3:5' },
  { texto: 'Venid a mí todos los que estáis trabajados y cargados...', ref: 'Mateo 11:28' },
  { texto: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.', ref: 'Salmos 119:105' },
  { texto: 'El gozo de Jehová es vuestra fuerza.', ref: 'Nehemías 8:10' },
  { texto: 'Esfuérzate y sé valiente; no temas ni desmayes...', ref: 'Josué 1:9' },
  { texto: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.', ref: 'Romanos 8:28' }
];

const reflexiones = [
  'No estás solo. Dios camina contigo incluso cuando no lo sientes.',
  'Cada día es una nueva oportunidad para confiar en Aquel que nunca falla.',
  'La paz no viene de tenerlo todo, sino de confiar en Quien lo tiene todo.',
  'Cuando la carga pesa, la oración alivia. Habla con Dios hoy.',
  'La fe no es ver el camino completo, es dar el siguiente paso.',
  'Dios no promete ausencia de tormentas, sino Su presencia en medio de ellas.',
  'Agradece lo pequeño. Ahí también está la mano de Dios.',
  'El silencio también es oración cuando el corazón no encuentra palabras.',
  'Confía en el tiempo de Dios. Él nunca llega tarde.',
  'Un corazón agradecido transforma lo ordinario en extraordinario.',
  'No cargues lo que puedes entregar. Suelta y confía.',
  'La esperanza no defrauda cuando está puesta en el lugar correcto.'
];

const VELOCIDADES = [0.75, 1, 1.25, 1.5, 2];
const SWIPE_THRESHOLD = 60;

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if (isIOS) document.body.classList.add('ios');

const prefersReducedData = navigator.connection &&
  (navigator.connection.saveData === true ||
   /2g|slow-2g/.test(navigator.connection.effectiveType || ''));

const normalize = (str) =>
  String(str).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/* ============================================================
   IMÁGENES DE CANCIONES
   ============================================================ */
const EXTENSIONES_IMAGEN = ['jpg', 'jpeg', 'png', 'webp', 'gif', ''];
const cacheImagenes = {};

function cargarImagenEnElemento(imgEl, indice, onSuccess, onFallback) {
  const base = songs[indice].imageBase;
  let i = 0;
  let terminado = false;
  function siguiente() {
    if (terminado) return;
    if (i >= EXTENSIONES_IMAGEN.length) {
      terminado = true;
      const svg = generarPortada(indice);
      imgEl.onload = null; imgEl.onerror = null;
      imgEl.src = svg;
      if (onFallback) onFallback(svg);
      return;
    }
    const ext = EXTENSIONES_IMAGEN[i];
    const url = ext ? `${base}.${ext}` : base;
    imgEl.onload = () => {
      terminado = true;
      cacheImagenes[indice] = url;
      imgEl.onload = null; imgEl.onerror = null;
      if (onSuccess) onSuccess(url);
    };
    imgEl.onerror = () => { i++; siguiente(); };
    imgEl.src = url;
  }
  siguiente();
}

function detectarImagen(indice) {
  return new Promise((resolve) => {
    if (cacheImagenes[indice] !== undefined) { resolve(cacheImagenes[indice]); return; }
    const base = songs[indice].imageBase;
    let i = 0;
    function probar() {
      if (i >= EXTENSIONES_IMAGEN.length) { cacheImagenes[indice] = null; resolve(null); return; }
      const ext = EXTENSIONES_IMAGEN[i];
      const url = ext ? `${base}.${ext}` : base;
      const img = new Image();
      img.onload = () => { cacheImagenes[indice] = url; resolve(url); };
      img.onerror = () => { i++; probar(); };
      img.src = url;
    }
    probar();
  });
}

function tipoMimeImagen(url) {
  if (!url) return 'image/jpeg';
  const l = url.toLowerCase();
  if (l.includes('.png')) return 'image/png';
  if (l.includes('.webp')) return 'image/webp';
  if (l.includes('.gif')) return 'image/gif';
  if (l.includes('.svg') || l.startsWith('data:image/svg')) return 'image/svg+xml';
  if (l.includes('.jpeg') || l.includes('.jpg')) return 'image/jpeg';
  return 'image/jpeg';
}

function generarPortada(indice) {
  const paletas = [
    ['#1e40af','#0ea5e9'], ['#1d4ed8','#06b6d4'], ['#0284c7','#22d3ee'],
    ['#0369a1','#0ea5e9'], ['#1e3a8a','#0891b2'], ['#1d4ed8','#38bdf8'],
    ['#0c4a6e','#06b6d4'], ['#075985','#0ea5e9'], ['#0e7490','#22d3ee'],
    ['#155e75','#38bdf8'], ['#1e40af','#0891b2'], ['#1d4ed8','#0ea5e9']
  ];
  const [c1, c2] = paletas[indice % paletas.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <defs><linearGradient id="g${indice}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="500" height="500" fill="url(#g${indice})"/>
    <text x="250" y="270" font-family="Inter, sans-serif" font-weight="700"
          font-size="42" text-anchor="middle" fill="#ffffff" opacity="0.95">Full Alabanza</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

/* ============================================================
   LETRAS LRC
   ============================================================ */
const cacheLetras = {};
const LRC_IGNORE_TAGS = /^\[(ar|al|ti|by|re|ve|length|offset|tool|encoding):[^\]]*\]/i;

async function cargarLetra(indice) {
  if (cacheLetras[indice] !== undefined) return cacheLetras[indice];
  const base = songs[indice].lyricBase;
  if (!base) { cacheLetras[indice] = null; return null; }
  try {
    const res = await fetch(`${base}.lrc`);
    if (!res.ok) throw new Error('no lrc');
    const text = await res.text();
    const parsed = parseLRC(text);
    cacheLetras[indice] = parsed;
    return parsed;
  } catch {
    cacheLetras[indice] = null;
    return null;
  }
}

function parseLRC(text) {
  const lines = text.split(/\r?\n/);
  const out = [];
  const timeRegex = /\[(\d{1,2}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (LRC_IGNORE_TAGS.test(line) && !/\[\d{1,2}:\d{2}/.test(line)) continue;
    const times = [];
    let match;
    timeRegex.lastIndex = 0;
    while ((match = timeRegex.exec(line)) !== null) {
      const min = parseInt(match[1], 10);
      const sec = parseInt(match[2], 10);
      const fracStr = match[3] || '0';
      let frac = parseInt(fracStr, 10);
      if (fracStr.length === 2) frac *= 10;
      else if (fracStr.length === 1) frac *= 100;
      times.push(min * 60 + sec + frac / 1000);
    }
    const content = line.replace(timeRegex, '').trim();
    if (times.length === 0) continue;
    for (const t of times) out.push({ t, text: content });
  }
  out.sort((a, b) => a.t - b.t);
  return out;
}

function renderLetra(parsed) {
  lyricsList.innerHTML = '';
  if (!parsed || parsed.length === 0) {
    lyricsEmpty.style.display = 'block';
    lyricsList.style.display = 'none';
    lyricsSection.style.display = 'none';
    projLyrics.textContent = '';
    return;
  }
  lyricsEmpty.style.display = 'none';
  lyricsList.style.display = 'flex';
  lyricsSection.style.display = '';
  const frag = document.createDocumentFragment();
  parsed.forEach((line, i) => {
    const li = document.createElement('li');
    li.textContent = line.text || '♪';
    li.dataset.t = line.t;
    li.dataset.idx = i;
    li.addEventListener('click', () => { audio.currentTime = Math.max(0, line.t); });
    frag.appendChild(li);
  });
  lyricsList.appendChild(frag);
}

let lastActiveLyricIdx = -1;
function actualizarLetraActiva() {
  const parsed = cacheLetras[state.currentIndex];
  if (!parsed || parsed.length === 0) return;
  const lyricsVisible = !lyricsSection.classList.contains('collapsed');
  if (!lyricsVisible && !state.isProjectionMode) return;
  const t = audio.currentTime;
  let idx = -1;
  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i].t <= t + 0.15) idx = i;
    else break;
  }
  if (idx === lastActiveLyricIdx) return;
  lastActiveLyricIdx = idx;
  if (lyricsVisible) {
    const items = lyricsList.children;
    for (let i = 0; i < items.length; i++) items[i].classList.toggle('active', i === idx);
    if (idx >= 0 && items[idx]) {
      const container = lyricsBody;
      const li = items[idx];
      const top = li.offsetTop - container.clientHeight / 2 + li.offsetHeight / 2;
      container.scrollTo({ top, behavior: 'smooth' });
    }
  }
  if (state.isProjectionMode && idx >= 0 && parsed[idx]) {
    projLyrics.textContent = parsed[idx].text || '';
  }
}

/* ============================================================
   DOM
   ============================================================ */
const $ = (id) => document.getElementById(id);
const audio = $('audio');
const preloader = $('preloader');
const coverWrap = $('coverWrap');
const coverBg = $('coverBg');
const coverImg = $('coverImg');
const coverLoading = $('coverLoading');
const coverFavBtn = $('coverFavBtn');
const trackTitle = $('trackTitle');
const trackArtist = $('trackArtist');
const trackNext = $('trackNext');
const songTags = $('songTags');
const saveCheck = $('saveCheck');
const progressBar = $('progressBar');
const progressFill = $('progressFill');
const progressBuffered = $('progressBuffered');
const seekBubble = $('seekBubble');
const timeCurrent = $('timeCurrent');
const timeDuration = $('timeDuration');
const playBtn = $('playBtn');
const playIcon = $('playIcon');
const prevBtn = $('prevBtn');
const nextBtn = $('nextBtn');
const shuffleBtn = $('shuffleBtn');
const repeatBtn = $('repeatBtn');
const projectionBtn = $('projectionBtn');
const stopBtn = $('stopBtn');
const shareBtn = $('shareBtn');
const speedBtn = $('speedBtn');
const speedLabel = $('speedLabel');
const volumeSlider = $('volumeSlider');
const volIcon = $('volIcon');
const volDown = $('volDown');
const volumeRow = $('volumeRow');
const volumeBtnMobile = $('volumeBtnMobile');
const playlistEl = $('playlist');
const toastEl = $('toast');
const sleepDisplay = $('sleepDisplay');
const verseText = $('verseText');
const verseRef = $('verseRef');
const reflectionText = $('reflectionText');
const searchInput = $('searchInput');
const searchClear = $('searchClear');
const typeFilter = $('typeFilter');
const noResults = $('noResults');
const errorPanel = $('errorPanel');
const errorRetry = $('errorRetry');
const favFilterBtn = $('favFilterBtn');
const sortSelect = $('sortSelect');
const playAllBtn = $('playAllBtn');
const topList = $('topList');
const historyList = $('historyList');
const topSection = $('topSection');
const historySection = $('historySection');
const themeToggle = $('themeToggle');
const themeLabel = $('themeLabel');
const moreBtn = $('moreBtn');
const moreModal = $('moreModal');
const wakeLockBtn = $('wakeLockBtn');
const wakeLockLabel = $('wakeLockLabel');
const ambientBtn = $('ambientBtn');
const ambientLabel = $('ambientLabel');
const lyricsSection = $('lyricsSection');
const lyricsBody = $('lyricsBody');
const lyricsList = $('lyricsList');
const lyricsEmpty = $('lyricsEmpty');
const lyricsToggle = $('lyricsToggle');
const projectionOverlay = $('projectionOverlay');
const projCoverImg = $('projCoverImg');
const projAmbient = $('projAmbient');
const projCanvas = $('projCanvas');
const projTitle = $('projTitle');
const projArtist = $('projArtist');
const projLyrics = $('projLyrics');
const projControls = $('projControls');
const projPrevBtn = $('projPrevBtn');
const projPlayBtn = $('projPlayBtn');
const projPlayIcon = $('projPlayIcon');
const projNextBtn = $('projNextBtn');
const projProgressBar = $('projProgressBar');
const projProgressFill = $('projProgressFill');
const projTimeCurrent = $('projTimeCurrent');
const projTimeDuration = $('projTimeDuration');
const projExit = $('projExit');
const projHint = $('projHint');
const ambientCanvas = $('ambientCanvas');
const importModal = $('importModal');
const importTextarea = $('importTextarea');
const importFile = $('importFile');
const importFileBtn = $('importFileBtn');
const importApplyBtn = $('importApplyBtn');
const backupExportBtn = $('backupExportBtn');
const backupImportBtn = $('backupImportBtn');
const backupCopyBtn = $('backupCopyBtn');
const backupResetBtn = $('backupResetBtn');

// Refs de videos educativos
const eduSection = $('eduSection');
const eduToggle = $('eduToggle');
const eduSearch = $('eduSearch');
const eduSearchClear = $('eduSearchClear');
const eduCategory = $('eduCategory');
const eduGrid = $('eduGrid');
const eduNoResults = $('eduNoResults');
const eduHistorySection = $('eduHistorySection');
const eduHistoryList = $('eduHistoryList');
const videoModal = $('videoModal');
const videoCloseBtn = $('videoCloseBtn');
const eduVideoEl = $('eduVideoEl');
const videoTitle = $('videoTitle');
const videoFavBtn = $('videoFavBtn');
const videoCat = $('videoCat');
const videoDur = $('videoDur');
const videoDesc = $('videoDesc');
const videoVerse = $('videoVerse');
const videoShareBtn = $('videoShareBtn');

/* ============================================================
   ALMACENAMIENTO
   ============================================================ */
const LS = {
  volume: 'fa_volume', index: 'fa_index', shuffle: 'fa_shuffle',
  repeat: 'fa_repeat', positions: 'fa_positions', favorites: 'fa_favorites',
  playCounts: 'fa_playcounts', history: 'fa_history', speed: 'fa_speed',
  favFilter: 'fa_favfilter', sort: 'fa_sort', typeFilter: 'fa_typefilter',
  theme: 'fa_theme', wakeLock: 'fa_wakelock', ambient: 'fa_ambient',
  lyricsCollapsed: 'fa_lyrics_collapsed',
  eduFavorites: 'fa_edu_favorites',
  eduHistory: 'fa_edu_history',
  eduCollapsed: 'fa_edu_collapsed'
};
function lsGet(k, def) {
  try { const v = JSON.parse(localStorage.getItem(k)); return v === null ? def : v; }
  catch { return def; }
}
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

/* ============================================================
   ESTADO
   ============================================================ */
const state = {
  currentIndex: lsGet(LS.index, 0),
  isShuffle: lsGet(LS.shuffle, false),
  repeatMode: lsGet(LS.repeat, 0),
  positions: lsGet(LS.positions, {}),
  favorites: new Set(lsGet(LS.favorites, [])),
  playCounts: lsGet(LS.playCounts, {}),
  playHistory: lsGet(LS.history, []),
  speedIndex: lsGet(LS.speed, 1),
  favFilterActive: lsGet(LS.favFilter, false),
  sortMode: lsGet(LS.sort, 'num'),
  typeFilterValue: lsGet(LS.typeFilter, 'all'),
  themeMode: lsGet(LS.theme, 'auto'),
  wakeLockEnabled: lsGet(LS.wakeLock, false),
  ambientEnabled: lsGet(LS.ambient, false),
  history: [], isSeeking: false, loadToken: 0,
  sleepTimer: null, sleepRemaining: 0, sleepEndOfTrack: false,
  verseIndex: 0, reflectionIndex: 0,
  verseInterval: null, reflectionInterval: null,
  consecutiveErrors: 0, pendingRestoreTime: 0, needsRestoreOnMetadata: false,
  userInitiatedChange: false, lastPreloadedIndex: -1,
  searchTerm: '', isFirstLoad: true, countedForThisLoad: false,
  shuffleQueue: [], userHasInteracted: false,
  toastTimer: null, saveCheckTimer: null, lastPreloadedSrc: '',
  wakeLockSentinel: null, isProjectionMode: false,
  projControlsTimer: null, projHintTimer: null, isLoading: false
};

if (state.currentIndex < 0 || state.currentIndex >= songs.length) state.currentIndex = 0;

/* ============================================================
   ICONOS SVG
   ============================================================ */
const ICON_PLAY = '<path d="M7 4 L21 12 L7 20 Z"/>';
const ICON_PAUSE = '<rect x="7" y="5" width="3.5" height="14" rx="1"/><rect x="13.5" y="5" width="3.5" height="14" rx="1"/>';
const ICON_VOL_HIGH = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
const ICON_VOL_LOW = '<path d="M5 9v6h4l5 5V4L9 9H5zm11.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>';
const ICON_VOL_MUTE = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>';
const ICON_HEART_FILLED = '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>';
const ICON_HEART_EMPTY = '<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>';

/* ============================================================
   UTILIDADES
   ============================================================ */
function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
function toast(msg, ms = 2400) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms);
}
function haptic(ms = 8) {
  if (navigator.vibrate && window.matchMedia('(pointer: coarse)').matches) {
    try { navigator.vibrate(ms); } catch {}
  }
}
function flashSaveCheck() {
  saveCheck.classList.add('on');
  clearTimeout(state.saveCheckTimer);
  state.saveCheckTimer = setTimeout(() => saveCheck.classList.remove('on'), 900);
}
function setLoadingState(on) {
  state.isLoading = on;
  playBtn.classList.toggle('loading', on);
  playBtn.setAttribute('aria-busy', on ? 'true' : 'false');
}

/* ============================================================
   TEMA
   ============================================================ */
function temaResuelto(modo) {
  if (modo === 'auto') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return modo;
}
function aplicarTema() {
  const resolved = temaResuelto(state.themeMode);
  document.body.classList.toggle('light', resolved === 'light');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', resolved === 'light' ? '#eef2f7' : '#080d1a');
  if (themeLabel) {
    themeLabel.textContent = 'Tema: ' + (
      state.themeMode === 'auto' ? 'Auto' :
      state.themeMode === 'light' ? 'Claro' : 'Oscuro'
    );
  }
}
function cicloTema() {
  const order = ['auto', 'light', 'dark'];
  const idx = order.indexOf(state.themeMode);
  state.themeMode = order[(idx + 1) % order.length];
  lsSet(LS.theme, state.themeMode);
  aplicarTema();
  const labels = { auto: 'Tema automático', light: '☀️ Tema claro', dark: '🌙 Tema oscuro' };
  toast(labels[state.themeMode], 1500);
}
themeToggle.addEventListener('click', cicloTema);
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
  if (state.themeMode === 'auto') aplicarTema();
});

/* ============================================================
   WAKE LOCK
   ============================================================ */
async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return false;
  try {
    state.wakeLockSentinel = await navigator.wakeLock.request('screen');
    state.wakeLockSentinel.addEventListener('release', () => { state.wakeLockSentinel = null; });
    return true;
  } catch (err) { return false; }
}
async function releaseWakeLock() {
  if (state.wakeLockSentinel) {
    try { await state.wakeLockSentinel.release(); } catch {}
    state.wakeLockSentinel = null;
  }
}
async function toggleWakeLock() {
  state.wakeLockEnabled = !state.wakeLockEnabled;
  lsSet(LS.wakeLock, state.wakeLockEnabled);
  if (state.wakeLockEnabled) {
    const ok = await requestWakeLock();
    if (ok) {
      wakeLockBtn.classList.add('active');
      wakeLockLabel.textContent = 'Pantalla: Activa';
      toast('💡 Pantalla siempre encendida', 1800);
    } else {
      state.wakeLockEnabled = false;
      lsSet(LS.wakeLock, false);
    }
  } else {
    await releaseWakeLock();
    wakeLockBtn.classList.remove('active');
    wakeLockLabel.textContent = 'Pantalla: Libre';
    toast('🔋 Pantalla normal', 1500);
  }
}
wakeLockBtn.addEventListener('click', toggleWakeLock);
document.addEventListener('visibilitychange', async () => {
  if (document.visibilityState === 'visible' && state.wakeLockEnabled && !state.wakeLockSentinel) {
    await requestWakeLock();
  }
});
function aplicarWakeLockUI() {
  if (state.wakeLockEnabled && state.wakeLockSentinel) {
    wakeLockBtn.classList.add('active');
    wakeLockLabel.textContent = 'Pantalla: Activa';
  } else {
    wakeLockBtn.classList.remove('active');
    wakeLockLabel.textContent = 'Pantalla: Libre';
  }
}

/* ============================================================
   MODO AMBIENTE
   ============================================================ */
let audioContext = null;
let analyser = null;
let sourceNode = null;
let ambientAnimId = null;

function initAudioVisualizer() {
  if (audioContext) return true;
  if (!window.AudioContext && !window.webkitAudioContext) return false;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioContext = new Ctx();
    sourceNode = audioContext.createMediaElementSource(audio);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.75;
    sourceNode.connect(analyser);
    analyser.connect(audioContext.destination);
    return true;
  } catch (err) { return false; }
}

function startAmbientVisualizer() {
  if (!initAudioVisualizer()) return false;
  if (audioContext.state === 'suspended') audioContext.resume();
  const ctx = ambientCanvas.getContext('2d');
  const projCtx = projCanvas.getContext('2d');
  function resize() {
    const w = window.innerWidth; const h = window.innerHeight;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    [ambientCanvas, projCanvas].forEach(c => {
      c.width = w * dpr; c.height = h * dpr;
      c.style.width = w + 'px'; c.style.height = h + 'px';
    });
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    projCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const particles = [];
  for (let i = 0; i < 42; i++) {
    particles.push({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: -0.0003 - Math.random() * 0.0006,
      r: 0.5 + Math.random() * 2.2,
      a: 0.15 + Math.random() * 0.35,
      hue: 190 + Math.random() * 40
    });
  }
  let lastTime = performance.now();
  function loop(now) {
    const dt = Math.min(50, now - lastTime);
    lastTime = now;
    analyser.getByteFrequencyData(dataArray);
    let bass = 0;
    for (let i = 0; i < 8; i++) bass += dataArray[i];
    bass /= 8;
    const energy = bass / 255;
    const pulse = 1 + energy * 0.15;
    const w = window.innerWidth; const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    const bg = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w,h)*0.7);
    bg.addColorStop(0, `rgba(34, 211, 238, ${0.04 + energy * 0.08})`);
    bg.addColorStop(1, 'rgba(8, 13, 26, 0)');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx * dt * pulse;
      p.y += p.vy * dt * pulse;
      if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
      if (p.x < -0.05) p.x = 1.05;
      if (p.x > 1.05) p.x = -0.05;
      const alpha = p.a * (0.6 + energy * 0.5);
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, p.r * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha})`;
      ctx.fill();
    });
    if (state.isProjectionMode) {
      projCtx.clearRect(0, 0, w, h);
      const barCount = 48; const barWidth = w / barCount;
      for (let i = 0; i < barCount; i++) {
        const v = dataArray[i * 2] / 255;
        const bh = v * h * 0.35;
        const x = i * barWidth;
        const grad = projCtx.createLinearGradient(0, h, 0, h - bh);
        grad.addColorStop(0, 'rgba(34, 211, 238, 0)');
        grad.addColorStop(0.5, 'rgba(34, 211, 238, 0.4)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.6)');
        projCtx.fillStyle = grad;
        projCtx.fillRect(x + barWidth * 0.15, h - bh, barWidth * 0.7, bh);
      }
    }
    ambientAnimId = requestAnimationFrame(loop);
  }
  ambientAnimId = requestAnimationFrame(loop);
  return true;
}
function stopAmbientVisualizer() {
  if (ambientAnimId) cancelAnimationFrame(ambientAnimId);
  ambientAnimId = null;
  const ctx = ambientCanvas.getContext('2d');
  ctx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
  const projCtx = projCanvas.getContext('2d');
  projCtx.clearRect(0, 0, projCanvas.width, projCanvas.height);
}
function toggleAmbient() {
  state.ambientEnabled = !state.ambientEnabled;
  lsSet(LS.ambient, state.ambientEnabled);
  document.body.classList.toggle('ambient-on', state.ambientEnabled);
  ambientBtn.classList.toggle('active', state.ambientEnabled);
  ambientLabel.textContent = 'Ambiente: ' + (state.ambientEnabled ? 'On' : 'Off');
  if (state.ambientEnabled) {
    const ok = startAmbientVisualizer();
    if (ok) toast('✨ Modo ambiente activado', 1800);
    else {
      state.ambientEnabled = false;
      lsSet(LS.ambient, false);
      document.body.classList.remove('ambient-on');
      ambientBtn.classList.remove('active');
      ambientLabel.textContent = 'Ambiente: Off';
    }
  } else {
    stopAmbientVisualizer();
    toast('Modo ambiente desactivado', 1500);
  }
}
ambientBtn.addEventListener('click', toggleAmbient);

/* ============================================================
   MODO PROYECCIÓN
   ============================================================ */
async function enterProjection() {
  state.isProjectionMode = true;
  document.body.classList.add('projection-mode');
  projectionOverlay.setAttribute('aria-hidden', 'false');
  actualizarProyeccion();
  try { if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen(); } catch {}
  if (!state.wakeLockEnabled) await requestWakeLock();
  projHint.classList.remove('hide');
  clearTimeout(state.projHintTimer);
  state.projHintTimer = setTimeout(() => projHint.classList.add('hide'), 3500);
  closeMore();
}
async function exitProjection() {
  state.isProjectionMode = false;
  document.body.classList.remove('projection-mode');
  projectionOverlay.setAttribute('aria-hidden', 'true');
  try { if (document.fullscreenElement && document.exitFullscreen) await document.exitFullscreen(); } catch {}
}
function actualizarProyeccion() {
  const song = songs[state.currentIndex];
  projTitle.textContent = song.title;
  projArtist.textContent = 'Alabanza y Adoración';
  if (coverImg.src) {
    projCoverImg.src = coverImg.src;
    projAmbient.style.backgroundImage = `url("${coverImg.src}")`;
  }
  const parsed = cacheLetras[state.currentIndex];
  if (parsed && parsed.length > 0) {
    const idx = lastActiveLyricIdx >= 0 && parsed[lastActiveLyricIdx] ? lastActiveLyricIdx : 0;
    projLyrics.textContent = parsed[idx].text || '';
  } else projLyrics.textContent = '';
  projTimeDuration.textContent = '-' + formatTime(audio.duration);
}
projectionBtn.addEventListener('click', enterProjection);
projExit.addEventListener('click', (e) => { e.stopPropagation(); exitProjection(); });
projPlayBtn.addEventListener('click', (e) => { e.stopPropagation(); playBtn.click(); });
projPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevBtn.click(); });
projNextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextBtn.click(); });
projectionOverlay.addEventListener('click', () => {
  projControls.classList.add('show');
  projProgress.classList.add('show');
  projExit.classList.add('show');
  projHint.classList.add('hide');
  clearTimeout(state.projControlsTimer);
  state.projControlsTimer = setTimeout(() => {
    if (state.isProjectionMode) {
      projControls.classList.remove('show');
      projProgress.classList.remove('show');
      projExit.classList.remove('show');
    }
  }, 3500);
});
projProgressBar.addEventListener('click', (e) => {
  e.stopPropagation();
  const rect = projProgressBar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (audio.duration && isFinite(audio.duration)) audio.currentTime = pct * audio.duration;
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.isProjectionMode) exitProjection();
});

/* ============================================================
   BACKUP / RESTORE
   ============================================================ */
function exportBackup() {
  const data = {};
  Object.values(LS).forEach(k => {
    const v = localStorage.getItem(k);
    if (v !== null) data[k] = JSON.parse(v);
  });
  const backup = { app: 'Full Alabanza', version: 1, timestamp: Date.now(), exportedAt: new Date().toISOString(), data };
  const json = JSON.stringify(backup, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const date = new Date().toISOString().slice(0, 10);
  a.download = `full-alabanza-backup-${date}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
  toast('📥 Backup exportado', 2000);
  closeMore();
}
backupExportBtn.addEventListener('click', exportBackup);

function copiarBackupAlPortapapeles() {
  const data = {};
  Object.values(LS).forEach(k => {
    const v = localStorage.getItem(k);
    if (v !== null) data[k] = JSON.parse(v);
  });
  const backup = { app: 'Full Alabanza', version: 1, timestamp: Date.now(), data };
  const json = JSON.stringify(backup);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(json).then(() => toast('📋 Código copiado al portapapeles', 2200)).catch(() => fallbackCopy(json));
  } else fallbackCopy(json);
  closeMore();
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); toast('📋 Código copiado', 2000); }
  catch { toast('⚠️ No se pudo copiar', 2000); }
  document.body.removeChild(ta);
}
backupCopyBtn.addEventListener('click', copiarBackupAlPortapapeles);

function openImportModal() {
  importTextarea.value = '';
  importModal.classList.add('on');
  document.body.classList.add('modal-open');
  setTimeout(() => importTextarea.focus(), 300);
  closeMore();
}
function closeImportModal() {
  importModal.classList.remove('on');
  document.body.classList.remove('modal-open');
}
backupImportBtn.addEventListener('click', openImportModal);
document.querySelectorAll('[data-close-import]').forEach(el => { el.addEventListener('click', closeImportModal); });

function aplicarBackup(json) {
  try {
    const parsed = JSON.parse(json);
    const data = parsed.data || parsed;
    if (typeof data !== 'object') throw new Error('formato inválido');
    let applied = 0;
    Object.entries(data).forEach(([k, v]) => {
      if (Object.values(LS).includes(k)) {
        localStorage.setItem(k, JSON.stringify(v));
        applied++;
      }
    });
    if (applied === 0) throw new Error('sin datos reconocidos');
    toast(`✅ Backup aplicado (${applied} datos). Recargando…`, 2000);
    setTimeout(() => location.reload(), 1500);
  } catch { toast('⚠️ Backup inválido', 2200); }
}
importApplyBtn.addEventListener('click', () => {
  const txt = importTextarea.value.trim();
  if (!txt) { toast('⚠️ Pega el código primero'); return; }
  aplicarBackup(txt);
});
importFileBtn.addEventListener('click', () => importFile.click());
importFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { importTextarea.value = reader.result; toast('📄 Archivo cargado. Pulsa Aplicar', 2200); };
  reader.onerror = () => toast('⚠️ No se pudo leer el archivo');
  reader.readAsText(file);
});
function resetAll() {
  if (!confirm('¿Borrar TODOS los datos guardados? Esta acción no se puede deshacer.')) return;
  Object.values(LS).forEach(k => localStorage.removeItem(k));
  toast('🗑 Datos borrados. Recargando…', 1800);
  setTimeout(() => location.reload(), 1200);
}
backupResetBtn.addEventListener('click', resetAll);

/* ============================================================
   MODAL GENERAL
   ============================================================ */
let lastFocusedBeforeModal = null;
function openMore() {
  lastFocusedBeforeModal = document.activeElement;
  moreModal.classList.add('on');
  document.body.classList.add('modal-open');
  setTimeout(() => { const first = moreModal.querySelector('.sheet-btn'); if (first) first.focus(); }, 100);
}
function closeMore() {
  moreModal.classList.remove('on');
  if (!importModal.classList.contains('on') &&
      !adModal.classList.contains('on') &&
      !videoModal.classList.contains('on')) {
    document.body.classList.remove('modal-open');
  }
  if (lastFocusedBeforeModal) lastFocusedBeforeModal.focus();
}
moreBtn.addEventListener('click', openMore);
document.querySelectorAll('[data-close-more]').forEach(el => { el.addEventListener('click', closeMore); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (importModal.classList.contains('on')) closeImportModal();
    else if (moreModal.classList.contains('on')) closeMore();
  }
});

/* ============================================================
   VERSÍCULO Y REFLEXIÓN
   ============================================================ */
function mostrarVersiculo() {
  verseText.style.opacity = '0';
  setTimeout(() => {
    const v = versiculos[state.verseIndex % versiculos.length];
    verseText.textContent = `"${v.texto}"`;
    verseRef.textContent = v.ref;
    verseText.style.opacity = '1';
    state.verseIndex++;
  }, 400);
}
function mostrarReflexion() {
  reflectionText.style.opacity = '0';
  setTimeout(() => {
    reflectionText.textContent = reflexiones[state.reflectionIndex % reflexiones.length];
    reflectionText.style.opacity = '1';
    state.reflectionIndex++;
  }, 400);
}
function startTimers() {
  if (state.verseInterval) return;
  state.verseInterval = setInterval(mostrarVersiculo, 12000);
  state.reflectionInterval = setInterval(mostrarReflexion, 15000);
}
function stopTimers() {
  clearInterval(state.verseInterval);
  clearInterval(state.reflectionInterval);
  state.verseInterval = state.reflectionInterval = null;
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { stopTimers(); flushState(); }
  else startTimers();
});

/* ============================================================
   GUARDAR
   ============================================================ */
function guardarPosicion() {
  if (audio.currentTime > 0 && isFinite(audio.currentTime) &&
      audio.duration && isFinite(audio.duration) &&
      audio.currentTime < audio.duration - 1) {
    state.positions[state.currentIndex] = audio.currentTime;
    lsSet(LS.positions, state.positions);
    flashSaveCheck();
  }
}
function saveState() {
  lsSet(LS.index, state.currentIndex);
  lsSet(LS.volume, audio.volume);
  lsSet(LS.shuffle, state.isShuffle);
  lsSet(LS.repeat, state.repeatMode);
  lsSet(LS.speed, state.speedIndex);
}
function flushState() { guardarPosicion(); saveState(); }

/* ============================================================
   COLA ALEATORIA
   ============================================================ */
function refillShuffleQueue() {
  const indices = songs.map((_, i) => i).filter(i => i !== state.currentIndex);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  state.shuffleQueue = indices;
}
function getNextShuffleIndex() {
  if (state.shuffleQueue.length === 0) refillShuffleQueue();
  return state.shuffleQueue.shift();
}
function removeFromShuffleQueue(index) {
  const pos = state.shuffleQueue.indexOf(index);
  if (pos >= 0) state.shuffleQueue.splice(pos, 1);
}

/* ============================================================
   HISTORIAL Y TOP
   ============================================================ */
function registrarHistorial(index) {
  state.playHistory = state.playHistory.filter(h => h.index !== index);
  state.playHistory.unshift({ index, t: Date.now() });
  if (state.playHistory.length > 10) state.playHistory = state.playHistory.slice(0, 10);
  lsSet(LS.history, state.playHistory);
  actualizarExtras();
}
function registrarReproduccion(index) {
  state.playCounts[index] = (state.playCounts[index] || 0) + 1;
  lsSet(LS.playCounts, state.playCounts);
  actualizarExtras();
}

/* ============================================================
   DURACIONES LAZY
   ============================================================ */
const durationCache = {};
function fetchDuration(index) {
  if (durationCache[index] !== undefined) return Promise.resolve(durationCache[index]);
  return new Promise((resolve) => {
    const a = new Audio();
    a.preload = 'metadata';
    a.onloadedmetadata = () => { durationCache[index] = a.duration; resolve(a.duration); };
    a.onerror = () => { durationCache[index] = null; resolve(null); };
    a.src = songs[index].file;
  });
}
const lazyObserver = ('IntersectionObserver' in window)
  ? new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (!entry.isIntersecting) return;
        const li = entry.target;
        const idx = parseInt(li.dataset.index, 10);
        if (li.dataset.thumbLoaded !== '1') {
          li.dataset.thumbLoaded = '1';
          const img = li.querySelector('.item-thumb');
          if (img && !img.src) {
            const urlImagen = await detectarImagen(idx);
            img.src = urlImagen || generarPortada(idx);
          }
        }
        if (li.dataset.durationLoaded !== '1') {
          li.dataset.durationLoaded = '1';
          const dur = await fetchDuration(idx);
          const el = li.querySelector('.item-duration');
          if (el && dur) el.textContent = formatTime(dur);
        }
        lazyObserver.unobserve(li);
      });
    }, { rootMargin: '150px' })
  : null;

/* ============================================================
   LISTA
   ============================================================ */
function construirLista() {
  playlistEl.innerHTML = '';
  const frag = document.createDocumentFragment();
  for (let index = 0; index < songs.length; index++) {
    const song = songs[index];
    const li = document.createElement('li');
    li.dataset.index = index;
    li.dataset.type = song.type;
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');

    const num = document.createElement('div');
    num.className = 'item-number';
    num.textContent = String(index + 1).padStart(2, '0');

    const img = document.createElement('img');
    img.className = 'item-thumb';
    img.alt = ''; img.loading = 'lazy';

    const info = document.createElement('div');
    info.className = 'item-info';
    const title = document.createElement('div');
    title.className = 'item-title';
    title.textContent = song.title;
    const sub = document.createElement('div');
    sub.className = 'item-sub';
    sub.textContent = TYPE_LABELS[song.type] || 'Alabanza';
    info.appendChild(title); info.appendChild(sub);

    const dur = document.createElement('div');
    dur.className = 'item-duration';
    dur.textContent = durationCache[index] ? formatTime(durationCache[index]) : '–:––';

    const favB = document.createElement('button');
    favB.className = 'item-fav-btn';
    favB.type = 'button';
    favB.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${state.favorites.has(index) ? ICON_HEART_FILLED : ICON_HEART_EMPTY}</svg>`;
    if (state.favorites.has(index)) favB.classList.add('on');
    favB.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(index); });

    const eq = document.createElement('div');
    eq.className = 'item-playing';
    eq.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span><span class="bar"></span>';

    li.appendChild(num); li.appendChild(img); li.appendChild(info);
    li.appendChild(dur); li.appendChild(favB); li.appendChild(eq);

    const activate = () => {
      state.userInitiatedChange = true;
      state.userHasInteracted = true;
      state.currentIndex = index;
      removeFromShuffleQueue(index);
      loadAndPlay({ resetPosition: true });
    };
    li.addEventListener('click', activate);
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
    frag.appendChild(li);
    if (lazyObserver) lazyObserver.observe(li);
  }
  playlistEl.appendChild(frag);
  actualizarListaVisual();
  aplicarFiltros();
  aplicarOrden();
  actualizarExtras();
}
function actualizarListaVisual() {
  const items = playlistEl.children;
  for (let i = 0; i < items.length; i++) {
    const li = items[i];
    const idx = parseInt(li.dataset.index, 10);
    const isActive = idx === state.currentIndex;
    li.classList.toggle('active', isActive);
    li.setAttribute('aria-current', isActive ? 'true' : 'false');
  }
}
function actualizarFavBtn(index) {
  const li = playlistEl.querySelector(`li[data-index="${index}"]`);
  if (!li) return;
  const fb = li.querySelector('.item-fav-btn');
  if (!fb) return;
  const isFav = state.favorites.has(index);
  fb.classList.toggle('on', isFav);
  fb.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${isFav ? ICON_HEART_FILLED : ICON_HEART_EMPTY}</svg>`;
}

/* ============================================================
   FAVORITOS
   ============================================================ */
function toggleFavorite(index) {
  if (state.favorites.has(index)) {
    state.favorites.delete(index);
    toast('💔 Quitado de favoritos');
  } else {
    state.favorites.add(index);
    toast('❤️ Añadido a favoritos');
  }
  haptic(10);
  lsSet(LS.favorites, Array.from(state.favorites));
  actualizarFavBtn(index);
  actualizarFavBtnPrincipal();
  if (state.favFilterActive) aplicarFiltros();
  if (state.sortMode === 'fav') aplicarOrden();
  actualizarExtras();
}
function actualizarFavBtnPrincipal() {
  const isFav = state.favorites.has(state.currentIndex);
  coverFavBtn.classList.toggle('on', isFav);
  const svg = coverFavBtn.querySelector('svg');
  if (svg) svg.innerHTML = isFav ? ICON_HEART_FILLED : ICON_HEART_EMPTY;
}
coverFavBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(state.currentIndex); });

function aplicarFiltroFavoritos() {
  favFilterBtn.classList.toggle('active', state.favFilterActive);
  lsSet(LS.favFilter, state.favFilterActive);
  aplicarFiltros();
}
favFilterBtn.addEventListener('click', () => {
  state.favFilterActive = !state.favFilterActive;
  aplicarFiltroFavoritos();
  toast(state.favFilterActive ? '❤️ Solo favoritos' : '📋 Todas las pistas');
});

/* ============================================================
   FILTROS Y ORDEN
   ============================================================ */
function aplicarFiltros() {
  const term = normalize(state.searchTerm.trim());
  const tipo = state.typeFilterValue;
  let visibles = 0;
  const items = playlistEl.children;
  for (let i = 0; i < items.length; i++) {
    const li = items[i];
    const idx = parseInt(li.dataset.index, 10);
    const titleEl = li.querySelector('.item-title');
    const title = normalize(titleEl ? titleEl.textContent : '');
    const matchTerm = !term || title.includes(term);
    const matchFav = !state.favFilterActive || state.favorites.has(idx);
    const matchType = tipo === 'all' || songs[idx].type === tipo;
    const match = matchTerm && matchFav && matchType;
    li.style.display = match ? '' : 'none';
    if (match) visibles++;
  }
  noResults.classList.toggle('on', visibles === 0);
  searchClear.classList.toggle('on', term.length > 0);
}
searchInput.addEventListener('input', (e) => { state.searchTerm = e.target.value; aplicarFiltros(); });
searchClear.addEventListener('click', () => {
  state.searchTerm = ''; searchInput.value = '';
  aplicarFiltros(); searchInput.focus();
});
typeFilter.addEventListener('change', (e) => {
  state.typeFilterValue = e.target.value;
  lsSet(LS.typeFilter, state.typeFilterValue);
  aplicarFiltros();
});
function aplicarOrden() {
  sortSelect.value = state.sortMode;
  lsSet(LS.sort, state.sortMode);
  const items = Array.from(playlistEl.children);
  items.sort((a, b) => {
    const ia = parseInt(a.dataset.index, 10);
    const ib = parseInt(b.dataset.index, 10);
    if (state.sortMode === 'az') return songs[ia].title.localeCompare(songs[ib].title, 'es');
    if (state.sortMode === 'plays') return (state.playCounts[ib] || 0) - (state.playCounts[ia] || 0);
    if (state.sortMode === 'fav') {
      const fa = state.favorites.has(ia) ? 0 : 1;
      const fb = state.favorites.has(ib) ? 0 : 1;
      if (fa !== fb) return fa - fb;
      return ia - ib;
    }
    return ia - ib;
  });
  const frag = document.createDocumentFragment();
  items.forEach(li => frag.appendChild(li));
  playlistEl.appendChild(frag);
}
sortSelect.addEventListener('change', (e) => { state.sortMode = e.target.value; aplicarOrden(); });

/* ============================================================
   EXTRAS
   ============================================================ */
function actualizarExtras() {
  const top = Object.entries(state.playCounts)
    .map(([i, c]) => ({ index: parseInt(i, 10), count: c }))
    .filter(x => x.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
  topList.innerHTML = '';
  if (top.length === 0) topSection.style.display = 'none';
  else {
    topSection.style.display = '';
    top.forEach((item, i) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="extra-num">${i + 1}.</span><span class="extra-title">${songs[item.index].title}</span><span class="extra-badge">${item.count}×</span>`;
      li.addEventListener('click', () => {
        state.userInitiatedChange = true;
        state.currentIndex = item.index;
        loadAndPlay({ resetPosition: true });
      });
      topList.appendChild(li);
    });
  }
  historyList.innerHTML = '';
  if (state.playHistory.length === 0) historySection.style.display = 'none';
  else {
    historySection.style.display = '';
    state.playHistory.forEach(h => {
      const song = songs[h.index];
      if (!song) return;
      const li = document.createElement('li');
      li.innerHTML = `<span class="extra-num">▸</span><span class="extra-title">${song.title}</span>`;
      li.addEventListener('click', () => {
        state.userInitiatedChange = true;
        state.currentIndex = h.index;
        loadAndPlay({ resetPosition: true });
      });
      historyList.appendChild(li);
    });
  }
}

/* ============================================================
   CARGA Y REPRODUCCIÓN
   ============================================================ */
function loadAndPlay(opts = {}) {
  const token = ++state.loadToken;
  const song = songs[state.currentIndex];
  if (!song) return;
  const resetPosition = opts.resetPosition === true;
  if (state.history[state.history.length - 1] !== state.currentIndex) {
    state.history.push(state.currentIndex);
    if (state.history.length > 50) state.history.shift();
  }
  if (audio.src && !audio.paused) guardarPosicion();
  state.pendingRestoreTime = resetPosition ? 0 : (state.positions[state.currentIndex] || 0);
  state.needsRestoreOnMetadata = false;
  state.countedForThisLoad = false;
  coverImg.classList.add('changing');
  coverLoading.classList.add('on');
  setLoadingState(true);
  audio.src = song.file;
  audio.load();
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      if (token !== state.loadToken) return;
      coverLoading.classList.remove('on');
      setLoadingState(false);
      state.consecutiveErrors = 0;
      errorPanel.classList.remove('on');
    }).catch(() => {
      if (token !== state.loadToken) return;
      coverLoading.classList.remove('on');
      setLoadingState(false);
    });
  }
  updateTrackInfo();
  updateActive(state.userInitiatedChange);
  updatePlayIcon();
  actualizarFavBtnPrincipal();
  saveState();
  precargarSiguiente();
  registrarHistorial(state.currentIndex);
  cargarLetraParaPista();
  state.isFirstLoad = false;
}
async function cargarLetraParaPista() {
  const idx = state.currentIndex;
  const parsed = await cargarLetra(idx);
  if (idx !== state.currentIndex) return;
  renderLetra(parsed);
  lastActiveLyricIdx = -1;
  actualizarLetraActiva();
  if (state.isProjectionMode) actualizarProyeccion();
}
function updateTrackInfo() {
  const song = songs[state.currentIndex];
  if (!song) return;
  trackTitle.textContent = song.title;
  trackArtist.textContent = 'Alabanza y Adoración';
  songTags.innerHTML = '';
  if (song.type && TYPE_LABELS[song.type]) {
    const tag = document.createElement('span');
    tag.className = `tag ${song.type}`;
    tag.textContent = TYPE_LABELS[song.type];
    songTags.appendChild(tag);
  }
  if (state.isShuffle) trackNext.innerHTML = 'Siguiente: <strong>aleatoria</strong>';
  else {
    const nxt = (state.currentIndex + 1) % songs.length;
    trackNext.innerHTML = `Siguiente: <strong>${songs[nxt].title}</strong>`;
  }
  cargarImagenEnElemento(coverImg, state.currentIndex,
    (url) => {
      coverBg.style.backgroundImage = `url("${url}")`;
      coverImg.classList.remove('changing');
      coverLoading.classList.remove('on');
      actualizarMediaSessionMetadata(url);
      if (state.isProjectionMode) {
        projCoverImg.src = url;
        projAmbient.style.backgroundImage = `url("${url}")`;
      }
    },
    (svgUrl) => {
      coverBg.style.backgroundImage = `url("${svgUrl}")`;
      coverImg.classList.remove('changing');
      coverLoading.classList.remove('on');
      actualizarMediaSessionMetadata(svgUrl);
    }
  );
  document.title = `${song.title} · Full Alabanza`;
  if (state.isProjectionMode) projTitle.textContent = song.title;
}
function updateActive(scrollIntoView = false) {
  actualizarListaVisual();
  if (scrollIntoView && state.userInitiatedChange) {
    const activeLi = playlistEl.querySelector(`li[data-index="${state.currentIndex}"]`);
    if (activeLi && activeLi.style.display !== 'none') {
      activeLi.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
  state.userInitiatedChange = false;
}
function updatePlayIcon() {
  playIcon.innerHTML = audio.paused ? ICON_PLAY : ICON_PAUSE;
  projPlayIcon.innerHTML = audio.paused ? ICON_PLAY : ICON_PAUSE;
  coverWrap.classList.toggle('playing', !audio.paused);
  const activeLi = playlistEl.querySelector('li.active');
  if (activeLi) activeLi.classList.toggle('paused', audio.paused);
}
function precargarSiguiente() {
  if (prefersReducedData) return;
  let nextIndex;
  if (state.isShuffle) nextIndex = state.shuffleQueue[0] !== undefined ? state.shuffleQueue[0] : -1;
  else nextIndex = (state.currentIndex + 1) % songs.length;
  if (nextIndex < 0 || nextIndex === state.lastPreloadedIndex) return;
  state.lastPreloadedIndex = nextIndex;
  const src = songs[nextIndex].file;
  if (src === state.lastPreloadedSrc) return;
  state.lastPreloadedSrc = src;
  try {
    preloader.src = src;
    detectarImagen(nextIndex);
    cargarLetra(nextIndex);
  } catch {}
}
function applyShuffleUI() { shuffleBtn.classList.toggle('active', state.isShuffle); }
function applyRepeatUI() { repeatBtn.classList.toggle('active', state.repeatMode > 0); }
function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  if (state.isShuffle) refillShuffleQueue(); else state.shuffleQueue = [];
  state.lastPreloadedIndex = -1; state.lastPreloadedSrc = '';
  applyShuffleUI(); saveState(); updateTrackInfo(); precargarSiguiente();
  toast(state.isShuffle ? '🔀 Aleatorio activado' : '➡️ Aleatorio desactivado');
}
function toggleRepeat() {
  state.repeatMode = (state.repeatMode + 1) % 3;
  applyRepeatUI(); saveState();
  toast(state.repeatMode === 0 ? '🔁 Repetir desactivado' :
        state.repeatMode === 1 ? '🔂 Repetir una' : '🔁 Repetir todas');
}
function applySpeed() {
  const v = VELOCIDADES[state.speedIndex];
  audio.playbackRate = v;
  speedLabel.textContent = v + 'x';
  lsSet(LS.speed, state.speedIndex);
}
speedBtn.addEventListener('click', () => {
  state.speedIndex = (state.speedIndex + 1) % VELOCIDADES.length;
  applySpeed();
  toast(`⏱ Velocidad ${VELOCIDADES[state.speedIndex]}x`, 1500);
});

playBtn.addEventListener('click', () => {
  state.userHasInteracted = true;
  haptic(6);
  playBtn.classList.remove('pulsing');
  void playBtn.offsetWidth;
  playBtn.classList.add('pulsing');
  if (audio.paused) {
    if (!audio.src) { audio.src = songs[state.currentIndex].file; audio.load(); }
    audio.play().catch(err => console.warn(err));
    if (state.ambientEnabled && audioContext && audioContext.state === 'suspended') audioContext.resume();
  } else audio.pause();
});
nextBtn.addEventListener('click', () => {
  state.userInitiatedChange = true; state.userHasInteracted = true; haptic(6);
  if (state.isShuffle) state.currentIndex = getNextShuffleIndex();
  else state.currentIndex = (state.currentIndex + 1) % songs.length;
  loadAndPlay();
});
prevBtn.addEventListener('click', () => {
  state.userInitiatedChange = true; state.userHasInteracted = true; haptic(6);
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  if (state.isShuffle && state.history.length > 1) {
    state.history.pop();
    state.currentIndex = state.history[state.history.length - 1];
    removeFromShuffleQueue(state.currentIndex);
  } else if (state.isShuffle) {
    state.currentIndex = getNextShuffleIndex();
  } else {
    state.currentIndex = (state.currentIndex - 1 + songs.length) % songs.length;
  }
  loadAndPlay();
});
stopBtn.addEventListener('click', () => {
  audio.pause(); audio.currentTime = 0;
  state.positions[state.currentIndex] = 0;
  lsSet(LS.positions, state.positions);
  toast('⏹ Detenido');
  closeMore();
});
shareBtn.addEventListener('click', async () => {
  const song = songs[state.currentIndex];
  const url = new URL(location.href);
  url.searchParams.set('track', state.currentIndex);
  const data = { title: 'Full Alabanza', text: `Escuchando: ${song.title}`, url: url.toString() };
  try {
    if (navigator.share) await navigator.share(data);
    else if (navigator.clipboard) { await navigator.clipboard.writeText(`${data.text} — ${data.url}`); toast('📋 Enlace copiado'); }
    else toast('Comparte: ' + data.url, 4000);
  } catch (e) { if (e.name !== 'AbortError') toast('No se pudo compartir'); }
  closeMore();
});
shuffleBtn.addEventListener('click', toggleShuffle);
repeatBtn.addEventListener('click', toggleRepeat);
playAllBtn.addEventListener('click', () => {
  state.userInitiatedChange = true; state.userHasInteracted = true;
  state.currentIndex = 0;
  loadAndPlay({ resetPosition: true });
  toast('▶ Reproduciendo desde el inicio');
});

function aplicarLyricsCollapsed() {
  const collapsed = lsGet(LS.lyricsCollapsed, false);
  lyricsSection.classList.toggle('collapsed', collapsed);
}
lyricsToggle.addEventListener('click', () => {
  const collapsed = !lyricsSection.classList.contains('collapsed');
  lsSet(LS.lyricsCollapsed, collapsed);
  lyricsSection.classList.toggle('collapsed', collapsed);
  if (!collapsed) { lastActiveLyricIdx = -1; actualizarLetraActiva(); }
});

let touchState = { startX: 0, startY: 0, startT: 0, moved: false };
let lastTap = 0;
coverWrap.addEventListener('pointerdown', (e) => {
  if (e.button !== 0) return;
  touchState = { startX: e.clientX, startY: e.clientY, startT: Date.now(), moved: false };
  coverWrap.classList.add('swiping');
});
coverWrap.addEventListener('pointermove', (e) => {
  if (touchState.startT === 0) return;
  const dx = e.clientX - touchState.startX;
  const dy = e.clientY - touchState.startY;
  if (Math.abs(dx) > 8 || Math.abs(dy) > 8) touchState.moved = true;
});
function endSwipe(e) {
  if (touchState.startT === 0) return;
  const dx = e.clientX - touchState.startX;
  const dy = e.clientY - touchState.startY;
  const dt = Date.now() - touchState.startT;
  const moved = touchState.moved;
  coverWrap.classList.remove('swiping');
  touchState.startT = 0;
  if (moved) {
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) && dt < 800) {
      haptic(8);
      if (dx < 0) nextBtn.click(); else prevBtn.click();
    }
  } else {
    const now = Date.now();
    if (now - lastTap < 300) { playBtn.click(); lastTap = 0; }
    else lastTap = now;
  }
}
coverWrap.addEventListener('pointerup', endSwipe);
coverWrap.addEventListener('pointercancel', () => { touchState.startT = 0; coverWrap.classList.remove('swiping'); });
coverWrap.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playBtn.click(); }
  if (e.key === 'ArrowRight') { e.preventDefault(); nextBtn.click(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prevBtn.click(); }
});

function seek(e) {
  const rect = progressBar.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  const pct = Math.max(0, Math.min(1, x / rect.width));
  if (audio.duration && isFinite(audio.duration)) {
    audio.currentTime = pct * audio.duration;
    progressFill.style.width = (pct * 100) + '%';
    seekBubble.style.left = (pct * rect.width) + 'px';
    seekBubble.textContent = `${formatTime(pct * audio.duration)} / ${formatTime(audio.duration)}`;
  }
}
progressBar.addEventListener('pointerdown', (e) => {
  state.isSeeking = true;
  seekBubble.classList.add('on');
  try { progressBar.setPointerCapture(e.pointerId); } catch {}
  seek(e);
});
progressBar.addEventListener('pointermove', (e) => { if (state.isSeeking) seek(e); });
progressBar.addEventListener('pointerup', (e) => {
  state.isSeeking = false;
  seekBubble.classList.remove('on');
  try { progressBar.releasePointerCapture(e.pointerId); } catch {}
});
progressBar.addEventListener('pointercancel', () => { state.isSeeking = false; seekBubble.classList.remove('on'); });

let lastPositionStateUpdate = 0;
audio.addEventListener('timeupdate', () => {
  if (!state.isSeeking && audio.duration && isFinite(audio.duration)) {
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = pct + '%';
    timeCurrent.textContent = formatTime(audio.currentTime);
    const rem = audio.duration - audio.currentTime;
    timeDuration.textContent = '-' + formatTime(rem);
  }
  if (state.isProjectionMode) {
    projTimeCurrent.textContent = formatTime(audio.currentTime);
    projTimeDuration.textContent = '-' + formatTime(Math.max(0, (audio.duration || 0) - audio.currentTime));
    if (audio.duration && isFinite(audio.duration)) {
      projProgressFill.style.width = ((audio.currentTime / audio.duration) * 100) + '%';
    }
  }
  actualizarLetraActiva();
  if (!state.countedForThisLoad && audio.currentTime > 30) {
    state.countedForThisLoad = true;
    registrarReproduccion(state.currentIndex);
  }
  const now = Date.now();
  if (!audio.paused && now - lastPositionStateUpdate > 1000) {
    lastPositionStateUpdate = now;
    actualizarPositionState();
  }
});
audio.addEventListener('progress', () => {
  if (audio.buffered.length > 0 && audio.duration && isFinite(audio.duration)) {
    const end = audio.buffered.end(audio.buffered.length - 1);
    progressBuffered.style.width = (end / audio.duration) * 100 + '%';
  }
});
audio.addEventListener('loadedmetadata', () => {
  timeDuration.textContent = '-' + formatTime(audio.duration);
  projTimeDuration.textContent = '-' + formatTime(audio.duration);
  coverLoading.classList.remove('on');
  setLoadingState(false);
  let restore = state.pendingRestoreTime;
  if (state.needsRestoreOnMetadata) {
    restore = state.positions[state.currentIndex] || 0;
    state.needsRestoreOnMetadata = false;
  }
  if (restore > 0 && restore < audio.duration - 2) audio.currentTime = restore;
  state.pendingRestoreTime = 0;
});
audio.addEventListener('durationchange', () => { timeDuration.textContent = '-' + formatTime(audio.duration); });
audio.addEventListener('play', () => { updatePlayIcon(); updateMediaSession(); precargarSiguiente(); });
audio.addEventListener('pause', () => { updatePlayIcon(); guardarPosicion(); });
audio.addEventListener('waiting', () => { coverLoading.classList.add('on'); setLoadingState(true); });
audio.addEventListener('playing', () => {
  coverLoading.classList.remove('on');
  setLoadingState(false);
  errorPanel.classList.remove('on');
  state.consecutiveErrors = 0;
});
audio.addEventListener('canplay', () => { coverLoading.classList.remove('on'); setLoadingState(false); });
audio.addEventListener('error', () => {
  coverLoading.classList.remove('on');
  coverImg.classList.remove('changing');
  setLoadingState(false);
  const li = playlistEl.querySelector(`li[data-index="${state.currentIndex}"]`);
  if (li) li.classList.add('error');
  state.consecutiveErrors++;
  if (state.consecutiveErrors >= 3) {
    errorPanel.classList.add('on');
    state.consecutiveErrors = 0;
    return;
  }
  toast('⚠️ Error al cargar la pista');
  setTimeout(() => {
    if (li) li.classList.remove('error');
    if (state.isShuffle) state.currentIndex = getNextShuffleIndex();
    else state.currentIndex = (state.currentIndex + 1) % songs.length;
    loadAndPlay();
  }, 1500);
});
errorRetry.addEventListener('click', () => { errorPanel.classList.remove('on'); state.consecutiveErrors = 0; loadAndPlay(); });

audio.addEventListener('ended', () => {
  state.positions[state.currentIndex] = 0;
  lsSet(LS.positions, state.positions);
  if (state.sleepEndOfTrack) {
    state.sleepEndOfTrack = false;
    document.querySelectorAll('.sleep-btn').forEach(b => b.classList.remove('active'));
    sleepDisplay.textContent = '';
    audio.pause();
    updatePlayIcon();
    toast('😴 Reproducción detenida (fin de pista)');
    return;
  }
  if (state.repeatMode === 1) { audio.currentTime = 0; audio.play(); return; }
  state.userInitiatedChange = true;
  if (state.isShuffle) state.currentIndex = getNextShuffleIndex();
  else state.currentIndex = (state.currentIndex + 1) % songs.length;
  loadAndPlay();
});

volumeSlider.addEventListener('input', (e) => {
  audio.volume = parseFloat(e.target.value);
  audio.muted = false;
  updateVolumeIcon();
  saveState();
});
function updateVolumeIcon() {
  const v = audio.muted ? 0 : audio.volume;
  const svg = volIcon.querySelector('svg');
  if (svg) svg.innerHTML = v === 0 ? ICON_VOL_MUTE : (v < 0.5 ? ICON_VOL_LOW : ICON_VOL_HIGH);
}
function toggleMute() {
  audio.muted = !audio.muted;
  updateVolumeIcon();
  toast(audio.muted ? '🔇 Silenciado' : '🔊 Sonido activado', 1500);
}
volIcon.addEventListener('click', toggleMute);
volDown.addEventListener('click', () => {
  audio.volume = Math.max(0, audio.volume - 0.1);
  volumeSlider.value = audio.volume;
  audio.muted = false;
  updateVolumeIcon();
  saveState();
});

document.querySelectorAll('.sleep-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const raw = btn.dataset.min;
    if (state.sleepTimer) { clearInterval(state.sleepTimer); state.sleepTimer = null; }
    document.querySelectorAll('.sleep-btn').forEach(b => b.classList.remove('active'));
    state.sleepEndOfTrack = false;
    if (raw === '0') { sleepDisplay.textContent = ''; toast('😴 Temporizador desactivado'); return; }
    if (raw === 'end') {
      state.sleepEndOfTrack = true;
      btn.classList.add('active');
      sleepDisplay.textContent = 'fin';
      toast('😴 Se detendrá al terminar la pista');
      return;
    }
    const min = parseInt(raw, 10);
    btn.classList.add('active');
    state.sleepRemaining = min * 60;
    function tick() {
      state.sleepRemaining--;
      const m = Math.floor(state.sleepRemaining / 60);
      const s = state.sleepRemaining % 60;
      sleepDisplay.textContent = `${m}:${String(s).padStart(2, '0')}`;
      if (state.sleepRemaining <= 0) {
        clearInterval(state.sleepTimer);
        state.sleepTimer = null;
        sleepDisplay.textContent = '';
        document.querySelectorAll('.sleep-btn').forEach(b => b.classList.remove('active'));
        audio.pause();
        toast('😴 Reproducción detenida');
      }
    }
    tick();
    state.sleepTimer = setInterval(tick, 1000);
    toast(`😴 Se detendrá en ${min} min`);
  });
});

function actualizarMediaSessionMetadata(portada) {
  if (!('mediaSession' in navigator)) return;
  const song = songs[state.currentIndex];
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: 'Full Alabanza',
      album: 'Alabanza y Adoración',
      artwork: [
        { src: portada, sizes: '512x512', type: tipoMimeImagen(portada) },
        { src: 'images/logo.png', sizes: '512x512', type: 'image/png' }
      ]
    });
  } catch (e) {}
}
async function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.setActionHandler('play', () => audio.play());
    navigator.mediaSession.setActionHandler('pause', () => audio.pause());
    navigator.mediaSession.setActionHandler('previoustrack', () => prevBtn.click());
    navigator.mediaSession.setActionHandler('nexttrack', () => nextBtn.click());
  } catch (e) {}
}
function actualizarPositionState() {
  if (!('mediaSession' in navigator) || !navigator.mediaSession.setPositionState) return;
  if (!audio.duration || !isFinite(audio.duration)) return;
  try {
    navigator.mediaSession.setPositionState({
      duration: audio.duration,
      playbackRate: audio.playbackRate,
      position: Math.min(audio.currentTime, audio.duration)
    });
  } catch (e) {}
}

document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea, select')) return;
  const onBody = e.target === document.body;
  if (e.code === 'Space' && onBody) { e.preventDefault(); playBtn.click(); }
  if (e.key === 'ArrowRight' && onBody) { e.preventDefault(); nextBtn.click(); }
  if (e.key === 'ArrowLeft'  && onBody) { e.preventDefault(); prevBtn.click(); }
  if (e.key === 'ArrowUp' && onBody) {
    e.preventDefault();
    audio.volume = Math.min(1, audio.volume + 0.1);
    volumeSlider.value = audio.volume;
    updateVolumeIcon();
  }
  if (e.key === 'ArrowDown' && onBody) {
    e.preventDefault();
    audio.volume = Math.max(0, audio.volume - 0.1);
    volumeSlider.value = audio.volume;
    updateVolumeIcon();
  }
  if (e.key === 'm' || e.key === 'M') { e.preventDefault(); toggleMute(); }
  if (e.key === 's' || e.key === 'S') { e.preventDefault(); toggleShuffle(); }
  if (e.key === 'r' || e.key === 'R') { e.preventDefault(); toggleRepeat(); }
  if (e.key === 't' || e.key === 'T') { e.preventDefault(); cicloTema(); }
});

setInterval(() => { if (!audio.paused && audio.currentTime > 0) guardarPosicion(); }, 5000);
window.addEventListener('beforeunload', flushState);
window.addEventListener('pagehide', flushState);

function init() {
  aplicarTema();
  const splash = document.getElementById('splash');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hide');
      setTimeout(() => { if (splash.parentNode) splash.parentNode.removeChild(splash); }, 600);
    }, 800);
  }
  aplicarLyricsCollapsed();
  const params = new URLSearchParams(location.search);
  const urlTrack = parseInt(params.get('track'), 10);
  if (!isNaN(urlTrack) && urlTrack >= 0 && urlTrack < songs.length) state.currentIndex = urlTrack;
  construirLista();
  const vol = lsGet(LS.volume, 0.9);
  audio.volume = vol;
  volumeSlider.value = vol;
  updateVolumeIcon();
  applyShuffleUI();
  applyRepeatUI();
  applySpeed();
  actualizarFavBtnPrincipal();
  aplicarFiltroFavoritos();
  sortSelect.value = state.sortMode;
  typeFilter.value = state.typeFilterValue;
  audio.src = songs[state.currentIndex].file;
  mostrarVersiculo();
  mostrarReflexion();
  updateTrackInfo();
  updateActive(false);
  updatePlayIcon();
  cargarLetraParaPista();
  if (state.ambientEnabled) {
    document.body.classList.add('ambient-on');
    ambientBtn.classList.add('active');
    ambientLabel.textContent = 'Ambiente: On';
  }
  aplicarWakeLockUI();
  if (volumeBtnMobile && volumeRow) {
    volumeBtnMobile.addEventListener('click', () => {
      const isHidden = volumeRow.style.display === 'none';
      volumeRow.style.display = isHidden ? 'flex' : 'none';
      volumeBtnMobile.classList.toggle('active', isHidden);
    });
  }
  startTimers();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

/* ============================================================
   ANUNCIO DE APOYO VOLUNTARIO
   ============================================================ */
const ALIAS_NARANJA = 'dani0.--';
const TITULAR_NARANJA = 'Braian Daniel Velazquez';

const adModal = document.getElementById('adModal');
const adVideo = document.getElementById('adVideo');
const adCloseBtn = document.getElementById('adCloseBtn');
const adLaterBtn = document.getElementById('adLaterBtn');
const adDonateBtn = document.getElementById('adDonateBtn');
const adCopyAlias = document.getElementById('adCopyAlias');
const adAliasValue = document.getElementById('adAliasValue');
const adAliasHolder = document.getElementById('adAliasHolder');
const supportFab = document.getElementById('supportFab');

let adShownThisSession = false;
const AD_DELAY_MS = 12000;
const AD_SESSION_KEY = 'fa_ad_last_shown';
const AD_COOLDOWN_MS = 1000 * 60 * 60 * 6;

function puedeMostrarAnuncio() {
  if (adShownThisSession) return false;
  try {
    const last = parseInt(localStorage.getItem(AD_SESSION_KEY) || '0', 10);
    if (Date.now() - last < AD_COOLDOWN_MS) return false;
  } catch {}
  return true;
}
function mostrarAnuncio() {
  if (!adModal || adModal.classList.contains('on')) return;
  adModal.classList.add('on');
  document.body.classList.add('modal-open');
  adShownThisSession = true;
  try { localStorage.setItem(AD_SESSION_KEY, String(Date.now())); } catch {}
  if (adVideo) {
    adVideo.currentTime = 0;
    adVideo.muted = true;
    const p = adVideo.play();
    if (p && p.catch) p.catch(() => {});
  }
}
function cerrarAnuncio() {
  if (!adModal) return;
  adModal.classList.remove('on');
  if (!moreModal.classList.contains('on') &&
      !importModal.classList.contains('on') &&
      !videoModal.classList.contains('on')) {
    document.body.classList.remove('modal-open');
  }
  if (adVideo) {
    try { adVideo.pause(); adVideo.currentTime = 0; } catch {}
  }
}
async function copiarAlias() {
  const alias = ALIAS_NARANJA;
  let ok = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(alias);
      ok = true;
    } else {
      const ta = document.createElement('textarea');
      ta.value = alias;
      ta.style.position = 'fixed'; ta.style.top = '0'; ta.style.left = '0';
      ta.style.opacity = '0';
      ta.setAttribute('readonly', '');
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, alias.length);
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      document.body.removeChild(ta);
    }
  } catch { ok = false; }
  if (ok) {
    toast('📋 Alias copiado: ' + alias, 2200);
    haptic(12);
    const btn = adCopyAlias;
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg><span>¡Copiado!</span>';
      setTimeout(() => { btn.innerHTML = original; }, 1800);
    }
  } else {
    toast('No se pudo copiar. Alias: ' + alias, 3500);
  }
}
if (adAliasValue) adAliasValue.textContent = ALIAS_NARANJA;
if (adAliasHolder) adAliasHolder.textContent = TITULAR_NARANJA;
if (adCopyAlias) adCopyAlias.addEventListener('click', copiarAlias);
if (adDonateBtn) adDonateBtn.addEventListener('click', copiarAlias);
if (adAliasValue) adAliasValue.addEventListener('click', copiarAlias);
if (supportFab) supportFab.addEventListener('click', () => { adShownThisSession = false; mostrarAnuncio(); });
if (adCloseBtn) adCloseBtn.addEventListener('click', cerrarAnuncio);
if (adLaterBtn) adLaterBtn.addEventListener('click', cerrarAnuncio);
document.querySelectorAll('[data-close-ad]').forEach(el => { el.addEventListener('click', cerrarAnuncio); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && adModal && adModal.classList.contains('on')) cerrarAnuncio();
});
setTimeout(() => {
  if (supportFab && !document.body.classList.contains('projection-mode')) supportFab.classList.add('show');
}, 6000);
setTimeout(() => {
  if (puedeMostrarAnuncio() && !document.body.classList.contains('projection-mode')) mostrarAnuncio();
}, AD_DELAY_MS);
const adObserver = new MutationObserver(() => {
  if (!supportFab) return;
  const enProyeccion = document.body.classList.contains('projection-mode');
  supportFab.style.display = enProyeccion ? 'none' : '';
});
adObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

/* ============================================================
   SISTEMA DE VIDEOS EDUCATIVOS
   ============================================================ */
const eduState = {
  favorites: new Set(lsGet(LS.eduFavorites, [])),
  history: lsGet(LS.eduHistory, []),
  searchTerm: '',
  categoryFilter: 'all',
  currentVideo: null
};

function findEducationalById(id) {
  return educationalVideos.find(v => v.id === id) || null;
}

const EDU_EXT = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
async function detectarMiniaturaEdu(video) {
  if (video.thumbnail && video.thumbnail !== 'images/logo.png') return video.thumbnail;
  const base = `images/edu/${video.id}`;
  for (const ext of EDU_EXT) {
    const url = `${base}.${ext}`;
    const ok = await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
    if (ok) return url;
  }
  return 'images/logo.png';
}
function poblarCategoriasEdu() {
  if (!eduCategory) return;
  const presentes = new Set(educationalVideos.filter(v => !v.hidden).map(v => v.category));
  eduCategory.innerHTML = '<option value="all">Todas</option>';
  presentes.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = EDU_CATEGORY_LABELS[cat] || cat;
    eduCategory.appendChild(opt);
  });
}
async function construirEduGrid() {
  if (!eduGrid) return;
  eduGrid.innerHTML = '';
  const visibles = educationalVideos.filter(v => !v.hidden);
  if (visibles.length === 0) {
    eduNoResults.classList.add('on');
    return;
  }
  const frag = document.createDocumentFragment();
  for (const video of visibles) {
    const card = document.createElement('div');
    card.className = 'edu-card';
    card.dataset.id = video.id;
    card.dataset.category = video.category;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'edu-thumb-wrap';

    const img = document.createElement('img');
    img.className = 'edu-thumb';
    img.alt = ''; img.loading = 'lazy';
    thumbWrap.appendChild(img);

    (async () => {
      const url = await detectarMiniaturaEdu(video);
      img.src = url;
    })();

    const overlay = document.createElement('div');
    overlay.className = 'edu-play-overlay';
    overlay.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    thumbWrap.appendChild(overlay);

    if (video.duration && video.duration !== '—') {
      const dur = document.createElement('span');
      dur.className = 'edu-duration-badge';
      dur.textContent = video.duration;
      thumbWrap.appendChild(dur);
    }

    const favBadge = document.createElement('div');
    favBadge.className = 'edu-fav-badge' + (eduState.favorites.has(video.id) ? ' on' : '');
    favBadge.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    thumbWrap.appendChild(favBadge);

    const info = document.createElement('div');
    info.className = 'edu-card-info';
    const title = document.createElement('div');
    title.className = 'edu-card-title';
    title.textContent = video.title;
    const cat = document.createElement('div');
    cat.className = 'edu-card-cat';
    cat.textContent = EDU_CATEGORY_LABELS[video.category] || video.category;
    info.appendChild(title); info.appendChild(cat);

    card.appendChild(thumbWrap); card.appendChild(info);

    const open = () => abrirVideo(video.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    frag.appendChild(card);
  }
  eduGrid.appendChild(frag);
  aplicarFiltrosEdu();
}
function aplicarFiltrosEdu() {
  const term = normalize(eduState.searchTerm.trim());
  const cat = eduState.categoryFilter;
  let visibles = 0;
  const cards = eduGrid.querySelectorAll('.edu-card');
  cards.forEach(card => {
    const video = findEducationalById(card.dataset.id);
    if (!video) return;
    const haystack = normalize(video.title + ' ' + (video.description || ''));
    const matchTerm = !term || haystack.includes(term);
    const matchCat = cat === 'all' || video.category === cat;
    const ok = matchTerm && matchCat;
    card.style.display = ok ? '' : 'none';
    if (ok) visibles++;
  });
  eduNoResults.classList.toggle('on', visibles === 0);
  if (eduSearchClear) eduSearchClear.classList.toggle('on', term.length > 0);
}
function aplicarEduCollapsed() {
  const collapsed = lsGet(LS.eduCollapsed, false);
  eduSection.classList.toggle('collapsed', collapsed);
}
if (eduToggle) {
  eduToggle.addEventListener('click', () => {
    const collapsed = !eduSection.classList.contains('collapsed');
    lsSet(LS.eduCollapsed, collapsed);
    eduSection.classList.toggle('collapsed', collapsed);
  });
}
if (eduSearch) {
  eduSearch.addEventListener('input', (e) => {
    eduState.searchTerm = e.target.value;
    aplicarFiltrosEdu();
  });
}
if (eduSearchClear) {
  eduSearchClear.addEventListener('click', () => {
    eduState.searchTerm = '';
    eduSearch.value = '';
    aplicarFiltrosEdu();
    eduSearch.focus();
  });
}
if (eduCategory) {
  eduCategory.addEventListener('change', (e) => {
    eduState.categoryFilter = e.target.value;
    aplicarFiltrosEdu();
  });
}
function abrirVideo(id) {
  const video = findEducationalById(id);
  if (!video) return;
  eduState.currentVideo = video;
  videoTitle.textContent = video.title;
  videoCat.textContent = EDU_CATEGORY_LABELS[video.category] || video.category;
  videoDur.textContent = video.duration && video.duration !== '—' ? '⏱ ' + video.duration : '';
  videoDesc.textContent = video.description || '';
  videoVerse.textContent = video.verse || '';
  const isFav = eduState.favorites.has(video.id);
  videoFavBtn.classList.toggle('on', isFav);
  eduVideoEl.pause();
  eduVideoEl.src = video.file;
  eduVideoEl.load();
  eduVideoEl.currentTime = 0;
  registrarHistorialEdu(video.id);
  videoModal.classList.add('on');
  document.body.classList.add('modal-open');
  const p = eduVideoEl.play();
  if (p && p.catch) p.catch(() => {});
  actualizarBotonSiguiente();
}
function cerrarVideo() {
  if (!videoModal) return;
  videoModal.classList.remove('on');
  if (!moreModal.classList.contains('on') &&
      !importModal.classList.contains('on') &&
      !adModal.classList.contains('on')) {
    document.body.classList.remove('modal-open');
  }
  try {
    eduVideoEl.pause();
    eduVideoEl.currentTime = 0;
    eduVideoEl.removeAttribute('src');
    eduVideoEl.load();
  } catch {}
  eduState.currentVideo = null;
}
eduVideoEl.addEventListener('ended', () => {
  const current = eduState.currentVideo;
  if (!current) return;
  if (current.next) {
    const next = findEducationalById(current.next);
    if (next) {
      setTimeout(() => { abrirVideo(next.id); }, 400);
      return;
    }
  }
  toast('🎬 Fin del video', 2000);
});
function crearBotonSiguiente() {
  const actions = document.querySelector('.video-actions');
  if (!actions) return null;
  if (document.getElementById('videoNextBtn')) return document.getElementById('videoNextBtn');
  const btn = document.createElement('button');
  btn.id = 'videoNextBtn';
  btn.className = 'video-next-btn';
  btn.type = 'button';
  btn.innerHTML = 'Siguiente parte <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>';
  btn.addEventListener('click', () => {
    const current = eduState.currentVideo;
    if (!current || !current.next) return;
    const next = findEducationalById(current.next);
    if (next) abrirVideo(next.id);
  });
  actions.appendChild(btn);
  return btn;
}
function actualizarBotonSiguiente() {
  const btn = crearBotonSiguiente();
  if (!btn) return;
  const current = eduState.currentVideo;
  const tieneNext = !!(current && current.next && findEducationalById(current.next));
  btn.classList.toggle('on', tieneNext);
  if (tieneNext) {
    const next = findEducationalById(current.next);
    btn.innerHTML = `Siguiente: ${next.title} <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`;
  }
}
if (videoCloseBtn) videoCloseBtn.addEventListener('click', cerrarVideo);
document.querySelectorAll('[data-close-video]').forEach(el => { el.addEventListener('click', cerrarVideo); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('on')) cerrarVideo();
});
function toggleFavoritoEdu(id) {
  if (eduState.favorites.has(id)) {
    eduState.favorites.delete(id);
    toast('💔 Quitado de favoritos');
  } else {
    eduState.favorites.add(id);
    toast('❤️ Añadido a favoritos');
  }
  lsSet(LS.eduFavorites, Array.from(eduState.favorites));
  const card = eduGrid.querySelector(`.edu-card[data-id="${id}"]`);
  if (card) {
    const badge = card.querySelector('.edu-fav-badge');
    if (badge) badge.classList.toggle('on', eduState.favorites.has(id));
  }
  if (eduState.currentVideo && eduState.currentVideo.id === id) {
    videoFavBtn.classList.toggle('on', eduState.favorites.has(id));
  }
}
if (videoFavBtn) {
  videoFavBtn.addEventListener('click', () => {
    if (eduState.currentVideo) toggleFavoritoEdu(eduState.currentVideo.id);
  });
}
function registrarHistorialEdu(id) {
  eduState.history = eduState.history.filter(h => h.id !== id);
  eduState.history.unshift({ id, t: Date.now() });
  if (eduState.history.length > 10) eduState.history = eduState.history.slice(0, 10);
  lsSet(LS.eduHistory, eduState.history);
  renderHistorialEdu();
}
function renderHistorialEdu() {
  if (!eduHistoryList || !eduHistorySection) return;
  eduHistoryList.innerHTML = '';
  if (eduState.history.length === 0) {
    eduHistorySection.style.display = 'none';
    return;
  }
  eduHistorySection.style.display = '';
  eduState.history.forEach(h => {
    const video = findEducationalById(h.id);
    if (!video) return;
    const li = document.createElement('li');
    li.innerHTML = `<span class="extra-num">▸</span><span class="extra-title">${video.title}</span>`;
    li.addEventListener('click', () => abrirVideo(video.id));
    eduHistoryList.appendChild(li);
  });
}
if (videoShareBtn) {
  videoShareBtn.addEventListener('click', async () => {
    if (!eduState.currentVideo) return;
    const v = eduState.currentVideo;
    const url = new URL(location.href);
    url.searchParams.set('video', v.id);
    const data = { title: 'Full Alabanza · Enseñanza', text: `${v.title} — mira esta enseñanza:`, url: url.toString() };
    try {
      if (navigator.share) await navigator.share(data);
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${data.text} ${data.url}`);
        toast('📋 Enlace copiado');
      } else toast('Comparte: ' + data.url, 4000);
    } catch (e) {
      if (e.name !== 'AbortError') toast('No se pudo compartir');
    }
  });
}
function initEducational() {
  if (!eduSection || !eduGrid) return;
  aplicarEduCollapsed();
  poblarCategoriasEdu();
  construirEduGrid();
  renderHistorialEdu();
  const params = new URLSearchParams(location.search);
  const videoId = params.get('video');
  if (videoId && findEducationalById(videoId)) {
    setTimeout(() => abrirVideo(videoId), 600);
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initEducational, 100));
} else setTimeout(initEducational, 100);
