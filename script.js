const myBibleVerses = [
"John 8:12 — I am the light of the world",
"Psalm 23:1 — The Lord is my shepherd",
"Philippians 4:13 — I can do all things through Christ who strengthens me",
"Proverbs 3:5 — Trust in the Lord with all your heart"
];

// Funzione per calcolare la pausa naturale
function getNaturalSpeed(char){
    if(char === "." || char === "!" || char === "?") return 700;
    if(char === "," || char === "—") return 400;
    return 40 + Math.random() * 50;
}

// Funzione per decidere se fare un piccolo errore e cancellare
function maybeBackspace(){
    return Math.random() < 0.05; // 5% possibilità
}

// Funzione di scrittura con effetto umano
function typeHuman(element, text, callback){
    element.textContent = "";
    let index = 0;

    function typeNext(){
        if(index < text.length){
            // Aggiungi il carattere
            element.textContent += text[index];

            // Possibile backspace
            if(maybeBackspace() && index > 0){
                setTimeout(()=>{
                    element.textContent = element.textContent.slice(0, -1);
                    setTimeout(typeNext, getNaturalSpeed(text[index]));
                }, getNaturalSpeed(text[index]));
            } else {
                index++;
                setTimeout(typeNext, getNaturalSpeed(text[index-1]));
            }

        } else {
            setTimeout(callback, 3000); // pausa finale lunga
        }
    }

    typeNext();
}

// Mostra un versetto casuale
function showVerse(){
    const verseBox = document.getElementById("bibleVerse");
    const randomVerse = myBibleVerses[Math.floor(Math.random() * myBibleVerses.length)];

    verseBox.style.opacity = "1";
    typeHuman(verseBox, randomVerse, ()=>{
        verseBox.style.opacity = "0";
        setTimeout(showVerse, 1500);
    });
}

document.addEventListener("DOMContentLoaded", showVerse);
