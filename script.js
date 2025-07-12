// 1. Menu Mobile - Sidebar Implementation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarClose = document.getElementById('sidebar-close');
    const body = document.body;
    
    // Debug: verifica che tutti gli elementi esistano
    console.log('Sidebar elements check:', {
        hamburger: !!hamburger,
        mobileSidebar: !!mobileSidebar,
        sidebarOverlay: !!sidebarOverlay,
        sidebarClose: !!sidebarClose
    });
    
    // Funzione per aprire la sidebar
    function openSidebar() {
        console.log('Opening sidebar');
        if (mobileSidebar) mobileSidebar.classList.add('active');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        if (hamburger) hamburger.classList.add('active');
        if (body) body.classList.add('sidebar-open');
        
        // Imposta il focus sul pulsante di chiusura per l'accessibilità
        if (sidebarClose) sidebarClose.focus();
    }
    
    // Funzione per chiudere la sidebar
    function closeSidebar() {
        console.log('Closing sidebar');
        if (mobileSidebar) mobileSidebar.classList.remove('active');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
        if (body) body.classList.remove('sidebar-open');
        
        // Ripristina il focus sul pulsante hamburger
        if (hamburger) hamburger.focus();
    }
    
    // Event listener per il pulsante hamburger
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            console.log('Hamburger clicked');
            e.preventDefault();
            e.stopPropagation();
            
            if (mobileSidebar && mobileSidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    } else {
        console.log('Hamburger button not found');
    }
    
    // Event listener per il pulsante di chiusura
    if (sidebarClose) {
        sidebarClose.addEventListener('click', function(e) {
            console.log('Close button clicked');
            e.preventDefault();
            closeSidebar();
        });
    }
    
    // Event listener per l'overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function(e) {
            console.log('Overlay clicked');
            e.preventDefault();
            closeSidebar();
        });
    }
    
    // Chiudi sidebar quando clicchi sui link di navigazione
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    console.log('Found sidebar links:', sidebarLinks.length);
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Sidebar link clicked');
            closeSidebar();
        });
    });
    
    // Gestione della tastiera per l'accessibilità
    document.addEventListener('keydown', function(e) {
        // Chiudi con Esc
        if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
            closeSidebar();
        }
        
        // Gestione del Tab per mantenere il focus nella sidebar
        if (e.key === 'Tab' && mobileSidebar.classList.contains('active')) {
            const focusableElements = mobileSidebar.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
    
    // Chiudi sidebar quando la finestra viene ridimensionata (desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileSidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    // Impedisci lo scroll del body quando la sidebar è aperta
    mobileSidebar.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    });
    
    sidebarOverlay.addEventListener('touchmove', function(e) {
        e.preventDefault();
    });
});

// 2. Esempi di codice (solo per la home page)
const codeExamples = [
    `<span class="comment"># Hello World in NOOBIE</span>
<span class="keyword">SAY</span> <span class="string">"Hello, World!"</span>
<span class="output">--> Hello, World!</span>`,
    
    `<span class="comment"># Input in NOOBIE</span>
<span class="keyword">LISTEN INT</span> <span class="string">listened "Enter a number: "</span>
<span class="keyword">SAY</span> <span class="string">"You entered:" listened</span>
<span class="output">--> You entered: 42</span>`,
    
    `<span class="comment"># Variables in NOOBIE</span>
<span class="keyword">CREATE INT</span> x 5
<span class="keyword">CREATE INT</span> y 3
<span class="keyword">SAY</span> <span class="string">"x + y = {x + y}"</span>
<span class="output">--> x + y = 8</span>`
];

function showCode(index) {
    const codeDisplay = document.getElementById('code-display');
    const buttons = document.querySelectorAll('.code-buttons button');
    
    if (!codeDisplay || !buttons.length) return;
    
    // Verifica che l'indice sia valido
    if (index < 1 || index > codeExamples.length) return;
    
    // Aggiorna il contenuto con animazione
    codeDisplay.style.opacity = '0.5';
    
    setTimeout(() => {
        codeDisplay.innerHTML = `<pre>${codeExamples[index - 1]}</pre>`;
        codeDisplay.style.opacity = '1';
    }, 150);
    
    // Aggiorna i pulsanti attivi
    buttons.forEach((button, i) => {
        if (i + 1 === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// 3. Auto-rotazione degli esempi di codice (opzionale)
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('code-display')) {
        let currentIndex = 1;
        let autoRotateInterval;
        
        // Funzione per avviare la rotazione automatica
        function startAutoRotate() {
            autoRotateInterval = setInterval(() => {
                currentIndex = currentIndex >= codeExamples.length ? 1 : currentIndex + 1;
                showCode(currentIndex);
            }, 5000);
        }
        
        // Funzione per fermare la rotazione automatica
        function stopAutoRotate() {
            if (autoRotateInterval) {
                clearInterval(autoRotateInterval);
            }
        }
        
        // Inizializza con il primo esempio
        showCode(1);
        
        // Avvia la rotazione automatica
        startAutoRotate();
        
        // Ferma la rotazione quando l'utente interagisce con i pulsanti
        const codeButtons = document.querySelectorAll('.code-buttons button');
        codeButtons.forEach(button => {
            button.addEventListener('click', function() {
                stopAutoRotate();
                
                // Riprendi la rotazione dopo 10 secondi di inattività
                setTimeout(() => {
                    startAutoRotate();
                }, 10000);
            });
        });
        
        // Ferma la rotazione quando la finestra perde il focus
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopAutoRotate();
            } else {
                startAutoRotate();
            }
        });
    }
});

// 4. Smooth scrolling per i link interni
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Chiudi la sidebar se è aperta
                const mobileSidebar = document.getElementById('mobile-sidebar');
                if (mobileSidebar && mobileSidebar.classList.contains('active')) {
                    const hamburger = document.getElementById('hamburger');
                    const sidebarOverlay = document.getElementById('sidebar-overlay');
                    const body = document.body;
                    
                    mobileSidebar.classList.remove('active');
                    sidebarOverlay.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.classList.remove('sidebar-open');
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 5. Gestione caricamento PDF (solo per documentation.html)
function hidePdfLoading() {
    const loading = document.getElementById('pdf-loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

function showPdfError() {
    const loading = document.getElementById('pdf-loading');
    const error = document.getElementById('pdf-error');
    if (loading) loading.style.display = 'none';
    if (error) error.style.display = 'flex';
}

// 6. Controllo caricamento PDF con timeout
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('.pdf-viewer');
    
    if (iframe) {
        // Timeout per il caricamento del PDF
        setTimeout(function() {
            try {
                // Prova ad accedere al contenuto dell'iframe
                if (iframe.contentDocument === null) {
                    showPdfError();
                } else {
                    hidePdfLoading();
                }
            } catch (e) {
                // Errore cross-origin probabilmente significa che il PDF è caricato
                hidePdfLoading();
            }
        }, 3000);
        
        // Event listeners per il caricamento
        iframe.addEventListener('load', hidePdfLoading);
        iframe.addEventListener('error', showPdfError);
    }
});

// 7. Prevenzione del comportamento di default per pulsanti
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button:not(.sidebar-close)');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Non prevenire il default per i pulsanti che hanno funzioni specifiche
            if (!this.onclick && !this.getAttribute('onclick')) {
                e.preventDefault();
            }
        });
    });
});

// 8. Gestione della visibilità della pagina
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

// 9. Gestione errori globale
window.addEventListener('error', function(e) {
    console.error('Errore JavaScript:', e.error);
});

// 10. Gestione del touch per dispositivi mobili
document.addEventListener('DOMContentLoaded', function() {
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    if (mobileSidebar && sidebarOverlay) {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        // Touch start
        mobileSidebar.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        // Touch move
        mobileSidebar.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            const diffX = startX - currentX;
            
            // Se l'utente sta trascinando verso sinistra
            if (diffX > 0) {
                const transform = Math.min(diffX, 300);
                mobileSidebar.style.transform = `translateX(-${transform}px)`;
                
                // Riduci l'opacità dell'overlay
                const opacity = Math.max(0, 0.5 - (diffX / 600));
                sidebarOverlay.style.opacity = opacity;
            }
        });
        
        // Touch end
        mobileSidebar.addEventListener('touchend', function(e) {
            if (!isDragging) return;
            
            isDragging = false;
            const diffX = startX - currentX;
            
            // Reset degli stili
            mobileSidebar.style.transform = '';
            sidebarOverlay.style.opacity = '';
            
            // Se l'utente ha trascinato abbastanza, chiudi la sidebar
            if (diffX > 100) {
                const hamburger = document.getElementById('hamburger');
                const body = document.body;
                
                mobileSidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('sidebar-open');
            }
        });
    }
});

// 11. Gestione orientamento dispositivo
window.addEventListener('orientationchange', function() {
    // Piccolo delay per permettere al browser di aggiornare le dimensioni
    setTimeout(function() {
        const mobileSidebar = document.getElementById('mobile-sidebar');
        if (mobileSidebar && mobileSidebar.classList.contains('active')) {
            // Se siamo in landscape e la larghezza è grande, chiudi la sidebar
            if (window.innerWidth > 768) {
                const hamburger = document.getElementById('hamburger');
                const sidebarOverlay = document.getElementById('sidebar-overlay');
                const body = document.body;
                
                mobileSidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('sidebar-open');
            }
        }
    }, 200);
});

// 12. Funzioni legacy per compatibilità
window.toggleMenu = function() {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.click();
    }
};

window.showCode = showCode;

// 13. Animazioni di entrata per gli elementi
document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi classe di animazione agli elementi quando entrano nel viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Osserva gli elementi che devono essere animati
    const animatedElements = document.querySelectorAll('.hero-content, .about-intro-section, .vision-section, .why-noobie-section, .future-section, .code-example');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// 14. Gestione performance e ottimizzazioni
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading per le immagini (se supportato)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Preload delle immagini critiche
    const criticalImages = [
        '../loghi/logo_scritta_bianco.png',
        '../loghi/logo_originale.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Ottimizzazione del resize event
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Aggiorna le dimensioni se necessario
            const mobileSidebar = document.getElementById('mobile-sidebar');
            if (mobileSidebar && window.innerWidth > 768) {
                if (mobileSidebar.classList.contains('active')) {
                    const hamburger = document.getElementById('hamburger');
                    const sidebarOverlay = document.getElementById('sidebar-overlay');
                    const body = document.body;
                    
                    mobileSidebar.classList.remove('active');
                    sidebarOverlay.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.classList.remove('sidebar-open');
                }
            }
        }, 250);
    });
});
