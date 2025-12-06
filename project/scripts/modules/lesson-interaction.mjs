export function lessonInteractions () {
    document.querySelectorAll('.lesson-button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('show'); 

            // Toggle rotation on any svg inside the button
            const svg = button.querySelector('.arrow-down svg');
            if (svg) svg.classList.toggle('rotate-180');
        });
    });
}

export function initializeCompletionTracking(dataArray) {
    console.log('initializeCompletionTracking called')
    let completed = JSON.parse(localStorage.getItem('completedLessons')) || {};
    const lessonsCompleted = document.querySelector('.lessons-completed');

    const updateCompletedText = () => {
        const totalLessons = dataArray.length;
        const completedCount = dataArray.filter(lesson => completed[lesson.id]).length;
        if (lessonsCompleted) {
            lessonsCompleted.textContent = `${completedCount} of ${totalLessons} lessons completed`;
        }

        // call updateProgressBar
        updateProgressBar(totalLessons, completedCount);
    };

    // Update UI for lessons already completed
    dataArray.forEach(lesson => {
        const btn = document.querySelector(`button[data-complete="${lesson.id}"]`);
        if (btn && completed[lesson.id]) {
            handleLessonCompletion(btn);
        }
    });

    // Attach click listeners
    document.querySelectorAll(`button[data-complete]`).forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const lessonId = btn.dataset.complete;

            completed[lessonId] = true;
            
            localStorage.setItem('completedLessons', JSON.stringify(completed));

            // Update the hero text
            updateCompletedText();
            handleLessonCompletion(btn);
        });
    });

    // Initial update
    updateCompletedText();
}

function handleLessonCompletion(btn) {

    setTimeout(() => {
        // Update the completion button
        btn.classList.remove('background-color-blue', 'color-white');
        btn.classList.add('background-none', 'color-green');
        btn.style.cursor = "text";

        // show the hidden SVG inside the button
        const svgDiv = btn.querySelector('.completion-icon');
        if (svgDiv) {
            svgDiv.classList.remove('hide');
            svgDiv.classList.add('unhide');
        }

        // update span text content
        const btnText = btn.querySelector('.completion-span');
        btnText.textContent = `Completed`;
        btnText.classList.remove('text-background-white');
        btnText.classList.add('background-color-green');

        const lessonContainer = btn.closest('.card');
        if (!lessonContainer) return;

        const learnIconContainer = lessonContainer.querySelector('.learn-icon-container');
        if (learnIconContainer) {
            learnIconContainer.classList.remove('text-neutral-dark', 'text-background-light');
            learnIconContainer.classList.add('color-green', 'background-green-faded');
        }
        
    }, 300);
}

export function updateProgressBar(totalLessons, completedCount) {
    const fill = document.querySelector('.progress-fill');
    const completedTrophy = document.querySelector('.completed');

    fill.style.height = "100%";
    fill.style["border-radius"] = "9999px";
    fill.style.transition = "width 0.5s ease-in-out";
    
    const percent = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

    fill.style.width = `${percent}%`;
    
    // hide and reveal the trophy
    completedTrophy.classList.toggle('unhide', percent === 100);
    completedTrophy.classList.toggle('hide', percent !== 100);

}
