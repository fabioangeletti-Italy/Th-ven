async function loadVerses(){
const response = await fetch('verses.json');
return await response.json();
}

async function showVerse(){
const verses = await loadVerses();
const randomVerse = verses[Math.floor(Math.random() * verses.length)];

const verseBox = document.getElementById("verseBox");

// Dissolvenza uscita
verseBox.style.transition = "opacity 1.2s ease, transform 1.2s ease";
verseBox.style.opacity = "0";
verseBox.style.transform = "translateY(10px)";

setTimeout(() => {

    // Cambia testo
    verseBox.innerText = randomVerse;

    // Dissolvenza entrata
    verseBox.style.opacity = "1";
    verseBox.style.transform = "translateY(0px)";

}, 1200);


}

function startAutoVerseRotation(){
showVerse();
setInterval(showVerse, 300000); // 5 minuti
}

document.addEventListener("DOMContentLoaded", startAutoVerseRotation);
