function initMagneticEffect() {
    const magnets = document.querySelectorAll('[data-magnetic-strength]');
    if (window.innerWidth <= 991) return;
  
    // Mouse move
    function moveMagnet(event) {
      const magnet = event.currentTarget;
      const bounding = magnet.getBoundingClientRect();
      const strength = parseFloat(magnet.getAttribute('data-magnetic-strength')) || 25; // When no amount defined
      const innerTarget = magnet.querySelector('[data-magnetic-inner-target]');
      const innerStrength = parseFloat(magnet.getAttribute('data-magnetic-strength-inner')) || strength;
  
      const offsetX = ((event.clientX - bounding.left) / magnet.offsetWidth - 0.5) * (strength / 16);
      const offsetY = ((event.clientY - bounding.top) / magnet.offsetHeight - 0.5) * (strength / 16);
  
      // Outer animation
      gsap.to(magnet, {
        x: offsetX + "em",
        y: offsetY + "em",
        rotate: "0.001deg",
        ease: "power4.out",
        duration: 1.6,
      });
  
      // Inner animation (only if innerTarget exists)
      if (innerTarget) {
        const innerOffsetX = ((event.clientX - bounding.left) / magnet.offsetWidth - 0.5) * (innerStrength / 16);
        const innerOffsetY = ((event.clientY - bounding.top) / magnet.offsetHeight - 0.5) * (innerStrength / 16);
  
        gsap.to(innerTarget, {
          x: innerOffsetX + "em",
          y: innerOffsetY + "em",
          rotate: "0.001deg",
          ease: "power4.out",
          duration: 2,
        });
      }
    }
  
    // Mouse leave
    function resetMagnet(event) {
      const magnet = event.currentTarget;
      const innerTarget = magnet.querySelector('[data-magnetic-inner-target]');
  
      // Reset outer magnet
      gsap.to(magnet, {
        x: "0em",
        y: "0em",
        ease: "elastic.out(1, 0.3)",
        duration: 1.6,
        clearProps: "all"
      });
  
      // Reset inner magnet (only if innerTarget exists)
      if (innerTarget) {
        gsap.to(innerTarget, {
          x: "0em",
          y: "0em",
          ease: "elastic.out(1, 0.3)",
          duration: 2,
          clearProps: "all"
        });
      }
    }
  
    // Attach event listeners
    magnets.forEach(magnet => {
      magnet.addEventListener('mousemove', moveMagnet);
      magnet.addEventListener('mouseleave', resetMagnet);
    });
  }
  
  // Initialize Magnetic Effect
  document.addEventListener('DOMContentLoaded', () => {
    initMagneticEffect();
  });