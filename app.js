//Exercice Selector
function revealExercice(a, godHand) {
    if (a != null || godHand == null) {
        document.getElementById("divExo" + a).removeAttribute("style");

        if (a == 1) {
            document.getElementById("divExo2").setAttribute("style", "display: none;")
            document.getElementById("divExo3").setAttribute("style", "display: none;")
            document.getElementById("divExo4").setAttribute("style", "display: none;")
        }
        if (a == 2) {
            document.getElementById("divExo1").setAttribute("style", "display: none;")
            document.getElementById("divExo3").setAttribute("style", "display: none;")
            document.getElementById("divExo4").setAttribute("style", "display: none;")
        }
        if (a == 3) {
            document.getElementById("divExo1").setAttribute("style", "display: none;")
            document.getElementById("divExo2").setAttribute("style", "display: none;")
            document.getElementById("divExo4").setAttribute("style", "display: none;")
        }
        if (a == 4) {
            document.getElementById("divExo1").setAttribute("style", "display: none;")
            document.getElementById("divExo2").setAttribute("style", "display: none;")
            document.getElementById("divExo3").setAttribute("style", "display: none;")
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





//Exo2


const Birth = {

    init: function () {
        const btnBirth = document.getElementById("btnSubmitBirth")

        //Je positionne un eventListener à l'élement btnCacule qui excutera la focntion cacule aprés le click 
        btnBirth.addEventListener("click", Birth.BirthFinder)
    },

    BirthFinder: function () {

        let ageInput = document.getElementById("inputBirth").value
        const TodayDate = new Date();
        TodayYears = TodayDate.getFullYear();


        // console.log("Today fulldate :", TodayYears)
        // console.log("Input Date :", a)
        birthdate = TodayYears - ageInput
        // console.log("vous avez :", TodayYears - a)

        document.getElementById("TextUnderSubBirth").innerHTML = "Tu as " + birthdate + " ans";


    }
}
document.addEventListener('DOMContentLoaded', Birth.init())




//Exo3
const btnArea = document.getElementById("btnSubmitArea")

btnArea.addEventListener("click", AreaFinder)

function AreaFinder() {
    let a = document.getElementById("inputLongeur").value
    let b = document.getElementById("inputLargeur").value

    area = a * b

    document.getElementById("TextUnderSubArea").innerHTML = "La surface est de " + area + " m2";
}


//Exo4
//Set le conteur à 1
let count = 1

//génére un chiffre àléatoire entre 0 et 100
let randomNb = Math.floor(Math.random() * 101);

const btnJustePrix = document.getElementById("btnSubmitJustePrix")

btnJustePrix.addEventListener("click", JustPrix)


function JustPrix() {

    let a = document.getElementById("inputJustePrix").value

    console.log("Rdm Number :", randomNb)
    // console.log("Input :", a)
    // console.log("Coutn :", count)

    //logique du juste prix
    //Vérifie le compteur pour être sûr qu’il a fait moins de 5 tentatives
    if (count != 5) {
        //si moins de 5 essaye regarder si  
        if (a != randomNb) {
            if (a > randomNb) {
                // console.log("moins que", a)

                document.getElementById("TextUnderSubJustePrix").innerHTML = "Le chiffre est plus petit que : " + a;
                document.getElementById("CountJustePrix").innerHTML = "Nombre d&#39;essais : " + count;
                //ajoute 1 au conteur à chaque fin de tour
                count = count + 1

            }
            if (a < randomNb) {

                // console.log("plus que", a)
                document.getElementById("TextUnderSubJustePrix").innerHTML = "Le chiffre est plus grand que : " + a;
                document.getElementById("CountJustePrix").innerHTML = "Nombre d&#39;essais : " + count;
                count = count + 1
            }
        }
        if (a == randomNb) {
            // console.log("Vous avez gagnez en", count, "cout")
            document.getElementById("TextUnderSubJustePrix").innerHTML = "Vous avez gagnez en : " + count + " coups";
            document.getElementById("CountJustePrix").innerHTML = "";
            document.getElementById("inputJustePrix").setAttribute("disabled", "");
            document.getElementById("btnSubmitJustePrix").setAttribute("disabled", "");
        }


        // console.log("Count : ", count)
    }
    //Vérifie si randomNb a été trouvé lors du dernier essai
    else if (count == 5) {
        if (a == randomNb) {
            // console.log("Vous avez gagnez en", count, "cout")
            document.getElementById("TextUnderSubJustePrix").innerHTML = "Vous avez gagnez en : " + count + " coups";
            document.getElementById("CountJustePrix").innerHTML = "";
            document.getElementById("inputJustePrix").setAttribute("disabled", "");
            document.getElementById("btnSubmitJustePrix").setAttribute("disabled", "");
            document.getElementById("btnSubmitJustePrix").classList.add("py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700")
        }
        else if (a != randomNb) {
            console.log("You lose")
            document.getElementById("TextUnderSubJustePrix").innerHTML = "You lose, le chiffre etait : " + randomNb;
            document.getElementById("CountJustePrix").innerHTML = "Nombre d&#39;essais : " + count;
            // document.getElementById("btnSubmitJustePrix").classList.add("py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700")
            //désactive le btn et l'input box
            document.getElementById("inputJustePrix").setAttribute("disabled", "");
            document.getElementById("btnSubmitJustePrix").setAttribute("disabled", "");
            document.getElementById("btnSubmitJustePrix").className = '';
            document.getElementById("btnSubmitJustePrix").classList.add("py-2.5", "px-5", "text-sm", "font-medium", "text-gray-900", "focus:outline-none", "bg-white", "rounded-lg", "border", "border-gray-200", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-4", "focus:ring-gray-100", "dark:focus:ring-gray-700", "dark:bg-gray-800", "dark:text-gray-400", "dark:border-gray-600", "dark:hover:text-white", "dark:hover:bg-gray-700")

        }
    }

}