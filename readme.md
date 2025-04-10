## Documentación Técnica - Sitio Web del Gimnasio

Miguel Tomas Quiroga

### Índice
1. Introducción
2. Estructura del Proyecto
3. Tecnologías Utilizadas
4. Estructura HTML
5. Estilos CSS
6. Funcionalidades JavaScript
7. Accesibilidad
8. Responsive Design
9. Buenas Prácticas

---

### 1. Introducción
Este proyecto corresponde al sitio web de un gimnasio moderno. Está diseñado para brindar información clara sobre los entrenadores, planes, artículos de blog y una sección de contacto. Es completamente responsivo y se aloja en GitHub Pages.

---

### 2. Estructura del Proyecto

```
Gym/
│
├── index.html
├── entrenadores.html
├── planes.html
├── blog.html
├── contacto.html
│
├── css/
│   └── estilos.css
│
├── js/
│   └── validar-formulario.js
│
├── img/
│   ├── entrenador1.jpg
│   ├── articulo1.webp
│   └── ...
│
└── README.md
```

---

### 3. Tecnologías Utilizadas
- **HTML5** para la estructura del contenido
- **CSS3** puro para los estilos, con diseño responsivo sin frameworks
- **JavaScript** para validación de formularios
- **GitHub Pages** para despliegue
- **Font Awesome** para íconos

---

### 4. Estructura HTML
Cada página tiene una estructura semántica clara:
- `<header>` con logo y navegación
- `<main>` con secciones individuales por contenido
- `<section>` para agrupar contenidos como entrenadores, blog, etc.
- `<footer>` con información de contacto

Incluye uso correcto de etiquetas `alt` en imágenes y `aria-label` donde es necesario para accesibilidad.

---

### 5. Estilos CSS
- Uso de variables CSS personalizadas (`--color-principal`, `--color-secundario`, etc.)
- `grid` y `flexbox` para diseño de layout
- Animaciones con `@keyframes` para efectos visuales
- Medias queries para adaptar el diseño a distintos tamaños de pantalla

---

### 6. Funcionalidades JavaScript
- Validación del formulario de contacto:
  - Verifica campos vacíos
  - Valida formato de correo electrónico
  - Muestra mensajes de error y éxito
  - Oculta automáticamente el mensaje de éxito
- Uso de atributos personalizados (`data-*`) para toggle de precios en la sección de planes

---

### 7. Accesibilidad
- Etiquetas de formulario con `for`
- Elementos `alt` descriptivos en imágenes
- Contraste adecuado entre colores de fondo y texto
- Navegación por teclado posible

---

### 8. Responsive Design
- Uso de `grid-template-columns: repeat(auto-fit, minmax(...))` para tarjetas responsivas
- Ajustes en tamaños de texto y espaciado con `@media` queries
- Flexibilidad en imágenes con `width: 100%` y `object-fit`

---

### 9. Buenas Prácticas
- Archivos organizados por carpeta
- Código comentado y legible
- Nombres de clases con convención clara (BEM simplificado)
- Validación semántica en HTML5 y CSS

---
**Fin de la Documentación Técnica**

