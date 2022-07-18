function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
let coupon = ["Dabi_gei", "LloreLok", "geigeigeigei123"];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value
    let discount;
    switch (couponValue) {
        case coupon[0]:
            discount = 15;
            break;
        case coupon[1]:
            discount = 30;
            break;
        case coupon[2]:
            discount = 50;
            break;
        default:
            discount = 0
            break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `El precio total con el descuento es de ${precioConDescuento} COP`
}



