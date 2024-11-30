document.addEventListener('DOMContentLoaded', () => {
    // Select Color button functionality
    const selectColorButton = document.querySelector('button:nth-of-type(1)');
    selectColorButton.addEventListener('click', () => {
      const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor; // Change background color
      alert(`Selected Color: ${randomColor}`);
    });
  
    // Create Logo button functionality (simulated action)
    const createLogoButton = document.querySelector('button:nth-of-type(2)');
    createLogoButton.addEventListener('click', () => {
      alert("Logo created (simulated action).");
    });
  
    // Submit button functionality
    const submitButton = document.querySelector('button:nth-of-type(3)');
    submitButton.addEventListener('click', () => {
      alert("Form Submitted (simulated action).");
    });
  });
  