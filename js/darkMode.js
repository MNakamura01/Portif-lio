
    let status = 1


function mudarModo(modo) {
    console.log(status)
    const portfolioItems = document.getElementsByClassName('portfolio-item')

    const sections = ['page-top','services','study','extra','portfolio','about']
    var cont = 0
    if (modo == "noturno") {
        if (status == 0) {
            status = 1
            cont = 0
            document.getElementById(sections[cont]).style.color = "black"
            for (const section of sections) {          
                cont ++
                const calcularSection = cont % 2
                if (calcularSection == 0) {
                    document.getElementById(sections[cont]).style.backgroundColor = "white"
                } else {
                    document.getElementById(sections[cont]).style.background = "rgb(240, 244, 245)"
                }

            }
            document.getElementById('lamp').src="./assets/img/lampada.png"
            document.getElementsByClassName('portfolio-item').style.backgroundColor = "white;"
            cont = 0


        } else {
            status = 0
            document.getElementById(sections[cont]).style.color = "white"
            for (const section of sections) {
                cont ++
                const calcularSection = cont % 2
                if (calcularSection == 0) {
                    document.getElementById(sections[cont]).style.background = "rgba(0,0,0,0.83)"
                } else {
                    document.getElementById(sections[cont]).style.background = "rgba(0,0,0,0.85)"
                }

            }
            document.getElementById('projetoTitulo').style.color = "black"
            document.getElementById('lamp').src="./assets/img/lampadabranca.png"
            document.getElementsByClassName('portfolio-item').style.backgroundColor = "black"
            cont = 0
        } 
    } else {
        document.getElementById('page-top').style.color = "black"
        document.getElementById('services').style.background = "white"
        document.getElementById('study').style.background = "white"
        document.getElementById('extra').style.background = "white"
        document.getElementById('portfolio').style.background = "rgb(240, 244, 245)"
        document.getElementById('about').style.background = "rgb(240, 244, 245)"

        document.getElementById('projetoTitulo').style.color = "black"
          }
        }