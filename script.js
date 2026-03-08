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
function getNaturalSpeed(char){
    if(char === "." || char === "!" || char === "?") return 700;
    if(char === "," || char === "—") return 400;
    return 40 + Math.random() * 50;
}
function maybeBackspace(){
    return Math.random() < 0.05;
}
function typeHuman(element, text, callback){
    element.classList.add("show");
    let index = 0;
    function typeNext(){
        if(index < text.length){
            element.textContent += text[index];
            if(maybeBackspace() && index > 0){
                setTimeout(()=>{
                    element.textContent = element.textContent.slice(0,-1);
                    setTimeout(typeNext, getNaturalSpeed(text[index]));
                }, getNaturalSpeed(text[index]));
            } else {
                index++;
                setTimeout(typeNext, getNaturalSpeed(text[index-1]));
            }
        } else {
            setTimeout(callback, 10000);
        }
    }
    typeNext();
}
function showVerse(){
    const verseBox = document.getElementById("bibleVerse");
    if(!verseBox) return;

    const randomVerse = myBibleVerses[Math.floor(Math.random()*myBibleVerses.length)];
    verseBox.textContent = "";
    verseBox.classList.add("show");

    let index = 0;

    function typeNext(){
        if(index < randomVerse.length){
            verseBox.textContent += randomVerse[index];
            index++;
            setTimeout(typeNext, 40 + Math.random()*40);
        }
    }

    typeNext();

    setTimeout(()=>{
        verseBox.classList.remove("show");
    }, 14000);

    // invece di richiamare showVerse dentro se stessa → usa un loop esterno
    setTimeout(showVerse, 15000);
}

}
window.onload = ()=> showVerse();
