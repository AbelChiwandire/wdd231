import { places } from '../../data/places.mjs';

export function displayPlaces() {
    const container = document.querySelector('#places');


    places.forEach(place => {
        const div = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = place.title;

        const address = document.createElement('address');
        address.textContent = place.address;

        const description = document.createElement('p');
        description.textContent = place.description;

        const image = document.createElement('img');
        image.src = `images/${place.image_url}`;
        image.alt = place.name;

        div.append(title, address, description, image);
        container.appendChild(div);
    });
}