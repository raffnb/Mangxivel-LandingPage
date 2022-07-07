


// Conversor de BAR x PSI

function MeuScopo(){

const form = document.querySelector('form1')
const resultado = document.querySelector('resultado')



function conversorPsixBar(bar=1,psi=14.7,evento){
    evento.preventDefault();
    let valor = form.querySelector('form1')
    const resultado2 = (bar/psi);
    const total2 = resultado2.toFixed(2);
    console.log(`${total2} Kilos de pressão`);
    return
    }




form.addEventListener('sumit,conversorPsixBar')
}

MeuScopo()
