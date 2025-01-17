//Exercice Selector
function revealExercice(a, godHand) {
    if (a != null || godHand == null) {
        document.getElementById("divExo" + a).removeAttribute("style");

        if (a == 1) {
            document.getElementById("divExo2").setAttribute("style", "display: none;")
            document.getElementById("divExo3").setAttribute("style", "display: none;")
            document.getElementById("divExo4").setAttribute("style", "display: none;")
            document.getElementById("divExo5").setAttribute("style", "display: none;")
            document.getElementById("menuPhone").classList.add("hidden")
        }
        if (a == 2) {
            document.getElementById("divExo1").setAttribute("style", "display: none;")
            document.getElementById("divExo3").setAttribute("style", "display: none;")
            document.getElementById("divExo4").setAttribute("style", "display: none;")
            document.getElementById("divExo5").setAttribute("style", "display: none;")
            document.getElementById("menuPhone").classList.add("hidden")
        }
        if (a == 3) {
            document.getElementById("divExo1").setAttribute("style", "display: none;")
            document.getElementById("divExo2").setAttribute("style", "display: none;")
            document.getElementById("divExo4").setAttribute("style", "display: none;")
            document.getElementById("divExo5").setAttribute("style", "display: none;")
            document.getElementById("menuPhone").classList.add("hidden")
        }
        if (a == 4) {
            document.getElementById("divExo1").setAttribute("style", "display: none;")
            document.getElementById("divExo2").setAttribute("style", "display: none;")
            document.getElementById("divExo3").setAttribute("style", "display: none;")
            document.getElementById("divExo5").setAttribute("style", "display: none;")
            document.getElementById("menuPhone").classList.add("hidden")
        }
        if (a == 5) {
            document.getElementById("divExo1").setAttribute("style", "display: none;")
            document.getElementById("divExo2").setAttribute("style", "display: none;")
            document.getElementById("divExo3").setAttribute("style", "display: none;")
            document.getElementById("divExo4").setAttribute("style", "display: none;")
            document.getElementById("menuPhone").classList.add("hidden")



        }

    } else if (godHand != null) {
        document.getElementById("divExo1").setAttribute("style", "display: none;")
        document.getElementById("divExo2").setAttribute("style", "display: none;")
        document.getElementById("divExo3").setAttribute("style", "display: none;")
        document.getElementById("divExo4").setAttribute("style", "display: none;")
    }
    console.log(a)
    console.log(godHand)

}

function revealMenu(state) {
    if (state == true) {
        document.getElementById("menuPhone").classList.remove("hidden")
        // document.getElementById("menuPhone").setAttribute("style", "display: none;")
        console.log("statue = true")
    }
    else if (state == false) {
        document.getElementById("menuPhone").classList.add("hidden")
        // document.getElementById("menuPhone").removeAttribute("style", "display: none;")
        console.log("statue = false")
    }
}
