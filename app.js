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
   ============================================================
   Para añadir un video nuevo:
   1. Sube el archivo a:  videos/edu/ID.mp4
   2. Pega un bloque abajo con ese ID.
   3. (Opcional) Si quieres miniatura propia:
      súbela a images/edu/ID.jpg — si no, se usa el logo.
   ============================================================ */
const educationalVideos = [
  {
    id: 'azusa',
    title: 'El Avivamiento de la Calle Azusa',
    description: 'En 1906, en una calle humilde de Los Ángeles, un hombre rechazado por todos oró hasta que el cielo respondió. Descubre cómo Dios usó a William Seymour para encender un avivamiento que llegó a 50 naciones.',
    thumbnail: 'images/logo.png',
    file: 'videos/edu/azusa.mp4',
    category: 'avivamiento',
    duration: '—',
    verse: '"Y se les aparecieron lenguas repartidas, como de fuego." — Hechos 2:3',
    date: '2026-10-07'
  }
];

const EDU_CATEGORY_LABELS = {
  avivamiento: 'Avivamiento',
  doctrina: 'Doctrina',
  testimonio: 'Testimonio',
  'historia-iglesia': 'Historia de la Iglesia',
  devocional: 'Devocional',
  profecia: 'Profecía'
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
  'Confía en el tiempo de Dios
