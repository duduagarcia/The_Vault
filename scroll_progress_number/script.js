gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const progressCounter = document.querySelector('[data-progress-nr]');

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = Math.round(self.progress * 100); // Calculate progress as a percentage
      progressCounter.textContent = progress.toString().padStart(2, '0'); // Update counter
    },
  });

});