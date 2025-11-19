import { membershipTiers } from './memberships.mjs'; 

export function setupMembershipModals() {
    const modal = document.getElementById('membership-modal');

    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const featureHeader = modal.querySelector('.features-header');
    const modalFeatures = modal.querySelector('.modal-features');
    const modalClose = modal.querySelector('.modal-close');
    const applyNow = modal.querySelector('.tier-btn');

    // Open modal when a card section is clicked
    document.querySelectorAll('.tier-section').forEach(section => {
        section.addEventListener('click', event => {
            const cardSection = event.currentTarget; 
            const tierId = cardSection.id; 
            const tierData = membershipTiers.find(t => t.id === tierId);

            // Fill modal content
            modalTitle.textContent = `About This Membership`;
            modalDescription.textContent = tierData.description;

            featureHeader.textContent = `Benefits and Features`;

            // Clear previous feature list
            modalFeatures.innerHTML = '';
            tierData.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });

            // Show the modal
            modal.showModal();
        });
    });

    // Close modal button
    modalClose.addEventListener('click', () => modal.close());
    applyNow.addEventListener('click', () => modal.close());
}