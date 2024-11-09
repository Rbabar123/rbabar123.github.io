document.addEventListener("DOMContentLoaded", function () {
    // Elements
    var envelope = document.getElementById("envelope");
    var btn_open = document.getElementById("open");
    var btn_reset = document.getElementById("reset");
    var heading = document.querySelector(".valentine");
    let audio = new Audio("love_song.mp3");
    var isOpen = false; // Variable to track the envelope state
    var tulipInterval; // Variable to store the tulip animation interval
    var tulipContainer = document.getElementById("tulip-container");
    var heartContainer = document.getElementById("heart-container");

    // Visitor Counter using localStorage
    var visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    localStorage.setItem('visitCount', visitCount);
  
    // Display visit count in an element with ID 'visit-counter'
    var visitCounterElement = document.getElementById("visit-counter");
    if (visitCounterElement) {
        visitCounterElement.textContent = `Number of Visits: ${visitCount}`;
    }

    // Event listeners
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

            // Start falling hearts
            setInterval(createHeart, 500);

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

        // Set tulip size
        tulip.style.width = "50px"; // Adjust the width as needed
        tulip.style.height = "50px"; // Adjust the height as needed

        // Set random horizontal position
        tulip.style.left = Math.random() * 100 + 'vw';

        // Set random animation duration
        tulip.style.animationDuration = Math.random() * 3 + 2 + 's';

        tulipContainer.appendChild(tulip);

        // Remove the tulip after animation ends
        setTimeout(() => tulip.remove(), 5000);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = `${Math.random() * 10 + 20}px`; // Random heart size

        heartContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
});
