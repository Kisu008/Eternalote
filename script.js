// JavaScript for audio control
var audio = document.getElementById('audio');
var audioPlaying = true;

function toggleAudio() {
  if (audioPlaying) {
    audio.pause();
  } else {
    audio.play();
  }

  audioPlaying = !audioPlaying;
}