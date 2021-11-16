function ver() {
    var num = document.getElementById('np2').value;
    var res = document.getElementById('nprimores');
    var divisores = 0

    for (let cont = 1 ; cont <= num; cont++) {
        if (num % cont == 0 ) 
        divisores++    
    }

    if (divisores == 2) {
        res.innerHTML=('É primo')
    } else {
        res.innerHTML=('Não é primo')
    }
}

function clicou() {
 var ini = parseInt(document.getElementById('ipnpi').value);
 var fim = parseInt(document.getElementById('ipnpl').value);
 var re = document.getElementById('npfim');
 var text = '';
 var div;
 

 for (var coun = ini; coun <= fim ; coun++) {
    div = 0;

    for (var j = 1; j <= coun ; j++) 
     if (coun % j == 0) 
     div++;
    

    if (div == 2) 
        text += coun + '<br />';
    
 }

  
 re.innerHTML = text;
 }

 /*
                    ██▓▓▓▓▓▓▓▓▓▓▓▓██                      
                      ████  ░░░░░░░░░░░░██▓▓                  
                    ██  ░░                ░░██                
                  ██                          ██    ░░▒▒  ░░░░
                ▓▓░░                          ░░▓▓  ░░░░░░░░░░
              ██░░                              ░░▓▓  ░░░░░░  
              ██░░                              ░░██    ░░    
            ▓▓              ████          ████  ░░░░██        
            ▓▓░░            ████          ████    ░░██        
            ▓▓░░            ████          ████    ░░██        
            ▓▓░░        ░░░░                  ░░░░░░██        
            ▓▓░░        ░░░░        ████      ░░░░░░██        
            ▓▓░░                                  ░░████      
            ▓▓░░                                        ██    
            ▓▓░░                                        ██    
    ██    ▓▓░░                                          ██    
  ██  ████░░                                    ░░████████    
  ██                                          ░░██            
  ██                                            ██            
  ██                                          ▓▓              
    ████                                  ░░▓▓                
        ██░░                          ░░░░▓▓                  
          ██▓▓░░░░░░░░░░░░░░░░░░░░░░░░████                    
          ▒▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░    
  */