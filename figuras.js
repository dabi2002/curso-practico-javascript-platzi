// Codigo del Cuadrado
console.group("Cuadrado")


function perimetroCuadrado(lado){
    return 4 * lado;
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

//Cuadrado con interaccion desde el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area + `m²`)
}


// Triangulo con interaccion desde eL HTML

function calcularPerimetroTriangulo() {
   let input = [parseInt(document.getElementById('inputTriangulo1').value),
   parseInt(document.getElementById('inputTriangulo2').value), parseInt(document.getElementById('inputTriangulo3').value)]
    
    const perimetro = perimetroTriangulo(input[0], input[1], input[2]);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input =  [document.getElementById('inputTriangulo1'),
   document.getElementById('inputTriangulo2')]

    const area = areaTriangulo(input[0].value, input[1].value)
    alert(area + `m²`)
}

// Circulo con interaccion desde el HTML

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value)
    alert(perimetro);   
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value)
    alert(area + `m²`);}
