var txthora = document.getElementById('h/m/s');
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

txthora.innerHTML = `     ${hora}:${min}`

var txtdata = document.getElementById('d/m/a');
var dia  = data.getDate();
var ano = data.getFullYear();
var mes = data.getMonth();

txtdata.innerHTML=`   ${dia}/${mes}/${ano}`

switch (mes) {
    case 0: txtdata.innerHTML=`${dia}/1/${ano}`
    break;

    case 1: txtdata.innerHTML=`${dia}/2/${ano}`
    break;

    case 2: txtdata.innerHTML=`${dia}/3/${ano}`
    break;

    case 3: txtdata.innerHTML=`${dia}/4/${ano}`
    break;

    case 4: txtdata.innerHTML=`${dia}/5/${ano}`
    break;

    case 5: txtdata.innerHTML=`${dia}/6/${ano}`
    break;

    case 6: txtdata.innerHTML=`${dia}/7/${ano}`
    break;

    case 7: txtdata.innerHTML=`${dia}/8/${ano}`
    break;

    case 8: txtdata.innerHTML=`${dia}/9/${ano}`
    break;

    case 9: txtdata.innerHTML=`${dia}/10/${ano}`
    break;

    case 10: txtdata.innerHTML=`${dia}/11/${ano}`
    break;

    case 11: txtdata.innerHTML=`${dia}/12/${ano}`
    break;

}

    var txtsemana = document.getElementById('semana');
    var diasem = data.getDay();
    txtsemana.innerHTML= `   ${diasem}`

    switch (diasem) {
        case 0: txtsemana.innerHTML=`domingo`
        break;
    
        case 1: txtsemana.innerHTML=`segunda`
        break;

        case 2: txtsemana.innerHTML=`terça`
        break;

        case 3: txtsemana.innerHTML=`quarta`
        break;

        case 4: txtsemana.innerHTML=`quinta`
        break;

        case 5: txtsemana.innerHTML=`sexta`
        break;

        case 6: txtsemana.innerHTML=`sábado`
        break;
    }

    
    

    /*
                                                                                             
░░      ░░      ░░            ░░      ░░    ░░      ░░    ░░              ░░      ░░  ░░
                                                          ░░                            
                                                                                        
                                                                                        
                                      ██████████                                        
                                  ████▒▒▒▒▒▒▒▒▒▒████                                    
                                ██▒▒▒▒░░░░░░░░░░▒▒▒▒██                                  
░░                            ██▒▒░░░░          ░░░░▒▒██                                
                              ██▒▒██  ██            ░░▒▒██                              
                            ██▒▒░░██  ██        ██████░░▒▒██                            
                            ██▒▒░░██  ██      ██    ██░░▒▒██                            
░░                          ██▒▒░░                  ██░░██                              
                            ██▒▒▒▒  ▒▒  ▒▒        ██  ░░▒▒██                            
                            ██▒▒▒▒▒▒▒▒▒▒▒▒          ░░▒▒▒▒██                            
░░                          ██▒▒▒▒▒▒▒▒▒▒▒▒            ░░▒▒██                            
░░                            ██▒▒▒▒▒▒▒▒▒▒▒▒          ░░▒▒██                            
░░                    ░░      ██▒▒▒▒░░▒▒  ▒▒      ░░░░▒▒██        ░░                    
                                ██▒▒▒▒░░░░░░░░░░░░▒▒▒▒██                                
                                  ████▒▒▒▒▒▒▒▒▒▒▒▒████                                  
    ░░    ░░░░    ░░░░    ░░    ░░    ████████████  ░░░░░░░░  ░░░░    ░░    ░░░░    ░░░░
░░      ░░            ░░      ░░                    ░░            ░░      ░░            
                                                                                        
                                                                                        
        ░░                    ░░                    ░░                    ░░            
                                                                                        
                                                                                        
  ▒▒░░▒▒  ░░░░    ░░░░  ▒▒░░▒▒  ▒▒▒▒    ░░▒▒  ▒▒░░▒▒  ░░▒▒▒▒  ░░░░  ▒▒░░▒▒  ░░░░    ░░▒▒
     */