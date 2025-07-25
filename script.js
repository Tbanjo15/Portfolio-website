// Portfolio Projects Data - Remove Python and Figma references
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment integration, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
        github: "#",
        demo: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["Vue.js", "CSS3", "JavaScript", "Express", "Socket.io", "PostgreSQL"],
        github: "#",
        demo: "#"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather application with location-based forecasts, interactive charts, and beautiful data visualizations.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "API Integration"],
        github: "#",
        demo: "#"
    },
    {
        title: "Social Media Dashboard",
        description: "A comprehensive analytics dashboard for social media management with real-time data, scheduling features, and performance metrics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["React", "CSS3", "D3.js", "Node.js", "REST API"],
        github: "#",
        demo: "#"
    },
    {
        title: "Restaurant Website",
        description: "A modern restaurant website with online ordering system, reservation management, and customer review features.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        github: "#",
        demo: "#"
    },
    {
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout logging, progress visualization, and social sharing features.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Local Storage"],
        github: "#",
        demo: "#"
    }
];

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const portfolioGrid = document.getElementById('portfolio-grid');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const toastClose = document.getElementById('toast-close');

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Load portfolio projects
function loadPortfolio() {
    portfolioGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title} mockup" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link">
                        <i class="fab fa-github"></i>
                        Code
                    </a>
                    <a href="${project.demo}" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(projectCard);
    });
}

// Form validation
function validateForm(formData) {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
        errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
        errors.subject = 'Subject must be at least 3 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
}

// Display form errors
function displayErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    // Display new errors
    Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(`${field}-error`);
        if (errorElement) {
            errorElement.textContent = errors[field];
        }
    });
}

// Show toast notification
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideToast();
    }, 5000);
}

// Hide toast notification
function hideToast() {
    toast.classList.remove('show');
}

// Contact form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
        displayErrors(errors);
        return;
    }
    
    // Clear any previous errors
    displayErrors({});
    
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    try {
        // Simulate API call (replace with actual endpoint)
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showToast('Message sent successfully! Thank you for reaching out.', 'success');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        showToast('Failed to send message. Please try again later.', 'error');
    } finally {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

// Close toast when clicking close button
toastClose.addEventListener('click', hideToast);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe sections for animations
document.addEventListener('DOMContentLoaded', () => {
    // Load portfolio projects
    loadPortfolio();
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add loading animation to project cards
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        });
    }, 100);
});

// Typing effect for hero section (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on hero load (optional)
window.addEventListener('load', () => {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        typeWriter(heroName, originalText, 150);
    }
});

// Parallax effect for hero background (optional enhancement)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Skills hover effect enhancement
document.addEventListener('DOMContentLoaded', () => {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Smooth reveal animations for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const finalNumber = parseInt(stat.textContent);
        let currentNumber = 0;
        const increment = finalNumber / 50;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            stat.textContent = Math.floor(currentNumber) + '+';
            
            if (currentNumber >= finalNumber) {
                stat.textContent = finalNumber + '+';
                clearInterval(timer);
            }
        }, 30);
    });
}

// Trigger stats animation when about section is visible
const aboutSection = document.getElementById('about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

