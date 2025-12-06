const submittedInfo = new URLSearchParams(window.location.search);

const createStars = (rating) => {
    const starSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
             viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-star">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 
                     1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 
                     2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 
                     2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 
                     2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 
                     2.122 0 0 0 1.597-1.16z"></path>
        </svg>
    `;

    const n = Number(rating);
    if (n <= 0) {
        return 'No rating given';
    }

    let stars = '';
    for (let i = 0; i < n; i++) {
        stars += starSVG;
    }

    return stars;
}


document.querySelector('#submission-details').innerHTML = `
    <h2>Submission Details</h2>
    <div class="flex-layout medium-gap">
        <span class="align-start color-gray logo-text">${`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5 text-slate-400 mt-0.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`}</span>
        <div>
            <h3 class="font-light-weight color-gray">Name</h3>
            <p class="button-font-weight">${submittedInfo.get('name')}</p>
        </div>
    </div>

    <div class="flex-layout medium-gap">
        <span class="align-start color-gray logo-text">${`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-5 h-5 text-slate-400 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`}</span>
        <div>
            <h3 class="font-light-weight color-gray">Email</h3>
            <p class="button-font-weight">${submittedInfo.get('email')}</p>
        </div>
    </div>

    <div class="flex-layout medium-gap">
        <span class="align-start color-gray logo-text">${`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-5 h-5 text-slate-400 mt-0.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`}</span>
        <div>
            <h3 class="font-light-weight color-gray">Feedback Type</h3>
            <p class="button-font-weight">${submittedInfo.get('feedbackType')}</p>
        </div>
    </div>

    <div class="flex-layout medium-gap">
        <span class="align-start color-gray logo-text">${`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star w-5 h-5 text-slate-400 mt-0.5"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>`}</span>
        <div>
            <h3 class="font-light-weight color-gray">Rating</h3>
            <p class="flex-layout feedback-stars">${createStars(submittedInfo.get('rating'))}</p>
        </div>
    </div>

    <div>
        <h3 class="font-light-weight color-gray">Message</h3>
        <p class="flex-layout feedback-stars">${submittedInfo.get('message')}</p>
    </div>
`;