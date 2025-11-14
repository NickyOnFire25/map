// Ladeanzeige sichtbar machen
document.getElementById("loading").style.display = "block";

// Fake-Progress-System
let progress = 0;

let fakeLoading = setInterval(() => {
    progress += Math.random() * 10;
    if (progress > 90) progress = 90; // Nie über 90%
    document.getElementById("bar").style.width = progress + "%";
}, 300);


// Grundriss-Bild -> SVG
ImageTracer.imageToSVG(
    "IMG_2061.png,
    function(svgstr) {

        // Fake-Progress beenden
        clearInterval(fakeLoading);

        // Jetzt sofort voll machen
        document.getElementById("bar").style.width = "100%";

        // kurze wartezeit für Effekt
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";

            // SVG einfügen
            document.getElementById("output").innerHTML = svgstr;
        }, 300);
    },

    // Einstellungen (kannst du bei Bedarf anpassen)
    {
        ltres: 1,
        qtres: 1,
        pathomit: 4
        
    }
);
