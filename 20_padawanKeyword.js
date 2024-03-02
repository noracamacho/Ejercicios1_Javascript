import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.clear();
const keyword = 'padawan';
let count = 1;
const promptKeyword = () => {
    do {
        const userInput = prompt("Por favor ingresa la palabra clave para terminar: ");
        if (userInput.toLowerCase() === keyword) return 'Has ingresado la clave correcta'
        count++;
    } while (count <= 3);
    return 'Has superado el número máximo de intentos'
}
console.log(promptKeyword());

// 722 674 0438

// Usuario Noraecm
// Banca por internet Toriles*2718
// NIP para app ->

// Pasos para generar mi id por voz y registrar numero en app
// Cajero automatico 
//  1.- Saldo
//  2.- ID por voz
// EL va a dar un tiket con un telefono que termina con 1112
// Llamar y registrar mi registro por voz
//  Cominicarme a este mismo numero para registrar mi numero celular.