document.addEventListener("DOMContentLoaded", () => {
    // Select elements to animate
    const elementsToAnimate = document.querySelectorAll(
      "#bigText, #smallText, #smallText1, .progress, #home-pic img"
    );
  
    // Create a single IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
  
            // Handle animations for text
            if (target.id === "bigText" || target.id === "smallText" || target.id === "smallText1") {
              target.style.opacity = "1";
              target.style.transform = "translateY(0)";
            }
  
            // Handle animations for progress bars
            if (target.classList.contains("progress")) {
              const targetWidth = target.getAttribute("data-width"); // Get the target width
              target.style.width = targetWidth; // Animate to the target width
            }
  
            // Handle animations for the home picture
            if (target.id === "home-pic" || target.parentElement.id === "home-pic") {
              target.style.opacity = "1";
              target.style.transform = "scale(1)";
            }
  
            observer.unobserve(target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
  
    // Set initial styles and observe elements
    elementsToAnimate.forEach((element) => {
      // Text elements
      if (element.id === "bigText" || element.id === "smallText" || element.id === "smallText1") {
        element.style.opacity = "0"; // Start hidden
        element.style.transform = "translateY(20px)"; // Move slightly downward
        element.style.transition = "all 1s ease"; // Smooth transition for fade-in and movement
      }
  
      // Progress bars
      if (element.classList.contains("progress")) {
        element.setAttribute("data-width", element.style.width); // Store target width
        element.style.width = "0%"; // Reset progress bars to 0% for animation
        element.style.transition = "width 1s ease"; // Smooth progress bar animation
      }
  
      // Home picture
      if (element.id === "home-pic" || element.parentElement.id === "home-pic") {
        element.style.opacity = "0"; // Start hidden
        element.style.transform = "scale(0.9)"; // Slightly smaller initially
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease"; // Smooth fade-in and scaling
      }
  
      observer.observe(element); // Observe the element
    });
  });
  