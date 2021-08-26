// A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.

// Paciente: Moisés
// Já vacinado: ok

// [Triagem]
// Sujeito a infecção? false


const PROMPT = require("prompt-sync")();

console.log("=== Informações ===");

var nome = PROMPT("Informe seu nome: ");
var entrada = PROMPT("Já vacinado? 'S' ou 'N' ").toUpperCase;
var vacinado;

switch (entrada) {
    case 'S':
        vacinado = true;
        break;

    default:
        vacinado = false;
        break;
}

console.log("=== Triagem ===");
console.log("Paciente: ", nome);
console.log("Sujeito a infecção: ", vacinado);