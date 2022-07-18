function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;    
    } 
}


function calcularMediana(lista){

    
    const mitadLista = parseInt(lista.length / 2)
    let mediana;

    
    if (esPar(lista.length)) {
        elemento1 = lista[mitadLista - 1];
        elemento2 = lista[mitadLista]
        mediana = elemento1 + elemento2 / 2
        return mediana;
    } else {
       mediana =  lista[mitadLista];
        return mediana;
    }   
 }

