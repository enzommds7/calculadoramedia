// Definição de variaveis e Pesos das notas
const PESO_FORUM = 2;
const PESO_TAREFAS = 2;
const PESO_PROVA = 6;
const SOMA_PESOS = PESO_FORUM + PESO_TAREFAS + PESO_PROVA; // 10

// Função que calcula a média 
function calcularMedia (forum, tarefas, prova) {
     return (forum * PESO_FORUM + tarefas * PESO_TAREFAS + prova * PESO_PROVA) / SOMA_PESOS; 
}
// Função para a nota que você precisa na prova 
function notaNecessariaNaProva (forum, tarefas, mediaDesejada){
    return (mediaDesejada * SOMA_PESOS - forum * PESO_FORUM - tarefas * PESO_TAREFAS) / PESO_PROVA; 
}

// 
console.log(calcularMedia(10, 10, 3.33));
console.log(notaNecessariaNaProva(10, 10, 6));

function lerNumero(id){
    const texto = document.getElementById(id).value.replace(",",".")
    return parseFloat(texto);
}

function notaValida(n){ 
    return !Number.isNaN(n) && n >= 0 && n <= 10; 
}

function mostrarMedia(){
    const forum = lerNumero("forum");
    const tarefas = lerNumero("tarefas");
    const mediaDesejada = lerNumero("mediaDesejada");


    if (!notaValida(forum) || !(tarefas) || !notaValida(prova)) {
        document.getElementById("resultado").textContent = 'Sua média é ${media.toFixed(2)}'
    }
function
