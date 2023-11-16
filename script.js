/* Script do Jogo de Adivinhação*/

//Função que inicia o jogo
function iniciaJogo() {
    let numeroAleatorio = parseInt(Math.random() * 1000) + 1;
    //parseInt() seria como "analise como inteiro"
    //Math.random() é um comando matemático e serve para escolher randomicamente um número de 0 a 0.999999+
    //Por essa razão está sendo multiplicado por 1000 + 1

    let tentativasRestantes = 5;
    //Variável que guarda o número de tentativas que o usuário tem a cada round

    while (tentativasRestantes > 0) {
        let chute = prompt(`Tente adivinhar o número entre 1 e 1000. Você ainda tem ${tentativasRestantes} tentativas.`);
        
        if (chute == numeroAleatorio) {
        alert(`Você acertou o número em ${6 - tentativasRestantes} tentativas! Parabéns!`);
        break;
        } else if (chute < numeroAleatorio) {
        alert("O número secreto é MAIOR");
        } else {
        alert("O número secreto é MENOR");
        }  
        tentativasRestantes--;
    }
    
    if (tentativasRestantes === 0) {
        alert(`Você perdeu. O número correto era ${numeroAleatorio}.`);
    }
}
//DESAFIOS: TIRAR O NUMERO 0 COMO OPÇÃO

//FUTURAMENTE, COLOCAR UM TEXTAREA AO INVÉS DE UTILIZAR ALERT/PROMPT