// koodi allikas https://volodymyrzh.medium.com/implementing-dark-mode-with-css-and-javascript-fd3b2105e081
// ChatGPT kasutasin vormistamiseks
// Muudab lehe tumedale režiimilie
const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

// Tumeda režiimi funktsioon
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    
    // Vaatab, kas tume režiim on rakendatud
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // salvestab eelistuse 
    } else {
        localStorage.setItem('theme', 'light'); // salvestab eelistuse
    }
}

// kas nupule on vajutatud
themeSwitcher.addEventListener('click', toggleDarkMode);

// vaatab, mis eelistus on salvestatud
window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');  // rakendab tumeda režiimi, kui see on eelistus
    }
});
