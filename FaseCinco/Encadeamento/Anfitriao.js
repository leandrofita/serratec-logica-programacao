// O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.

// Visitas: 1
// Você já nos visitou uma vez.
// …
// Visitas: 2
// Você já nos visitou duas vezes.
// …
// Visitas: 3
// Você já nos visitou 3 vezes.


const PROMPT = require("prompt-sync")();

var visitas = parseInt(PROMPT("Informe quantas vezes você já nos visitou: "));

if (visitas == 1) {
    console.log("Visitas: 1\nVocê já nos visitou uma vez.");
} else if (visitas == 2) {
    console.log("Visitas: 2\nVocê já nos visitou duas vezes.");
} else if (visitas == 3) {
    console.log("Visitas: 3\nVocê já nos visitou três vezes.");
}