# ☕ Landing page para negocio local (plantilla HTML y CSS)

Plantilla de **página web de una sola página** para un negocio local (cafetería, tienda, taller…). Está hecha solo con **HTML, CSS y un poco de JavaScript**, sin frameworks, para que cargue rápido y sea fácil de adaptar.

> Proyecto de práctica personal. "Café Montaña" es un **negocio ficticio**; textos, precios y dirección son de ejemplo.

🔗 **Demo en línea:** https://arumando.github.io/landing-page-negocio/

## ✨ Características

- **Responsive**: diseño pensado primero para celular, con menú desplegable (hamburguesa) y columnas en escritorio.
- Secciones típicas de un negocio: portada, productos con precios, "sobre nosotros", horario, ubicación y contacto.
- **Formulario con validación** en JavaScript: mensajes de error claros junto a cada campo.
- **Accesible**: HTML semántico, etiquetas en los formularios, `aria-expanded` en el menú, foco visible con teclado y respeto a `prefers-reduced-motion`.
- **Fácil de personalizar**: los colores, bordes y sombras están en variables CSS (`:root`), así que cambiar la paleta toma un minuto.
- Sin imágenes externas: los espacios para fotos y mapa están marcados para reemplazarse.

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3: variables, Flexbox, Grid, `clamp()` y media queries
- JavaScript (sin librerías)

## ▶️ Cómo ejecutarlo

No necesita instalación:

```bash
git clone https://github.com/arumando/landing-page-negocio.git
cd landing-page-negocio
```

Y abre `index.html` en tu navegador (doble clic). También puedes usar la extensión **Live Server** de VS Code.

### Cómo adaptarlo a otro negocio

1. Cambia los textos en `index.html`.
2. Cambia los colores en las variables del inicio de `css/styles.css`.
3. Reemplaza `.imagen-decorativa` por una `<img>` del local y `.mapa` por el `<iframe>` de Google Maps.
4. Conecta el formulario a un servicio como Formspree (ver comentario en `js/main.js`).

## 📸 Capturas

[PENDIENTE: captura en escritorio]

[PENDIENTE: captura en celular con el menú abierto]

## 📚 Qué aprendí

<!-- Revisa esta lista y escríbela con tus propias palabras. -->
- Diseñar primero para celular (*mobile first*) y ampliar con media queries.
- Organizar el CSS con variables y nombres de clases consistentes (estilo BEM).
- Combinar Grid (tarjetas) y Flexbox (menú, botones) según lo que conviene en cada caso.
- Validar formularios con JavaScript y mostrar errores accesibles.

## 👤 Autor

**José Armando García Bandera** — [github.com/arumando](https://github.com/arumando)
