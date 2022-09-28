// eu quero criar um sistema de nota de alunos
// em que os alunos colocam suas notas e depois o sistema
// lança para eles qual a média e se eles estao aprovados ou não

//let botao = document.querySelector(".btn");

function clicar() {
    let prova1 = document.querySelector(".primeiro").value;
    let prova2 = document.querySelector(".segundo").value;
    let prova3 = document.querySelector(".terceiro").value;

    let resultado = (parseInt(prova1) + parseInt(prova2) + parseInt(prova3)) / 3;
    document.querySelector(".resultado").innerHTML = resultado;


    if (resultado >= 0 && resultado <= 3.9) {
        document.write("Você está reprovado!");
    } else if (resultado >= 4 && resultado <= 6.9) {
        document.write("Você está de recuperação!");
    } else if (resultado >= 7) {
        document.write("Parabéns, você está aprovado!");
    }
}


// adicionamos o evento dfe clique no botao e fizemos um callback
/*botao.addEventListener("click", function() {

})*/