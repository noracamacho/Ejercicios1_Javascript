// Calcule el área de un triangulo
import promptSync from 'prompt-sync';
const prompt = promptSync();

const areaTriangulo = () => {
    console.clear();
    const height = prompt('Ingresa la altura (cm): ');
    const base = prompt('Ingresa la base (cm): ');
    console.log(`El área de triángulo es ${base * height / 2} cm\xB2`);
}
areaTriangulo();