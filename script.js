const container = document.getElementById("lottie-container");

const animation = lottie.loadAnimation({
  container: container,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "CH_data-1.json",
});

animation.addEventListener("DOMLoaded", () => {
  animation.setDirection(1); // Set the initial playback direction to forward.
  animation.play(); // Start playing the animation.
});

animation.addEventListener("complete", () => {
  // Wait for 1 second before reversing the playback direction and resuming the animation.
  setTimeout(() => {
    animation.setDirection(animation.playDirection * -1);
    animation.play(); // Resume playing the animation.
  }, 1000);
});
/*
function setMinMaxFontSize(element, minSize, maxSize) {
  var fontSize = parseInt(window.getComputedStyle(element).fontSize);
  if (fontSize > maxSize) {
    element.style.fontSize = maxSize + "pt";
  } else if (fontSize < minSize) {
    element.style.fontSize = minSize + "pt";
  }
}
function setMinMaxLetterSpacing(element, minSpacing, maxSpacing) {
  var letterSpacing = parseFloat(
    window.getComputedStyle(element, null).getPropertyValue("letter-spacing")
  );
  if (letterSpacing > maxSpacing) {
    element.style.letterSpacing = maxSpacing + "pt";
  } else if (letterSpacing < minSpacing) {
    element.style.letterSpacing = minSpacing + "pt";
  }
}
window.addEventListener("DOMContentLoaded", function () {
  var h1Element = document.querySelector(".resize-text");
  setMinMaxFontSize(h1Element, 12, 34); // Set the min font size to 12px and max font size to 24px
  setMinMaxLetterSpacing(h1Element, 1, 3); // Set the min letter spacing to 0.05em and max letter spacing to 0.2em
});
window.addEventListener("resize", function () {
  var h1Element = document.querySelector(".resize-text");
  setMinMaxFontSize(h1Element, 12, 34); // Set the min font size to 12px and max font size to 24px
  setMinMaxLetterSpacing(h1Element, 1, 3); // Set the min letter spacing to 0.05em and max letter spacing to 0.2em
});
*/
// window.addEventListener("DOMContentLoaded", function () {
//   var h1Element = document.querySelector(".resize-text");
//   if (h1Element) {
//     setMinMaxLetterSpacing(h1Element, 0.05, 0.2); // Set the min letter spacing to 0.05em and max letter spacing to 0.2em
//   }
// });
