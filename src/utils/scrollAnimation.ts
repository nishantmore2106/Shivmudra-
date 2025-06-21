
export const setupScrollAnimation = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const checkInView = () => {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      
      // If element is in viewport
      if (elementTop < windowHeight - elementHeight / 4) {
        element.classList.add('animated');
      }
    });
  };
  
  // Run once on load
  checkInView();
  
  // Add scroll event listener
  window.addEventListener('scroll', checkInView);
  
  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener('scroll', checkInView);
  };
};
