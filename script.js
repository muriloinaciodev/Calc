primary   = document.getElementById('primary')
secondary = document.getElementById('secondary')

// pega um numero no formato de programação e passa para uma string no formato para display
function toDisplay(num){
    return str
}
// pega uma string no formato para display e passa para um numero no formato de programação
function toProgram(str){
    return num
}

function btnClick(btn) {
    if(typeof(btn) == 'number'){
        console.log(primary.innerText + btn)
        primary.innerText = String(Number.parseFloat((primary.innerText + btn).replace(',', '.'))).replace('.', ',')
    }
    switch (btn) {
        case 'CE':
            primary.innerText = 0
            break;

        case 'C':
            primary.innerText = 0
            secondary.innerHTML = ""
            break;

        case 'backspace':
            primary.innerText = primary.innerText.slice(0, primary.innerText.length-1)
            if(primary.innerText.length == 0)
                primary.innerText = 0
            break;
    
        case ',':
            if (primary.innerText.indexOf(',') == -1)
                primary.innerText += ',' 
            break;
        
        case '+/-':
            if (Number(primary.innerText) > 0)
                primary.innerText = '-' + primary.innerText
            else
                primary.innerText = primary.innerText.replace('-', '')
            break;
        default:
            break;
    }
}