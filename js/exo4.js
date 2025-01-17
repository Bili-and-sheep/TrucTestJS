
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
            document.getElementById("btnSubmitJustePrix").classList.add("py-2.5", "px-5", "text-sm", "font-medium", "text-gray-900", "focus:outline-none", "bg-white", "rounded-lg", "border", "border-gray-200", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-4", "focus:ring-gray-100", "dark:focus:ring-gray-700", "dark:bg-gray-800", "dark:text-gray-400", "dark:border-gray-600", "dark:hover:text-white", "dark:hover:bg-gray-700")
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

