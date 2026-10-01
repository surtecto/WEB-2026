# PLAN SAG 2020–2030 | Web de Ordenamiento Territorial de San Andrés de Giles

Sitio web interactivo, accesible y de divulgación ciudadana para el **Plan de Ordenamiento Territorial y Urbano (2020–2030)** del Partido de San Andrés de Giles, desarrollado por el Consejo Municipal para el Desarrollo y el Ordenamiento Territorial (CMDOT).

---

## 🏛️ Características del Desarrollo

1. **Accesibilidad Comunicacional (Lenguaje Claro):**
   * Estrategia de comunicación en capas: bajadas cotidianas para vecinos, datos técnicos rigurosos para profesionales e información didáctica para escuelas.
   * Contraste visual accesible WCAG AAA con la paleta de colores institucional oficial de la [Municipalidad de San Andrés de Giles](https://www.sanandresdegiles.gob.ar/) (`#0B4F8A` Azul Giles, `#2E9CCA` Celeste y `#3B8132` Verde Campo).

2. **Módulos Interactivos:**
   * **Los 4 Ejes Estratégicos:** Hábitat y Crecimiento Urbano, Suelo Rural y Producción, Cuencas Hídricas y Ambiente, Conectividad y Red Vial.
   * **Explorador Federal de Localidades:** Diagnóstico y lineamientos específicos para San Andrés de Giles (cabecera), Cucullu, Solís, Villa Ruiz, Azcuénaga y Franklin.
   * **Espacio Educativo con Buscador en Vivo:** Glosario interactivo instantáneo de términos territoriales (FOS, FOT, periurbano, cuenca, amortiguamiento, plusvalía) para estudiantes secundarios, terciarios y docentes.
   * **Acordeón Normativo:** Enlaces de descarga directa al documento técnico completo [Texto Final Plan SAG - Borrador 02-2025.pdf](https://drive.google.com/file/d/12dzbiIkeAKVJKTiftszveQYYIkCh-EGh/view), leyes provinciales y audios de divulgación.
   * **Buzón Ciudadano:** Formulario interactivo para recepción de inquietudes y propuestas zonales.

---

## 🚀 Cómo publicar esta web en GitHub Pages (Paso a Paso)

### Opción 1: Desde la web de GitHub (Sin usar consola)

1. Ingresá a [GitHub](https://github.com/) e iniciá sesión con tu cuenta.
2. Creá un nuevo repositorio:
   * Hacé clic en el botón verde **"New"** (Nuevo repositorio).
   * Nombre sugerido: `plan-sag-2020-2030` o `plan-territorial-giles`.
   * Marcalo como **Público** (Public).
   * Hacé clic en **"Create repository"**.
3. Subí los archivos:
   * En la pantalla del nuevo repositorio, hacé clic en el enlace **"uploading an existing file"** (subir archivos existentes).
   * Arrastrá o seleccioná la carpeta con los archivos descomprimidos (`index.html`, la carpeta `css/` con `styles.css`, la carpeta `js/` con `app.js` y `.nojekyll`).
   * Hacé clic en **"Commit changes"** (Guardar cambios).
4. Activá GitHub Pages:
   * En tu repositorio, andá a la pestaña superior **"Settings"** (Configuración).
   * En el menú lateral izquierdo, hacé clic en **"Pages"**.
   * Bajo el título **"Branch"**, cambiá de `None` a **`main`** (o `master`) y dejá la carpeta en **`/ (root)`**.
   * Hacé clic en **"Save"** (Guardar).
5. ¡Listo! En 1 a 2 minutos, GitHub te dará tu dirección pública (ejemplo: `https://tu-usuario.github.io/plan-sag-2020-2030/`).

---

### Opción 2: Usando Git desde la terminal

```bash
# 1. Clonar tu repositorio vacío
git clone https://github.com/TU-USUARIO/plan-sag-2020-2030.git
cd plan-sag-2020-2030

# 2. Copiar los archivos dentro de la carpeta
# (index.html, css/, js/, .nojekyll)

# 3. Guardar y subir a GitHub
git add .
git commit -m "Publicación inicial Plan SAG 2020-2030"
git branch -M main
git push -u origin main
```
Luego activá GitHub Pages desde *Settings > Pages*.

---

## 📁 Estructura del Proyecto

```text
plan-sag-github/
├── index.html        # Página principal completa, semántica y responsive
├── .nojekyll         # Desactiva el procesador Jekyll en GitHub Pages
├── README.md         # Documentación del proyecto
├── css/
│   └── styles.css    # Hoja de estilos con paleta municipal y diseño adaptativo
└── js/
    └── app.js        # Lógica interactiva de localidades, glosario y acordeón
```
