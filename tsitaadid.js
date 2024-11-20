// Allikas: https://www.webhostingsecretrevealed.net/blog/web-design/15-cool-javascript-sample-snippets/#2-javascript-cookies
// Kasutatud ka ChatGPT abi vormistamisel.
// Iga kord lehte värskendades kuvab lehe allosas juhuslikku tsitaadi.

function writeRandomQuote() {
    var quotes = [
        "May the Force be with you. - 'Star Wars' (1977)",
        "There's no place like home. - 'The Wizard of Oz' (1939)",
        "Why so serious? - 'The Dark Knight' (2008)",
        "I feel the need - the need for speed! - 'Top Gun' (1986)",
        "Keep your friends close, but your enemies closer. - 'The Godfather Part II' (1974)",
        "It is only with the heart that one can see rightly; what is essential is invisible to the eye. - 'The Little Prince' (Antoine de Saint-Exupéry)",
        "Not all those who wander are lost. - 'The Fellowship of the Ring' (J.R.R. Tolkien)",
        "There is no greater agony than bearing an untold story inside you. - 'I Know Why the Caged Bird Sings' (Maya Angelou)",
        "The answer to the ultimate question of life, the universe, and everything is 42. - 'The Hitchhiker’s Guide to the Galaxy' (Douglas Adams)",
        "There is some good in this world, and it’s worth fighting for. - 'The Two Towers' (J.R.R. Tolkien)",
    ];
    var rand = Math.floor(Math.random() * quotes.length);
    document.getElementById("tsitaat").innerText = quotes[rand];
}