document.addEventListener("DOMContentLoaded", () => {
  const marqueeContainer = document.querySelector(".logos");
  const marqueeSlide = document.querySelector(".logos-slide");

  // Duplicate the content to create an infinite scrolling effect
  marqueeContainer.innerHTML += marqueeSlide.outerHTML;

  let currentPosition = 0;
  const speed = 0.5; // Adjust speed as needed

  function animateMarquee() {
    currentPosition -= speed;
    if (currentPosition <= -marqueeSlide.offsetWidth) {
      currentPosition = 0;
    }
    marqueeContainer.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();
});
