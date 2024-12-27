
			document.querySelector('.song-list').addEventListener('change', function(event) {
				const audio = new Audio();
				if (event.target.value === 'yungkai') {
					audio.src = 'audio/yungkai.mp3';
					audio.play();
				}
			});
		