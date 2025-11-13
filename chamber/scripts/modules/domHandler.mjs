export function initializeDOM() {
    const buttons = document.querySelectorAll('.buttons button');
    const members = document.querySelector('#members');

    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('nav ul li');

    const currentYear = document.querySelector('#currentYear');
    const lastMod = document.querySelector('#lastModified');

    // Footer info
    const today = new Date();
    currentYear.textContent = `©${today.getFullYear()}`;
    lastMod.innerHTML = `Last Modification: ${document.lastModified}`;

    // Highlight current nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const prev = document.getElementById('current');
            if (prev) prev.removeAttribute('id');
            link.id = 'current';
        });
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Grid/List toggle
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            members.className = button.dataset.view;

            if (members.classList.contains('grid'))
                members.classList.add('cards');
        });
    });
}
