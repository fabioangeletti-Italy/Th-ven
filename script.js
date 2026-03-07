const myBibleVerses = [
"John 8:12 — I am the light of the world",
"Psalm 23:1 — The Lord is my shepherd",
"Philippians 4:13 — I can do all things through Christ who strengthens me",
"Proverbs 3:5 — Trust in the Lord with all your heart"
];
let typingSpeed = 40;
function typeText(element, text, callback) {
    element.textContent = "";
    let index = 0;
    function typeChar() {
        if(index < text.length){
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, typingSpeed);
        } else if(callback){
            setTimeout(callback, 2000); // pausa prima del prossimo versetto
        }
    }
    typeChar();
}
function showVerse() {
    const verseBox = document.getElementById("bibleVerse");
    const randomVerse = myBibleVerses[
        Math.floor(Math.random() * myBibleVerses.length)
    ];
    verseBox.style.opacity = "1";
    typeText(verseBox, randomVerse, () => {
        verseBox.style.opacity = "0";
        setTimeout(showVerse, 1500);
    });
}
document.addEventListener("DOMContentLoaded", showVerse);
