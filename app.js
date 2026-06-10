const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_PATH = path.join(__dirname, 'data', 'inscripciones.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'panthers_allstars_clave_secreta',
  resave: false,
  saveUninitialized: false
}));

function leerInscripciones() {
  try {
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarInscripciones(inscripciones) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(inscripciones, null, 2), 'utf8');
}

function protegerAdmin(req, res, next) {
  if (req.session && req.session.admin) return next();
  return res.redirect('/login-admin');
}

const equipos = [
  {
    nombre: 'Baby Panthers 2025',
    edad: 'Infantil inicial',
    nivel: 'Formativo',
    descripcion: 'Categoría de iniciación para niñas y niños que comienzan en el cheerleading con coordinación, expresión corporal, disciplina y confianza.',
    etiqueta: 'Baby',
    imagen: '/img/baby-panthers.jpg'
  },
  {
    nombre: 'Black Panthers 2025',
    edad: 'Formativo / juvenil',
    nivel: 'Competitivo',
    descripcion: 'Equipo orientado a presentación, técnica base, sincronización y trabajo grupal con identidad Panthers.',
    etiqueta: 'Black',
    imagen: '/img/black-panthers.jpg'
  },
  {
    nombre: 'Magic Panthers 2025',
    edad: 'Youth 1',
    nivel: 'Competencia',
    descripcion: 'Categoría youth enfocada en coreografía, saltos, limpieza técnica y crecimiento competitivo.',
    etiqueta: 'Magic',
    imagen: '/img/magic-panthers.jpg'
  },
  {
    nombre: 'Diva Panthers 2025',
    edad: 'Open 3.2',
    nivel: 'Competitivo',
    descripcion: 'Equipo con enfoque escénico, actitud, técnica y preparación coreográfica para competencia.',
    etiqueta: 'Diva',
    imagen: '/img/diva-panthers.jpg'
  },
  {
    nombre: 'Eternity Panthers 2025',
    edad: 'Senior Coed 2',
    nivel: 'Senior',
    descripcion: 'Equipo senior con preparación de rutina, trabajo técnico, compañerismo y objetivo competitivo.',
    etiqueta: 'Eternity',
    imagen: '/img/eternity-panthers.jpg'
  },
  {
    nombre: 'Evolution Panthers 2025',
    edad: 'Proyección',
    nivel: 'Competitivo',
    descripcion: 'Categoría pensada para seguir evolucionando en técnica, seguridad, fuerza y presencia en tapete.',
    etiqueta: 'Evolution',
    imagen: '/img/evolution-panthers.jpg'
  },
  {
    nombre: 'Infinity Panthers 2025',
    edad: 'Senior / competitivo',
    nivel: 'All Stars',
    descripcion: 'Equipo con identidad fuerte, trabajo de equipo y preparación para presentaciones y competencias.',
    etiqueta: 'Infinity',
    imagen: '/img/infinity-panthers.jpg'
  }
];

const entrenamientos = [
  { numero: '01', titulo: 'Activación y calentamiento', descripcion: 'Movilidad articular, preparación muscular y prevención de lesiones antes de cada rutina.', imagen: '/img/staff-panthers.jpg' },
  { numero: '02', titulo: 'Saltos, fuerza y flexibilidad', descripcion: 'Trabajo de postura, impulso, core, control de piernas, aterrizaje seguro y resistencia.', imagen: '/img/black-panthers.jpg' },
  { numero: '03', titulo: 'Coreografía y conteos', descripcion: 'Memoria coreográfica, musicalidad, sincronización, cambios de formación y energía escénica.', imagen: '/img/beyond-diva.jpg' },
  { numero: '04', titulo: 'Limpieza de rutina', descripcion: 'Correcciones de detalles, tiempos, brazos, expresiones, transiciones y precisión grupal.', imagen: '/img/beyond-eternity.jpg' },
  { numero: '05', titulo: 'Sección danza', descripcion: 'Trabajo de performance, estilo, presencia, coordinación y conexión con la música.', imagen: '/img/beyond-danza.jpg' },
  { numero: '06', titulo: 'Preparación competitiva', descripcion: 'Ensayos de rutina completa, actitud de competencia y revisión técnica de cada categoría.', imagen: '/img/hero-panthers.jpg' }
];

const logros = [
  { anio: '2025', titulo: 'Eternity Panthers - 3° lugar', descripcion: 'Participación destacada en Infinity League, categoría Senior 2.2, representando con orgullo al club.', imagen: '/img/eternity-panthers.jpg' },
  { anio: '2025', titulo: 'Temporada de equipos Panthers', descripcion: 'Baby, Black, Magic, Diva, Eternity, Evolution e Infinity Panthers se preparan con identidad, disciplina y trabajo en equipo.', imagen: '/img/magic-panthers.jpg' },
  { anio: '2025', titulo: 'Capacitación de staff', descripcion: 'Entrenadores y asistentes en formación continua para entregar mejores procesos a sus deportistas.', imagen: '/img/staff-panthers.jpg' },
  { anio: 'San Bernardo', titulo: 'Orgullo comunal', descripcion: 'Club deportivo con identidad local en San Bernardo, Región Metropolitana de Santiago, Chile.', imagen: '/img/san-bernardo.png' }
];

const galeria = [
  { titulo: 'Baby Panthers 2025', descripcion: 'Formación, alegría y primeros pasos deportivos.', imagen: '/img/baby-panthers.jpg' },
  { titulo: 'Black Panthers 2025', descripcion: 'Energía, rutina y actitud en equipo.', imagen: '/img/black-panthers.jpg' },
  { titulo: 'Magic Panthers 2025', descripcion: 'Youth 1 con garra y crecimiento técnico.', imagen: '/img/magic-panthers.jpg' },
  { titulo: 'Diva Panthers 2025', descripcion: 'Open 3.2 con presencia y performance.', imagen: '/img/diva-panthers.jpg' },
  { titulo: 'Eternity Panthers 2025', descripcion: 'Senior Coed 2 con espíritu competitivo.', imagen: '/img/eternity-panthers.jpg' },
  { titulo: 'Evolution Panthers 2025', descripcion: 'Evolución, técnica y compañerismo.', imagen: '/img/evolution-panthers.jpg' },
  { titulo: 'Infinity Panthers 2025', descripcion: 'Identidad All Stars en el tapete.', imagen: '/img/infinity-panthers.jpg' },
  { titulo: 'Staff Panthers', descripcion: 'Formación continua y compromiso con los atletas.', imagen: '/img/staff-panthers.jpg' },
  { titulo: 'Somos Panthers', descripcion: 'Momentos de equipo y comunidad.', imagen: '/img/selfie-panthers.jpg' }
];

app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio', equipos: equipos.slice(0, 3), logros: logros.slice(0, 3), galeria: galeria.slice(0, 6) });
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros', { titulo: 'Nosotros' });
});

app.get('/equipos', (req, res) => {
  res.render('equipos', { titulo: 'Equipos', equipos });
});

app.get('/entrenamientos', (req, res) => {
  res.render('entrenamientos', { titulo: 'Entrenamientos', entrenamientos });
});

app.get('/logros', (req, res) => {
  res.render('logros', { titulo: 'Logros', logros });
});

app.get('/galeria', (req, res) => {
  res.render('galeria', { titulo: 'Galería', galeria });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', { titulo: 'Contacto' });
});

app.get('/inscripcion', (req, res) => {
  res.render('inscripcion', { titulo: 'Inscripción', mensaje: null, error: null });
});

app.post('/inscripcion', (req, res) => {
  const { nombre, correo, telefono, edad, experiencia, categoria, mensaje } = req.body;

  if (!nombre || !correo || !telefono || !edad || !experiencia || !categoria) {
    return res.render('inscripcion', {
      titulo: 'Inscripción',
      mensaje: null,
      error: 'Debes completar todos los campos obligatorios.'
    });
  }

  const inscripciones = leerInscripciones();
  const nuevaInscripcion = {
    id: Date.now(),
    nombre,
    correo,
    telefono,
    edad,
    experiencia,
    categoria,
    mensaje: mensaje || '',
    fecha: new Date().toLocaleString('es-CL')
  };

  inscripciones.push(nuevaInscripcion);
  guardarInscripciones(inscripciones);

  res.render('inscripcion', {
    titulo: 'Inscripción',
    mensaje: 'Postulación enviada correctamente. El equipo Panthers se contactará contigo.',
    error: null
  });
});

app.get('/login-admin', (req, res) => {
  res.render('login', { titulo: 'Acceso privado', error: null });
});

app.get('/login', (req, res) => {
  res.redirect('/login-admin');
});

app.post('/login-admin', (req, res) => {
  const { correo, password } = req.body;

  if (correo === 'admin@panthers.cl' && password === 'panthers2026') {
    req.session.admin = true;
    return res.redirect('/panel-panthers');
  }

  return res.render('login', {
    titulo: 'Admin',
    error: 'Credenciales incorrectas.'
  });
});

app.post('/login', (req, res) => {
  res.redirect(307, '/login-admin');
});

app.get('/panel-panthers', protegerAdmin, (req, res) => {
  const inscripciones = leerInscripciones();
  res.render('admin', { titulo: 'Panel privado', inscripciones });
});

app.get('/admin', (req, res) => {
  res.redirect('/panel-panthers');
});

app.post('/panel-panthers/limpiar', protegerAdmin, (req, res) => {
  guardarInscripciones([]);
  res.redirect('/panel-panthers');
});

app.post('/admin/limpiar', protegerAdmin, (req, res) => {
  res.redirect(307, '/panel-panthers/limpiar');
});

app.get('/logout-admin', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login-admin');
  });
});

app.get('/logout', (req, res) => {
  res.redirect('/logout-admin');
});

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
