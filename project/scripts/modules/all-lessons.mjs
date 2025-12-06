import { icons } from './icons.mjs';
import { lessonInteractions, initializeCompletionTracking } from './lesson-interaction.mjs';
import { simpleSearch } from './search.mjs';

export async function setUpLessons() {
  const lessonButtons = document.querySelector('#lesson-buttons');
  const buttons = lessonButtons.querySelectorAll('button');
  const hero = document.querySelector('.learn-hero');
  const marketSpan = document.querySelector('.market');
  const svg = document.querySelector('.hero-svg');
  const lessonsContainer = document.querySelector('#lessons-container');
  let allLessons = {};
  let currentLessons = [];

  await loadLessonsData();

  const heroGradients = {
    stocks: 'gradient-blue',
    forex: 'gradient-green',
    crypto: 'gradient-orange'
  };

  async function loadLessonsData () {
    try {
      const response = await fetch('data/all-lessons-data.json');
      const data = await response.json();
      allLessons = data;
    } catch (error) {
      console.error('Error fetching lessons data:', error);
    }
  };

  function activateButton(button) {
    // remove previous current classes
    const prevBtn = lessonButtons.querySelector('.current');
    if(prevBtn) prevBtn.classList.remove('current', 'color-white');

    // set current on this button
    button.classList.add('current', 'color-white');

    const market = button.dataset.market;

    // update market text, hero gradient, svg
    marketSpan.textContent = market;
    Object.values(heroGradients).forEach(grad => hero.classList.remove(grad));
    hero.classList.add(heroGradients[market]);
    svg.innerHTML = icons[market];

    // load lessons with animation
    currentLessons = allLessons[market];
    animateLessonLoad(currentLessons);
  }

  function animateLessonLoad(dataArray) {
    lessonsContainer.classList.add('fade-slide-left-out');

    setTimeout(() => {
      loadLessonContent(dataArray);
      
      lessonsContainer.classList.remove('fade-slide-left-out');
      void lessonsContainer.offsetHeight; 
      lessonsContainer.classList.add('fade-slide-right-in');

      const handleAnimationEnd = () => {
        lessonsContainer.classList.remove('fade-slide-right-in');
        lessonsContainer.removeEventListener('animationend', handleAnimationEnd);
      };
      lessonsContainer.addEventListener('animationend', handleAnimationEnd);
    }, 400);
  }

  function loadLessonContent(dataArray) {
    lessonsContainer.innerHTML = '';

    dataArray.forEach(lesson => {
      const lessonContainer = document.createElement('button');
      lessonContainer.classList.add(
        'lesson-button', 'card', 'padding-normal', 'text-background-white',
        'neutral-border', 'shadow', 'padding-medium', 'margin-bottom-normal'
      );

      const lessonDiv = document.createElement('div');
      lessonDiv.classList.add('width-full');

      const lessonContent = document.createElement('div');
      lessonContent.classList.add('lesson-content', 'slide-down', 'hide', 'text-align-left');

      lessonDiv.innerHTML = `
        <div class="flex-layout medium-gap">
          <div class="small-square flex-layout flex-center learn-icon-container border-radius-small text-neutral-dark text-background-light">
            ${icons.bookOpen}
          </div>
          <div class="flex-layout small-gap justify-space-between width-full">
            <div class="flex-layout flex-column small-gap align-start text-align-left">
              <h2 class="font-size-h2">${lesson.title}</h2>
              <p class="font-size-description color-gray">${lesson.description}</p>
              <div class="flex-layout flex-center small-gap font-size-duration color-gray">
                <span class="padding-bottom">${icons.clock}</span>${lesson.duration}
              </div>
            </div>
            <div class="arrow-down font-size-normal align-self">${icons.arrowDown}</div>
          </div>
        </div>
      `;

      lessonContent.innerHTML = `
        <img class="margin-top-medium margin-bottom-medium width-full border-radius-small" 
          src="images/${lesson.image}" 
          alt="${lesson.content[0].heading}"
          loading="lazy">
        <h3 class="margin-bottom-small font-size">${lesson.content[0].heading}</h3>
        <p class="margin-bottom-small text-neutral-dark">${lesson.content[0].text}</p>
        <div class="example padding-normal margin-bottom-normal font-size-description">
          <p><strong>Example: </strong>${lesson.content[0].example}</p>
        </div>
        <button data-complete="${lesson.id}" 
          class="width-full padding-small color-white background-color-blue border-radius-small">
          <div class="flex-layout small-gap flex-center font-size-normal font-bold">
            <div class="completion-icon small-square hide">${icons.bookOpen}</div>
            <span class="completion-span button-font-weight color-transparent background-clip text-background-white">
              Mark as Complete
            </span>
          </div>
        </button>
      `;

      lessonContainer.append(lessonDiv, lessonContent);
      lessonsContainer.appendChild(lessonContainer);
    });

    // Attach event listeners to lesson buttons
    lessonInteractions();
    // initialize completion tracking
    initializeCompletionTracking(dataArray);
  }

  // SEARCH SETUP
  const searchInput = document.querySelector('#lesson-search');
  if(searchInput) {
    simpleSearch(searchInput, () => currentLessons, loadLessonContent);
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => activateButton(button));
  });

  // activate first button automatically
  const initialButton = lessonButtons.querySelector('.current');
  if(initialButton) activateButton(initialButton);
}
