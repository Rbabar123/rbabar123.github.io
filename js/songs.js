<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Fireworks</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<meta name="mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="theme-color" content="#000000" />
		<link rel="shortcut icon" type="image/png" href="./images/favicon.png" />
		<link rel="icon" type="image/png" href="./images/favicon.png" />
		<link rel="apple-touch-icon-precomposed" href="./images/favicon.png" />
		<meta name="msapplication-TileColor" content="#000000" />
		<meta name="msapplication-TileImage" content="./images/favicon.png" />
		<link href="./fonts/css.css" rel="stylesheet" />
		<link rel="stylesheet" href="./css/style.css" />
		<style>
			.live-date {
				position: fixed;
				top: 10px;
				left: 50%;
				transform: translateX(-50%);
				background-color: rgba(0, 0, 0, 0.7);
				color: white;
				padding: 10px 20px;
				border-radius: 50px;
				font-size: 1.2em;
				z-index: 1000;
				white-space: nowrap; /* Ensure text is on one line */
				animation: moveLeft 20s linear infinite, beat 1s infinite, colorChange 1s infinite;
			}

			@keyframes moveLeft {
				0% {
					left: 100%;
				}
				100% {
					left: -100%;
				}
			}

			@keyframes beat {
				0%, 100% { transform: scale(1); }
				50% { transform: scale(1.1); }
			}

			@keyframes colorChange {
				0% { color: red; }
				25% { color: green; }
				50% { color: blue; }
				75% { color: yellow; }
				100% { color: red; }
			}

			@media (max-width: 640px) {
				.controls .btn {
					width: 30px;
					height: 30px;
				}
				.menu__inner-wrap {
					padding: 10px;
				}
				.menu__header {
					font-size: 1.2em;
				}
				.menu__subheader {
					font-size: 1em;
				}
				.form-option label {
					font-size: 0.9em;
				}
				.form-option select, .form-option input {
					font-size: 0.9em;
				}
			}
		</style>
	</head>
	<body>
		<!-- partial:index.partial.html -->
		<!-- SVG Spritesheet -->
		<div style="height: 0; width: 0; position: absolute; visibility: hidden">
			<svg xmlns="http://www.w3.org/2000/svg">
				<symbol id="icon-play" viewBox="0 0 24 24">
					<path d="M8 5v14l11-7z" />
				</symbol>
				<symbol id="icon-pause" viewBox="0 0 24 24">
					<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
				</symbol>
				<symbol id="icon-close" viewBox="0 0 24 24">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
				</symbol>
				<symbol id="icon-settings" viewBox="0 0 24 24">
					<path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
				</symbol>
				<symbol id="icon-sound-on" viewBox="0 0 24 24">
					<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
				</symbol>
				<symbol id="icon-sound-off" viewBox="0 0 24 24">
					<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
				</symbol>
			</svg>
		</div>
		<!-- App -->
		<div class="container">
			<div class="loading-init">
				<div class="loading-init__header">Loading</div>
				<div class="loading-init__status">Assembling Fireworks</div>
			</div>
			<div class="stage-container remove">
				<div class="canvas-container">
					<canvas id="trails-canvas"> </canvas>
					<canvas id="main-canvas"> </canvas>
				</div>
				<div class="controls">
					<div class="btn pause-btn">
						<svg fill="white" width="24" height="24">
							<use href="#icon-pause" xlink:href="#icon-pause"></use>
						</svg>
					</div>
					<div class="btn sound-btn">
						<svg fill="white" width="24" height="24">
							<use href="#icon-sound-off" xlink:href="#icon-sound-off"></use>
						</svg>
					</div>
					<div class="btn settings-btn">
						<svg fill="white" width="24" height="24">
							<use href="#icon-settings" xlink:href="#icon-settings"></use>
						</svg>
					</div>
				</div>
				<div class="menu hide">
					<div class="menu__inner-wrap">
						<div class="btn btn--bright close-menu-btn">
							<svg fill="white" width="24" height="24">
								<use href="#icon-close" xlink:href="#icon-close"></use>
							</svg>
						</div>
						<div class="menu__header">Settings</div>
						<div class="menu__subheader">Click any tags</div>
						<form>
							<div class="form-option form-option--select">
								<label class="song-list-label"> Song List </label>
								<select class="song-list">
									<option value="beauty">Beauty and a Beast</option>
									<option value="lilboo"> Lil Boo Thang</option>

									<option value="yungkai">Blue by Yung Kai</option>
								</select>
							</div>
							<div class="form-option form-option--select">
								<label class="shell-type-label"> Firework Type </label>
								<select class="shell-type"></select>
							</div>
							<div class="form-option form-option--select">
								<label class="shell-size-label"> Firework Size </label>
								<select class="shell-size"></select>
							</div>
							<div class="form-option form-option--select">
								<label class="quality-ui-label"> Graphics Quality </label>
								<select class="quality-ui"></select>
							</div>
							<div class="form-option form-option--select">
								<label class="sky-lighting-label"> Light up the Sky </label>
								<select class="sky-lighting"></select>
							</div>
							<div class="form-option form-option--select">
								<label class="scaleFactor-label"> Zoom </label>
								<select class="scaleFactor"></select>
							</div>
							<div class="form-option form-option--checkbox">
								<label class="word-shell-label"> Text Fireworks </label>
								<input class="word-shell" type="checkbox" />
							</div>
							<div class="form-option form-option--checkbox">
								<label class="auto-launch-label"> Auto Fireworks </label>
								<input class="auto-launch" type="checkbox" />
							</div>
							<div class="form-option form-option--checkbox form-option--finale-mode">
								<label class="finale-mode-label"> Launch More Fireworks at Once </label>
								<input class="finale-mode" type="checkbox" />
							</div>
							<div class="form-option form-option--checkbox">
								<label class="hide-controls-label"> Hide Control Buttons </label>
								<input class="hide-controls" type="checkbox" />
							</div>
							<div class="form-option form-option--checkbox form-option--fullscreen">
								<label class="fullscreen-label"> Full Screen </label>
								<input class="fullscreen" type="checkbox" />
							</div>
							<div class="form-option form-option--checkbox">
								<label class="long-exposure-label"> Keep Firework Sparks </label>
								<input class="long-exposure" type="checkbox" />
							</div>
						</form>
						<div class="credits">
							<p class="copyright">
								<a href="https://www.facebook.com/rb.sabocohan" target="_blank">
									Follow me on Facebook
									<img src="https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-1/470596556_558979813685018_8785631685497861791_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFzyzrxHKyCE9y5fIQrYQq-Hi_YPqSmVjYeL9g-pKZWNsNOR_KOixJca5UFjkME7_7NJxmu45sddkaY6sGxmnmy&_nc_ohc=zU0HRXwmWXEQ7kNvgFn2VpB&_nc_zt=24&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=AvUcim_EH6-85Slh0PuyP59&oh=00_AYByjFVD9xbga1yn10_ZJs0AS67dxKE5bnNQgdQjwHJviQ&oe=677481C9" alt="Facebook Icon" style="vertical-align: middle; width: 20px; height: 20px; margin-left: 5px;">
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="help-modal">
				<div class="help-modal__overlay"></div>
				<div class="help-modal__dialog">
					<div class="help-modal__header"></div>
					<div class="help-modal__body"></div>
					<button type="button" class="help-modal__close-btn">Close</button>
				</div>
			</div>
			<div class="live-date"></div>
		</div>

		<!-- partial -->
		<script src="./js/fscreen.js"></script>
		<script src="./js/Stage.js"></script>
		<script src="./js/MyMath.js"></script>
		<script src="./js/script.js"></script>
		<script src="./js/songs.js"></script>
		<script>
			// Ensure the audio context is resumed properly
			document.addEventListener('click', () => {
				if (soundManager.ctx.state === 'suspended') {
					soundManager.ctx.resume();
				}
			});

			function updateCountdown() {
				const liveDate = new Date('2025-01-01T00:00:00').getTime();
				const now = new Date().getTime();
				const distance = liveDate - now;

				const days = Math.floor(distance / (1000 * 60 * 60 * 24));
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);

				document.querySelector('.live-date').textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

				if (distance < 0) {
					clearInterval(countdownInterval);
					document.querySelector('.live-date').textContent = 'Event Started';
				}
			}

			const countdownInterval = setInterval(updateCountdown, 1000);
		</script>
	</body>
</html>
