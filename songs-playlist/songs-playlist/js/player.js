document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.getElementById('audio-element');
    const playlist = document.getElementById('playlist');
    const songs = playlist.getElementsByClassName('song-item');

    function playSong(songElement) {
        const src = songElement.getAttribute('data-src');
        audioElement.src = src;
        
        const playPromise = audioElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Playback error:', error);
            });
        }

        Array.from(songs).forEach(s => s.classList.remove('active-song'));
        songElement.classList.add('active-song');
    }

    Array.from(songs).forEach(song => {
        song.addEventListener('click', () => playSong(song));
    });

    audioElement.addEventListener('ended', () => {
        const currentSong = document.querySelector('.active-song');
        const nextSong = currentSong.nextElementSibling || songs[0];
        playSong(nextSong);
    });

    // Play first song
    playSong(songs[0]);
});