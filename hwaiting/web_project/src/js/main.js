// main.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // Example of a function to change the background color on button click
    const colorButton = document.getElementById('change-color');
    if (colorButton) {
        colorButton.addEventListener('click', function() {
            document.body.style.backgroundColor = 
                document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
        });
    }
});