// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Create a button dynamically
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.style.padding = '10px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';

    // Add click event
    button.addEventListener('click', function() {
        alert('Hello from your first JS function! 🎉');
    });

    // Append to the main section
    document.querySelector('section').appendChild(button);
});