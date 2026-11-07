"use strict";

/* =========================================
   ASTERI_REY | PORTFÓLIO
   ========================================= */

const GITHUB_PROFILE = "https://github.com/Andrey-Leandro";
const GITHUB_REPOSITORIES = "https://github.com/Andrey-Leandro?tab=repositories";

/* PROJETOS
   Todos os endereços são tratados como domínios Netlify.
*/

const projects = [
  {
    title: "Adrieli Studio",
    category: "beleza",
    categoryLabel: "Beleza",
    type: "Estúdio",
    description: "Site para estúdio de beleza, com identidade visual delicada e apresentação dos serviços.",
    icon: "fa-spa",
    url: "https://adrieli-studio.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"]
  },
  {
    title: "Barbearia A.L",
    category: "beleza",
    categoryLabel: "Beleza",
    type: "Barbearia",
    description: "Experiência digital para barbearia, com visual urbano, apresentação de profissionais e agendamento.",
    icon: "fa-scissors",
    url: "https://barbearia-al.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Agendamento"]
  },
  {
    title: "Rey's Burger",
    category: "gastronomia",
    categoryLabel: "Gastronomia",
    type: "Hamburgueria",
    description: "Uma hamburgueria com personalidade, cardápio visual e foco em pedidos e conversão.",
    icon: "fa-burger",
    url: "https://reysburger.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Cardápio"]
  },
  {
    title: "Bom Gosto Bolos",
    category: "gastronomia",
    categoryLabel: "Gastronomia",
    type: "Confeitaria",
    description: "Site acolhedor para confeitaria, com apresentação de produtos e comunicação comercial.",
    icon: "fa-cake-candles",
    url: "https://bomgostobolos.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "WhatsApp"]
  },
  {
    title: "Gisele Imobiliária",
    category: "servicos",
    categoryLabel: "Serviços",
    type: "Imobiliária",
    description: "Apresentação de imóveis e serviços imobiliários, com foco em facilitar o contato com clientes.",
    icon: "fa-house-chimney",
    url: "https://gisele-imobiliaria.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Imóveis"]
  },
  {
    title: "Elétrica MA",
    category: "servicos",
    categoryLabel: "Serviços",
    type: "Elétrica",
    description: "Página profissional para serviços elétricos, com comunicação direta e chamadas para orçamento.",
    icon: "fa-bolt",
    url: "https://eletricama.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Contato"]
  },
  {
    title: "Brasa Tattoo",
    category: "beleza",
    categoryLabel: "Beleza",
    type: "Tatuagem",
    description: "Identidade visual marcante para estúdio de tatuagem, com estética retrô e personalidade.",
    icon: "fa-pen-nib",
    url: "https://brasatatto.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Galeria"]
  },
  {
    title: "Pata Serena",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    type: "Pet Care",
    description: "Pet shop boutique com proposta acolhedora, apresentação dos cuidados e experiência de agendamento.",
    icon: "fa-paw",
    url: "https://pataserena.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Agendamento"]
  },
  {
    title: "Trimurti BR",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    type: "Moda",
    description: "Experiência de e-commerce inspirada na moda boho, com identidade visual própria.",
    icon: "fa-shirt",
    url: "https://trimurtibr.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"]
  },
  {
    title: "Estética de Garagem",
    category: "servicos",
    categoryLabel: "Serviços",
    type: "Automotivo",
    description: "Site para estética automotiva, com apresentação de serviços e identidade visual marcante.",
    icon: "fa-car",
    url: "https://estetica-de-garagem.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Serviços"]
  },
  {
    title: "Belle Studio",
    category: "beleza",
    categoryLabel: "Beleza",
    type: "Estética",
    description: "Site para estúdio de estética, com visual elegante e foco na apresentação dos procedimentos.",
    icon: "fa-heart",
    url: "https://bellestudio.netlify.app",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"]
  }
];

/* ELEMENTOS */

const projectsGrid = document.getElementById("projectsGrid");
const projectSearch = document.getElementById("projectSearch");
const resetProjects = document.getElementById("resetProjects");
const noProjects = document.getElementById("noProjects");
const projectCount = document.getElementById("projectCount");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const backToTop = document.getElementById("backToTop");

const profilePhoto = document.getElementById("profilePhoto");
const profileFallback = document.getElementById("profileFallback");

const currentYear = document.getElementById("currentYear");

const playerToggle = document.getElementById("playerToggle");
const playerIcon = document.getElementById("playerIcon");
const playerStatus = document.getElementById("playerStatus");
const playerEqualizer = document.getElementById("playerEqualizer");

/* ESTADO DOS FILTROS */

let activeCategory = "todos";
let searchTerm = "";

/* FUNÇÕES AUXILIARES */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function isValidHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch (error) {
    return false;
  }
}

/* CRIAÇÃO DOS CARDS */

function createProjectCard(project, index) {
  const safeTitle = escapeHTML(project.title);
  const safeDescription = escapeHTML(project.description);
  const safeCategory = escapeHTML(project.categoryLabel);
  const safeType = escapeHTML(project.type);

  const safeUrl = isValidHttpUrl(project.url) ? project.url : "#";

  const tagsHTML = project.tags
    .map(function (tag) {
      return `<span class="project-tag">${escapeHTML(tag)}</span>`;
    })
    .join("");

  return `
    <article class="project-card reveal" style="transition-delay:${Math.min(index * 45, 180)}ms">
      <div class="project-visual">
        <span class="project-category-label">${safeCategory}</span>
        <div class="project-visual-icon" aria-hidden="true">
          <i class="fa-solid ${escapeHTML(project.icon)}"></i>
        </div>
      </div>

      <div class="project-card-content">
        <div class="project-title-row">
          <h3 class="project-title">${safeTitle}</h3>
          <span class="project-type">${safeType}</span>
        </div>

        <p class="project-description">${safeDescription}</p>

        <div class="project-tags">
          ${tagsHTML}
        </div>

        <div class="project-actions">
          <a
            class="project-link primary"
            href="${escapeHTML(safeUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar o projeto ${safeTitle}"
          >
            Ver projeto <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>

          <a
            class="project-link secondary"
            href="${GITHUB_REPOSITORIES}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver repositórios no GitHub"
            title="Abrir meus repositórios no GitHub"
          >
            <i class="fa-brands fa-github"></i> Código
          </a>
        </div>
      </div>
    </article>
  `;
}

/* FILTRO E PESQUISA */

function getFilteredProjects() {
  return projects.filter(function (project) {
    const matchesCategory =
      activeCategory === "todos" || project.category === activeCategory;

    const searchableContent = normalizeText([
      project.title,
      project.categoryLabel,
      project.type,
      project.description,
      project.tags.join(" ")
    ].join(" "));

    const matchesSearch = searchableContent.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

function renderProjects() {
  if (!projectsGrid) return;

  const filteredProjects = getFilteredProjects();

  projectsGrid.innerHTML = filteredProjects
    .map(function (project, index) {
      return createProjectCard(project, index);
    })
    .join("");

  if (projectCount) {
    projectCount.textContent = filteredProjects.length;
  }

  if (noProjects) {
    noProjects.hidden = filteredProjects.length !== 0;
  }

  observeRevealElements();
}

/* BOTÕES DE CATEGORIA */

const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    activeCategory = button.dataset.filter || "todos";

    filterButtons.forEach(function (item) {
      const isActive = item === button;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderProjects();
  });
});

/* CAMPO DE PESQUISA */

if (projectSearch) {
  projectSearch.addEventListener("input", function () {
    searchTerm = normalizeText(projectSearch.value);
    renderProjects();
  });
}

/* LIMPAR FILTROS */

if (resetProjects) {
  resetProjects.addEventListener("click", function () {
    activeCategory = "todos";
    searchTerm = "";

    if (projectSearch) {
      projectSearch.value = "";
    }

    filterButtons.forEach(function (button) {
      const isActive = button.dataset.filter === "todos";

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderProjects();
  });
}

/* FOTO DE PERFIL */

if (profilePhoto && profileFallback) {
  profilePhoto.addEventListener("error", function () {
    profilePhoto.style.display = "none";
    profileFallback.style.display = "grid";
  });

  profilePhoto.addEventListener("load", function () {
    profilePhoto.style.display = "block";
    profileFallback.style.display = "none";
  });

  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
    profilePhoto.style.display = "none";
    profileFallback.style.display = "grid";
  }
}

/* MENU MOBILE */

function closeMobileMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");

  const icon = menuToggle.querySelector("i");

  if (icon) {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars", !isOpen);
      icon.classList.toggle("fa-xmark", isOpen);
    }
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", function (event) {
    const clickedInsideMenu = mainNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}

/* BOTÃO VOLTAR AO TOPO */

function updateBackToTop() {
  if (!backToTop) return;

  backToTop.classList.toggle("visible", window.scrollY > 450);
}

window.addEventListener("scroll", updateBackToTop, { passive: true });

if (backToTop) {
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth"
    });
  });
}

/* ANIMAÇÕES DE ENTRADA */

let revealObserver = null;

function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -25px 0px"
      }
    );
  }

  elements.forEach(function (element) {
    revealObserver.observe(element);
  });
}

function initializeReveal() {
  document.body.classList.add("js-ready");

  document.querySelectorAll(
    ".hero-content, .hero-visual, .about-grid, .projects-heading, .music-card, .contact-card"
  ).forEach(function (element) {
    element.classList.add("reveal");
  });

  observeRevealElements();
}

/* ANO AUTOMÁTICO */

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =========================================
   PLAYER LO-FI GENERATIVO
   Não precisa de arquivo MP3 ou serviço externo.
   O áudio é criado pelo Web Audio API.
   ========================================= */

let audioContext = null;
let masterGain = null;
let musicInterval = null;
let musicStep = 0;
let noiseBuffer = null;
let isMusicPlaying = false;

const BPM = 80;
const STEP_DURATION = 60 / BPM / 2;

const CHORDS = [
  [261.63, 329.63, 392.00, 493.88],
  [220.00, 261.63, 329.63, 392.00],
  [174.61, 220.00, 261.63, 329.63],
  [196.00, 246.94, 293.66, 349.23]
];

function createAudioContext() {
  const AudioContextClass =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    throw new Error("Seu navegador não oferece suporte ao áudio generativo.");
  }

  audioContext = new AudioContextClass();

  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.45;
  masterGain.connect(audioContext.destination);

  createNoiseBuffer();
}

function createNoiseBuffer() {
  const bufferSize = audioContext.sampleRate;

  noiseBuffer = audioContext.createBuffer(
    1,
    bufferSize,
    audioContext.sampleRate
  );

  const data = noiseBuffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
}

function createTone(frequency, startTime, duration, volume, type) {
  if (!audioContext || !masterGain) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  oscillator.type = type || "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1400, startTime);

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(
    Math.max(volume, 0.0002),
    startTime + 0.035
  );
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    startTime + duration
  );

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.03);
}

function createNoiseSound(startTime, duration, volume, filterFrequency) {
  if (!audioContext || !noiseBuffer || !masterGain) return;

  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = noiseBuffer;

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(filterFrequency, startTime);

  gain.gain.setValueAtTime(Math.max(volume, 0.0001), startTime);
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    startTime + duration
  );

  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  source.start(startTime);
  source.stop(startTime + duration + 0.02);
}

function playMusicStep() {
  if (!audioContext || audioContext.state !== "running") return;

  const now = audioContext.currentTime + 0.025;
  const step = musicStep % 32;
  const chordIndex = Math.floor(step / 8) % CHORDS.length;
  const chord = CHORDS[chordIndex];

  /* Acordes suaves */
  if (step % 8 === 0) {
    chord.forEach(function (frequency, index) {
      createTone(
        frequency,
        now + index * 0.018,
        2.8,
        0.035,
        "sine"
      );
    });
  }

  /* Baixo */
  if (step % 4 === 0) {
    const bassNotes = [65.41, 55.00, 43.65, 49.00];
    createTone(
      bassNotes[chordIndex],
      now,
      0.45,
      0.13,
      "triangle"
    );
  }

  /* Bumbo */
  if (step % 8 === 0) {
    createTone(75, now, 0.22, 0.32, "sine");
  }

  /* Caixa */
  if (step % 8 === 4) {
    createNoiseSound(now, 0.13, 0.12, 1800);
  }

  /* Chimbal */
  if (step % 2 === 0) {
    createNoiseSound(now, 0.045, 0.025, 8500);
  }

  /* Pequenas notas de teclado */
  if (step % 4 === 2) {
    const melody = chord[(step / 2) % chord.length];

    createTone(
      melody * 2,
      now,
      0.5,
      0.025,
      "sine"
    );
  }

  musicStep++;
}

function updatePlayerInterface(playing, message) {
  isMusicPlaying = playing;

  if (playerToggle) {
    playerToggle.setAttribute("aria-pressed", String(playing));
    playerToggle.setAttribute(
      "aria-label",
      playing ? "Pausar música" : "Reproduzir música"
    );
  }

  if (playerIcon) {
    playerIcon.classList.toggle("fa-play", !playing);
    playerIcon.classList.toggle("fa-pause", playing);
  }

  if (playerStatus) {
    playerStatus.textContent = message;
  }

  if (playerEqualizer) {
    playerEqualizer.classList.toggle("playing", playing);
  }
}

function stopMusic() {
  if (musicInterval) {
    window.clearInterval(musicInterval);
    musicInterval = null;
  }

  if (audioContext && audioContext.state === "running") {
    audioContext.suspend().catch(function () {});
  }

  updatePlayerInterface(false, "Pausado • Lo-fi generativo");
}

async function startMusic() {
  try {
    if (!audioContext) {
      createAudioContext();
    }

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    if (audioContext.state !== "running") {
      throw new Error("Não foi possível iniciar o áudio.");
    }

    if (musicInterval) {
      window.clearInterval(musicInterval);
    }

    playMusicStep();

    musicInterval = window.setInterval(
      playMusicStep,
      STEP_DURATION * 1000
    );

    updatePlayerInterface(true, "Reproduzindo • Lo-fi generativo");
  } catch (error) {
    console.error("Erro no player:", error);
    updatePlayerInterface(false, "Áudio indisponível neste navegador");
  }
}

if (playerToggle) {
  playerToggle.addEventListener("click", function () {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });
}

/* Pausa a música quando a pessoa sai da aba. */

document.addEventListener("visibilitychange", function () {
  if (document.hidden && isMusicPlaying) {
    stopMusic();
  }
});

/* INICIALIZAÇÃO */

renderProjects();
initializeReveal();
updateBackToTop();