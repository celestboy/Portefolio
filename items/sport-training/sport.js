


// définition des bases
exercice_time = 45
break_time = 15



function controle1() {
    var saisie_exercice = document.getElementById("exercice_time").value
    exercice_time = saisie_exercice
    infoTimeAffichage()
}
function controle2() {
    var saisie_break = document.getElementById("break_time").value
    break_time = saisie_break
    infoTimeAffichage()
}


const infoTimeAffichage = () => {
var infoExercice = document.getElementById("info_exercice")
infoExercice.textContent = "Exercice : " + exercice_time + "s"

var infoBreak = document.getElementById("info_break")
infoBreak.textContent = "Pause : " + break_time + "s"
}
infoTimeAffichage()


// affichage temps restant

const timeLeft = document.querySelector("h1")
const text = document.querySelector("h2")
const startingButton = document.querySelector("button")
let audio = new Audio ("son.mp3")
const invisibleBlock = document.getElementById("invisible_block")
invisibleBlock.style.display = "none"




    // PRESET


document.getElementById("first_preset_button").addEventListener("click", () => {
    infoTimeAffichage()
    exercice_time = 40,
    break_time = 14
})
document.getElementById("second_preset_button").addEventListener("click", () => {
    infoTimeAffichage()
    exercice_time = 50,
    break_time = 16
})
document.getElementById("third_preset_button").addEventListener("click", () => {
    infoTimeAffichage()
    exercice_time = 51,
    break_time = 18
})
document.getElementById("fourth_preset_button").addEventListener("click", () => {
    infoTimeAffichage()
    exercice_time = 55,
    break_time = 18
})
document.getElementById("fifth_preset_button").addEventListener("click", () => {
    infoTimeAffichage()
    exercice_time = 60,
    break_time = 20
})
document.getElementById("sixth_preset_button").addEventListener("click", () => {
    infoTimeAffichage()
    exercice_time = 30,
    break_time = 10
})
document.getElementById("seventh_preset_button").addEventListener("click", () => {
    infoTimeAffichage()
    exercice_time = 55,
    break_time = 25
})

document.getElementById("preset").addEventListener("click", () => {
    document.getElementById("preset_div").style.display = "block"
})
document.getElementById("preset_div_cross").addEventListener("click", () => {
    document.getElementById("preset_div").style.display = "none"
})









    // TIMER


startingButton.addEventListener("click", () => {
startingButton.style.display = "none"
let used = 0
actual_time = 16



const timer = () => {
    timeLeft.textContent = actual_time - 1
    

    if (used < 20) {
    actual_time--
    }

    // POMPES
    if (actual_time == 0 && used == 0) {
        actual_time = exercice_time
        text.textContent = "POMPES"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
        invisibleBlock.style.display = "block"
    }
    if (actual_time == 0 && used == 1) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : SQUAT"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // SQUAT
    if (actual_time == 0 && used == 2) {
        actual_time = exercice_time
        text.textContent = "SQUAT"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 3) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : DOS"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // DOS
    if (actual_time == 0 && used == 4) {
        actual_time = exercice_time
        text.textContent = "DOS"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 5) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : ÉPAULES"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // ÉPAULES
    if (actual_time == 0 && used == 6) {
        actual_time = exercice_time
        text.textContent = "ÉPAULES"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 7) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : FESSIERS"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // EPAULES
    if (actual_time == 0 && used == 8) {
        actual_time = exercice_time
        text.textContent = "FESSIERS"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 9) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : TRICEPS"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }    

    // TRICEPS
    if (actual_time == 0 && used == 10) {
        actual_time = exercice_time
        text.textContent = "TRICEPS"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 11) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : FENTES"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // FENTES
    if (actual_time == 0 && used == 12) {
        actual_time = exercice_time
        text.textContent = "FENTES"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 13) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : ABDOS"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // ABDOS
    if (actual_time == 0 && used == 14) {
        actual_time = exercice_time
        text.textContent = "ABDOS"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 15) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : MOLLETS"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // MOLLETS
    if (actual_time == 0 && used == 16) {
        actual_time = exercice_time
        text.textContent = "MOLLETS"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }
    if (actual_time == 0 && used == 17) {
        actual_time = break_time
        text.textContent = "PAUSE | PROCHAIN : LOMBAIRES"
        timeLeft.style.background = "rgb(180, 24, 24)"
        audio.play()
        used += 1
    }

    // LOMBAIRES (dernier)
    if (actual_time == 0 && used == 18) {
        actual_time = exercice_time
        text.textContent = "LOMBAIRES | DERNIER"
        timeLeft.style.background = "rgb(0, 195, 0)"
        audio.play()
        used += 1
    }

    // FIN
    if (actual_time == 0 && used == 19) {
        text.textContent = "TERMINÉ"
        timeLeft.style.background = "rgb(255, 183, 48)"
        audio.play()
        actual_time = 1
        used += 1
        startingButton.style.display = "block"
        invisibleBlock.style.display = "none"
    }
}

if (used < 20) {
setInterval(timer, 1000)
}

})