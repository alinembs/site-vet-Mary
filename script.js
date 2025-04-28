// Função para calcular a dose de medicamento em um animal
// A função calcula a dose de medicamento com base na fórmula:
// Dose = (Dose desejada * Peso do paciente) / Concentração do medicamento
// Onde:
// - Dose desejada é a dose de medicamento recomendada por kg de peso corporal
// - Peso do paciente é o peso do paciente em kg
// - Concentração do medicamento é a concentração do medicamento em mg/ml
// A função exibe a dose calculada em mililitros por kg de peso corporal
// e uma mensagem informando se a dose está correta ou não.
// A função é chamada quando o botão "Calcular" é clicado
function calcular() {
    let dose = document.getElementById("forDose").value;
    let peso = document.getElementById("forPeso").value;
    let conc = document.getElementById("forConc").value;

    if (dose && peso && conc) {
        let farmaco = (parseFloat(dose) * parseFloat(peso)) / parseFloat(conc);
        document.getElementById("forFarmaco").innerHTML = 
            `<h4> O resultado deu uma dose de <strong>${farmaco.toFixed(2)} ml</strong> de fármaco.</h4>`;
        document.getElementById("forFarmaco").style.display = "block";
    } else {
        document.getElementById("forFarmaco").innerHTML = "Por favor, preencha todos os campos corretamente.";
        document.getElementById("forFarmaco").style.display = "block";
    }
}
// Função para limpar os campos de entrada e saída
// A função é chamada quando o botão "Limpar" é clicado
// Ela redefine os valores dos campos de entrada e oculta a mensagem de saída
// A função também redefine o valor do campo de saída para uma string vazia
// e oculta o campo de saída
function limpar() {
    document.getElementById("forDose").value = "";
    document.getElementById("forPeso").value = "";
    document.getElementById("forConc").value = "";
    document.getElementById("forFarmaco").style.display = "none";
    document.getElementById("forFarmaco").innerHTML = "";
    document.getElementById("forFarmaco").style.display = "none";
}