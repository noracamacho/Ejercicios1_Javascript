/*
Calcule el volumen de una esfera
*/

const calculateVolume = (radio) => {
    console.clear();
    const PI = 3.1416;
    return 4/3 * PI * radio ** 3;
};

let result = calculateVolume(10);
console.log(`El volumenn de la esfera es ${result} cm\xB3`);
//Unicode
