let membersData = [];

export async function getMemberData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Failed to fetch members');
        membersData = await response.json(); 
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

export function displayMembers() {
    const members = document.querySelector('#members');

    membersData.forEach(member => {
        const linkWrapper = document.createElement('a');
        linkWrapper.href = member.website;
        linkWrapper.target = '_blank';
        linkWrapper.setAttribute('aria-label', `Visit ${member.name} official website`);

        const card = document.createElement('section');
        card.classList.add('member-card', 'card', 'flex-center', 'text-center');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const logo = document.createElement('img');
        logo.src = member.image;
        logo.alt = `${member.name} logo`;
        logo.loading = 'lazy';

        const address = document.createElement('p');
        address.textContent = member.address;

        const phone = document.createElement('p');
        phone.textContent = member.phone;

        const site = document.createElement('p');
        site.classList.add('external-link', 'flex', 'gap-sm');
        site.innerHTML = `
            ${member.website}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="external-link-icon">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" x2="21" y1="14" y2="3"/>
            </svg>
        `;

        card.append(logo, name, address, phone, site);
        linkWrapper.appendChild(card);
        members.appendChild(linkWrapper);
    });
}

export function displaySpotLights() {
    const spotlights = document.querySelector('#spotlights');

    const eligibleMembers = membersData.filter(m => m.membershipLevel >= 2);

    const selectedIndexes = (() => {
        const indexes = [];
        while (indexes.length < 3) {
            const rand = Math.floor(Math.random() * eligibleMembers.length);
            if (!indexes.includes(rand)) indexes.push(rand);
        }
        return indexes;
    })();

    selectedIndexes.forEach(i => {
        const member = eligibleMembers[i];

        const linkWrapper = document.createElement('a');
        linkWrapper.href = member.website;
        linkWrapper.target = '_blank';

        // The inner card layout
        const card = document.createElement('div');
        card.classList.add('spotlight-card', 'card', 'flex-center', 'text-center');

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = `${member.name} logo`;
        img.loading = 'lazy';

        const industry = document.createElement('p');
        industry.textContent = member.industry;

        const desc = document.createElement('p');
        desc.textContent = member.description;
        desc.classList.add('flex-grow');

        const linkText = document.createElement('span');
        linkText.classList.add('external-link', 'flex', 'gap-sm');

        linkText.innerHTML = `
            View site
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="external-link-icon">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" x2="21" y1="14" y2="3"/>
            </svg>`;

        card.append(img, industry, desc, linkText);
        linkWrapper.appendChild(card);
        spotlights.appendChild(linkWrapper);
    });
}

export async function getEvents() {
    try {
        const response = await fetch('data/events.json');
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        displayEvents(data);
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

function displayEvents(eventsArr) {
    const eventsSection = document.querySelector('#events');

    eventsArr.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event-card', 'px-md');

        const name = document.createElement('h3');
        name.textContent = event.name;
        name.classList.add('mb-md');

        const date = document.createElement('p');
        date.textContent = `${event.date}`;

        const location = document.createElement('p');
        location.textContent = `${event.location}`;

        const price = document.createElement('p');
        price.textContent = `${event.price}`;

        eventDiv.append(name, date, location, price);
        eventsSection.appendChild(eventDiv);
    });
}
