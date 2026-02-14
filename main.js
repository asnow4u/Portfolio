// Project Data
const projects = [
    {
        id: 'acadental',
        title: 'XR Simulation Platform (Acadental)',
        summary: 'A modular multi-user VR training platform supporting authentication, licensing, persistence, analytics, and real-time procedural simulation.',
        role: 'Senior Software Engineer | Core Systems',
        techStack: ['Unity', 'C#', 'OpenXR', 'Photon', 'Netcode'],
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200',
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
        },
        links: {
            demo: '#',
            github: null,
            caseStudy: '#'
        }
    },
    {
        id: 'solar-xr',
        title: 'Solar XR (WebXR)',
        summary: 'A cross-platform AR application enabling spatial placement and interactive orbital simulation of the solar system.',
        role: 'Technical Lead | WebXR Systems',
        techStack: ['JavaScript', 'Three.js', 'WebXR API', 'Physics'],
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
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
        },
        links: {
            demo: '#',
            github: 'https://github.com',
            caseStudy: null
        }
    },
    {
        id: 'social-chat',
        title: 'Social Chat (Unity + Agora)',
        summary: '3D multi-user spatial voice communication prototype supporting real-time presence and interaction.',
        role: 'Senior Engineer | Networking & VOIP',
        techStack: ['Unity', 'Agora SDK', 'Mirror', 'Spatial Audio'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        video: null,
        keyContributions: [
            'Integrated Agora Spatial Audio for immersive 3D voice communication.',
            'Developed a low-latency avatar synchronization system using Mirror.',
            'Built a modular presence system for tracking user activity and states.',
            'Implemented dynamic audio occlusion based on environmental geometry.'
        ],
        breakdown: {
            decisions: 'Leveraged Agora for high-quality, low-latency VOIP to focus internal resources on spatial interaction and networking logic.',
            challenges: 'Synchronizing high-frequency avatar movements with spatial audio sources without introducing audible jitter.',
            performance: 'Implemented interest management to reduce network traffic by only syncing relevant data to nearby players.',
            scalability: 'Designed a relay-based architecture that scales to support high-density social environments.'
        },
        links: {
            demo: null,
            github: 'https://github.com',
            caseStudy: '#'
        }
    },
    {
        id: 'bean-bag',
        title: 'VR Bean Bag Toss',
        summary: 'Physics-based VR experience featuring dynamic surfaces, wind simulation, and interactive level design.',
        role: 'Lead Physics Engineer',
        techStack: ['Unity', 'PhysX', 'XR Interaction Toolkit', 'C#'],
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200',
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
        },
        links: {
            demo: '#',
            github: null,
            caseStudy: null
        }
    },
    {
        id: 'carnival-ar',
        title: 'Carnival AR Shooter',
        summary: 'Mobile AR experience allowing users to place and track dynamic targets in real-world space.',
        role: 'Senior AR Developer',
        techStack: ['Unity', 'AR Foundation', 'ARCore/ARKit', 'Physics'],
        image: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?auto=format&fit=crop&q=80&w=1200',
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
        },
        links: {
            demo: '#',
            github: 'https://github.com',
            caseStudy: null
        }
    },
    {
        id: 'lone-wolf',
        title: 'Lone Wolf (Combat System)',
        summary: 'Modular combat and exploration system inspired by physics-driven knockback mechanics and roguelike progression.',
        role: 'Technical Architect',
        techStack: ['Unity', 'C#', 'DOTween', 'State Machine'],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
        video: null,
        keyContributions: [
            'Designed a decoupled combat architecture using a custom state machine.',
            'Built an extensible ability framework powered by ScriptableObjects.',
            'Implemented a damage-based force calculation for impactful physics responses.',
            'Developed production-grade character controller for complex terrain traversal.'
        ],
        breakdown: {
            decisions: 'Developed a data-driven approach for abilities to allow non-coders to iterate on game balance efficiently.',
            challenges: 'Ensuring smooth transitions between varied character states while maintaining consistent physics response.',
            performance: 'Utilized DOTween for efficient UI and feedback animations to keep the main thread focused on gameplay logic.',
            scalability: 'The system is designed to accommodate hundreds of unique abilities and enemies via interfaces and abstract classes.'
        },
        links: {
            demo: null,
            github: 'https://github.com',
            caseStudy: '#'
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
                        <div class="project-links">
                            ${p.links.github ? `<a href="${p.links.github}" target="_blank" title="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg></a>` : ''}
                            ${p.links.demo ? `<a href="${p.links.demo}" target="_blank" title="Live Demo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>` : ''}
                            ${p.links.caseStudy ? `<a href="${p.links.caseStudy}" target="_blank" title="Case Study"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></a>` : ''}
                        </div>
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
                
                <div class="tech-breakdown-v2">
                    <div class="accordion-trigger-v2" onclick="toggleAccordionV2(this)">
                        <span>Technical Deep Dive</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                    <div class="accordion-content-v2">
                        <div class="breakdown-grid">
                            <div class="breakdown-item">
                                <h5>Architecture</h5>
                                <p>${p.breakdown.decisions}</p>
                            </div>
                            <div class="breakdown-item">
                                <h5>Technical Challenges</h5>
                                <p>${p.breakdown.challenges}</p>
                            </div>
                            <div class="breakdown-item">
                                <h5>Performance</h5>
                                <p>${p.breakdown.performance}</p>
                            </div>
                            <div class="breakdown-item">
                                <h5>Scalability</h5>
                                <p>${p.breakdown.scalability}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Global Accordion Handler for V2
window.toggleAccordionV2 = (element) => {
    const parent = element.parentElement;
    parent.classList.toggle('active');
};
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
