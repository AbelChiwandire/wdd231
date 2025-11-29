import { membershipTiers } from './memberships.mjs'; 

export function setupMembershipModals() {
    const modal = document.getElementById('membership-modal');

    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const featureHeader = modal.querySelector('.features-header');
    const modalFeatures = modal.querySelector('.modal-features');
    const modalClose = modal.querySelector('.modal-close');
    const applyNow = modal.querySelector('.tier-btn');

    document.addEventListener('click', event => {
        const btn = event.target.closest('.tier-btn');
        if (!btn) return;

        // find the parent tier-section to read its id
        const section = btn.closest('.tier-section');
        if (!section) return;

        const tierId = section.id;
        const tierData = membershipTiers.find(t => t.id === tierId);

        // Fill modal content
        modalTitle.textContent = `About This Membership`;
        modalDescription.textContent = tierData.description;

        featureHeader.textContent = `Benefits and Features`;

        // Clear previous feature list
        modalFeatures.innerHTML = '';
        (tierData.features).forEach(feature => {
            const li = document.createElement('li');
            li.classList.add('margin-bottom-small');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        // Show the modal
        modal.showModal();
    });

    // Close modal button
    modalClose.addEventListener('click', () => modal.close());
    applyNow.addEventListener('click', () => modal.close());
}

export function popUpMessage() {
    const modal = document.getElementById('pop-up-modal');
    const text = modal.querySelector('.modal-text');
    const closeModal = modal.querySelector('.modal-close');

    const msToDays = 86400000;
    const today = Date.now();

    let lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        text.textContent = `Welcome! Let us know if you have any questions.`
    }
    else {
            const daysAgo = Math.floor((today - new Date(lastVisit)) / msToDays);

        if (daysAgo >= 1) {
            text.textContent = `Welcome back! You last visited ${daysAgo} day${daysAgo > 1 ? 's' : ''}. Let us know if you have any questions.`
        }
        else {
            text.textContent = `Back so soon. Awesome!`;
        }
    }
    lastVisit = today;
    localStorage.setItem('lastVisit', lastVisit);

    modal.showModal();

    // Close modal button
    closeModal.addEventListener('click', () => modal.close());
}