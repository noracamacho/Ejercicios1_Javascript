import PromptSync from "prompt-sync";
const prompt = PromptSync();

const topBottom = (num, bottom = false) => {
    return  '\n' + '* '.repeat(num) + `${bottom === true ? '\n' : ''}`;
};

const createSquare = (num) => {
    if(num < 2) return 'El cuadro debe contener al menos 2 caracteres por lado.';
    let square = topBottom(num);
    square += ('\n*' + '  '.repeat(num - 2) + ' *').repeat(num - 2);
    square += topBottom(num, true);
    return square
}
console.clear();
const number = +prompt('Ingresa el numero de caracteres que deseas que tenga de lado el cuadrado: ');
console.log(createSquare(number));