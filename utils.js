export function getFormData(callback) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("game-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      return callback(data);
    });
  })
}

export function showConfetti() {
  const duration = 3 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

export function playFireworks() {
  const audio = new Audio('./fireworks.mp3');
  audio.currentTime = 0;
  setTimeout(() => audio.play(), 250);
  setTimeout(() => audio.pause(), 3000);
}

export function playTrombone() {
  const audio = new Audio('./trombone.mp3');
  audio.playbackRate = 1.5;
  audio.currentTime = 0;
  audio.play();
}

export function showError() {
  const error = document.getElementById('error');
  error.style.display = "block";
}

export function hideError() {
  const error = document.getElementById('error');
  error.style.display = "none";
}

export function generateNumber() {
  return Math.floor(Math.random() * 10) + 1;
}