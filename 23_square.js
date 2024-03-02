import PromptSync from "prompt-sync";
const prompt = PromptSync();

const startEnd = (side) => {
    let row = '';
    for(let i = 1; i <= side; i++) {
        row += '* '
    }
    console.log(row);
};

const lats = (side) => {
    for(let i = 0; i < side - 2; i++) {
        let row = '*';
        for(let space = 1; space <= side - 2; space++) {
            row += '  ';
        }
        row += ' *';
        console.log(row);
    }
}

console.clear();
const side = +prompt('Ingresa el numero de caracteres que deseas que tenga de lado el cuadrado: ');
console.log('\n');
startEnd(side);
lats(side);
startEnd(side);
console.log('\n');