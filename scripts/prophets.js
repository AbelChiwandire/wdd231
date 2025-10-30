const cards = document.getElementById('cards');
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const dob = document.createElement('p');
        const birthPlace = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `The Prophet ${prophet.name} ${prophet.lastname} portrait.`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '100')
        portrait.setAttribute('height', '120');

        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}