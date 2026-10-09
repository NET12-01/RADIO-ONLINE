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
  {
    id: 'versiculo-1',
    title: 'El Versículo de Hoy · Salmos 23:1',
    description: 'Raúl comparte la Palabra de Dios para tu día. Un momento de paz, reflexión y bendición en medio de tu rutina.',
    thumbnail: 'images/logo.png',
    file: 'videos/edu/versiculo-1.mp4',
    category: 'versiculo',
    duration: '—',
    verse: '"Jehová es mi pastor; nada me faltará." — Salmos 23:1',
    date: '2026-10-08'
  },
  {
    id: 'versiculo-2',
    title: 'El Versículo de Hoy · Juan 3:16',
    description: 'Raúl comparte el versículo más conocido de la Biblia: el amor de Dios por el mundo. Un momento de reflexión sobre Su gracia y misericordia.',
    thumbnail: 'images/logo.png',
    file: 'videos/edu/versiculo-2.mp4',
    category: 'versiculo',
    duration: '—',
    verse: '"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito." — Juan 3:16',
    date: '2026-10-09'
  },
  // 👈 NUEVO — Versículo 3
  {
    id: 'versiculo-3',
    title: 'El Versículo de Hoy · Filipenses 4:13',
    description: 'Raúl comparte una promesa de fortaleza para los días difíciles. Un recordatorio de que en Cristo siempre hay un paso más.',
    thumbnail: 'images/logo.png',
    file: 'videos/edu/versiculo-3.mp4',
    category: 'versiculo',
    duration: '—',
    verse: '"Todo lo puedo en Cristo que me fortalece." — Filipenses 4:13',
    date: '2026-10-10'
  }
];

const EDU_CATEGORY_LABELS = {
  avivamiento: 'Avivamiento',
  doctrina: 'Doctrina',
  testimonio: 'Testimonio',
  'historia-iglesia': 'Historia de la Iglesia',
  devocional: 'Devocional',
  profecia: 'Profecía',
  versiculo: 'Versículo'
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
  'No estás solo. Dios camina cont
