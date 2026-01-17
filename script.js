// Countdown
const targetDate = new Date("2026-06-14T18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return;

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000*60*60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / (1000*60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);

// Music
const music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.play();
  } else {
    music.pause();
  }
  playing = !playing;
}

// RSVP WhatsApp
function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;

  const text = `Тойға жауап:%0AАты: ${name}%0AЖауап: ${status}`;
  window.open(`https://wa.me/77076212009?text=${text}`, "_blank");
}
