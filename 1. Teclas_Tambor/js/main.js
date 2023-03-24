function reproducir_sonido(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const tecla = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  tecla.classList.add("reproducir");
}

function quitarEstilo(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("reproducir");
}

const teclas = document.querySelectorAll(".tecla");
teclas.forEach((key) => key.addEventListener("transitionend", quitarEstilo));
window.addEventListener("keydown", reproducir_sonido);
