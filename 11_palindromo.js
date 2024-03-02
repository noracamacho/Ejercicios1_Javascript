// Valide si una palabra o frase es palíndromo.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const palindromo = () => {
    console.clear();
    let word = prompt("Ingresa la palabra o frase que deseas evaluar: ");
    let tail = word.length - 1;
    let count = 0;
    for (let head = 0; head < (word.length - 1) / 2; head++) {
        if(word[head] != word[tail]) count++;
        tail--;
    }
    console.log(`La palabra o frase '${word}' ${count === 0 ? '' : 'no '}es palindromo`);
}
palindromo();