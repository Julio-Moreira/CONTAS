function divsao() {
    var divis = document.getElementById('div800');
    var sel = document.getElementById('selec4');

    if (divis.value.length == 0) {
        window.alert('ERROR faltam dados')
    }
    else {    
     var d = Number(div800.value)
     sel.innerHTML = ''

     for (var c = 1; c <= 100; c++) {
       var item = document.createElement('option')
       
       item.text = `${d} : ${c} = ${d/c}`
       sel.value = `sel${c}`
       sel.appendChild(item)
        
     }

    }
}

function divisao() {
    var div1 = document.getElementById('ipdiv');
    var div2 = document.getElementById('ipdivs');
    var res = document.getElementById('res2');
    if (div1.value.length == 0 || div2.value.length == 0) {
        res.innerHTML = 'ERROR faltam dados'
    } 
    else {
     var d1 = Number(div1.value)
     var d2 = Number(div2.value)
     
        res.innerHTML = `${d1} : ${d2} = ${d1/d2}`    
    }
    
   
}





/**
 *                           ▒▒▒▒▒▒▒▒▒▒▒▒                            
                        ▒▒▒▒    ░░░░░░░░▒▒▒▒                        
                      ▒▒              ░░    ▒▒                      
                    ▒▒                  ░░    ▒▒                    
                  ▒▒                      ░░░░░░▒▒                  
              ▒▒▒▒    ██    ██            ░░░░░░▒▒                  
              ▒▒▒▒  ████    ████            ░░░░  ▒▒                
              ▒▒▒▒  ████    ████████        ░░░░  ▒▒                
              ▒▒▒▒  ████    ████████        ░░░░  ▒▒                
      ▒▒▒▒▒▒▒▒▒▒▒▒                          ░░░░  ▒▒                
    ▒▒                              ▒▒▒▒▒▒▒▒  ░░░░  ▒▒              
  ▒▒              ░░    ████      ▒▒        ▒▒░░░░  ▒▒              
  ▒▒                            ▒▒            ▒▒    ▒▒              
  ▒▒      ░░  ░░░░            ▒▒                  ░░▒▒              
    ▒▒▒▒▒▒▒▒    ░░            ▒▒                ░░░░▒▒              
      ▒▒░░░░▒▒░░░░░░          ▒▒▒▒▒▒            ░░░░▒▒              
      ▒▒░░░░▒▒░░░░░░░░  ░░░░░░░░▒▒░░▒▒░░░░░░░░  ░░░░▒▒              
        ▒▒░░▒▒░░  ░░░░░░░░    ░░▒▒░░▒▒░░░░          ▒▒              
        ░░░░▒▒░░  ░░░░░░░░    ░░▒▒░░░░░░░░    ░░░░░░░░              
        ▒▒  ▒▒  ░░                ▒▒  ▒▒          ░░▒▒              
          ▒▒▒▒░░        ░░      ░░▒▒    ▒▒            ▒▒            
            ▒▒░░        ░░      ░░░░▒▒░░▒▒        ░░░░▒▒            
            ▒▒░░  ░░░░  ░░░░    ░░░░░░▒▒▒▒    ░░  ░░░░▒▒            
            ▒▒░░  ░░░░  ░░░░        ░░  ▒▒    ░░░░░░░░▒▒            
              ▒▒▒▒░░    ░░░░      ░░░░░░░░▒▒  ░░░░░░░░  ▒▒          
              ▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░  ░░░░      ░░░░░░░░▒▒          
              ▒▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒  ░░░░░░░░░░░░░░░░░░▒▒          
              ▒▒▒▒▒▒  ░░░░░░░░░░▒▒░░▒▒░░░░░░░░░░░░░░░░░░  ▒▒        
                  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ░░░░░░░░░░  ░░░░░░░░▒▒        
                            ▒▒  ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒    
                            ▒▒▒▒▒▒▒▒            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                                                                    
                                                                    
 */