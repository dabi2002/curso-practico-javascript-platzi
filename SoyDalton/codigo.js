dineroCofla = prompt("Cuanto Dinero Tienes Cofla?");
dineroRoberto = prompt("Cuanto Dinero Tienes Roberto?");
dineroPedro = prompt("Cuanto Dinero Tienes Pedro?");

dineroCofla = parseFloat(dineroCofla)

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    document.write(`Cofla comprate un helado de agua + <br>
                    Y te sobra  ${dineroCofla - 0.6}`)  }
    else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    document.write("Cofla comprate un helado de Crema");
    document.write("Y te sobra " + (dineroCofla - 1 ));
}
    else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    document.write("Cofla comprate el Heladix");
    document.write("Y te sobra " + (dineroCofla - 1.6 ));
} 
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    document.write("Cofla comprate el Heladovich");
    document.write("Y te sobra " + (dineroCofla - 1.7 ));
} 
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    document.write("Cofla comprate el Helardo");
    document.write("Y te sobra " + (dineroCofla - 1.8 ));
}
else if (dineroCofla >= 2.9){
    document.write("Cofla Comprate el helado con Confites o Comprate el Pote de 1/4KG");
    document.write("Y te sobra " + (dineroCofla - 2.9 ));
}
else {
    ("Cofla men, Pongase a trabajar vago")
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto comprate un helado de agua")
} 
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto comprate un helado de Crema")
}
    else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    3
    ("Roberto comprate el Heladix")
} 
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto comprate el Heladovich")
} 
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto comprate el Helardo")
}
else if (dineroRoberto >= 2.9){
    alert("Roberto Comprate el helado con Confites o Comprate el Pote de 1/4KG")
}
else {
    alert("Roberto men, Pongase a trabajar vago")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro comprate un helado de agua")
} 
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro comprate un helado de Crema")
}
    else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro comprate el Heladix")
} 
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro comprate el Heladovich")
} 
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro comprate el Helardo")
}
else if (dineroPedro >= 2.9){
    alert("Pedro Comprate el helado con Confites o Comprate el Pote de 1/4KG")
}
else {
    alert("Pedro men, Pongase a trabajar vago")
}