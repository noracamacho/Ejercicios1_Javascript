
import PromptSync from "prompt-sync";
const prompt = PromptSync();
// const invertedSteps = (num) => {
//     for (let count = 0; count <= num; count++) {
//         let row = '';
//         for (let space = 0; space <= count; space++) {
//             row += ' ';
//         }
//         for (let asterisk = 0; asterisk < (num - count); asterisk++) {
//             row += '*'
//         }
//         console.log(row);
//     }
// }

const invertedSteps = (num) => {
    for (let count = 0; count <= num; count++) {
        let row = ' '.repeat(count) + '*'.repeat(num - count)
        console.log(row);
    }
}
const steps = prompt('Ingresa el número de escalones que deseas tenga la escalera invertida: ');
invertedSteps(steps);