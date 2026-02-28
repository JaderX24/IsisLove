// ============================================
// CONFIGURACIÓN Y DATOS
// ============================================

const CONFIG = {
    name: 'Isis',
    fullName: 'Isis Bustillo',
    date: '28 de Febrero, 2026',
    typewriterSpeed: 40,
    particleCount: 50,
};

const LOVE_LETTER = `Hoy es un día muy especial porque el mundo tuvo la suerte de que llegaras a él. Desde que te conozco, cada momento se ha llenado de una luz que no sabía que me faltaba.

Eres esa persona que con una sola sonrisa puede cambiar mi día entero. Esa que me hace querer ser mejor, no porque me lo pidas, sino porque lo mereces todo.

Me encanta cómo ríes, cómo piensas, cómo amas. Me encanta cada pequeño detalle que te hace ser tú, porque tú eres mi persona favorita en este universo entero.

Gracias por existir, por estar aquí, por ser exactamente quien eres. El mundo es un lugar más bonito desde que tú estás en él, y mi vida es infinitamente mejor desde que estás en ella.

Espero que este nuevo año de vida te traiga todo lo que tu corazón desea y mucho más. Te mereces el universo entero, y yo voy a estar aquí para recordártelo cada día. 💖`;

const REASONS = [
    { icon: '✨', text: 'Tu sonrisa ilumina hasta el día más gris' },
    { icon: '🦋', text: 'Haces que todo sea más bonito con solo estar presente' },
    { icon: '🌙', text: 'Eres mi pensamiento favorito antes de dormir' },
    { icon: '🔥', text: 'Tu fuerza y determinación me inspiran cada día' },
    { icon: '🌸', text: 'Tienes el corazón más hermoso que he conocido' },
    { icon: '💫', text: 'Me haces creer en la magia con cada momento juntos' },
    { icon: '🎵', text: 'Eres la melodía favorita de mi vida' },
    { icon: '🌺', text: 'Con cada detalle demuestras lo increíble que eres' },
    { icon: '💎', text: 'Eres única, irrepetible y absolutamente perfecta' },
];

const MOMENTS = [
    { emoji: '💘', title: 'Nuestro primer encuentro', desc: 'Ese momento en que todo cambió y supe que eras especial.' },
    { emoji: '😊', title: 'Nuestras risas interminables', desc: 'Esos momentos donde reímos hasta que nos duele el estómago.' },
    { emoji: '🌙', title: 'Nuestras noches de conversación', desc: 'Hablando de todo y nada hasta que el tiempo deja de importar.' },
    { emoji: '🤗', title: 'Cada abrazo tuyo', desc: 'Esos abrazos que se sienten como llegar a casa.' },
    { emoji: '⭐', title: 'Nuestras aventuras juntos', desc: 'Cada momento vivido contigo es una aventura que atesoro.' },
    { emoji: '💝', title: 'Hoy, tu cumpleaños', desc: 'Celebrando a la persona más increíble que conozco.' },
];

const POEM_LINES = [
    'En la noche más oscura brillaste tú,',
    'como una estrella que solo yo puedo ver.',
    'Tu nombre lo escribí en cada luna llena,',
    'para que el cielo sepa a quién amo.',
    '',
    'Isis, mi refugio, mi paz, mi hogar,',
    'en tus ojos encontré mi eternidad.',
    'Si el universo me diera a elegir de nuevo,',
    'te elegiría a ti, mil veces, sin dudar.',
];

const HEARTBEAT_WORDS = [
    { emoji: '💞', text: 'Mi vida' },
    { emoji: '🌹', text: 'Mi reina' },
    { emoji: '☀️', text: 'Mi sol' },
    { emoji: '🌙', text: 'Mi luna' },
    { emoji: '💎', text: 'Mi tesoro' },
    { emoji: '🦋', text: 'Mi mariposa' },
    { emoji: '🌸', text: 'Mi flor' },
    { emoji: '⭐', text: 'Mi estrella' },
    { emoji: '🔥', text: 'Mi pasión' },
    { emoji: '🍯', text: 'Mi dulzura' },
    { emoji: '🏠', text: 'Mi hogar' },
    { emoji: '💫', text: 'Mi magia' },
];

const PROMISES = [
    { icon: '🤝', title: 'Siempre estar', text: 'Estar ahí en cada momento, en los buenos y en los difíciles, sin excusa.' },
    { icon: '🌹', title: 'Nunca dejar de sorprenderte', text: 'Porque mereces que cada día tenga algo bonito.' },
    { icon: '👂', title: 'Escucharte siempre', text: 'Con el corazón abierto y sin juzgar, porque tu voz es mi sonido favorito.' },
    { icon: '💪', title: 'Apoyar tus sueños', text: 'Ser tu fan número uno y tu porrista en cada meta que te propongas.' },
    { icon: '😂', title: 'Hacerte reír', text: 'Porque tu risa es la melodía más bonita que existe en este mundo.' },
    { icon: '🫂', title: 'Abrazarte fuerte', text: 'Cada vez que lo necesites, y también cuando no, porque los abrazos nunca sobran.' },
    { icon: '💖', title: 'Amarte cada día más', text: 'Porque contigo descubrí que el amor no tiene techo ni límites.' },
];

const LOVE_QUOTES = [
    { emoji: '🌌', quote: 'Si me dieran a elegir entre respirar y amarte, usaría mi último aliento para decirte que te amo.', sub: '~ Para mi Isis ~' },
    { emoji: '🌊', quote: 'El mar tiene millones de gotas, pero ninguna brilla como tú brillas en mi vida.', sub: '~ Mi universo entero ~' },
    { emoji: '🦋', quote: 'Antes de ti todo era en blanco y negro; tú pintaste mi mundo de colores que ni sabía que existían.', sub: '~ Mi artista favorita ~' },
    { emoji: '🌅', quote: 'Cada amanecer le doy gracias a la vida por ponerte en mi camino.', sub: '~ Mi mejor regalo ~' },
    { emoji: '🔐', quote: 'Mi corazón tenía una cerradura que nadie pudo abrir... hasta que llegaste tú con la llave perfecta.', sub: '~ Mi persona perfecta ~' },
    { emoji: '🌻', quote: 'Eres como un girasol: siempre buscando la luz y regalando belleza a todos los que te rodean.', sub: '~ Mi flor eterna ~' },
];

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================

let state = {
    started: false,
    candlesBlown: false,
    musicPlaying: false,
    audioContext: null,
    sectionActivated: {},
    finaleInterval: null,
    observer: null,
    musicNodes: null,
    musicLoop: null,
};

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createHeartParticles();
    populateReasons();
    populateTimeline();
    populatePoem();
    populateHeartbeatWords();
    populatePromises();
    populateCarousel();
    createPoemStars();
    createPromiseParticles();
    setupEventListeners();

    // Marcar todas las secciones (excepto intro) como "awaiting"
    document.querySelectorAll('.section:not(#intro)').forEach(sec => {
        sec.classList.add('awaiting');
    });
});

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    document.getElementById('btnStart').addEventListener('click', startExperience);
    document.getElementById('cake').addEventListener('click', blowCandles);
    document.getElementById('btnReplay').addEventListener('click', replayExperience);
    document.getElementById('btnMusic').addEventListener('click', toggleMusic);

    // Navegación por dots - scroll libre
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const sectionId = dot.dataset.section;
            const section = document.getElementById(sectionId);
            if (section) {
                // Revelar todas las secciones hasta ésta para que el scroll funcione
                const allSections = ['nameReveal', 'loveLetter', 'reasons', 'moments', 'poem', 'heartbeat', 'promises', 'loveGallery', 'wishes', 'finale'];
                const targetIndex = allSections.indexOf(sectionId);
                for (let i = 0; i <= targetIndex; i++) {
                    const sec = document.getElementById(allSections[i]);
                    if (sec && sec.classList.contains('awaiting')) {
                        sec.classList.remove('awaiting');
                        sec.classList.add('revealed');
                        if (!state.sectionActivated[allSections[i]]) {
                            state.sectionActivated[allSections[i]] = true;
                            activateSection(allSections[i]);
                        }
                    }
                }
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// INTERSECTION OBSERVER
// ============================================

function setupIntersectionObserver() {
    const opciones = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;

            if (entry.isIntersecting) {
                // Revelar la sección con animación suave
                entry.target.classList.remove('awaiting');
                entry.target.classList.add('revealed');

                // Activar contenido de la sección una sola vez
                if (!state.sectionActivated[id]) {
                    state.sectionActivated[id] = true;
                    activateSection(id);
                }

                // Actualizar nav dots
                updateNavDots(id);
            }
        });
    }, opciones);

    // Observar todas las secciones excepto intro
    document.querySelectorAll('.section:not(#intro)').forEach(sec => {
        observer.observe(sec);
    });

    state.observer = observer;
}

function activateSection(sectionId) {
    switch (sectionId) {
        case 'nameReveal':
            createGoldParticles();
            break;
        case 'loveLetter':
            startTypewriter();
            break;
        case 'reasons':
            animateReasons();
            break;
        case 'moments':
            animateTimeline();
            break;
        case 'poem':
            animatePoem();
            break;
        case 'heartbeat':
            animateHeartbeatWords();
            break;
        case 'promises':
            animatePromises();
            break;
        case 'loveGallery':
            initCarousel();
            break;
        case 'finale':
            startFinale();
            break;
    }
}

function updateNavDots(activeSectionId) {
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section === activeSectionId) {
            dot.classList.add('active');
        }
    });
}

// ============================================
// CORAZONES FLOTANTES (FONDO INTRO)
// ============================================

function createHeartParticles() {
    const container = document.getElementById('heartsBg');
    const hearts = ['💖', '💗', '💕', '💝', '♥', '❤️', '💘'];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart-particle';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        heart.style.animationDuration = (Math.random() * 6 + 6) + 's';
        heart.style.animationDelay = (Math.random() * 8) + 's';
        container.appendChild(heart);
    }
}

// ============================================
// EXPERIENCIA PRINCIPAL
// ============================================

function startExperience() {
    if (state.started) return;
    state.started = true;

    const intro = document.getElementById('intro');
    intro.style.opacity = '0';
    intro.style.transition = 'opacity 1s ease';

    setTimeout(() => {
        intro.classList.add('intro-hidden');

        // Mostrar la navegación lateral
        document.getElementById('sectionNav').classList.add('visible');

        // Activar el IntersectionObserver para scroll libre
        setupIntersectionObserver();

        // Revelar la primera sección y scrollear suavemente
        const nameSection = document.getElementById('nameReveal');
        nameSection.classList.remove('awaiting');
        nameSection.classList.add('revealed');
        state.sectionActivated['nameReveal'] = true;
        activateSection('nameReveal');
        nameSection.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

// ============================================
// PARTÍCULAS DORADAS
// ============================================

function createGoldParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < CONFIG.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
        particle.style.setProperty('--ty', (Math.random() * 100 - 50) + 'px');
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = (Math.random() * 3) + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ============================================
// MÁQUINA DE ESCRIBIR
// ============================================

let typewriterStarted = false;

function startTypewriter() {
    if (typewriterStarted) return;
    typewriterStarted = true;

    const container = document.getElementById('typewriter');
    const text = LOVE_LETTER;
    let index = 0;

    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    container.appendChild(cursor);

    function type() {
        if (index < text.length) {
            const char = text[index];

            if (char === '\n') {
                container.insertBefore(document.createElement('br'), cursor);
            } else {
                container.insertBefore(document.createTextNode(char), cursor);
            }

            index++;

            let speed = CONFIG.typewriterSpeed;
            if (char === '.' || char === '!' || char === '?') speed = 400;
            else if (char === ',') speed = 200;
            else if (char === '\n') speed = 300;

            setTimeout(type, speed);
        } else {
            cursor.style.display = 'none';
            document.querySelector('.letter-signature').classList.add('visible');
        }
    }

    setTimeout(type, 1000);
}

// ============================================
// RAZONES
// ============================================

function populateReasons() {
    const grid = document.getElementById('reasonsGrid');

    REASONS.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <span class="reason-number">${i + 1}</span>
            <span class="reason-icon">${reason.icon}</span>
            <p class="reason-text">${reason.text}</p>
        `;
        grid.appendChild(card);
    });
}

function animateReasons() {
    const cards = document.querySelectorAll('.reason-card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, i * 200);
    });
}

// ============================================
// TIMELINE / MOMENTOS
// ============================================

function populateTimeline() {
    const timeline = document.getElementById('timeline');

    MOMENTS.forEach((moment) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-emoji">${moment.emoji}</span>
                <h3 class="timeline-title">${moment.title}</h3>
                <p class="timeline-desc">${moment.desc}</p>
            </div>
        `;
        timeline.appendChild(item);
    });
}

function animateTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, i * 400);
    });
}

// ============================================
// POEMA ROMÁNTICO
// ============================================

function createPoemStars() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;

    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--dur', (Math.random() * 3 + 2) + 's');
        star.style.animationDelay = (Math.random() * 4) + 's';
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        canvas.appendChild(star);
    }
}

function populatePoem() {
    const container = document.getElementById('poemLines');
    if (!container) return;

    POEM_LINES.forEach((line, i) => {
        const p = document.createElement('p');
        p.className = 'poem-line';
        if (line === '') {
            p.innerHTML = '&nbsp;';
        } else {
            p.textContent = line;
        }
        if (i === POEM_LINES.length - 1) {
            p.classList.add('highlight');
        }
        container.appendChild(p);
    });
}

function animatePoem() {
    const lines = document.querySelectorAll('.poem-line');
    lines.forEach((line, i) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, i * 600);
    });
}

// ============================================
// CORAZÓN LATIENDO + PALABRAS
// ============================================

function populateHeartbeatWords() {
    const container = document.getElementById('heartbeatWords');
    if (!container) return;

    HEARTBEAT_WORDS.forEach(word => {
        const span = document.createElement('span');
        span.className = 'love-word';
        span.innerHTML = `<span class="word-emoji">${word.emoji}</span>${word.text}`;
        container.appendChild(span);
    });
}

function animateHeartbeatWords() {
    const words = document.querySelectorAll('.love-word');
    words.forEach((word, i) => {
        setTimeout(() => {
            word.classList.add('visible');
        }, i * 200);
    });
}

// ============================================
// PROMESAS DE AMOR
// ============================================

function createPromiseParticles() {
    const container = document.getElementById('promiseParticles');
    if (!container) return;

    const emojis = ['💕', '✨', '💫', '🌸', '💖', '🌟'];
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('span');
        particle.className = 'promise-particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 8 + 8) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

function populatePromises() {
    const container = document.getElementById('promisesList');
    if (!container) return;

    PROMISES.forEach(promise => {
        const item = document.createElement('div');
        item.className = 'promise-item';
        item.innerHTML = `
            <span class="promise-icon">${promise.icon}</span>
            <div class="promise-text">
                <strong>${promise.title}</strong><br>
                ${promise.text}
            </div>
        `;
        container.appendChild(item);
    });
}

function animatePromises() {
    const items = document.querySelectorAll('.promise-item');
    items.forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, i * 300);
    });
}

// ============================================
// CARRUSEL DE FRASES DE AMOR
// ============================================

let carouselIndex = 0;
let carouselTimer = null;

function populateCarousel() {
    const carousel = document.getElementById('loveCarousel');
    const dotsContainer = document.getElementById('carouselDots');
    if (!carousel || !dotsContainer) return;

    LOVE_QUOTES.forEach((q, i) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.background = `linear-gradient(135deg, rgba(255,105,180,0.08), rgba(255,215,0,0.04))`;
        slide.innerHTML = `
            <span class="carousel-slide-emoji">${q.emoji}</span>
            <p class="carousel-slide-quote">"${q.quote}"</p>
            <span class="carousel-slide-sub">${q.sub}</span>
        `;
        if (i === 0) slide.classList.add('active');
        carousel.appendChild(slide);

        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    document.getElementById('carouselPrev').addEventListener('click', () => {
        goToSlide((carouselIndex - 1 + LOVE_QUOTES.length) % LOVE_QUOTES.length);
    });
    document.getElementById('carouselNext').addEventListener('click', () => {
        goToSlide((carouselIndex + 1) % LOVE_QUOTES.length);
    });
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    slides[carouselIndex].classList.remove('active');
    dots[carouselIndex].classList.remove('active');

    carouselIndex = index;

    slides[carouselIndex].classList.add('active');
    dots[carouselIndex].classList.add('active');

    resetCarouselTimer();
}

function resetCarouselTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
        goToSlide((carouselIndex + 1) % LOVE_QUOTES.length);
    }, 5000);
}

function initCarousel() {
    resetCarouselTimer();
}

// ============================================
// LOVE METER (FINALE)
// ============================================

function animateLoveMeter() {
    const fill = document.getElementById('loveMeterFill');
    const value = document.querySelector('.love-meter-value');
    if (!fill) return;

    setTimeout(() => {
        fill.style.width = '100%';
    }, 2200);

    setTimeout(() => {
        if (value) value.classList.add('visible');
    }, 5000);
}

// ============================================
// SOPLAR VELAS
// ============================================

function blowCandles() {
    if (state.candlesBlown) return;
    state.candlesBlown = true;

    const flames = document.querySelectorAll('.flame');

    flames.forEach((flame, i) => {
        setTimeout(() => {
            flame.classList.add('blown');
        }, i * 300);
    });

    setTimeout(() => {
        createConfetti();
        document.querySelector('.wishes-title').textContent = '¡Tus deseos se harán realidad! 🎉';
        document.querySelector('.wishes-text').textContent = '¡Feliz Cumpleaños, Isis!';
    }, 1200);
}

// ============================================
// CONFETTI
// ============================================

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#FF69B4', '#FFD700', '#FF1493', '#DAA520', '#FFB6C1', '#FF007F', '#FFF8DC', '#FF4500', '#00CED1', '#9370DB'];
    const shapes = ['square', 'circle', 'triangle'];

    for (let i = 0; i < 150; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = color;
        piece.style.animationDuration = (Math.random() * 3 + 2) + 's';
        piece.style.animationDelay = (Math.random() * 2) + 's';
        piece.style.width = (Math.random() * 10 + 5) + 'px';
        piece.style.height = (Math.random() * 10 + 5) + 'px';

        if (shape === 'circle') {
            piece.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            piece.style.width = '0';
            piece.style.height = '0';
            piece.style.background = 'transparent';
            piece.style.borderLeft = '6px solid transparent';
            piece.style.borderRight = '6px solid transparent';
            piece.style.borderBottom = `12px solid ${color}`;
        }

        container.appendChild(piece);
    }

    setTimeout(() => {
        container.innerHTML = '';
    }, 6000);
}

// ============================================
// FINALE
// ============================================

function startFinale() {
    launchFireworks();
    createFinaleHearts();
    animateLoveMeter();

    state.finaleInterval = setInterval(() => {
        launchFireworks();
    }, 3000);
}

function launchFireworks() {
    const container = document.getElementById('fireworks');
    if (!container) return;
    const colors = ['#FFD700', '#FF69B4', '#FF1493', '#FFB6C1', '#FF007F', '#DAA520'];

    for (let burst = 0; burst < 3; burst++) {
        setTimeout(() => {
            const centerX = Math.random() * 80 + 10;
            const centerY = Math.random() * 50 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];

            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework-particle';
                particle.style.left = centerX + '%';
                particle.style.top = centerY + '%';
                particle.style.background = color;
                particle.style.boxShadow = `0 0 6px ${color}`;

                const angle = (i / 20) * Math.PI * 2;
                const distance = Math.random() * 80 + 40;
                particle.style.setProperty('--fx', Math.cos(angle) * distance + 'px');
                particle.style.setProperty('--fy', Math.sin(angle) * distance + 'px');
                particle.style.animationDelay = (Math.random() * 0.3) + 's';

                container.appendChild(particle);
                setTimeout(() => particle.remove(), 2000);
            }
        }, burst * 800);
    }
}

function createFinaleHearts() {
    const container = document.getElementById('finaleHearts');
    if (!container) return;
    const hearts = ['💖', '💗', '💕', '💝', '✨', '🌟', '💫'];

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart-particle';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        heart.style.animationDuration = (Math.random() * 6 + 5) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(heart);
    }
}

// ============================================
// REPLAY
// ============================================

function replayExperience() {
    state.started = false;
    state.candlesBlown = false;
    typewriterStarted = false;
    state.sectionActivated = {};

    if (state.finaleInterval) {
        clearInterval(state.finaleInterval);
        state.finaleInterval = null;
    }

    if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
    }

    // Resetear secciones
    document.querySelectorAll('.section:not(#intro)').forEach(sec => {
        sec.classList.remove('revealed', 'fade-in');
        sec.classList.add('awaiting');
    });

    // Limpiar contenido dinámico
    document.getElementById('typewriter').innerHTML = '';
    document.querySelectorAll('.reason-card').forEach(c => c.classList.remove('visible'));
    document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('visible'));
    document.querySelectorAll('.poem-line').forEach(l => l.classList.remove('visible'));
    document.querySelectorAll('.love-word').forEach(w => w.classList.remove('visible'));
    document.querySelectorAll('.promise-item').forEach(p => p.classList.remove('visible'));
    document.getElementById('fireworks').innerHTML = '';
    document.getElementById('finaleHearts').innerHTML = '';
    document.getElementById('confettiContainer').innerHTML = '';
    document.getElementById('particles').innerHTML = '';

    // Resetear love meter
    const loveFill = document.getElementById('loveMeterFill');
    if (loveFill) loveFill.style.width = '0%';
    const loveValue = document.querySelector('.love-meter-value');
    if (loveValue) loveValue.classList.remove('visible');

    // Resetear carrusel
    carouselIndex = 0;
    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === 0));
    dots.forEach((d, i) => d.classList.toggle('active', i === 0));

    // Restaurar velas
    document.querySelectorAll('.flame').forEach(f => f.classList.remove('blown'));
    document.querySelector('.wishes-title').textContent = '¡Pide un deseo! 🌟';
    document.querySelector('.wishes-text').textContent = 'Sopla las velas (haz clic en el pastel)';

    // Ocultar nav
    document.getElementById('sectionNav').classList.remove('visible');

    // Mostrar intro
    const intro = document.getElementById('intro');
    intro.classList.remove('intro-hidden');
    intro.style.opacity = '1';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Restaurar firma
    document.querySelector('.letter-signature').classList.remove('visible');
}

// ============================================
// MÚSICA (Web Audio API)
// ============================================

function toggleMusic() {
    const btn = document.getElementById('btnMusic');

    if (state.musicPlaying) {
        stopMusic();
        btn.classList.remove('playing');
        btn.textContent = '🎵';
    } else {
        playMusic();
        btn.classList.add('playing');
        btn.textContent = '🔊';
    }

    state.musicPlaying = !state.musicPlaying;
}

function playMusic() {
    if (!state.audioContext) {
        state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const ctx = state.audioContext;

    const notes = [
        { freq: 262, dur: 0.4 },
        { freq: 262, dur: 0.4 },
        { freq: 294, dur: 0.8 },
        { freq: 262, dur: 0.8 },
        { freq: 349, dur: 0.8 },
        { freq: 330, dur: 1.2 },

        { freq: 262, dur: 0.4 },
        { freq: 262, dur: 0.4 },
        { freq: 294, dur: 0.8 },
        { freq: 262, dur: 0.8 },
        { freq: 392, dur: 0.8 },
        { freq: 349, dur: 1.2 },

        { freq: 262, dur: 0.4 },
        { freq: 262, dur: 0.4 },
        { freq: 523, dur: 0.8 },
        { freq: 440, dur: 0.8 },
        { freq: 349, dur: 0.8 },
        { freq: 330, dur: 0.8 },
        { freq: 294, dur: 1.2 },

        { freq: 466, dur: 0.4 },
        { freq: 466, dur: 0.4 },
        { freq: 440, dur: 0.8 },
        { freq: 349, dur: 0.8 },
        { freq: 392, dur: 0.8 },
        { freq: 349, dur: 1.6 },
    ];

    let time = ctx.currentTime + 0.1;
    state.musicNodes = [];

    notes.forEach(note => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, time);

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.15, time + 0.05);
        gain.gain.linearRampToValueAtTime(0.1, time + note.dur * 0.8);
        gain.gain.linearRampToValueAtTime(0, time + note.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + note.dur + 0.05);

        state.musicNodes.push(osc);
        time += note.dur;
    });

    const totalDuration = notes.reduce((sum, n) => sum + n.dur, 0) * 1000;
    state.musicLoop = setTimeout(() => {
        if (state.musicPlaying) {
            playMusic();
        }
    }, totalDuration + 500);
}

function stopMusic() {
    if (state.musicNodes) {
        state.musicNodes.forEach(osc => {
            try { osc.stop(); } catch (e) { }
        });
    }
    if (state.musicLoop) {
        clearTimeout(state.musicLoop);
    }
}

// ============================================
// EFECTO DE ESTRELLA AL CLIC
// ============================================

document.addEventListener('click', (e) => {
    if (!state.started) return;

    const star = document.createElement('span');
    star.textContent = '✨';
    star.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: 1.5rem;
        z-index: 9999;
        animation: clickStar 0.8s ease forwards;
    `;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 800);
});

const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes clickStar {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 0.8; }
        100% { transform: scale(0) rotate(360deg) translateY(-30px); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
