import { initializeDOM } from "./modules/domHandler.mjs";

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
});
