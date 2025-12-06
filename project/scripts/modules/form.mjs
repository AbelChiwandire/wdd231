export function formBtnToggle() {
    const feedbackButtons = document.querySelectorAll('.feedback-btn');
    const feedbackTypeInput = document.querySelector('#feedbackTypeInput');

    feedbackButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'current' class from all buttons
            feedbackButtons.forEach(btn => {
                btn.classList.remove('current', 'gradient-purple-pink', 'color-white');
                btn.setAttribute('aria-checked', 'false');
            });
            feedbackTypeInput.value = button.textContent.trim();
            // Add 'current' class to the clicked button
            button.classList.add('current', 'gradient-purple-pink', 'color-white');
            button.setAttribute('aria-checked', 'true');
        });
    });
}

export function formRating() {
  const ratingButtons = document.querySelectorAll(".rating button");
  const ratingInput = document.getElementById("ratingInput");

  ratingButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

      // Update hidden input
      ratingInput.value = index + 1;

      // Update aria-checked states
      ratingButtons.forEach(b => b.setAttribute("aria-checked", "false"));
      btn.setAttribute("aria-checked", "true");

      // Toggle "active" class for all buttons <= clicked index
      ratingButtons.forEach((b, i) => {
        b.classList.toggle('active', i <= index);
        b.setAttribute('aria-checked', i === index ? 'true' : 'false');
      });
    });
  });
}
