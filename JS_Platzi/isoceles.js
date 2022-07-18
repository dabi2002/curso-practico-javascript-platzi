// Funciones del Isoceles

function perimetroTrianguloIsoceles(lado1, lado2, lado3){
    if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return lado1 + lado2 + lado3;
    } 
    else {
        alert("Necesitamos que hayan 2 lados iguales")     
    }
}
function areaTrianguloIsoceles (base, altura){
    return (base*altura)/2
}

// Funciones del Isoceles con Interaccion del HTML


function calcularPerimetroTrianguloIsoceles() {
    let input = [parseInt(document.getElementById('inputIsoceles1').value),
    parseInt(document.getElementById('inputIsoceles2').value), parseInt(document.getElementById('inputIsoceles3').value)]
     
     const perimetro = perimetroTrianguloIsoceles(input[0], input[1], input[2]);
     alert(perimetro);
 }
 
 function calcularAreaTriangulo() {
     const input =  [document.getElementById('inputIsoceles1'),
    document.getElementById('inputIsoceles2')]
 
     const area = areaTrianguloIsoceles(input[0].value, input[1].value)
     alert(area + `m²`)
 }