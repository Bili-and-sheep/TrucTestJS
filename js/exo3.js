//Exo3
const btnArea = document.getElementById("btnSubmitArea")

btnArea.addEventListener("click", AreaFinder)

function AreaFinder() {
    let a = document.getElementById("inputLongeur").value
    let b = document.getElementById("inputLargeur").value

    area = a * b

    document.getElementById("TextUnderSubArea").innerHTML = "La surface est de " + area + " m2";
}

