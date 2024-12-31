// Get elements
const backgroundMusic = document.getElementById('background-music');
const musicNotice = document.getElementById('music-notice');

// Enable music playback on user interaction
document.body.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play().then(() => {
            musicNotice.style.display = 'none'; // Hide the notice after starting
        }).catch(error => console.error("Audio playback error:", error));
    }
});

// Display notice if music hasn't started
document.addEventListener('DOMContentLoaded', () => {
    if (backgroundMusic.paused) {
        musicNotice.style.display = 'block';
    }
});
