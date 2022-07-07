
//MANGUEIRAS POLI DE 2" POLEGADAS


function arameI (ValArameInt,formulaArameI=0.66){
    return ValArameInt*formulaArameI
}

function arameE (ValArameExt,formulaArameE=0.839){
    return ValArameExt*formulaArameE
}

function filmePP (ValFilme,formulafilme=0.24){
    return ValFilme*formulafilme
}

function filmeTB (ValFilmeTb,formulafilmeTB=0.48){
    return ValFilmeTb*formulafilmeTB
}

function Rafia (ValRafia,formulaRafia=2.33){
    return ValRafia*formulaRafia
}
function Lona (Vallona,formulaLona=1.28){
    return Vallona*formulaLona
}

let numero = 10

console.log( arameI (numero) + ' KG de arame interno')
console.log( arameE (numero) + ' KG de arame Externo')
console.log( filmePP (numero) + ' KG de Filme em PP 550mm')
console.log( filmeTB (numero) + ' KG de Filme Tubolar')
console.log( Rafia (numero) + ' Metros de Rafia 620mm')
console.log( Lona (numero) + ' Metros de Lona Bagun 250mm')



