function horaDeEntrada(hora) {
    let age = prompt(`Bienvenido a la fiesta! Antes de entrar, dime ¿Cuantos años tienes?`);
    if (age >= 64){
        alert(`uy cucho vaya a dormir`)
    }
    else if (age >= 18) {
     switch (hora) {
         case 2:
             alert(`has entrado a buena hora, puedes pasar gratis!`)
             break;
        case 3:
            alert(`has entrado a buena hora, puedes pasar gratis!`)
                break;
        case 4:
            alert(`has entrado a buena hora, puedes pasar gratis!`)
                break;
        case 5:
            alert(`has entrado a buena hora, puedes pasar gratis!`)
                break;
        case 6:
            alert(`has entrado a buena hora, puedes pasar gratis!`)
            break;
         default:
            alert(`Mira por ser las ${hora} Hrs debes pagar, son 5$`)
            break;
     }}
    
     else {
    alert(`Vayase a dormir pelao`);
     }}

horaDeEntrada(6);
horaDeEntrada(24);
horaDeEntrada(19);
horaDeEntrada(4);
horaDeEntrada(2);
horaDeEntrada(15);