import { initializeDom } from "./modules/domHandler.mjs";

document.addEventListener('DOMContentLoaded', async () => {
    initializeDom();

    // Learn Page 
    if(document.querySelector('.learn-hero')) {
        const { setUpLessons } = await import("./modules/all-lessons.mjs");
        const { formBtnToggle, formRating } = await import("./modules/form.mjs")
        setUpLessons();
        formBtnToggle();
        formRating();
    }
});

