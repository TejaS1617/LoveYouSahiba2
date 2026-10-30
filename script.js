const heartsContainer = document.getElementById("floatingHearts");
const beginBtn = document.getElementById("beginBtn");
const wishBtn = document.getElementById("wishBtn");
const finalMessage = document.getElementById("finalMessage");
const confetti = document.getElementById("confetti");
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

function floatHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["♡", "♥", "✧", "✿"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  heartsContainer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}
for (let i = 0; i < 10; i++) setTimeout(floatHeart, i * 350);
setInterval(floatHeart, 950);

beginBtn.addEventListener("click", () => {
  document.getElementById("memories").scrollIntoView({ behavior: "smooth" });
  document.querySelectorAll(".polaroid, .note-card").forEach((card, i) => {
    setTimeout(() => card.classList.add("revealed"), i * 150);
  });
});

function celebrate() {
  confetti.replaceChildren();
  const pieces = ["♡", "✦", "✿", "♥", "•"];
  for (let i = 0; i < 55; i++) {
    const piece = document.createElement("span");
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.animationDuration = `${2 + Math.random() * 2}s`;
    piece.style.color = ["#d76684", "#e9b45e", "#9eaf98", "#c68ba2"][i % 4];
    piece.style.fontSize = `${10 + Math.random() * 15}px`;
    confetti.appendChild(piece);
  }
}
wishBtn.addEventListener("click", () => {
  finalMessage.classList.remove("show");
  void finalMessage.offsetWidth;
  finalMessage.classList.add("show");
  wishBtn.textContent = "Birthday hugs sent! 💗";
  wishBtn.disabled = true;
  celebrate();
});

musicBtn.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();
      musicBtn.textContent = "Ⅱ Pause our song";
      musicBtn.setAttribute("aria-pressed", "true");
    } catch (error) {
      musicBtn.textContent = "Add assets/our-song.mp3 first";
      alert("Add your legally obtained song file at assets/our-song.mp3, then tap again.");
    }
  } else {
    song.pause();
    musicBtn.textContent = "♫ Play our song";
    musicBtn.setAttribute("aria-pressed", "false");
  }
});
song.addEventListener("ended", () => {
  musicBtn.textContent = "♫ Play our song";
  musicBtn.setAttribute("aria-pressed", "false");
});

// Four-scene, 20-second scrapbook animation (5 seconds per scene).
const playFilmBtn = document.getElementById("playFilmBtn");
const loveFilm = document.getElementById("loveFilm");
const filmScenes = [...document.querySelectorAll(".film-scene")];
const filmProgress = document.getElementById("filmProgress");
const filmTime = document.getElementById("filmTime");
const filmStatus = document.getElementById("filmStatus");
const filmConfetti = document.getElementById("filmConfetti");
let filmFrame = null;
let filmStart = 0;
let filmRunning = false;
const filmDuration = 20000;

function makeFilmConfetti() {
  filmConfetti.replaceChildren();
  const symbols = ["♡", "✦", "✿", "♥", "•"];
  for (let i = 0; i < 32; i++) {
    const bit = document.createElement("span");
    bit.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.animationDelay = `${Math.random() * 0.7}s`;
    bit.style.color = ["#d76684", "#e9b45e", "#9eaf98", "#c68ba2"][i % 4];
    bit.style.fontSize = `${10 + Math.random() * 14}px`;
    filmConfetti.appendChild(bit);
  }
}
function showFilmScene(index) {
  filmScenes.forEach((scene, i) => scene.classList.toggle("active", i === index));
  if (index === 3) makeFilmConfetti();
}
function tickFilm(now) {
  const elapsed = Math.min(now - filmStart, filmDuration);
  const progress = elapsed / filmDuration;
  filmProgress.style.width = `${progress * 100}%`;
  filmTime.textContent = `00:${String(Math.floor(elapsed / 1000)).padStart(2, "0")}`;
  showFilmScene(Math.min(3, Math.floor(elapsed / 5000)));
  if (elapsed < filmDuration) {
    filmFrame = requestAnimationFrame(tickFilm);
  } else {
    filmRunning = false;
    filmFrame = null;
    playFilmBtn.disabled = false;
    playFilmBtn.textContent = "↻ Watch our story again";
    filmStatus.textContent = "A little memory, made just for Baboola. ♡";
    filmTime.textContent = "00:20";
  }
}
playFilmBtn.addEventListener("click", async () => {
  if (filmFrame) cancelAnimationFrame(filmFrame);
  filmRunning = true;
  filmStart = performance.now();
  filmProgress.style.width = "0%";
  filmTime.textContent = "00:00";
  playFilmBtn.disabled = true;
  playFilmBtn.textContent = "Playing our little story… ♡";
  filmStatus.textContent = "Let the memories play. Turn your sound on for the song.";
  // Music requires a user gesture; try to play the supplied song along with the film.
  if (song.paused && song.querySelector("source")?.getAttribute("src")) {
    try {
      await song.play();
      musicBtn.textContent = "Ⅱ Pause our song";
      musicBtn.setAttribute("aria-pressed", "true");
    } catch (e) {
      // The slideshow still works if no song has been added or playback is unavailable.
    }
  }
  tickFilm(filmStart);
});
