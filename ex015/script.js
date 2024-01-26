function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novemnte!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src' , 'fotocriança.png')
            } else if (idade < 21){
             
                //jovem
                img.setAttribute('src' , 'fotohomemjovem.png')

            } else if (idade < 51) {
                //adulto 
                img.setAttribute('src' , 'fotohomemadulto1.png')
            } else {
                //idoso
                
                img.setAttribute('src' , 'fotohomemidoso.png')
            }

        }  if (fsex[1].checked) {
            gênero = 'Mulher'
           if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src' , 'fotocriançamulher.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src' , 'fotomulherjovem.png')
        } else if (idade < 51) {
            //adulto 
            img.setAttribute('src' , 'fotomulher.png')
        } else {
             //idoso
             img.setAttribute('src' , 'fotomulheridosa.png')
            
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
        }