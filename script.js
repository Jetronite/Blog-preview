function setSiblingWidth() {
    const divA = document.querySelector('.card-img');
    const divB = document.querySelector('.card-info');
  
    if (divA && divB) {
      // Get the computed width of divA (including padding and border)
      const computedWidth = divA.offsetWidth;
      divB.style.width = computedWidth + 'px';
    }
  }
  
  // Run on page load
  window.onload = setSiblingWidth;
  // Run on window resize for responsiveness
  window.onresize = setSiblingWidth;
  // Also run if content inside divA changes dynamically after page load
  // (e.g., after an AJAX call or user input)