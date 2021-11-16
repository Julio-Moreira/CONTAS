function sub() {
    var sub = document.getElementById('ips2');
    var sel = document.getElementById('selec8');

    if (sub.value.length == 0) {
        alert("ERROR faltam dados")
    } else {
        var s = Number(sub.value);
        sel.innerHTML = ''

        for (let c = 1; c <= 100; c++) {
           var item = document.createElement('option')
           item.text = `${s} - ${c} = ${s-c}`
           sel.value = `sel${item}`
           sel.appendChild(item)
        }
    }
}

function subi() {
    var subi1 = document.getElementById('ips4');
    var subi2 = document.getElementById('ips6');
    var res  = document.getElementById('res4');


    if (subi1.value.length == 0 || subi2.value.length == 0) {
        res.innerHTML=`ERROR faltam dados`
    } else {
        var s1 = Number(subi1.value)
        var s2 = Number(subi2.value)

        res.innerHTML = ` ${s1} - ${s2} = ${s1-s2}`
    }

}


/**
 *               ░░████████████████                    
              ████              ░░████                
            ██  ░░                ░░  ██              
          ▓▓                          ██              
        ██                            ▒▒██            
        ██████████████████████████████████            
      ██████████████████████████████████████          
    ████████████████████  ████████████████████        
    ████████████████████  ████████████████████        
    ████████████████████  ████████████████████        
    ██████████████████    ░░██████████████████        
    ████████████████        ░░████████████████        
    ░░████████████            ▒▒████████████          
      ██  ░░░░░░      ██████    ░░░░░░░░░░██          
      ██              ░░░░░░              ██          
      ██                                  ██          
      ░░██                                ██          
        ██    ██  ██            ██  ██    ██          
        ██    ██░░██            ██  ██    ██          
          ██    ██                ██      ██          
          ██                                ██        
          ░░██                              ██        
              ██                            ██        
                ██                            ██      
                ░░██                          ░░██    
                  ░░▓▓██                        ██    
                    ░░  ▓▓▓▓                ████      
                        ░░░░██▓▓▓▓▓▓▓▓▓▓▓▓██░░        
                            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
 */