document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var btn_open = document.getElementById("open");
    var btn_reset = document.getElementById("reset");
    var heading = document.querySelector(".valentine");
    let audio = new Audio("love_song.mp3")
  
    var isOpen = false;  // Variable to track the envelope state
  
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
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            emojis: ['❤️'],
            emojiSize: 40,
            confettiNumber: 200,
          })
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
        isOpen = false;
      }
    }
  });
  
