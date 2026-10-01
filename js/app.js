/* ==========================================================================
   PLAN SAG 2020-2030 | Lógica Interactiva
   San Andrés de Giles, Buenos Aires
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initLocalidades();
  initGlosarioSearch();
  initAccordion();
  initFormFeedback();
});

/* 1. Navegación Móvil */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileToggle");
  const mainNav = document.getElementById("mainNav");

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });

    // Cerrar al hacer clic en un enlace
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("show");
      });
    });
  }
}

/* 2. Explorador de Localidades de San Andrés de Giles */
const localidadesData = {
  giles: {
    nombre: "San Andrés de Giles (Ciudad Cabecera)",
    subtitulo: "Centro cívico, comercial y administrativo",
    poblacion: "~18.500 hab.",
    cuartel: "Cuartel I",
    diagnostico: "Fuerte presión de expansión hacia el periurbano sobre áreas rurales, existencia de vacíos intersticiales en zonas ya provistas de agua y cloacas, y puntos críticos de cruce vial en Ruta Nacional 7 y Ruta Provincial 41.",
    propuestas: [
      "Priorizar la completitud y densificación del tejido urbano consolidado antes de autorizar extensiones periféricas.",
      "Consolidar el sector industrial y logístico sobre corredores específicos, evitando molestias en zonas residenciales.",
      "Crear un parque lineal de amortiguamiento y paseo ribereño en los bordes del Arroyo de Giles para drenaje pluvial seguro.",
      "Exigir cesión obligatoria de tierras para espacios verdes y equipamiento en todo nuevo fraccionamiento."
    ]
  },
  cucullu: {
    nombre: "Cucullu",
    subtitulo: "Pueblo rural y polo ladrillero artesanal",
    poblacion: "~1.200 hab.",
    cuartel: "Cuartel II",
    diagnostico: "Convivencia entre la actividad tradicional de hornos de ladrillo artesanal y el crecimiento residencial. Necesidad de resguardar el suelo frente a cavas y anegamientos.",
    propuestas: [
      "Delimitar el polígono de producción ladrillera con planes de remediación de cavas y protección ambiental.",
      "Mantener la escala tradicional del pueblo, fijando dimensiones mínimas de parcela que preserven el aire rural.",
      "Fortalecer el acceso pavimentado y consolidar el arbolado público autóctono en calles principales."
    ]
  },
  solis: {
    nombre: "Solís",
    subtitulo: "Localidad en crecimiento estratégico sobre Autovía 8",
    poblacion: "~1.100 hab.",
    cuartel: "Cuartel VI",
    diagnostico: "Acelerada demanda de terrenos para primera vivienda y casas de descanso a partir de la conectividad que brinda la Autovía 8, con riesgo de loteos especulativos sin infraestructura.",
    propuestas: [
      "Preservar la identidad y trama ferroviaria original, ordenando el crecimiento hacia sectores aptos no inundables.",
      "Prohibir fraccionamientos sin red de agua potable asegurada y desagües pluviales proyectados.",
      "Jerarquizar el acceso comercial y el equipamiento de la delegación y centro de salud."
    ]
  },
  ruiz: {
    nombre: "Villa Ruiz",
    subtitulo: "Pueblo de valor patrimonial, turístico y rural",
    poblacion: "~600 hab.",
    cuartel: "Cuartel IV",
    diagnostico: "Gran valor paisajístico y arquitectónico pampeano que atrae turismo de escapada. El desafío es absorber visitantes sin saturar la infraestructura ni alterar la tranquilidad vecinal.",
    propuestas: [
      "Código morfológico estricto para nuevas construcciones (alturas máximas, retiros, materiales afines a la tradición).",
      "Control de pozos absorbentes y drenajes para evitar la contaminación de las napas freáticas.",
      "Organización de circuitos peatonales, señalética de patrimonio y playas de estacionamiento periféricas."
    ]
  },
  azcuenaga: {
    nombre: "Azcuénaga",
    subtitulo: "Referente cultural y gastronómico del partido",
    poblacion: "~400 hab.",
    cuartel: "Cuartel V",
    diagnostico: "Consolidación como polo gastronómico de fines de semana. Requiere ordenar el tránsito en el cuadro de estación y proteger las construcciones históricas de adobe y ladrillo.",
    propuestas: [
      "Protección especial del cuadro de la Estación Ferroviaria como corazón cívico y cultural.",
      "Regulación de la actividad comercial gastronómica para garantizar estacionamiento y descanso de los pobladores permanentes.",
      "Mantenimiento prioritario del camino de vinculación con la ciudad cabecera."
    ]
  },
  franklin: {
    nombre: "Franklin",
    subtitulo: "Comunidad agraria y paraje tradicional",
    poblacion: "~150 hab.",
    cuartel: "Cuartel VIII",
    diagnostico: "Asentamiento netamente rural cuya principal vulnerabilidad radica en la transitabilidad de los caminos rurales en períodos de lluvia prolongada.",
    propuestas: [
      "Garantizar la salida permanente de la producción lechera y cerealera mediante consolidado de caminos.",
      "Apoyo a la escuela rural y centros de conectividad comunitaria para frenar el desarraigo de jóvenes.",
      "Promoción de huertas agroecológicas y producción de alimentos de cercanía."
    ]
  }
};

function initLocalidades() {
  const container = document.getElementById("localidadesContent");
  const buttons = document.querySelectorAll(".loc-tab-btn");

  if (!container || buttons.length === 0) return;

  function renderLocalidad(key) {
    const loc = localidadesData[key];
    if (!loc) return;

    container.innerHTML = `
      <div class="loc-panel">
        <h4>${loc.nombre}</h4>
        <div class="loc-meta">
          <span>📍 ${loc.cuartel}</span>
          <span>👥 Población estimada: ${loc.poblacion}</span>
          <span>🏛️ ${loc.subtitulo}</span>
        </div>
        <div class="loc-content-grid">
          <div class="loc-box">
            <h5>Diagnóstico Territorial</h5>
            <p>${loc.diagnostico}</p>
          </div>
          <div class="loc-box">
            <h5>Lineamientos del Plan 2020–2030</h5>
            <ul>
              ${loc.propuestas.map(p => `<li>${p}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-loc");
      renderLocalidad(key);
    });
  });

  // Cargar primera localidad
  renderLocalidad("giles");
}

/* 3. Buscador en vivo del Glosario Didáctico */
function initGlosarioSearch() {
  const searchInput = document.getElementById("glosarioInput");
  const cards = document.querySelectorAll(".glosario-card");
  const noResults = document.getElementById("glosarioNoResults");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    let matches = 0;

    cards.forEach(card => {
      const keywords = card.getAttribute("data-keywords") || "";
      const text = card.innerText.toLowerCase();

      if (text.includes(term) || keywords.includes(term)) {
        card.style.display = "block";
        matches++;
      } else {
        card.style.display = "none";
      }
    });

    if (noResults) {
      noResults.style.display = matches === 0 ? "block" : "none";
    }
  });
}

/* 4. Acordeón para Documentos Legales */
function initAccordion() {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Opcional: cerrar los demás
      document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

/* 5. Formulario de Participación */
function initFormFeedback() {
  const form = document.getElementById("participacionForm");
  const feedback = document.getElementById("formFeedback");

  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("inputNombre").value;
    const localidad = document.getElementById("inputLocalidad").value;

    feedback.innerHTML = `
      ✓ ¡Gracias ${nombre ? nombre : "vecino/a"} de ${localidad}! Tu mensaje fue registrado como aporte ciudadano para el Consejo Municipal (CMDOT).
    `;
    feedback.style.display = "block";
    form.reset();

    setTimeout(() => {
      feedback.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  });
}
