const buttons = document.querySelectorAll('.buttons button');
const members = document.querySelector('#members');

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

const navLinks = document.querySelectorAll('nav ul li');

const currentYear = document.querySelector('#currentYear');
const lastMod = document.querySelector('#lastModified');

// Add copyright symbol and current year
const today = new Date();
currentYear.textContent = `©${today.getFullYear()}`;
lastMod.innerHTML = `Last Modification: ${document.lastModified}`;

function selectCurrentItem(elements) {
    elements.forEach(element => {
        element.addEventListener('click', () => {
            // remove the id from current element
            const prev = document.getElementById('current');
            if (prev) prev.removeAttribute('id');

            // add id='current' to the clicked element
            element.id = 'current';
        });
    });
}

selectCurrentItem(navLinks);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        members.className = button.dataset.view;
    });
});

async function getMemberData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        console.table(data);
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

getMemberData();

const displayMembers = (membersArr) => {
    membersArr.forEach((member) => {
        const card = document.createElement('section');
        const name = document.createElement('h3');
        const logo = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const site = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        site.innerHTML = `<span class="section-url">${member.website}</span>`;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(site);

        members.appendChild(card);
    });
}