// Project Data
const projects = [
    {
        id: 'acadental',
        title: 'XR Simulation Platform (Acadental)',
        summary: 'A modular multi-user VR training platform supporting authentication, licensing, persistence, analytics, and real-time procedural simulation.',
        role: 'Senior Software Engineer | Core Systems',
        techStack: ['Unity', 'C#', 'OpenXR', 'Photon', 'Netcode'],
        image: 'src/Teo.png',
        video: null,
        keyContributions: [
            'Designed multi-user state synchronization architecture for high-fidelity training.',
            'Built persistent save-state and replay system for educational review.',
            'Implemented voxel-based procedural simulation for realistic surgical feedback.',
            'Integrated production error reporting and analytics for enterprise stability.'
        ],
        breakdown: {
            decisions: 'Adopted a modular state-based architecture to allow parallel development of simulation modules and decoupled UI systems.',
            challenges: 'Achieving consistent 72Hz+ performance on standalone VR hardware while processing complex voxel modifications and high-density network updates.',
            performance: 'Optimized vertex buffering and spatial partitioning to reduce draw calls and memory overhead during real-time voxel manipulation.',
            scalability: 'Designed the networking layer to be provider-agnostic, allowing seamless transitions between Photon and Unity Netcode depending on deployment needs.'
        }
    },
    {
        id: 'solar-xr',
        title: 'Solar XR (WebXR)',
        summary: 'A cross-platform AR application enabling spatial placement and interactive orbital simulation of the solar system.',
        role: 'Technical Lead | WebXR Systems',
        techStack: ['JavaScript', 'Three.js', 'WebXR API', 'Physics'],
        image: 'src/solarAR.png',
        video: null,
        keyContributions: [
            'Architected the spatial anchoring strategy for stable Web-based AR placement.',
            'Developed high-precision orbital physics engine using Three.js.',
            'Optimized rendering pipeline for heterogeneous mobile browser hardware.',
            'Implemented cross-platform input handling for touch and spatial controllers.'
        ],
        breakdown: {
            decisions: 'Selected Three.js for its robust plugin ecosystem and mature WebGL handling, ensuring wide compatibility across mobile devices.',
            challenges: 'Managing depth-sensing inconsistencies across various WebXR implementations in different mobile browsers.',
            performance: 'Utilized instanced rendering for celestial bodies and optimized shader complexity to maintain 60fps on mid-range devices.',
            scalability: 'Built a modular scene management system that allows for easy addition of new planetary systems and interactive layers.'
        }
    },
    {
        id: 'bean-bag',
        title: 'VR Bean Bag Toss',
        summary: 'Physics-based VR experience featuring dynamic surfaces, wind simulation, and interactive level design.',
        role: 'Lead Physics Engineer',
        techStack: ['Unity', 'PhysX', 'XR Interaction Toolkit', 'C#'],
        image: 'src/CrazyCornholeVR.png',
        video: null,
        keyContributions: [
            'Authored custom physics solver for realistic bean bag deformation and drag.',
            'Developed dynamic surface friction system for varied gameplay surfaces.',
            'Built a wind simulation engine that affects projectile trajectories.',
            'Implemented tactile feedback systems for spatial interactions.'
        ],
        breakdown: {
            decisions: 'Extended Unity PhysX with custom force-based calculations to simulate the unique flight characteristics of soft-body projectiles.',
            challenges: 'Balancing the trade-off between physics accuracy and the strict timing requirements of VR (90Hz).',
            performance: 'Used simplified collision geometry and optimized physics layers to keep CPU overhead minimal.',
            scalability: 'Architected the project to support dynamic environment generation and varied physics presets.'
        }
    },
    {
        id: 'carnival-ar',
        title: 'Carnival AR Shooter',
        summary: 'Mobile AR experience allowing users to place and track dynamic targets in real-world space.',
        role: 'Senior AR Developer',
        techStack: ['Unity', 'AR Foundation', 'ARCore/ARKit', 'Physics'],
        image: 'src/ARShootingGallery.jpg',
        video: null,
        keyContributions: [
            'Implemented robust plane detection and spatial anchoring using AR Foundation.',
            'Designed high-performance projectile pooling system for mobile AR.',
            'Built a calibration-free spatial setup for instant user engagement.',
            'Integrated advanced haptic feedback for mobile devices.'
        ],
        breakdown: {
            decisions: 'Chosen AR Foundation to ensure a single codebase could target both iOS and Android with platform-specific optimizations.',
            challenges: 'Maintaining consistent target tracking in environments with varied lighting and surface textures.',
            performance: 'Optimized mesh colliders and light estimation to minimize the impact on mobile battery life.',
            scalability: 'Created a modular level system that allows for easy deployment of new game modes and target types.'
        }
    }
];

// Skills Data
const skillCategories = [
    {
        title: 'Real-Time Systems Engineering',
        skills: ['Unity / C#', 'Multi-User Synchronization', 'Performance Optimization', 'Modular Architecture', 'Physics & Procedural Simulation']
    },
    {
        title: 'XR Technologies',
        skills: ['OpenXR', 'WebXR', 'AR Foundation', 'Spatial Anchoring', 'Haptics & Interaction Design']
    },
    {
        title: 'Core Development',
        skills: ['Software Design Patterns', 'Version Control (Git)', 'Analytical Troubleshooting', 'Technical Leadership', 'Enterprise Software Design']
    }
];

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
const skillsContainer = document.getElementById('skills-container');
const header = document.getElementById('header');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    initSkills();
    initScrollLogic();
    initRevealAnimations();
    initActiveNavTracking();
    initLightbox();
});

// Active Nav Tracking
function initActiveNavTracking() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    const options = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const targetLink = document.querySelector(`.nav-links a[href="#${id}"]`);

                if (targetLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));

    // Fallback for bottom of page (Contact section)
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            const contactLink = document.querySelector('.nav-links a[href="#contact"]');
            if (contactLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                contactLink.classList.add('active');
            }
        }
    });
}

// Inject Projects
function initProjects() {
    projectsContainer.innerHTML = projects.map(p => `
        <div class="project-card reveal">
            <div class="project-media" onclick="openLightbox('${p.image}', '${p.title}')">
                <div class="media-container">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                </div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <div class="title-row">
                        <h3>${p.title}</h3>
                    </div>
                    <p class="project-summary">${p.summary}</p>
                    <div class="role-label">${p.role}</div>
                </div>

                <div class="tech-stack">
                    ${p.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>

                <div class="key-contributions">
                    <h4>Key Systems Developed</h4>
                    <ul class="contribution-list">
                        ${p.keyContributions.map(bullet => `<li>${bullet}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

// Inject Skills
function initSkills() {
    skillsContainer.innerHTML = skillCategories.map(cat => `
        <div class="skill-category reveal">
            <h4>${cat.title}</h4>
            <ul class="skill-list">
                ${cat.skills.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Global Accordion Handler
window.toggleAccordion = (element) => {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.icon');

    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '−' : '+';
};

// Scroll Effects
function initScrollLogic() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll Offset for Fixed Header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#hero') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetElement = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Intersection Observer for Reveal Animations
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Lightbox Logic
function initLightbox() {
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

window.openLightbox = (src, caption) => {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};
