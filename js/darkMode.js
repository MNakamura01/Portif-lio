
    var status = 1


function mudarModo(modo) {
    console.log(status)
    const portfolioItems = document.getElementsByClassName('portfolio-item')

    const sections = ['page-top','services','courses','study','extra','portfolio','about']
    var cont = 0
    if (modo == "noturno") {
        if (status == 0) {
            status = 1

            document.getElementById(sections[cont]).style.color = "black"
            for (var section of sections) {          
                cont ++
                var calcularSection = cont / 2
                if (calcularSection == 0) {
                    document.getElementById(sections[cont]).style.backgroundColor = "white"
                } else {
                    document.getElementById(sections[cont]).style.background = "rgb(240, 244, 245)"
                }

            }
            document.getElementsByClassName('portfolio-item').style.backgroundColor = "white;"



        } else {
            status = 0
            document.getElementById(sections[cont]).style.color = "white"
            for (var section of sections) {
                cont ++
                var calcularSection = cont / 2
                if (calcularSection == 0) {
                    document.getElementById(sections[cont]).style.background = "rgba(0,0,0,0.83)"
                } else {
                    document.getElementById(sections[cont]).style.background = "rgba(0,0,0,0.85)"
                }

            }
            document.getElementById('projetoTitulo').style.color = "black"
            document.getElementsByClassName('portfolio-item').style.backgroundColor = "black"

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