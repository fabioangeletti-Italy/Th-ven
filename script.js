const myBibleVerses = [
"John 8:12 — I am the light of the world",
"Psalm 23:1 — The Lord is my shepherd",
"Philippians 4:13 — I can do all things through Christ who strengthens me",
"Proverbs 3:5 — Trust in the Lord with all your heart"
];

function showVerse() {
    const verseBox = document.getElementById("bibleVerse");
    const randomVerse = myBibleVerses[Math.floor(Math.random() * myBibleVerses.length)];

    verseBox.style.transition = "opacity 1.2s ease, transform 1.2s ease";
    verseBox.style.opacity = "0";
    verseBox.style.transform = "translateY(10px)";

    setTimeout(() => {
        verseBox.textContent = randomVerse;
        verseBox.style.opacity = "1";
        verseBox.style.transform = "translateY(0px)";
    }, 1200);
}

function startAutoVerseRotation() {
    showVerse(); // cambia subito alla apertura
    setInterval(showVerse, 300000); // ogni 5 minuti
}

document.addEventListener("DOMContentLoaded", startAutoVerseRotation);
