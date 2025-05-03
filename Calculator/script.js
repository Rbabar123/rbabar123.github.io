const suggestionsList = [
  "Introduce interactive lessons to engage students.",
  "Provide better mobile accessibility for online platforms.",
  "Allow for more personalized learning paths.",
  "Incorporate real-time feedback to enhance learning.",
  "Offer offline resources for students with limited internet access.",
  "Improve course navigation and search functionalities."
];

function updateSectionOptions() {
  const strandSelect = document.getElementById('strand');
  const sectionSelect = document.getElementById('section');
  const selectedStrand = strandSelect.value;

  const sections = {
    ICT: ["ICT 11-1", "ICT 11-2", "ICT 11-3", "ICT 11-4", "ICT 11-5", "ICT 11-6", "ICT 11-7", "ICT 11-8", "ICT 11-9"],
    HE:  ["HE 11-1", "HE 11-2", "HE 11-3", "HE 11-4", "HE 11-5", "HE 11-6", "HE 11-7", "HE 11-8", "HE 119"],
    ABM: ["ABM 11-1", "ABM 11-2", "ABM 11-3", "ABM 11-4", "ABM 11-5", "ABM 11-6", "1BM 11-7", "ABM 11-8", "ABM 11-9"]
  };

  sectionSelect.innerHTML = '<option value="" disabled selected>Select your section</option>';

  if (sections[selectedStrand]) {
    sections[selectedStrand].forEach(section => {
      const option = document.createElement('option');
      option.value = section;
      option.textContent = section;
      sectionSelect.appendChild(option);
    });
  }
}

function showTooltip(question) {
  const tooltip = document.getElementById(`tooltip-${question}`);
  tooltip.style.display = 'block';
}

function autoSave(question) {
  const textarea = document.getElementById(question);
  if (textarea.value.trim() === "") {
    const saved = localStorage.getItem(question);
    if (saved) {
      textarea.value = saved;
    }
  } else {
    localStorage.setItem(question, textarea.value);
  }

  // If 'Suggestions' textarea is blank, randomly populate it
  if (question === 'suggestions' && textarea.value.trim() === "") {
    const randomSuggestion = suggestionsList[Math.floor(Math.random() * suggestionsList.length)];
    textarea.value = randomSuggestion;
  }
}

// Function to show the greeting popup after form submission
function showGreetingPopup(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Display a custom greeting message with a clickable link
  const greetingMessage = `
    <div style="text-align: center; font-size: 16px;">
      Maraming salamat sa iyong pag-sagot! Salamat sa iyong oras at kontribusyon sa aming pananaliksik.
      <br><br>
      <a href="https://www.facebook.com" target="_blank" style="color: #3b5998; text-decoration: none; font-weight: bold;">
        Follow me on Facebook
      </a>
      <br><br>
      Pagpatuloy mo lang ang iyong pag-aaral at sana'y maging matagumpay ka! ✌🤗
    </div>
  `;
  
  // Create a modal or custom popup instead of using an alert
  const popup = window.open("", "Greeting", "width=500,height=300");
  popup.document.write(greetingMessage);

  // Optionally, you can submit the form programmatically after the greeting
  setTimeout(function() {
    // Automatically submit the form after the popup shows the message
    event.target.submit(); 
  }, 2000); // Give time for the popup to display (e.g., 2 seconds)
}
