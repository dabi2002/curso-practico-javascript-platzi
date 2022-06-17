class Apps{
    constructor(nombre, descargas, puntuacion, peso){
    this.nombre = nombre;
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.abrir = false;
    this.instalar = false;
    }
    abrirApp(){
        if (this.abrir == false) {
            alert("Abriendo App");
        } else {
            alert("Cerrando App");
            this.abrir = true;
        }
    }
    instalarApp(){
        if (this.instalar == false) {
            alert("Deseas Instalar un App?")
        } else {
            alert("Esta App ya esta Instalada")
        }
    }
    desinstalarApp(){
        if (this.instalar == true) {
            alert("Desinstalando App")
        }
    }
    mostrarInfo(){
        return ` 
        Nombre: <b>${this.nombre}</b><br>
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion:<b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

const aplicacion1 = new Apps("Instagram", "+600M", "★★★★", "34MB")
const aplicacion2 = new Apps("Whatsapp", "+600M", "★★★★★", "26MB")
const aplicacion3 = new Apps("Twitter", "+400M", "★★★", "45MB")

document.write(`
    
    ${aplicacion1.mostrarInfo()}<br>

    ${aplicacion2.mostrarInfo()}<br>

    ${celular1.mostrarInfo()}<br>
    
  ` )