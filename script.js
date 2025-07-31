// We don't have a fixed date, so we'll just show "Soon ❤️"
// But if you ever set a date, replace "null" with:
// const targetDate = new Date("2025-03-15T00:00:00");

const targetDate = null; // No date yet

const timerElement = document.getElementById("countdown-timer");

if (targetDate) {
  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      timerElement.textContent = "We’re together! 🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    timerElement.textContent = `${days}d ${hours}h until I hug you again`;
  };

  updateCountdown();
  setInterval(updateCountdown, 3600000); // Update every hour
} else {
  timerElement.textContent = "Soon ❤️";
}