const myBibleVerses = [
    "John 8:12 I am the light of the world",
    "The Lord is my shepherd; I shall not want",
    "He makes me lie down in green pastures He leads me beside quiet waters",
    "He restores my soul. He guides me in paths of righteousness for His name’s sake",
    "Even though I walk through the valley of the shadow of death, I will fear no evil, for You are with me; Your rod and Your staff, they comfort me",
    "You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows",
    "Surely goodness and mercy shall follow me all the days of my life, and I will dwell in the house of the Lord forever",
    "Philippians 4:13 I can do all things through Christ who strengthens me",
    "Proverbs 3:5 Trust in the Lord with all your heart"
];
function getNaturalSpeed(char) {
    if (char === "." || char === "!" || char === "?") return 600;
    if (char === "," || char === "—") return 300;
    return 40 + Math.random() * 50;
}
function typeVerse(element, text, callback) {
    element.classList.add("show");
    element.textContent = "";
    let index = 0;
    function typeNext() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(typeNext, getNaturalSpeed(text[index - 1]));
        } else {
            callback && callback();
        }
    }
    typeNext();
}
function showVerseLoop() {
    const verseBox = document.getElementById("bibleVerse");
    if (!verseBox) return;
    const randomVerse = myBibleVerses[Math.floor(Math.random() * myBibleVerses.length)];
    typeVerse(verseBox, randomVerse, () => {
        // Dopo 15 secondi, scompare
        setTimeout(() => {
            verseBox.classList.remove("show");
            // Dopo 15 secondo, passa al prossimo verso
            setTimeout(showVerseLoop, 20000);
        }, 15000);
    });
}
window.onload = showVerseLoop;
