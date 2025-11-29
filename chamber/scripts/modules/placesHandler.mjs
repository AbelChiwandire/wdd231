import { places } from '../../data/places.mjs';

export function displayPlaces() {
    const container = document.querySelector('#places');


    places.forEach((place, index) => {
        const div = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = place.title;
        title.classList.add('align-text-center', 'text-align-left');

        const address = document.createElement('address');
        address.textContent = place.address;
        address.classList.add('align-text-center', 'text-align-left');

        const description = document.createElement('p');
        description.textContent = place.description;
        description.classList.add('align-text-center', 'text-align-left');

        const image = document.createElement('img');
        image.src = `images/${place.image_url}`;
        image.alt = place.name;
        image.classList.add('opac', 'center-block');

        if (index !== 0) {
            image.loading = 'lazy';
        }

        div.append(title, address, description, image);
        container.appendChild(div);
    });
}