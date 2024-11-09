document.addEventListener("DOMContentLoaded", function () {
  var envelope = document.getElementById("envelope");
  var btn_open = document.getElementById("open");
  var btn_reset = document.getElementById("reset");
  var heading = document.querySelector(".valentine");
  let audio = new Audio("love_song.mp3");
  var isOpen = false;  // Variable to track the envelope state
  var tulipInterval;   // Variable to store the tulip animation interval

  // Create a container for the tulips
  const tulipContainer = document.createElement("div");
  tulipContainer.id = "tulip-container";
  document.body.appendChild(tulipContainer);

  envelope.addEventListener("click", toggleEnvelope);
  btn_open.addEventListener("click", toggleEnvelope);
  btn_reset.addEventListener("click", closeEnvelope);

  function toggleEnvelope() {
      if (!isOpen) {
          audio.play();
          // If the envelope is not open, open it
          envelope.classList.add("open");
          envelope.classList.remove("close");
          heading.style.display = "block";
          
          // Add confetti effect
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti({
              emojis: ['❤️'],
              emojiSize: 40,
              confettiNumber: 200,
          });

          // Start falling tulips
          tulipInterval = setInterval(createTulip, 300);

          isOpen = true;
      } else {
          // If the envelope is open, close it
          closeEnvelope();
      }
  }

  function closeEnvelope() {
      // Only close the envelope if it is open
      if (isOpen) {
          audio.pause();
          envelope.classList.remove("open");
          envelope.classList.add("close");
          heading.style.display = "none";
          clearInterval(tulipInterval); // Stop tulip animation
          isOpen = false;
      }
  }

  function createTulip() {
      const tulip = document.createElement('div');
      tulip.classList.add('tulip');
      tulip.style.backgroundImage = "url('tulip.png')"; // Set tulip image path

      // Set random horizontal position
      tulip.style.left = Math.random() * 100 + 'vw';

      // Set random animation duration
      tulip.style.animationDuration = Math.random() * 3 + 2 + 's';

      tulipContainer.appendChild(tulip);

      // Remove the tulip after animation ends
      tulip.addEventListener("animationend", () => tulip.remove());
  }
});
