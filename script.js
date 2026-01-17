// Reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('active'));
});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Countdown
const target = new Date("2025-10-15T18:00:00").getTime();
const box = document.getElementById("countdown");

setInterval(() => {
  const d = target - Date.now();
  const days = Math.floor(d / 86400000);
  const hrs = Math.floor(d / 3600000) % 24;
  const min = Math.floor(d / 60000) % 60;
  const sec = Math.floor(d / 1000) % 60;

  box.innerHTML = `
    <div>${days} Күн</div>
    <div>${hrs} Сағат</div>
    <div>${min} Минут</div>
    <div>${sec} Секунд</div>
  `;
}, 1000);

// RSVP WhatsApp
document.getElementById("rsvpForm").onsubmit = e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  window.open(`https://wa.me/77076212009?text=${encodeURIComponent("Мен " + name)}`);
};
