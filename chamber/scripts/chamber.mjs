import { initializeDOM, fadeUp } from "./modules/domHandler.mjs";

document.addEventListener('DOMContentLoaded', async () => {
    initializeDOM();

    // Directory page
    if (document.querySelector('#members')) {
        const { getMemberData, displayMembers } = await import('./modules/dataHandler.mjs');
        await getMemberData();
        displayMembers();

        return;
    }

    // Index page
    if (document.querySelector('#events')) { 
        const { getEvents, getMemberData, displaySpotLights } = await import('./modules/dataHandler.mjs');
        const { getCurrentWeather, getForecast } = await import('./modules/weatherHandler.mjs');

        getEvents();
        await getMemberData();
        displaySpotLights();

        getCurrentWeather();
        getForecast();
    }

    // Join Us page
    if (document.querySelector('#membership-cards')) {
        const { displayMembershipTiers } = await import('./modules/memberships.mjs');
        const { setupMembershipModals } = await import('./modules/modals.mjs');
        const { populateTimestamp } = await import('./modules/joinUs.mjs');
        displayMembershipTiers();
        setupMembershipModals();
        populateTimestamp();
        fadeUp();
    }
});
