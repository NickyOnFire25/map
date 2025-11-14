ImageTracer.imageToSVG(
    "plan.jpg",
    function(svgstr) {
        clearInterval(fakeLoading);
        document.getElementById("bar").style.width = "100%";
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("output").innerHTML = svgstr;
        }, 300);
    },
    {
        ltres: 1,      // feinere Linienerkennung
        qtres: 1,
        pathomit: 1,
        scale: 1       // wichtig: Originalgröße verwenden
    }
);
