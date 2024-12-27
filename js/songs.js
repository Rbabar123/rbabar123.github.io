const songs = {
	yungkai: 'audio/yungkai.mp3',
	lilboo: 'audio/lilBoo.mp3',
	beauty: 'audio/beauty.mp3'
};

let currentSongIndex = 1; // Set default song index to "Lil Boo Thang"
const songKeys = Object.keys(songs);
const audio = new Audio(songs.lilboo); // Set default song to "Lil Boo Thang"
audio.play(); // Autoplay the default song

document.querySelector('.song-list').addEventListener('change', function(event) {
	const selectedSong = event.target.value;
	if (songs[selectedSong]) {
		audio.src = songs[selectedSong];
		audio.play();
		currentSongIndex = songKeys.indexOf(selectedSong);
	}
});

audio.addEventListener('ended', function() {
	currentSongIndex = (currentSongIndex + 1) % songKeys.length;
	audio.src = songs[songKeys[currentSongIndex]];
	audio.play();
});
