/**
 * Main script: renders data from js/data/*.js and handles interactions.
 *
 * Load order in index.html matters:
 *   1. js/data/recommendations.js
 *   2. js/data/projects.js
 *   3. js/data/team-members.js
 *   4. js/main.js
 */
(function () {
    'use strict';

    const recommendations = window.RECOMMENDATIONS || [];
    const projects = window.PROJECTS || [];
    const teamMembers = window.TEAM_MEMBERS || [];

    // DOM Elements
    const tabLinks = document.querySelectorAll('.tab-btn');
    const pageSections = document.querySelectorAll('.page-section');
    const recommendationsList = document.getElementById('recommendations-list');
    const workGrid = document.getElementById('work-grid');
    const teamGrid = document.getElementById('team-grid');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    // Render
    function renderRecommendations() {
        recommendationsList.innerHTML = recommendations.map(rec => `
            <div class="recommendation-item" data-id="${rec.id}">
                <div class="recommendation-header">
                    <span class="recommendation-title">${rec.title}</span>
                    <div class="recommendation-toggle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="recommendation-content">
                    <div class="recommendation-detail">${rec.content}</div>
                </div>
            </div>
        `).join('');
    }

    function renderProjects() {
        workGrid.innerHTML = projects.map(proj => `
            <article class="work-card" data-id="${proj.id}">
                <div class="work-card-image">
                    <img src="${proj.image}" alt="${proj.title}" loading="lazy">
                </div>
                <div class="work-card-content">
                    <h3 class="work-card-title">${proj.title}</h3>
                    <p class="work-card-description">${proj.shortDesc}</p>
                </div>
            </article>
        `).join('');
    }

    function renderTeamMembers() {
        teamGrid.innerHTML = teamMembers.map(member => `
            <article class="member-card" data-id="${member.id}">
                <div class="member-card-image">
                    <img src="${member.image}" alt="${member.name}" loading="lazy">
                </div>
                <div class="member-card-content">
                    <h3 class="member-card-name">${member.name}</h3>
                    <p class="member-card-role">${member.role}</p>
                </div>
            </article>
        `).join('');
    }

    // Tabs (anchor links with smooth scroll + scroll spy)
    function setActiveTab(tabName) {
        tabLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.tab === tabName);
        });
    }

    function updateActiveTabOnScroll() {
        const offset = 160;
        let current = pageSections[0] && pageSections[0].id;
        pageSections.forEach(section => {
            if (section.getBoundingClientRect().top - offset <= 0) {
                current = section.id;
            }
        });
        if (current) setActiveTab(current);
    }

    // Modal
    function openModal(type, id) {
        const data = type === 'project'
            ? projects.find(p => p.id === id)
            : teamMembers.find(m => m.id === id);

        if (!data) return;

        const label = data.title || data.name;
        const content = data.fullContent || data.bio;
        const image = data.image
            ? `<img src="${data.image}" alt="${label}" class="modal-image">`
            : '';

        modalTitle.textContent = label;
        modalBody.innerHTML = image + content;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        modalClose.focus();
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Events
    function setupEventListeners() {
        tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                setActiveTab(link.dataset.tab);
            });
        });

        window.addEventListener('scroll', updateActiveTabOnScroll, { passive: true });

        recommendationsList.addEventListener('click', (e) => {
            const header = e.target.closest('.recommendation-header');
            if (header) {
                header.parentElement.classList.toggle('expanded');
            }
        });

        workGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.work-card');
            if (card) openModal('project', card.dataset.id);
        });

        teamGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.member-card');
            if (card) openModal('member', card.dataset.id);
        });

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // Initialize
    function init() {
        renderRecommendations();
        renderProjects();
        renderTeamMembers();
        setupEventListeners();
    }

    document.addEventListener('DOMContentLoaded', init);
})();
