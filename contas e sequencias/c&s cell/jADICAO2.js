function adic() {
    var adi = document.getElementById('ipa');
    var sel = document.getElementById('selec6');
    
    if (adi.value.length == 0) {
        alert("ERROR faltam dados")
    }
    else {
    var ad = Number(adi.value)
    sel.innerHTML=''  
    
    for (let c = 1; c <= 10 ; c++) {
      let item = document.createElement('option')
      item.text = `${ad} + ${c} = ${ad+c}`
      sel.value = `sel${c}`
      sel.appendChild(item)
      
    }
    }
}

function adi() {
    var adic1 = document.getElementById('ipa4');
    var adic2 = document.getElementById('ipa6');
    var res = document.getElementById('res3');

    if (adic1.value.length == 0 || adic2.value.length == 0) {
        res.innerHTML = 'ERROR faltam dados'
    } 
    else {
      var a1 = Number(adic1.value)
      var a2 = Number(adic2.value)
      
      res.innerHTML = `${a1} + ${a2} = ${a1+a2}`
    }
}



/**
 *        ████████████████        
      ██                ██      
    ██    ░░░░    ░░░░    ██    
    ██    ████    ████    ██    
    ██    ████    ████    ██    
    ██                    ██    
  ██▒▒  ██            ██  ▒▒██  
██      ████░░    ░░████      ██
██      ▒▒████████████▒▒      ██
██░░░░    ████████████    ░░░░██
  ████░░    ▒▒████▒▒    ░░████  
    ██░░░░            ░░░░██    
    ██▒▒░░░░░░░░░░░░░░░░▒▒██    
      ████████████████████      
                               
 */