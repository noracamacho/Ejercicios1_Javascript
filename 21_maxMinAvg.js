// "Ingresar números enteros para determinar el maximo, el minimo y el promedio, cuando ya no desees ingrear más números, ingresa el número 0";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let arrNumbers = [];
let index = 0;
let userInput;
console.log('Ingresar números enteros para determinar el maximo, el minimo y el promedio,\ncuando ya no desees ingrear más números, ingresa el número 0');
do {
    userInput = +prompt('Ingresa número: ')
    if(userInput !== 0) {
        arrNumbers[index] = userInput;
        index++;
    }
} while (userInput !== 0);
let maxNumber = Math.max(...arrNumbers);
let minNumber = Math.min(...arrNumbers);
let sum = arrNumbers.reduce((acc, number) => acc + number, 0)
let avg = sum / arrNumbers.length
console.log(`los números ingresados son: ${arrNumbers}`);
console.log(`Max: ${maxNumber}`);
console.log(`Min: ${minNumber}`);
console.log(`Suma: ${sum}`);
console.log(`Promedio: ${avg}`);