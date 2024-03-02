
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const invertedSteps = (num) => {
    let count = 0;
    while (count <= num) {
        let row = '';
        for (let space = 0; space <= count; space++) {
            row += ' ';
        }
        for (let asterisk = 1; asterisk <= (num - count); asterisk++) {
            row += '*'
        }
        console.log(row);
        count++; 
    }
}



const steps = prompt('Ingresa el número de escalones que deseas tenga la escalera invertida: ');
invertedSteps(steps);