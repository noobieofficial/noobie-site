// variabili
let pressed = false;
const cookie = document.getElementById("cookie");
const error = document.getElementById("pdf-error");
const english = document.getElementById("english");
const italian = document.getElementById("italian");
const overlay = document.getElementById("overlay");
const iframe = document.querySelector('.pdf-viewer');
const hamburger = document.getElementById("hamburger");
const loading = document.getElementById('pdf-loading');
const display = document.getElementById('code-display');
const sidebar = document.getElementById("mobile-sidebar");
const elements = document.querySelectorAll("[data-i18n]");
const close_sidebar = document.getElementById("sidebar-close");
const settingsTitle = document.querySelector('.settings-title');
const buttons = document.querySelectorAll(".code-buttons button");

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.settings": "Settings",
    "nav.docs": "Documentation",
    "settings.title": "Settings",
    "settings.language": "Language",
    "noobie.button": "start coding",
    "settings.cookie": "Cookie Consent",
    "code.title": "Noobie Code Example",
    "about.why.title": "Why choose NOOBIE",
    "documentation.open": "Open in New Tab",
    "documentation.download": "Download PDF",
    "about.why.title": "The futurue is NOOBIE",
    "about.vision.title": "My vision of NOOBIE",
    "noobie.title": "Learn programming from scratch",
    "documentation.title": "NOOBIE Programming Guide",
    "code.message": "Noobie is simple, fun, and powerfull",
    "footer.motto": "© 2025 NOOBIE. Made with ❤️ for beginner coders",
    "settings.cookie.description": "Allow essential cookies for a better experience",
    "about.intro.title": "Hi, I'm <span class=\"me\">Luca</span>, the creator of NOOBIE!",
    "about.vision2": "My goal is to create tools that make learning to code fun and engaging while also being powerful enough to build real-world applications.",
    "about.future2": "Thank you for being here! If you're curious, start your adventure in the world of programming! Every comment and feedback from you is precious!",
    "noobie.description": "Noobie is a programming language designed for people starting from scratch. Simple syntax, vast versatility and lots of fun. With Noobie programming will be a breeze!",
    "about.why2": "Whether you're building your first \"Hello World\" program or developing complex applications, NOOBIE grows with you. It's powerful enough for serious projects but simple enough that anyone can learn it.",
    "about.future1": "I'm super excited to continue growing NOOBIE! I have so many ideas for new features and useful resources for those who use it. I'm thinking of ready-to-use code libraries and even more detailed guides. I hope you'll want to join me on this journey!",
    "about.why1": "NOOBIE stands out because it's designed with beginners in mind. Unlike other programming languages that can be intimidating,  NOOBIE uses simple, intuitive syntax that feels natural to read and write. You don't need years of study to start creating amazing things.",
    "about.vision1": " For me NOOBIE is not just a programming language, I want NOOBIE to be a concept that inspires creativity and innovation. I believe that programming should be accessible to everyone, regardless of their background, experience or age. NOOBIE is designed to be a friendly and welcoming language, perfect for those who are just starting out.",
    "about.intro": "I am just a 17-year-old Italian boy with a great passion for programming. I started writing code when I was only 11, driven by curiosity and the desire to create. Over the years I have experimented, learned and improved one project (and a few bugs) at a time. I enjoy taking on new challenges, finding creative solutions and growing a little bit every day. It is because of all this that NOOBIE was born."
  },

  it: {
    "nav.home": "Home",
    "nav.about": "Chi siamo",
    "nav.docs": "Documentazione",
    "settings.language": "Lingua",
    "nav.settings": "Impostazioni",
    "settings.title": "Impostazioni",
    "noobie.button": "inizia subito",
    "settings.cookie": "Consenso Cookie",
    "documentation.download": "Scarica il PDF",
    "about.future.title": "Il futuro è NOOBIE",
    "about.why.title": "Perchè scegliere NOOBIE?",
    "code.title": "Esempi di programmi in Noobie",
    "documentation.open": "Apri in una nuova scheda",
    "about.vision.title": "La mia visione per NOOBIE",
    "documentation.title": "Guida ufficiale di NOOBIE",
    "noobie.title": "Impara a programmare partendo da zero",
    "code.message": "Noobie è semplice, divertente e potente",
    "footer.motto": "© 2025 NOOBIE. Fatto con il ❤️ per i giovani programmatori",
    "about.intro.title": "Ciao, sono <span class=\"me\">Luca</span>, il creatore di NOOBIE!",
    "settings.cookie.description": "Consenti i cookie essenziali per una migliore esperienza",
    "about.future2": "Grazie mille per essere passato da questo sito! Se sei curioso, inizia la tua avventura nel mondo della programmazione! Ogni recensione e feedback sono molto preziosi!",
    "about.why2": "Che tu stia creando il tuo primo programma \"Hello World\" o sviluppando applicazioni complesse, NOOBIE cresce insieme a te. È abbastanza potente per progetti seri, ma così semplice che chiunque può impararlo.",
    "noobie.description": "Noobie è un linguaggio di programmazione creato su misura per coloro che partono da zero. Sintassi mininale, semplice, vasta versalitità e tantissimo divertimento. Con Noobie programmare sarà uno spasso!",
    "about.vision2": "Il mio obbiettivo è quello di creare strumenti che permettono di approcciarsi all'informatica in modo divertente ma che allo stesso tempo siano abbastanza potenti da poter creare delle vere e proprioe applicazioni utili",
    "about.future1": "Sono super entusiasta di continuare a far crescere NOOBIE! Ho tantissime idee per nuove funzionalità e risorse utili per chi lo utilizza. Sto pensando a librerie di codice pronte all’uso e guide ancora più dettagliate. Spero che vorrai accompagnarmi in questo viaggio!",
    "about.why1": "NOOBIE si distingue perché è progettato pensando ai principianti. A differenza di altri linguaggi di programmazione che possono risultare intimidatori, NOOBIE utilizza una sintassi semplice e intuitiva, che risulta naturale da leggere e scrivere. Non servono anni di studio per iniziare a creare cose straordinarie.",
    "about.vision1": "Per me NOOBIE non è solo un linguaggio di programmazione, voglio che NOOBIE sia un concetto che ispiri creatività e innovazione. Credo che la programmazione debba essere accessibile a tutti, indipendentemente dal proprio background, dall’esperienza o dall’età. NOOBIE è progettato per essere un linguaggio amichevole e accogliente, perfetto per chi sta iniziando da zero.",
    "about.intro": "Sono un ragazzo italiano di 17 anni con una grande passione per la programmazione. Ho iniziato a scrivere codice quando avevo solo 11 anni, spinto dalla curiosità e dal desiderio di creare. Negli anni ho sperimentato, imparato e migliorato un progetto (e qualche bug) alla volta. Mi piace affrontare nuove sfide, trovare soluzioni creative e crescere un po' ogni giorno. Ed è proprio grazie a tutto questo che è nato NOOBIE."
  }
};

const code = [
  `<span class="comment">  # Hello World in NOOBIE</span>
   <span class="keyword">SAY</span> <span class="string">"Hello, World!"</span>
   <span class="output">--> Hello, World!</span>`,

  `<span class="comment">  # Input in NOOBIE</span>
   <span class="keyword">LISTEN INT</span><span> this_is_an_input</span><span class="string"> "Enter a number: "</span>
   <span class="keyword">SAY</span> <span class="string">"You entered: "</span><span> this_is_an_input</span>
   <span class="output">--> You entered: 42</span>`,

  `<span class="comment">  # Variables in NOOBIE</span>
   <span class="keyword">CREATE INT </span><span>x</span> 5
   <span class="keyword">CREATE INT </span><span>y</span> 3
   <span class="keyword">SAY</span> <span class="string">"x + y = {x + y}"</span>
   <span class="output">--> x + y = 8</span>`
]



// GESTIONE DELLA SIDEBAR
if (hamburger && sidebar && overlay) {
  hamburger.addEventListener('click', () => {
    if (!pressed) {
      sidebar.style.display = "block";
      sidebar.classList.remove("close");
      sidebar.classList.add("open");
      overlay.classList.add("active");
      pressed = true;
    } else {
      closeSidebar();
    }
  });
}

if (close_sidebar) {
  close_sidebar.addEventListener('click', closeSidebar);
}

if (overlay) {
  overlay.addEventListener('click', closeSidebar);
}

function closeSidebar() {
  if (sidebar && overlay) {
    sidebar.classList.remove("open");
    sidebar.classList.add("close");
    overlay.classList.remove("active");

    setTimeout(() => {
      sidebar.style.display = "none";
    }, 700);
    pressed = false;
  }
}





// GESTIONE DEI COOKIES
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
}

// Gestione cambio lingua
function setLanguage(lang) {
  const consent = getCookie("cookieConsent");
  if (consent === "true") {
    setCookie("language", lang, 365);
  }
  updateLanguageUI(lang);
  translateContent(lang);
}

function updateLanguageUI(lang) {
  if (!english || !italian) return;

  english.classList.remove("active");
  italian.classList.remove("active");

  if (lang === "it") {
    italian.classList.add("active");
  } else {
    english.classList.add("active");
  }
}

if (english) {
  english.addEventListener("click", () => {
    setLanguage("en");
  });
}

if (italian) {
  italian.addEventListener("click", () => {
    setLanguage("it");
  });
}

if (cookie) {
  cookie.addEventListener("change", () => {
    const consent = cookie.checked;
    setCookie("cookieConsent", consent.toString(), 365);

    if (!consent) {
      document.cookie = "language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedCookieConsent = getCookie("cookieConsent");

  if (cookie) {
    if (savedCookieConsent === "true") {
      cookie.checked = true;
    } else {
      cookie.checked = false;
    }
  }

  let lang = "en";
  if (savedCookieConsent === "true") {
    const savedLang = getCookie("language");
    if (savedLang) lang = savedLang;
  }

  updateLanguageUI(lang);
  translateContent(lang);
});

function translateContent(lang) {
  if (!translations[lang]) {
    lang = "en";
  }

  elements.forEach(el => {

    const isStaticFooter = el.closest('.sidebar-footer') && el.tagName === 'P';
    if (isStaticFooter) return;

    const key = el.getAttribute("data-i18n");
    const textSpan = el.querySelector(".text");

    if (translations[lang][key]) {
      if (textSpan) {
        textSpan.innerHTML = translations[lang][key]; 
      } else {
        el.innerHTML = translations[lang][key];
      }
    }

  });

  translateStaticElements(lang);
}

function translateStaticElements(lang) {
  if (settingsTitle && translations[lang]["settings.title"]) {
    settingsTitle.textContent = translations[lang]["settings.title"];
  }

  const languageSection = document.querySelector('.settings-section h3');
  if (languageSection && (languageSection.textContent.includes('Language') || languageSection.textContent.includes('Lingua'))) {
    languageSection.textContent = translations[lang]["settings.language"];
  }

  const cookieSection = document.querySelectorAll('.settings-section h3')[1];
  if (cookieSection && (cookieSection.textContent.includes('Cookie') || cookieSection.textContent.includes('Consenso'))) {
    cookieSection.textContent = translations[lang]["settings.cookie"];
  }

  const cookieDescription = document.querySelector('.cookie-toggle span');
  if (cookieDescription && translations[lang]["settings.cookie.description"]) {
    cookieDescription.textContent = translations[lang]["settings.cookie.description"];
  }
}





// GESTIONE ANIMAZIONI CODICI INDEX
function showCode(index) {
  if (!display || !buttons.length) return;

  if (index < 1 || index > code.length) return;

  display.style.opacity = '0.5';

  setTimeout(() => {
    display.innerHTML = `<pre> ${code[index - 1]}</pre>`;
    display.style.opacity = '1';
  }, 150);

  buttons.forEach((button, i) => {
    if (i + 1 === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('code-display')) {
        let currentIndex = 1;
        let autoRotateInterval;
        
        function startAutoRotate() {
            autoRotateInterval = setInterval(() => {
                currentIndex = currentIndex >= code.length ? 1 : currentIndex + 1;
                showCode(currentIndex);
            }, 5000);
        }
        
        function stopAutoRotate() {
            if (autoRotateInterval) {
                clearInterval(autoRotateInterval);
            }
        }
        showCode(1);
        
        startAutoRotate();
        
        const codeButtons = document.querySelectorAll('.code-buttons button');
        codeButtons.forEach(button => {
            button.addEventListener('click', function() {
                stopAutoRotate();
                
                setTimeout(() => {
                    startAutoRotate();
                }, 10000);
            });
        });
        
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopAutoRotate();
            } else {
                startAutoRotate();
            }
        });
    }
});





// GESTIONE ERRORI E CARICAMENTO PDF
function showPDFerror() {
  if (error) error.style.display = 'flex';
  if (loading) loading.style.display = 'none';
}

function hidePDFloading() {
  if (loading) loading.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  if (iframe) {
    setTimeout(() => {
      try {
        if (iframe.contentDocument === null) {
          showPDFerror();
        } else {
          hidePDFloading();
        }
      } catch(e) {
        hidePDFloading();
      }
    }, 3000);

    iframe.addEventListener('error', showPDFerror);
    iframe.addEventListener('load', hidePDFloading);
  }
});
