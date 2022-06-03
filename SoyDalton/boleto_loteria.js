let dinero = parseInt(prompt("a ver vagabundo, cuanto tienes?"));
let precioBoleto = 1.5;
var boleto;

for (boleto = 0; dinero >= precioBoleto; boleto ++) {
    dinero -= precioBoleto
}

document.write(`la cantidad de boletos es ${boleto}`)