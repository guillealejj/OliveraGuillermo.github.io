const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");


playButton.addEventListener("click", () => {
  audio.play();
});

pauseButton.addEventListener("click", () => {
  audio.pause();
});


// Código JavaScript para controlar el reproductor de audio
const audio = document.querySelector("audio");

// Reproducir la pista de audio
function playAudio() {
  audio.play();
}

// Pausar la pista de audio
function pauseAudio() {
  audio.pause();
}
