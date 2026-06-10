# Club Panthers All Stars - Node.js + Express + EJS

Proyecto web para Club Panthers All Stars, inspirado en su identidad visual: logo oficial, colores azul/rosado/negro, fotos de equipos, pancarta Panthers y referencia de San Bernardo.

## Requisitos

- Node.js instalado
- Visual Studio Code recomendado

## Instalación

```bash
npm install
```

Si PowerShell bloquea `npm`, usa:

```bash
npm.cmd install
```

## Ejecutar

```bash
npm start
```

O en PowerShell:

```bash
npm.cmd start
```

Luego abre:

```text
http://localhost:3000
```

## Acceso administrador privado

El acceso de administrador no aparece en el menú público. Para entrar usa:

```text
http://localhost:3000/login-admin
```

Credenciales demo:

```text
Correo: admin@panthers.cl
Contraseña: panthers2026
```

Después del login, el sistema redirige al panel privado:

```text
http://localhost:3000/panel-panthers
```

## Qué incluye

- Página de inicio con logo oficial, foto principal y pancarta Panthers.
- Sección Nosotros con identidad del club.
- Equipos 2025: Baby, Black, Magic, Diva, Eternity, Evolution e Infinity Panthers.
- Entrenamientos y preparación coreográfica.
- Logros y temporada.
- Galería tipo feed con fotos reales entregadas como referencia.
- Contacto con Instagram y logo de San Bernardo.
- Formulario de postulación.
- Panel administrador privado separado del sitio público.
- Menú público sin botón Admin para verse profesional ante visitantes.
- Guardado temporal de postulaciones en `data/inscripciones.json`.

## Próxima etapa

Conectar Supabase/MySQL para reemplazar el archivo JSON, subir la demo a Render/Vercel/Firebase y agregar CRUD real de equipos, logros y galería.
