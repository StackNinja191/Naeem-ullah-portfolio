// ================================================
// NAEEM ULLAH - OPTIMIZED PORTFOLIO JAVASCRIPT
// Clean, Modern & Performance Optimized
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initPageLoader();
    initCustomCursor();
    initMobileMenu();
    initSmoothScrolling();
    initTypingAnimation();
    initAOS();
    initTiltEffect();
    initSkillProgressBars();
    initStatsCounter();
    initProjectFilter();
    initContactForm();
    initBackToTop();
    initActiveNavigation();
    initParticleSystem();
});

// ============ PAGE LOADER (FIXED & FASTER) ===========
// ============ PAGE LOADER (FIXED & FASTER) ===========
function initPageLoader() {
    const loader = document.getElementById('page-loader');
    
    // Agar loader HTML me mojood hai tab hi chalaye
    if (loader) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 2000); // <--- Yahan 300 ki jaga 2500 kar dein (Ab ye 2.5 seconds rukega)
        });

        // Backup: Agar internet slow ho, to 5 second baad zabardasti hata de
        // (Isay bhi 3000 se barha kar 5000 kar dein taake ye pehle wale se takraye nahi)
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 5000);
    }
}

// ============ CUSTOM CURSOR (Desktop Only) ============
function initCustomCursor() {
    if (window.innerWidth > 768) {
        const cursor = document.getElementById('custom-cursor');
        // Follower ko humne nikaal diya kyunke aapko nahi chahiye
        
        document.addEventListener('mousemove', (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        });
        
        // Hover effects (sirf main cursor par apply honge)
        const interactiveElements = document.querySelectorAll('a, button, .interactive, .skill-card, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }
}

// ============ MOBILE MENU TOGGLE ============
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');

    if (mobileMenuBtn && mobileMenu) {
        // Ensure button is always visible
        mobileMenuBtn.style.opacity = '1';
        mobileMenuBtn.style.visibility = 'visible';
        mobileMenuBtn.style.display = 'flex';
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.className = 'fas fa-bars';
            } else {
                menuIcon.className = 'fas fa-times';
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fas fa-bars';
            });
        });
    }
}

// ============ SMOOTH SCROLLING ============
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith("#") && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============ TYPING ANIMATION ============
function initTypingAnimation() {
    const typedElement = document.getElementById('typed-text');
    
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Frontend Developer',
                'UI/UX Enthusiast',
                'Web Designer',
                'Creative Coder'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// ============ INITIALIZE AOS ANIMATIONS ============
function initAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
        once: true,
        mirror: false,
        offset: 50,          // Mobile pe thora jaldi trigger ho jaye
        disable: false,      // Isay 'false' rakhen taake mobile pe chale
        disableMutationObserver: false
    });
}

// ============ 3D TILT EFFECT (Desktop Only) ============
function initTiltEffect() {
    if (typeof VanillaTilt !== 'undefined' && window.innerWidth > 768) {
        VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
            max: 8,
            speed: 400,
            glare: true,
            'max-glare': 0.15
        });
    }
}

// ============ SKILL PROGRESS BARS ANIMATION ============
function initSkillProgressBars() {
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ============ STATS COUNTER ANIMATION ============
function initStatsCounter() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 1500;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// ============ PROJECT FILTER ============
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============ CONTACT FORM ============
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateField(this);
            });
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Animate submit button
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
                    submitBtn.classList.remove('from-accent-blue', 'to-accent-purple');
                    submitBtn.classList.add('from-green-500', 'to-green-600');
                    
                    // Show success message
                    showNotification('Message sent successfully! I will get back to you soon.', 'success');
                    
                    // Reset form
                    setTimeout(() => {
                        form.reset();
                        submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send Message';
                        submitBtn.classList.remove('from-green-500', 'to-green-600');
                        submitBtn.classList.add('from-accent-blue', 'to-accent-purple');
                        submitBtn.disabled = false;
                        
                        // Clear validation styles
                        inputs.forEach(input => {
                            input.classList.remove('border-red-500', 'border-green-500');
                        });
                    }, 2000);
                }, 1200);
            }
        });
    }
}

// ============ FIELD VALIDATION ============
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    field.classList.remove('border-red-500', 'border-green-500');
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    } else if (field.type === 'email') {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (value.length > 0 && value.length < 2) {
        isValid = false;
    }
    
    if (value) {
        field.classList.add(isValid ? 'border-green-500' : 'border-red-500');
    }
    
    return isValid;
}

// ============ SHOW NOTIFICATION ============
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 sm:right-8 px-6 py-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white transform translate-x-full transition-transform duration-300 max-w-sm`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ BACK TO TOP BUTTON ============
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============ ACTIVE NAVIGATION HIGHLIGHTING ============
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active', 'text-accent-blue');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active', 'text-accent-blue');
            }
        });
    });
}

// ============ PARTICLE SYSTEM (Desktop Only) ============
function initParticleSystem() {
    const particlesContainer = document.querySelector('.particles');
    
    if (particlesContainer && window.innerWidth > 768) {
        // Create particles
        for (let i = 0; i < 15; i++) {
            createParticle(particlesContainer);
        }
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const left = Math.random() * 100;
    const animationDuration = 15 + Math.random() * 10;
    const delay = Math.random() * 20;
    const size = 2 + Math.random() * 2;
    
    particle.style.cssText = `
        left: ${left}%;
        animation-duration: ${animationDuration}s;
        animation-delay: ${delay}s;
        width: ${size}px;
        height: ${size}px;
    `;
    
    container.appendChild(particle);
}

// ============ PERFORMANCE OPTIMIZATION ============
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            ticking = false;
        });
        ticking = true;
    }
});

// Debounce resize events
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Re-initialize features that depend on window size
        if (window.innerWidth <= 768) {
            const cursor = document.getElementById('custom-cursor');
            const follower = document.getElementById('custom-cursor-follower');
            if (cursor) cursor.style.display = 'none';
            if (follower) follower.style.display = 'none';
        }
    }, 250);
});

// ============ CONSOLE MESSAGE ============
console.log('%c🚀 Naeem Ullah Portfolio', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%c👨‍💻 Frontend Developer', 'color: #a855f7; font-size: 16px;');
console.log('%c✨ Optimized & Modern', 'color: #00d4ff; font-size: 14px;');
