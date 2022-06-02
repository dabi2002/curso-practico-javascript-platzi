// Codigo del Cuadrado
console.group("Cuadrado")


function perimetroCuadrado(lado){
    return lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd()

//Codigo del Triangulo


function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo (base, altura){
    return (base*altura)/2
}
console.groupEnd()

// Codigo del Circulo
console.group("Circulo")

function diametroCirculo (radio){
    return radio * 2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo (radio){
    return (radio * radio) / Math.PI;
}

console.groupEnd()


