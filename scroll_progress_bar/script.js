gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

document.addEventListener("DOMContentLoaded", ()=> {
  
  const progressBar = document.querySelector('.progress-bar');
  const progressBarWrap = document.querySelector('.progress-bar-wrap');

  // Animate the progress bar as you scroll
  gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none', // no ease, we control smoothness with the 'scrub' property
    scrollTrigger: {
      trigger: document.body, // Track the entire page
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5, // control the amount of time it takes for the bar to catch up with scroll position
    },
  });

  // Click listener to scroll to a specific position, feel free to remove if you dont want it!
  progressBarWrap.addEventListener('click', (event) => {
    const clickX = event.clientX;
    const progress = clickX / progressBarWrap.offsetWidth;
    const scrollPosition = progress * (document.body.scrollHeight - window.innerHeight);
  
    gsap.to(window, {
      scrollTo: scrollPosition,
      duration: 0.725,
      ease: 'power3.out',
    });
  });  
  
})