
let pontos = 1200;
let tempo_De_Casa_meses = 14;

let categoria = "";


if (pontos >= 1000 && tempo_De_Casa_meses >= 12) {
    categoria = "Diamante";
} 

else if (pontos >= 500) {
    categoria = "Ouro";
} 

else if (pontos >= 100) {
    categoria = "Prata";
} 

else {
    categoria = "Bronze";
}

console.log('O cliente possui ' + pontos + ' pontos e ' + tempo_De_Casa_meses + ' meses de casa.');
console.log('Categoria atual: **' + categoria + '**'); 