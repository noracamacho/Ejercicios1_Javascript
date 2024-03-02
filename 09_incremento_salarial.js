// Calcule el incremento salarial de una persona: Si su salario es menor a 15mil el incremento será del 20% y si es mayor a 15mil el incremento será del 15%

import promptSync from 'prompt-sync';
const prompt = promptSync();

const incrementoSalarial = () => {
    console.clear();
    let salario = Number(prompt('Inngresa el salario actual de empleado: '));
    let incremento = 15;
    if(salario <= 15000) incremento = 20;
    salario = salario + (salario * incremento / 100);
    // console.log(`El incremento salarial será del ${salario <= 15000 ? 20 : 15}%, quedando un salario actualizado de sala ${salario + (salario * (salario >= 15000 ? 20 : 15)/100)}`);
    console.log(`\nEl incremento salarial será del ${incremento}%, quedando un salario actualizado de sala $${salario}\n`);
}
incrementoSalarial();