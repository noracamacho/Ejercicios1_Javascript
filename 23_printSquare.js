import PromptSync from "prompt-sync";
const prompt = PromptSync();

const topBottom = (side) => {
    let row = '';
    for(let i = 0; i < side; i++) {
        row += '* '
    }
    console.log(row);
};

const lats = (side) => {
    for(let i = 0; i < side - 2; i++) {
        let row = '*';
        for(let space = 0; space < side - 2; space++) {
            row += '  ';
        }
        row += ' *';
        console.log(row);
    }
}

const createSquare = (num) => {
    console.log('\n');
    topBottom(side);
    lats(side);
    topBottom(side);
    console.log('\n');
}

console.clear();
const side = +prompt('Ingresa el numero de caracteres que deseas que tenga de lado el cuadrado: ');
createSquare(side);