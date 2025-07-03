// Mobile menu toggle functionality
const menuIcon = document.querySelector(".menu-icon");
const navbarMenu = document.querySelector(".navbar ul");

  function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('show');
  }



// Code examples data
const codeSnippets = [
    {
        code: `<span class='comment'># Hello World in NOOBIE</span>
<span class='keyword'>SAY</span> <span class='string'>"Hello, World!" end</span>
<span class='output'>--> Hello, World!</span>`,
        title: "Hello World Example"
    },
    {
        code: `<span class='comment'># Input in NOOBIE</span>
<span class='keyword'>LISTEN INT listened </span> <span class='string'>"Enter a number: "</span> <span class='output'></span>
<span class='keyword'>SAY</span> <span class='string'>"You entered:" listened end</span>
<span class='output'>--> You entered: 3</span>`,
        title: "User Input Example"
    },
    {
        code: `<span class='comment'># Variables in NOOBIE</span>
<span class='keyword'>CREATE INT x</span> 5
<span class='keyword'>CREATE INT y</span> 3
<span class='keyword'>SAY</span> <span class='string'>"x + y = {x + y}"</span>
<span class='output'>--> x + y = 8</span>`,
        title: "Variables Example"
    }
];

// Function to display code examples
function showCode(index) {
    // Validate index
    if (index < 1 || index > codeSnippets.length) {
        console.error('Invalid code example index');
        return;
    }
    
    // Get the code display element
    const codeDisplay = document.getElementById('code-display');
    if (!codeDisplay) {
        console.error('Code display element not found');
        return;
    }
    
    // Update the code content
    const snippet = codeSnippets[index - 1];
    codeDisplay.innerHTML = `<pre>${snippet.code}</pre>`;
    
    // Update active button state
    updateActiveButton(index);
    
    // Add smooth transition effect
    codeDisplay.style.opacity = '0';
    setTimeout(() => {
        codeDisplay.style.opacity = '1';
    }, 150);
}

// Function to update active button styling
function updateActiveButton(activeIndex) {
    const buttons = document.querySelectorAll('.code-buttons button');
    buttons.forEach((button, index) => {
        if (index + 1 === activeIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up menu toggle event listener
    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    }
    
    // Initialize with first code example
    showCode(1);
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add download tracking (optional)
    const downloadButton = document.querySelector('.cta-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            console.log('Download initiated for Windows version');
            // You can add analytics tracking here if needed
        });
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const isClickInsideNavbar = navbar.contains(event.target);
    
    if (!isClickInsideNavbar && navbarMenu.classList.contains('show')) {
        navbarMenu.classList.remove('show');
    }
});

// Close mobile menu when window is resized to desktop size
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navbarMenu.classList.contains('show')) {
        navbarMenu.classList.remove('show');
    }
});

// Add keyboard navigation for code examples
document.addEventListener('keydown', function(event) {
    if (event.target.closest('.code-buttons')) {
        const buttons = document.querySelectorAll('.code-buttons button');
        const currentActive = document.querySelector('.code-buttons button.active');
        let currentIndex = Array.from(buttons).indexOf(currentActive);
        
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                if (currentIndex > 0) {
                    showCode(currentIndex);
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (currentIndex < buttons.length - 1) {
                    showCode(currentIndex + 2);
                }
                break;
        }
    }
});
