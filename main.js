// Project Data
const projects = [
    {
        id: 'acadental',
        title: 'XR Simulation Platform (Acadental)',
        summary: 'A modular multi-user VR training platform supporting authentication, licensing, persistence, analytics, and real-time procedural simulation.',
        tag: 'Professional Project',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200',
        video: null,
        breakdown: [
            { label: 'Core Systems', content: 'XR interaction framework, multi-user sync, session recording & replay.' },
            { label: 'Architecture Decisions', content: 'Modular state-based architecture for scalability across simulation modules.' },
            { label: 'Technical Challenges', content: 'Voxel-based procedural simulation and ray-based radiology at 72Hz+ on standalone VR.' },
            { label: 'Tools Used', content: 'Unity, C#, OpenXR, Photon/Netcode, Custom Voxel Engine.' }
        ]
    },
    {
        id: 'solar-xr',
        title: 'Solar XR (WebXR)',
        summary: 'A cross-platform AR application enabling spatial placement and interactive orbital simulation of the solar system.',
        tag: 'Spatial Computing',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
        video: null,
        breakdown: [
            { label: 'Core Systems', content: 'Spatial placement logic, orbital physics simulation.' },
            { label: 'Architecture Decisions', content: 'Three.js rendering pipeline optimized for mobile browser performance.' },
            { label: 'Technical Challenges', content: 'WebXR depth sensing and cross-browser integration stability.' },
            { label: 'Tools Used', content: 'JavaScript, Three.js, WebXR API.' }
        ]
    },
    {
        id: 'social-chat',
        title: 'Social Chat (Unity + Agora)',
        summary: '3D multi-user spatial voice communication prototype supporting real-time presence and interaction.',
        tag: 'Networking',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        video: null,
        breakdown: [
            { label: 'Core Systems', content: 'Spatial voice integration via Agora, multi-user state sync.' },
            { label: 'Architecture Decisions', content: 'Peer-to-peer data channels for low-latency avatar positioning.' },
            { label: 'Technical Challenges', content: 'Network performance considerations for high-density spatial audio.' },
            { label: 'Tools Used', content: 'Unity, Agora SDK, Mirror/Photon.' }
        ]
    },
    {
        id: 'bean-bag',
        title: 'VR Bean Bag Toss',
        summary: 'Physics-based VR experience featuring dynamic surfaces, wind simulation, and interactive level design.',
        tag: 'Physics Simulation',
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200',
        video: null,
        breakdown: [
            { label: 'Core Systems', content: 'Custom physics tuning, surface friction zones, wind simulation.' },
            { label: 'Architecture Decisions', content: 'Force-based interaction model for tactical feedback.' },
            { label: 'Technical Challenges', content: 'Simulating complex surface interactions with simplified collision geometry.' },
            { label: 'Tools Used', content: 'Unity, PhysX, XR Interaction Toolkit.' }
        ]
    },
    {
        id: 'carnival-ar',
        title: 'Carnival AR Shooter',
        summary: 'Mobile AR experience allowing users to place and track dynamic targets in real-world space.',
        tag: 'Mobile AR',
        image: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?auto=format&fit=crop&q=80&w=1200',
        video: null,
        breakdown: [
            { label: 'Core Systems', content: 'AR Foundation integration, spatial anchoring, target tracking.' },
            { label: 'Architecture Decisions', content: 'Spatial anchoring strategy for long-session drift compensation.' },
            { label: 'Technical Challenges', content: 'Maintaining consistent frame rates during physics-heavy AR sessions.' },
            { label: 'Tools Used', content: 'Unity, AR Foundation (ARCore/ARKit).' }
        ]
    },
    {
        id: 'lone-wolf',
        title: 'Lone Wolf (In Progress)',
        summary: 'Modular combat and exploration system inspired by physics-driven knockback mechanics and roguelike progression.',
        tag: 'Development In Progress',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
        video: null,
        breakdown: [
            { label: 'Core Systems', content: 'Damage-based force calculation, modular combat state architecture.' },
            { label: 'Architecture Decisions', content: 'Extensible ability framework using ScriptableObjects and Interfaces.' },
            { label: 'Technical Challenges', content: 'Scalability of character controller across varied terrain types.' },
            { label: 'Tools Used', content: 'Unity, C#, DOTween, Custom State Machine.' }
        ]
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
                <img src="${p.image}" alt="${p.title}" loading="lazy">
            </div>
            <div class="project-info">
                <span class="project-tag">${p.tag}</span>
                <h3>${p.title}</h3>
                <p class="project-summary">${p.summary}</p>
                
                <div class="tech-breakdown">
                    <div class="accordion-trigger" onclick="toggleAccordion(this)">
                        <span>Technical Breakdown</span>
                        <span class="icon">+</span>
                    </div>
                    <div class="accordion-content">
                        <ul class="tech-list">
                            ${p.breakdown.map(b => `
                                <li><strong>${b.label}:</strong> ${b.content}</li>
                            `).join('')}
                        </ul>
                    </div>
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
