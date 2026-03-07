const myBibleVerses = [
"John 8:12 — I am the light of the world",
"Psalm 23:1 — The Lord is my shepherd",
"Philippians 4:13 — I can do all things through Christ who strengthens me",
"Proverbs 3:5 — Trust in the Lord with all your heart"
];

function getNaturalSpeed(char){
    if(char === "." || char === "!" || char === "?"){
        return 600;
    }
    if(char === "," || char === "—"){
        return 300;
    }
    return 45 + Math.random() * 40; // variazione naturale
}

function typeNatural(element, text, callback){
    element.textContent = "";
    let index = 0;

    function typeNext(){
        if(index < text.length){
            element.textContent += text[index];

            const delay = getNaturalSpeed(text[index]);
            index++;

            setTimeout(typeNext, delay);
        } else {
            setTimeout(callback, 2500);
        }
    }

    typeNext();
}

function showVerse(){
    const verseBox = document.getElementById("bibleVerse");

    const randomVerse = myBibleVerses[
        Math.floor(Math.random() * myBibleVerses.length)
    ];

    verseBox.style.opacity = "1";

    typeNatural(verseBox, randomVerse, () => {
        verseBox.style.opacity = "0";
        setTimeout(showVerse, 1500);
    });
}

document.addEventListener("DOMContentLoaded", showVerse);
