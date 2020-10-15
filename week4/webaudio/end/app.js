/**
 * The Boombox App
 */

let audioContext = null;
let audio = new Audio('./assets/outfoxing.mp3');
let audioSource = null;

/**
 * Init the audio to start
 */
const init = () => {
  // Create a new AudioContext
	audioContext = new AudioContext();

  // Get the audio
	audioSource = audioContext.createMediaElementSource(audio);

	// Create the nodes
	const gainNode = audioContext.createGain();
  const panner = new StereoPannerNode(audioContext, { pan: 0 });

  // Set the volume
	const volumeControl = document.querySelector('#volume');
	volumeControl.addEventListener('input', (e) => gainNode.gain.value = e.target.value);

  // Set the panner control
  const pannerControl = document.querySelector('#panner');
	pannerControl.addEventListener('input', (e) => panner.pan.value = e.target.value);

	// Connect our audio
	audioSource
    .connect(gainNode)
    .connect(panner)
    .connect(audioContext.destination);
}

/**
 * Get controls
 */

const playButton = document.querySelector('.tape-controls-play');
const powerButton = document.querySelector('.control-power');

/**
 * Play the audio
 */

playButton.addEventListener('click', (e) => {
  // Init the context
  if(!audioContext) init();

	// Check if context is in suspended state (autoplay policy)
	if (audioContext.state === 'suspended') audioCtx.resume();

  // Handle the pause/play button
	if (e.target.dataset.playing === 'false') {
		audio.play();
		e.target.dataset.playing = 'true';
	} else if (e.target.dataset.playing === 'true') {
		audio.pause();
		e.target.dataset.playing = 'false';
	}

  // Set power button on if needed
  if(powerButton.dataset.power === 'off') powerButton.dataset.power = 'on'
});

/**
 * Power off
 */

powerButton.addEventListener('click', (e) => {
  if(e.target.dataset.power === 'on') {
    e.target.dataset.power = 'off'
    if(playButton.dataset.playing === 'true') {
      audio.pause();
      audio.currentTime = 0;
      playButton.dataset.playing = 'false';
    }
  } else {
    e.target.dataset.power = 'on';
  }
});

/**
 * When the audio ends
 */

audio.addEventListener('ended', () => playButton.dataset.playing = 'false');
