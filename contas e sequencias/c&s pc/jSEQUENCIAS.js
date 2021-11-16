function contar() {
  var i = document.getElementById('ini');
  var f = document.getElementById('fim');
  var p = document.getElementById('passo');
  var res = document.getElementById('resse');

  if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
      res.innerHTML = 'ERROR faltam dados'
  }
  else {
      
      res.innerHTML = ' '
      let ini = Number(i.value)
      let fim = Number(f.value)
      let passo = Number(p.value)

      if (ini < fim) {
          for (let c = ini; c <= fim; c += passo){
          if (ini <= 20 && fim <= 20) {
              res.innerHTML += ` ${c} <br />`
          }
          else {
              res.innerHTML += ` ${c} `
          }
         
                    
          }
      }
    
  }

}


/*
 ░░      ░░      ░░            ░░  ░░  ░░  ░░██      ░░  ░░░░              ░░      ░░  ░░
                      ░░                  ██████                  ░░                    
                                          ██████                                        
                                        ██████████                                      
                                        ██████████                                      
                                      ██████████████                                    
                                      ██████████████                                    
                                  ████  ██  ██  ██  ████                                
                            ██████████████████████████████████                          
                            ██████████████████████████████████                          
                                ██████████████████████████                              
                              ██                          ██                            
                              ██      ██        ██        ██                            
                              ██    ████        ████      ██                            
                              ██    ████        ████      ██                            
        ░░      ░░            ██                          ██              ░░      ░░    
                      ░░    ██            ████              ██    ░░                    
                            ██                              ██                          
                              ████                      ████                            
                                  ██                  ██  ░░                            
                                  ██                  ██                                
                                    ████          ████                                  
                                        ██████████                                      
                                                                                        
                                                                                        
                                                                                        
  ░░░░░░  ░░░░  ░░░░░░  ░░░░░░  ░░░░  ░░░░░░  ░░░░░░  ░░░░░░░░░░░░  ░░░░░░  ░░░░  ░░░░░░
 */