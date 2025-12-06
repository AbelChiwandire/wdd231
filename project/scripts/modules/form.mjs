export function formBtnToggle() {
    const feedbackButtons = document.querySelectorAll('.feedback-btn');
    const feedbackTypeInput = document.querySelector('#feedbackTypeInput');

    feedbackButtons.forEach(button => {
        button.addEventListener('click', () => {
            feedbackButtons.forEach(btn => {
                btn.classList.remove('current', 'gradient-purple-pink');
                
                const span = btn.querySelector('span');
                if (span) {
                    span.classList.remove('background-clip', 'color-transparent', 'text-background-white');
                }
                
                btn.setAttribute('aria-checked', 'false');
            });

            feedbackTypeInput.value = button.textContent.trim();

            button.classList.add('current', 'gradient-purple-pink');
            const span = button.querySelector('span');
            if (span) {
                span.classList.add('background-clip', 'color-transparent', 'text-background-white');
            }
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
        const svg = b.querySelector('svg');
        if (b.classList.contains('active')) {
            svg.style.fill = "rgb(245, 158, 11)";
            svg.style.stroke = "rgb(245, 158, 11)";
        }
        else {
          svg.style.fill = "";
          svg.style.stroke = "";
        }
        b.setAttribute('aria-checked', i === index ? 'true' : 'false');
      });
    });
  });
}
