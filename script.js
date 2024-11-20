// Get the theme switcher button and body element
const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    
    // Check if dark mode is enabled, and save the user's preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // Save preference to localStorage
    } else {
        localStorage.setItem('theme', 'light'); // Save preference to localStorage
    }
}

// Event listener for theme switcher button
themeSwitcher.addEventListener('click', toggleDarkMode);

// Check for stored theme preference on page load and apply it
window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');  // Apply dark mode if stored preference is 'dark'
    }
});
