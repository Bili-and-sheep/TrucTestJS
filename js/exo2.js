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


        console.log("Today fulldate :", TodayYears)
        console.log("Input Date :", ageInput)
        birthdate = TodayYears - ageInput
        console.log("vous avez :", TodayYears - ageInput)

        document.getElementById("TextUnderSubBirth").innerHTML = "Tu as " + birthdate + " ans";


    }
}


document.addEventListener('DOMContentLoaded', Birth.init())