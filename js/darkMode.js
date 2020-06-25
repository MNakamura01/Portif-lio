
    let status = 1


function mudarModo(modo) {
    console.log(status)

    if (modo == "noturno") {
        if (status == 0) {
            status = 1
            document.getElementById('page-top').style.color = "black"
            document.getElementById('services').style.background = "white"
            document.getElementById('study').style.background = "white"
            document.getElementById('extra').style.background = "white"
            document.getElementById('portfolio').style.background = "rgb(240, 244, 245)"
            document.getElementById('about').style.background = "rgb(240, 244, 245)"

            document.getElementById('lamp').img = "src='assets/img/lampada.png'"
        } else {
            status = 0
            document.getElementById('page-top').style.color = "white"
            document.getElementById('services').style.background = "rgba(0,0,0,0.85)"
            document.getElementById('study').style.background = "rgba(0,0,0,0.85)"
            document.getElementById('extra').style.background = "rgba(0,0,0,0.85)"
            document.getElementById('portfolio').style.background = "rgba(0,0,0,0.83)"
            document.getElementById('about').style.background = "rgba(0,0,0,0.83)"

            document.getElementById('lamp').img = "src='assets/img/lampadabranca.png'"
        }
    }
    if (modo == "normal"){
        document.getElementById('page-top').style.color = "black"
        document.getElementById('services').style.background = "white"
        document.getElementById('study').style.background = "white"
        document.getElementById('extra').style.background = "white"
        document.getElementById('portfolio').style.background = "rgb(240, 244, 245)"
        document.getElementById('about').style.background = "rgb(240, 244, 245)"

    }
}