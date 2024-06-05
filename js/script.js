const $section = document.querySelector('.bored');
const $heading = document.querySelector('.heading');
const $action = document.querySelector('.js-action');
const $button = document.querySelector('.js-button');

$button.addEventListener('click', () => {
  $heading.textContent = 'Ура, теперь не скучно 🔥';
  $section.style.background = `linear-gradient(180deg, rgba(0, 176, 28, 0.2) 24.48%, rgba(255, 255, 255, 0) 100%)`;
  fetch('https://randomuser.me/api/')
    .then((data) => data.json())
    .then((res) => {
      $action.innerHTML = res.results[0].location.country;
    });
});
