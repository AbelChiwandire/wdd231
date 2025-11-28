export function initializeDom() {
    const navButton = document.querySelector('#nav-btn');
    const navBar = document.querySelector('#nav-bar');
    const navLinks = document.querySelectorAll('.navigation a');

    const currentYear = document.querySelector('#currentYear');
    const lastMod = document.querySelector('#lastModified');

    // Add copyright symbol and current year
    const today = new Date();
    currentYear.textContent = `©${today.getFullYear()}`;
    lastMod.innerHTML = `Last Modification: ${document.lastModified}`

    // Add/Remove show class on navigation
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');
        navBar.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Find previous current link
            const prev = document.getElementById('current');
            if (prev) {
                prev.removeAttribute('id');
                // Remove color-white class
                if (prev.classList.contains('color-white')) {
                    prev.classList.remove('color-white');
                }
            }

            // Set new current
            link.id = 'current';
            link.classList.add('color-white');
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');

        if (scrollY > 0) {
            header.style.background = "rgb(255 255 255 / 0.9)";
            header.style.backdropFilter = "blur(6px)";
            header.style.boxShadow = "0 20px 25px -5px rgb(0 0 0 / 0.15)";
        }
        else {
            header.style.background = "rgb(255 255 255";
            header.style.backdropFilter = "none";
            header.style.boxShadow = "none";
        }
    });
}