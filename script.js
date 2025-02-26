// Wait for the page to load
window.onload = function () {
    const startOverlay = document.getElementById('start-overlay');
    const backgroundSong = document.getElementById('background-song');
    const ourSong = document.getElementById('our-song');
    const landingSection = document.getElementById('landing');
  
    // When the user clicks the overlay
    startOverlay.addEventListener('click', () => {
      // Hide the overlay
      startOverlay.style.display = 'none';
  
      // Start playing the background song
      backgroundSong.play().catch(() => {
        console.log('Autoplay was blocked. Please interact with the page to play the song.');
      });
  
      // Show the landing section
      landingSection.classList.remove('hidden');
    });
  
    // Handle "Our Song" playback
    ourSong.addEventListener('play', () => {
      backgroundSong.pause(); // Pause background song when "Our Song" plays
    });
  
    ourSong.addEventListener('pause', () => {
      backgroundSong.play(); // Resume background song when "Our Song" is paused
    });
  
    ourSong.addEventListener('ended', () => {
      backgroundSong.play(); // Resume background song when "Our Song" ends
    });
  };
  
  // Rest of your JavaScript code
  function startCelebration() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('love-letter').classList.remove('hidden');
  }
  
  function nextSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
  // Cake Interaction
  document.getElementById('cake-image').addEventListener('click', () => {
    alert(' هیوادارم هیواکەت بێتە دی ئیهی ئیهی،یەڵا فوو لەو مۆمە بکە');
    document.getElementById('next-button').classList.remove('hidden');
  });
  
 
  
  // Final Surprise
  function showSurprise() {
    document.getElementById('surprise-content').classList.remove('hidden');
  }