//const lista1 = [100, 200, 300, 500]
function calcularPromedio(lista) {
    let sumaLista = lista.reduce(
    function(valorOriginal = 0, valornuevo){
        return valorOriginal + valornuevo
    }
)

const promedioLista = sumaLista / lista.length;

return promedioLista }