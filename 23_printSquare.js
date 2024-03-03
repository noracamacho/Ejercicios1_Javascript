import PromptSync from "prompt-sync";
const prompt = PromptSync();

const topBottom = (num, bottom = false) => {
    let row = '\n' + '* '.repeat(num) + `${bottom === true ? '\n' : ''}`;
    return row
};

const createSquare = (num) => {
    let row = topBottom(num);
    row += ('\n*' + '  '.repeat(num - 2) + ' *').repeat(num - 2);
    row += topBottom(num, true);
    return row
}
console.clear();
const number = +prompt('Ingresa el numero de caracteres que deseas que tenga de lado el cuadrado: ');
console.log(createSquare(number));