let btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let btnText = btn[i].textContent;
    makeSound(btn[i].innerHTML);
    switch (btnText) {
      case "w":
        let tom1 = new Audio(`tom-1.mp3`);
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio(`tom-2.mp3`);
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio(`tom-3.mp3`);
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio(`tom-4.mp3`);
        tom4.play();
        break;
      case "j":
        let snare = new Audio(`snare.mp3`);
        snare.play();
        break;
      case "k":
        let kickBass = new Audio(`kick-bass.mp3`);
        kickBass.play();
        break;
      case "l":
        let crash = new Audio(`crash.mp3`);
        crash.play();
        break;
      default:
    }
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio(`tom-1.mp3`);
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio(`tom-2.mp3`);
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio(`tom-3.mp3`);
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio(`tom-4.mp3`);
      tom4.play();
      break;
    case "j":
      let snare = new Audio(`snare.mp3`);
      snare.play();
      break;
    case "k":
      let kickBass = new Audio(`kick-bass.mp3`);
      kickBass.play();
      break;
    case "l":
      let crash = new Audio(`crash.mp3`);
      crash.play();
      break;
    default:
  }
}
