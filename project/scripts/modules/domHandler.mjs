export function initializeDom() {
    const navButton = document.querySelector('#nav-btn');
    const navBar = document.querySelector('#nav-bar');
    const navLinks = document.querySelectorAll('.navigation a');

    const currentYear = document.querySelector('#currentYear');
    const lastMod = document.querySelector('#lastModified');

    // Add copyright symbol and current year
    const today = new Date();
    if (currentYear) currentYear.textContent = `©${today.getFullYear()}`;
    if (lastMod) lastMod.innerHTML = `Last Modification: ${document.lastModified}`;

    // Add/Remove show class on navigation
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');
        navBar.classList.toggle('show');
        navBar.classList.toggle('unhide')
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Find previous current link and remove classes if found
            const prev = navBar ? navBar.querySelector('.current') : null;
            if (prev) prev.classList.remove('current', 'color-white');

            // Set new current
            link.classList.add('current', 'color-white');
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (!header) return;

        if (window.scrollY > 0) {
            header.style.background = "rgb(255 255 255 / 0.9)";
            header.style.backdropFilter = "blur(6px)";
            header.style.boxShadow = "0 10px 10px -10px rgb(0 0 0 / 0.15)";
            header.style.transition = "all 200ms ease-out";
        }
        else {
            header.style.background = "transparent";
            header.style.backdropFilter = "none";
            header.style.boxShadow = "none";
        }
    });
}