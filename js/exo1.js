//Exo 1
// Élement bouton avec ID btnSubmit dans le DOM
const btnCalcule = document.getElementById("btnSubmitPaire")

//Je positionne un eventListener à l'élement btnCacule qui excutera la focntion cacule aprés le click 
btnCalcule.addEventListener("click", calcule)


function calcule() {
    //récupere la valeur de l'élement de l'id toto et on la mets à A, set la valuer de b à 2
    let a = document.getElementById("inputPaire").value;
    let b = 2

    //Verifie grace au isInteger si la division de A/B et entiere
    PaireCheker = Number.isInteger(a / b)
    // console.log("A/B est elle entiére" : LaCondi)
    // console.log("A/B" : a / b)

    if (PaireCheker == true) {
        // console.log("OUAIIIII LE PAIR")
        // console.log("Le Chiffre", a, "est paire")
        document.getElementById("TextUnderSubPaire").innerHTML = "Le Chiffre " + a + " est paire";
        // document.getElementById("TextUnderSubPaire").innerHTML = "Le Chiffre est paire";
    }
    if (PaireCheker == false) {
        // console.log("OUAIIIII C'EST IMPAIRE")
        // console.log("Le Chiffre", a, "est IMPAIRE")
        document.getElementById("TextUnderSubPaire").innerHTML = "Le Chiffre " + a + " est impaire";
        // document.getElementById("TextUnderSubPaire").innerHTML = "Le Chiffre est impaire";
    }


}
