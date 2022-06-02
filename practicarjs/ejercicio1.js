let vector =[];
let cantidad= prompt(`Indique la cantidad de elementos que tendra el array`)
let mayor = 0;

for (let i = 0; i < cantidad; i++) {
     vector = prompt(`${i + 1}. Digite un numero`);
     añadir = vector.push
    
    
     if (parseInt(vector) > mayor) {
        mayor = vector;
    }
        
}
document.write(`el numero de mayor cifra es ${mayor}`)