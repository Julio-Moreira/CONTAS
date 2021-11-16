function tab() {
    var n = document.getElementById('iptab');
    var sel = document.getElementById('seltab'); 
    
    
    if (n.value.length == 0) {
        window.alert('ERROR faltam dados')
    } 
    else {
    var num = Number(n.value)
    sel.innerHTML = ''    
    
    for (var c = 1;c <= 10 ;c++) {
      var item = document.createElement('option')
      item.text = `${num} x ${c} = ${num*c}`
      sel.value = `sel${c}`
      sel.appendChild(item)
    }
    }
}

function mult() {
    var mult1 = document.getElementById('mult');
    var mult2 = document.getElementById('multpli');
    var res = document.getElementById('resto');

    if (mult1.value.length == 0 || mult2.value.length == 0) {
        res.innerHTML = 'ERROR faltam dados'
    } 
    else {
        var m1 = Number(mult1.value)
        var m2 = Number(mult2.value)
        
        res.innerHTML = ` ${m1} x  ${m2} = ${m1*m2}`
      
    }
}




/*
                   ▒▒▒▒▒▒▒▒▒▒                    
                ▒▒▒▒░░      ░░▒▒▒▒                
              ▒▒░░              ░░▒▒              
            ▒▒░░                  ░░▒▒            
            ▒▒                      ▒▒            
  ▒▒      ▒▒░░              ████    ░░▒▒      ▒▒  
▒▒░░▒▒    ▒▒░░            ████████  ░░▒▒    ▒▒░░▒▒
▒▒░░░░▒▒  ▒▒░░  ██▓▓    ██▓▓▓▓▓▓████░░▒▒  ▒▒░░░░▒▒
▒▒░░  ░░▒▒▒▒░░  ▓▓▓▓    ██▓▓▒▒▒▒▓▓██░░▒▒░░░░  ░░▒▒
  ▒▒    ░░▒▒░░            ██▓▓▓▓▓▓  ░░▒▒░░    ▒▒  
  ▒▒░░    ▒▒░░                      ░░▒▒      ▒▒  
    ░░    ▒▒░░  ██              ██  ░░▒▒    ▒▒    
    ▒▒░░░░▒▒░░    ██▓▓▒▒▓▓▒▒▓▓██    ░░▒▒░░░░▒▒    
      ▒▒░░▒▒░░      ▒▒▒▒▒▒▒▒▒▒      ░░▒▒░░░░      
        ▒▒░░        ▒▒░░░░░░▒▒        ░░▒▒        
        ▒▒░░░░  ░░░░▒▒░░░░░░▒▒░░░░  ░░░░▒▒        
        ▒▒░░░░░░░░░░▒▒░░░░░░▒▒░░░░░░░░░░▒▒        
        ▒▒░░░░░░░░░░░░▒▒▒▒▒▒░░░░░░░░░░░░▒▒        
      ▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒      
      ▒▒░░░░░░░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░▒▒      
    ▒▒░░░░▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒░░░░▒▒    
  ▓▓▒▒▒▒▒▒▒▒▓▓    ▒▒▒▒▒▒▒▒▒▒▒▒▓▓    ▒▒▒▒▒▒▒▒▒▒▓▓  
    ▒▒▒▒▒▒            ▒▒▒▒▒▒            ▒▒▒▒▒▒ 
 */