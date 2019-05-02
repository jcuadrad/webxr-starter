/* global TweenMax */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Dom Loaded!");

  const button = document.getElementById("enter-button");
  const intro = document.getElementById("intro-screen");
  const video = document.getElementById("scene1");

  button.addEventListener('click', () => {
    TweenMax.to(intro, 2, {
      opacity: 0, onComplete: (video, intro) => {
        intro.remove();
        video.play();
      }, onCompleteParams: [video, intro]
    });
  })
});