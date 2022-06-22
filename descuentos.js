// const precioOriginal = 250;
// const descuento = 30;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}



//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});