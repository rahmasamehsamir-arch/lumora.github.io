const profileBtn = document.getElementById('profileBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// When the user clicks the button...
profileBtn.addEventListener('click', () => {
    // Toggle the "show" class
    dropdownMenu.classList.toggle('show');
});

// Optional: Close the menu if the user clicks anywhere else on the screen
window.addEventListener('click', (event) => {
    if (!profileBtn.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});