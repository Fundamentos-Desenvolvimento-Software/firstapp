function calcularPorcentagem(qtdeEspecifica, qtdeTotal){
  return qtdeEspecifica / qtdeTotal * 100;
}

function definirMascote(porcRR, porcSK){
  if(porcRR > porcSK){
    return "RR";
    
  } else if(porcRR < porcSK){
    return "SK";
  }
  
  return "Sem vencedor";
}

const qtdeVotosRR = 40;
const qtdeVotosSK = 40;
const qtdeVotosInvalidos = 20;

let qtdeVotos = qtdeVotosRR + qtdeVotosSK + qtdeVotosInvalidos;

let porcentagemRR = calcularPorcentagem(qtdeVotosRR, qtdeVotos);
let porcentagemSK = calcularPorcentagem(qtdeVotosSK, qtdeVotos);
let porcentagemInvalidos = calcularPorcentagem(qtdeVotosInvalidos, qtdeVotos);

let mascote = definirMascote(porcentagemRR, porcentagemSK);

alert(mascote);