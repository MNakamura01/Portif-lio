



function mudarModo(modo) {
    console.log('ok')
    if (modo == "noturno") {
        document.getElementById('page-top').style.color = "white"
        document.getElementById('services').style.background = "rgba(0,0,0,0.85)"
        document.getElementById('study').style.background = "rgba(0,0,0,0.85)"
        document.getElementById('extra').style.background = "rgba(0,0,0,0.85)"
        document.getElementById('portfolio').style.background = "rgba(0,0,0,0.83)"
        document.getElementById('about').style.background = "rgba(0,0,0,0.83)"

    }
    if (modo == "normal"){
        document.getElementById('page-top').style.color = "black"

    }
}