onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // Create an audio element
let bgMusic = new Audio("yungkai.mp3");

// Set properties
bgMusic.loop = true;  // Make the song repeat
bgMusic.autoplay = true; // Some browsers block autoplay, so we use JS to start it

// Play the music when the page loads
document.addEventListener("DOMContentLoaded", function () {
    bgMusic.play().catch(error => {
        console.log("Autoplay blocked, user needs to interact first.");
    });
});
